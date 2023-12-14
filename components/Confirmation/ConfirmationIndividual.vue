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
            <template #title>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</template>
            <template #description>{{ orderInfo?.client_telephone }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.email }}</template>
            <template #description>{{ orderInfo?.client_email }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.count_people }}</template>
            <template #description>{{ getTitleInfoPrices(orderInfo?.type_price_id) }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock v-for="item in filterAdditionals">
            <template #title>{{ item?.title }}</template>
            <template #description>({{ item?.count }}) {{ item?.price * item?.count }} руб.</template>
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
const dayjs = useDayjs()
const filterAdditionals = computed(() => orderInfo.value?.additional?.filter(a => a.count > 0))

const totalPrice = computed(() =>
    (filterAdditionals.value?.reduce((a, b) => a + b.count * b.price, 0) ?? 0)
    + (orderInfo.value?.price ?? 0)
)

const storeOrderInfo = computed(() => {
    const object = {
        client_email: orderInfo.value?.client_email?.trim(),
        client_fio: orderInfo.value?.client_fio?.trim(),
        client_telephone: orderInfo.value?.client_telephone,
        payment_type_id: orderInfo.value?.payment_type_id,
        product_id: orderInfo.value?.product_id,
        begin_at: dayjs(orderInfo.value?.date).tz('Europe/Moscow').format('YYYY-MM-DD'),
        count_people: orderInfo.value?.count_people,
        type_price_id: orderInfo.value?.type_price_id,
    }
    if (orderInfo.value?.comment_client?.trim()) object.comment_client = orderInfo.value?.comment_client

    const additionalFilter = orderInfo.value?.additional?.filter(a => a?.count > 0)
    if (additionalFilter?.length > 0) object.additional = additionalFilter.map(a => { return { id: a.id, count: a.count } })

    return object
})

</script>