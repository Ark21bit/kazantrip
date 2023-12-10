<template>
    <slot name="title"></slot>
    <div class="mt-7.5 lg:mt-10 shadow-base rounded-5 ring ring-#F6F6F6 ring-inset lg:py-2.5">
        <slot name="head"></slot>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.product_name }}</p>
            <p class="font-medium"> {{ orderInfo?.title }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.product_date }}</p>
            <p class="font-medium">{{ $dayjs(orderInfo?.date).tz('Europe/Moscow').locale(locale).format('L') }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.product_time }}</p>
            <p class="font-medium">{{ orderInfo?.time?.label }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.starting_point }}</p>
            <p class="font-medium">{{ getTitlePlacesStart(orderInfo?.place_start_id) }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</p>
            <p class="font-medium">{{ orderInfo?.client_telephone }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.email }}</p>
            <p class="font-medium">{{ orderInfo?.client_email }}</p>
        </div>
        <div v-for="item in filterTickets" class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ getTitleTypeTicket(item?.id) }}</p>
            <p class="font-medium">({{ item?.count }}) {{ item?.price * item?.count }} руб.</p>
        </div>
        <div v-for="item in filterAdditionals" class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ item?.title }}</p>
            <p class="font-medium">({{ item?.count }}) {{ item?.price * item?.count }} руб.</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.sale_coupon }}</p>
            <p class="font-medium">{{ orderInfo?.coupon?.id ? `${generalConfig?.static_info?.global_words?.sale} ${orderInfo?.coupon?.sale_present}%` : '-' }}</p>
        </div>
        <div class="flex flex-col justify-between gap-3 py-3 lg:py-5 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.note }}</p>
            <p class="font-medium">{{ orderInfo?.comment_client }}</p>
        </div>
        <slot name="footer" :totalPrice="totalPrice"></slot>
    </div>
    <slot name="buttons" :storeOrderInfo="storeOrderInfo"></slot>
</template>

<script setup>
const { orderInfo } = storeToRefs(useOrderStore())
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { locale } = useI18n()

const filterTickets = computed(() => orderInfo.value?.tickets?.filter(a => a.count > 0))
const filterAdditionals = computed(() => orderInfo.value?.additional?.filter(a => a.count > 0))

const totalPrice = computed(() =>
    (filterAdditionals.value?.reduce((a, b) => a + b.count * b.price, 0) ?? 0)
    + (filterTickets.value?.reduce((a, b) => a + b.count * b.price, 0) * (1 - (orderInfo?.coupon?.sale_present ?? 0)) ?? 0)
)

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