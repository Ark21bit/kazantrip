<template>
    <slot name="title"></slot>
    <div v-bind="$attrs">
        <slot name="head"></slot>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.product_name }}</template>
            <template #description>{{ orderInfo?.title }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.product_date }}</template>
            <template #description>{{ $dayjs(orderInfo?.date).tz('Europe/Moscow').locale(locale).format('L') }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.product_time }}</template>
            <template #description>{{ orderInfo?.time?.label }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.starting_point }}</template>
            <template #description>{{ getTitlePlacesStart(orderInfo?.place_start_id) }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</template>
            <template #description>{{ orderInfo?.client_telephone }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.email }}</template>
            <template #description>{{ orderInfo?.client_email }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock v-for="item in filterTickets">
            <template #title>{{ getTitleTypeTicket(item?.id) }}</template>
            <template #description>({{ item?.count }}) {{ item?.price * item?.count }} руб.</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock v-for="item in filterAdditionals">
            <template #title>{{ item?.title }}</template>
            <template #description>({{ item?.count }}) {{ item?.price * item?.count }} руб.</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.sale_coupon }}</template>
            <template #description>{{ orderInfo?.coupon?.id ? `${generalConfig?.static_info?.global_words?.sale} ${orderInfo?.coupon?.sale_percent}%` : '-' }}</template>
        </ConfirmationBaseBlock>
        <div class="flex flex-col justify-between gap-1.5 3xl:gap-3 py-1.5 3xl:py-3 px-5 3xl:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.note }}</p>
            <p class="font-medium">{{ orderInfo?.comment_client ?? '-' }}</p>
        </div>
        <slot name="footer" :totalPrice="totalPrice"></slot>
    </div>
    <slot name="buttons" :storeOrderInfo="storeOrderInfo"></slot>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const { orderInfo } = storeToRefs(useOrderStore())
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { locale } = useI18n()
const filterTickets = computed(() => orderInfo.value?.tickets?.filter(a => a.count > 0))
const filterAdditionals = computed(() => orderInfo.value?.additional?.filter(a => a.count > 0))

const totalPrice = computed(() => {
    const additionalSumm = filterAdditionals.value?.reduce((a, b) => a + b.count * b.price, 0) ?? 0
    let regularSumm = 0
    let sale_percent = (100 - (orderInfo.value?.coupon?.sale_percent ?? 0)) / 100
    filterTickets.value?.forEach((a) => {
        if (a.id == 10) return regularSumm = regularSumm + a.count * a.price * sale_percent
        regularSumm = regularSumm + a.count * a.price
    })
    return Math.round(additionalSumm + regularSumm)
})

const storeOrderInfo = computed(() => {
    const object = {
        client_email: orderInfo.value?.client_email?.trim(),
        client_fio: orderInfo.value?.client_fio?.trim(),
        client_telephone: orderInfo.value?.client_telephone,
        payment_type_id: orderInfo.value?.payment_type_id,
        product_id: orderInfo.value?.product_id,
        place_start_id: orderInfo.value.place_start_id,
        timetable_id: orderInfo.value.time?.id,
        tickets: filterMap(orderInfo.value?.tickets,
            (a) => a.count > 0,
            (a) => { return { type_id: a.id, count: a.count } }),
    }
    if (orderInfo.value?.comment_client?.trim()) object.comment_client = orderInfo.value?.comment_client

    const additionalFilter = orderInfo.value?.additional?.filter(a => a?.count > 0)
    if (additionalFilter?.length > 0) object.additional = additionalFilter.map(a => { return { id: a.id, count: a.count } })

    if (orderInfo.value?.coupon.id != null && orderInfo.value?.coupon.id != undefined) object.sale_coupon_id = orderInfo.value?.coupon?.id
    return object
})

</script>