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
            <p>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</p>
            <p class="font-medium">{{ orderInfo?.client_telephone }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.email }}</p>
            <p class="font-medium">{{ orderInfo?.client_email }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.count_people }}</p>
            <p class="font-medium">{{ getTitleInfoPrices(orderInfo?.type_price_id) }}</p>
        </div>
        <div v-for="item in filterAdditionals" class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ item?.title }}</p>
            <p class="font-medium">({{ item?.count }}) {{ item?.price * item?.count }} руб.</p>
        </div>
        <div class="flex flex-col justify-between gap-3 py-3 lg:py-5 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.note }}</p>
            <p class="font-medium">{{ orderInfo?.comment_client ?? '-' }}</p>
        </div>
        <slot name="footer" :totalPrice="totalPrice"></slot>
    </div>
    <slot name="buttons" :storeOrderInfo="storeOrderInfo"></slot>
</template>

<script setup>
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