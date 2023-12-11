<template>
    <Modal :is-show="isModalShow" @close="closeModal" :size="status === 'success' ? 'sm' : 'lg'">
        <template v-if="status === 'success'">
            <ModalThanksContent @ok="closeModal" :subTitle="generalConfig?.static_info?.global_words?.success_send_request" :title="generalConfig?.static_info?.global_words?.thank_you"></ModalThanksContent>
        </template>
        <template v-else>
            <h2 class="text-5.5 lg:text-6.5 text-fblack leading-1.2 font-Montserrat font-bold [&>span]:text-primary max-w-[calc(100%-27px)]">{{ generalConfig?.static_info?.global_words?.request_call }}</h2>
            <FormKit v-model="forms" @submit="statementsStore" type="form" :actions="false" form-class="flex flex-col gap-4 lg:gap-4.5 mt-3">
                <FormKit name="fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" />
                <FormKit name="phone" validation="required:trim" type="text" v-maska data-maska="+7(###)###-##-##" :validation-label="generalConfig?.static_info?.global_words?.telephone" :placeholder="generalConfig?.static_info?.global_words?.telephone" />
                <div class="flex flex-col lg:flex-row gap-3 lg:justify-between">
                    <Button :disabled="status === 'pending'" :loading="status === 'pending'" class="w-full lg:w-fit">{{ generalConfig?.static_info?.global_words?.request_call }}</Button>
                    <Button :disabled="status === 'pending'" :loading="status === 'pending'" @click="closeModal" class="w-full lg:w-49" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
                </div>
            </FormKit>
        </template>
    </Modal>
    <slot :openModal="openModal"></slot>
</template>

<script lang="ts" setup>
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { closeModal, isModalShow, openModal: openModalInit } = useModal()
const openModal = () => {
    if (status.value == 'success') clearNuxtData('statements/store')
    openModalInit()
}

const forms = ref()
const { error, execute, status } = await useBaseFetch('statements/store', {
    method: 'POST',
    immediate: false,
    onRequest({ options }) {
        options.body = {
            type_id: generalConfig?.value?.orders?.type_other_form?.find(a => a?.key == 'STATEMENT_TYPE_REQUEST_CALL')?.id,
            fio: forms.value?.fio?.trim(),
            phone: forms.value?.phone,
        }
    },
    watch: false,
    key: 'statements/store-request-call'
})

const statementsStore = async () => {
    await execute()
    if (error.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: error.value?.data?.errors?.map((a: any) => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    forms.value = {}
}
</script>