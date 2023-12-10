<template>
    <ClientOnly>
        <div class="max-w-211.5 mx-auto mt-10 lg:mt-20 w-full">
            <component :is="confirmationComponent">
                <template #title>
                    <h1 class="text-6.5 lg:text-9.5 font-bold font-Montserrat text-fblack text-center leading-1.2 lg:leading-1.2">{{ generalConfig?.static_info?.global_words?.confirm_booking }}</h1>
                </template>
                <template #head>
                    <div class="flex flex-col gap-4 items-center text-center px-5 pt-5 lg:pt-7.5 pb-7.5 border-b border-#E8E8E8">
                        <h2 class="text-5.5 lg:text-6.5 text-fblack leading-1.2 font-bold [&>span]:text-primary" v-html="fioText"></h2>
                        <p class="text-sm lg:text-base text-second leading-1.35 lg:leading-1.35"> {{ generalConfig?.static_info?.global_words?.confirm_description_text }}</p>
                    </div>
                </template>
                <template #footer="{ totalPrice }">
                    <div class="flex bg-primary lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-lg leading-1.2 text-white font-semibold">
                        <p>{{ generalConfig?.static_info?.global_words?.total_order_payment }}</p>
                        <p>{{ totalPrice }}₽</p>
                    </div>
                    <div class="flex flex-col lg:flex-row justify-between gap-3 pt-3 pb-5 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
                        <p>{{ generalConfig?.static_info?.global_words?.type_payment }}</p>
                        <p class="font-medium">{{ getTitlePaymentTypes(orderInfo?.payment_type_id) }}</p>
                    </div>
                </template>
                <template #buttons="{ storeOrderInfo }">
                    <div class="flex flex-col lg:flex-row justify-between gap-5 mt-7.5">
                        <template v-if="orderCompleted">
                            <p class="text-base lg:text-lg font-bold">{{ 'заказ принят' }}</p>
                        </template>
                        <template v-else>
                            <Button class="!px-6.5" @click="storeOrder(storeOrderInfo)" :disabled="storeStatus === 'pending'" :loading="storeStatus === 'pending'">{{ generalConfig?.static_info?.global_words?.confirmation_order }}</Button>
                            <Button class="lg:w-49" @click="cancel" :disabled="storeStatus === 'pending'" :loading="storeStatus === 'pending'" variant="outline" color="green">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
                        </template>
                        <ModalConfirmationSuccess :orderResponse="storeData" :isShow="isModalShow" @close="closeModal" />
                    </div>
                </template>
            </component>
        </div>
    </ClientOnly>
    <div class="col-span-full max-lg:hidden -mb-65 -z-1">
        <img src="/eventImg.png" alt="">
    </div>
</template>

<script setup>
useSeoMeta({
    title: "Подтверждение заказа",
})

const localePath = useLocalePath()

const { orderInfo, orderCompleted } = storeToRefs(useOrderStore())
const { $reset } = useOrderStore()
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const fioText = computed(() =>
    generalConfig.value?.static_info?.global_words?.confirm_who.replace('%s', `<span class='text-fblue'>${orderInfo.value.client_fio}</span>`)
)

onMounted(() => {
    if (orderCompleted.value) $reset()
    if (isEmptyObject(orderInfo.value)) throw createError({ statusCode: 404, fatal: true })
})

const confirmationComponent = computed(() => {
    /* if (orderInfo.value?.type_id == 31) return resolveComponent('ConfirmationAdditional') */
    if (orderInfo.value?.type_id == 12) return resolveComponent('ConfirmationIndividualExcursions')
    if (orderInfo.value?.type_id == 11) return resolveComponent('ConfirmationRegular')
    if (orderInfo.value?.type_id == 41) return resolveComponent('ConfirmationCertificate')
    return null
})

const executeInfo = ref(null)
const { data: storeData, execute: storeExecute, status: storeStatus, error: storeError } = useBaseFetch('orders/store', {
    immediate: false,
    method: 'POST',
    body: executeInfo,
    watch: false,
})

const storeOrder = async (data) => {
    executeInfo.value = data
    await storeExecute()
    if (storeError.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: storeError.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    orderCompleted.value = true
    openModal()
}

const cancel = () => {
    $reset()
    navigateTo(localePath('/'))
}

const { closeModal, isModalShow, openModal } = useModal()
</script>