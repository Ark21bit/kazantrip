<template>
    <slot name="title"></slot>
    <div class="mt-7.5 lg:mt-10 shadow-base rounded-5 ring ring-#F6F6F6 ring-inset lg:py-2.5">
        <slot name="head"></slot>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ 'название сертификата' }}</p>
            <p class="font-medium"> {{ orderInfo?.title }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.product_name }}</p>
            <p class="font-medium">{{ orderInfo?.certificateTitle }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</p>
            <p class="font-medium">{{ orderInfo?.client_telephone }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
            <p>{{ generalConfig?.static_info?.global_words?.email }}</p>
            <p class="font-medium">{{ orderInfo?.client_email }}</p>
        </div>
        <slot name="footer" :totalPrice="totalPrice"></slot>
    </div>
    <slot name="buttons" :storeOrderInfo="storeOrderInfo"></slot>
</template>

<script setup>
const { orderInfo } = storeToRefs(useOrderStore())
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const storeOrderInfo = computed(() => ({
    client_email: orderInfo.value?.client_email?.trim(),
    client_fio: orderInfo.value?.client_fio?.trim(),
    client_telephone: orderInfo.value?.client_telephone,
    payment_type_id: orderInfo.value?.payment_type_id,
    product_id: orderInfo.value?.product_id,
    product_in_certificate_id: orderInfo.value?.product_in_certificate_id,
}))

const totalPrice = computed(() => orderInfo.value?.price ?? 0)
</script>