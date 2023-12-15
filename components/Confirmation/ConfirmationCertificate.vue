<template>
    <slot name="title"></slot>
    <div v-bind="$attrs">
        <slot name="head"></slot>
        <ConfirmationBaseBlock>
            <template #title>{{ 'название сертификата' }}</template>
            <template #description>{{ orderInfo?.title }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.product_name }}</template>
            <template #description>{{ orderInfo?.certificateTitle }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.tourist_telephone }}</template>
            <template #description>{{ orderInfo?.client_telephone }}</template>
        </ConfirmationBaseBlock>
        <ConfirmationBaseBlock>
            <template #title>{{ generalConfig?.static_info?.global_words?.email }}</template>
            <template #description>{{ orderInfo?.client_email }}</template>
        </ConfirmationBaseBlock>
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
const storeOrderInfo = computed(() => ({
    client_email: orderInfo.value?.client_email?.trim(),
    client_fio: orderInfo.value?.client_fio?.trim(),
    client_telephone: orderInfo.value?.client_telephone,
    payment_type_id: orderInfo.value?.payment_type_id,
    product_id: orderInfo.value?.product_id,
    product_in_certificate_id: orderInfo.value?.product_in_certificate_id,
}))

const totalPrice = computed(() => (orderInfo.value?.price ?? 0) * 2)
</script>