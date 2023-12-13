<template>
    <FeedbackFormContainer img="/imgs/feedback.png" class="mt-25 lg:mt-37.5">
        <FormKit :id="id" v-model="forms" @submit="statementsStore" type="form" form-class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5" :actions="false">
            <FormKit name="name_service" validation="required:trim" type="text" :validation-label="generalConfig?.static_info?.global_words?.title_excursion" :placeholder="generalConfig?.static_info?.global_words?.title_excursion" outer-class="col-span-full" />
            <FormKit name="fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" outer-class="col-span-full" />
            <FormKit name="count_people" validation="required:trim|min:1|max:255" type="number" v-maska data-maska="###" :validation-label="generalConfig?.static_info?.global_words?.count_people" :placeholder="generalConfig?.static_info?.global_words?.count_people" outer-class="col-span-full" />
            <FormKit name="start_at" validation="required" type="datepickerC" :minDate="$dayjs().toDate()" :validation-label="generalConfig?.static_info?.global_words?.product_date" :placeholder="generalConfig?.static_info?.global_words?.product_date" />
            <FormKit name="start_address" validation="required:trim" type="text" :validation-label="generalConfig?.static_info?.global_words?.starting_point" :placeholder="generalConfig?.static_info?.global_words?.starting_point" />
            <FormKit name="email" validation="email|required|length:0,32" type="email" :validation-label="generalConfig?.static_info?.global_words?.email_en" :placeholder="generalConfig?.static_info?.global_words?.email_en" />
            <FormKit name="phone" validation="required" v-maska data-maska="+7(###)###-##-##" type="tel" :validation-label="generalConfig?.static_info?.global_words?.number_telephone" :placeholder="generalConfig?.static_info?.global_words?.number_telephone" />
            <FormKit name="comment" validation="required:trim|length:5,2000" type="textarea" :validation-label="generalConfig?.static_info?.global_words?.wishes" :placeholder="generalConfig?.static_info?.global_words?.wishes" outer-class="col-span-full" input-class="h-32" />
            <Button :disabled="status === 'pending'" :loading="status === 'pending'" class="w-full lg:w-49 mt-1 lg:mt-1.5 max-lg:text-sm">{{ generalConfig?.static_info?.global_words?.send }}</Button>
        </FormKit>
        <Modal @close="closeModal" size="md" :is-show="isModalShow">
            <ModalThanksContent @ok="closeModal" :subTitle="generalConfig?.static_info?.global_words?.waiting_call_manager" :title="generalConfig?.static_info?.global_words?.congratulations" />
        </Modal>
    </FeedbackFormContainer>
</template>

<script setup lang="ts">
import { reset } from '@formkit/core'
defineProps({
    id:{type:String, default:'find-service'}
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { closeModal, isModalShow, openModal } = useModal()
const forms = ref()
const { error, execute, status } = await useBaseFetch('statements/store', {
    method: 'POST',
    immediate: false,
    onRequest({ options }) {
        options.body = {
            type_id: generalConfig?.value?.orders?.type_other_form?.find(a => a?.key == 'STATEMENT_TYPE_FIND_SERVICE')?.id,
            name_service: forms.value?.name_service?.trim(),
            fio: forms.value?.fio?.trim(),
            count_people: forms.value?.count_people,
            start_at: forms.value?.start_at,
            email: forms.value?.email,
            start_address: forms.value?.start_address?.trim(),
            phone: forms.value?.phone,
            comment: forms.value?.comment?.trim(),
        }
    },
    watch: false,
    key: 'statements/store-find-service'
})

const statementsStore = async () => {
    await execute()
    if (error.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: error.value?.data?.errors?.map((a: any) => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    openModal()
    reset("find-service")
}
</script>