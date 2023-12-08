<template>
    <FeedbackFormContainer :subTitle="generalConfig?.static_info?.global_words?.tell_about_impressions_trip" :title="generalConfig?.static_info?.global_words?.send_review" img="/imgs/reviewForm.png">
        <FormKit id="create-review" @submit="reviewStore" v-model="forms" type="form" form-class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5" :actions="false">
            <FormKit name="rating" validation="required" :label="generalConfig?.static_info?.global_words?.you_mark" type="ratingC" input-class="max-lg:text-sm" />
            <FormKit name="product_id" validation="required" :validation-label="generalConfig?.static_info?.global_words?.title_excursion" :placeholder="generalConfig?.static_info?.global_words?.title_excursion" optionLabel="title" optionValue="id" :options="products" type="selectC"
                input-class="max-lg:text-sm" outer-class="col-span-full" />
            <FormKit name="name" validation="required:trim" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" type="text" outer-class="col-span-full" input-class="max-lg:text-sm" />
            <FormKit name="email" validation="required|email" :validation-label="generalConfig?.static_info?.global_words?.email_text" :placeholder="generalConfig?.static_info?.global_words?.email_text" type="email" input-class="max-lg:text-sm" />
            <FormKit name="date" validation="required" :validation-label="generalConfig?.static_info?.global_words?.product_date" :placeholder="generalConfig?.static_info?.global_words?.product_date" type="datepickerC" input-class="max-lg:text-sm" />
            <FormKit name="message" validation="required:trim" :validation-label="generalConfig?.static_info?.global_words?.about_impressions_trip" :placeholder="generalConfig?.static_info?.global_words?.about_impressions_trip" type="textarea" input-class="max-lg:text-sm h-30 lg:h-46.25"
                outer-class="col-span-full" />
            <Button :disabled="status == 'pending'" :loading="status == 'pending'" class="w-full lg:w-49 mt-1 lg:mt-1.5 max-lg:text-sm">{{ generalConfig?.static_info?.global_words?.send }}</Button>
        </FormKit>
        <Modal @close="closeModal" size="sm" class="flex flex-col items-center" :is-show="isModalShow">
            <ModalThanksContent :subTitle="generalConfig?.static_info?.global_words?.review_added_successfully" :title="generalConfig?.static_info?.global_words?.thank_you"/>
        </Modal>
    </FeedbackFormContainer>
</template>

<script setup lang="ts">
import { reset } from '@formkit/core'
import type { ProductsShortList } from '~/types/fetch/shared';
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { data: products } = await useBaseFetch<ProductsShortList[]>('products/short-list', {
    key: 'products-short-list'
})

const forms = ref()
const { error, execute, status } = await useBaseFetch('reviws/store', {
    method: 'POST',
    immediate: false,
    onRequest({ options }) {
        options.body = {
            product_id: forms.value.product_id,
            rating: forms.value.rating,
            name: forms.value?.name?.trim(),
            email: forms.value?.email?.trim(),
            message: forms.value?.message?.trim(),
            date_at: forms.value?.date
        }
    },
    key: 'reviews/store',
    watch: false
})

const reviewStore = async () => {
    await execute()
    if (error.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: error.value?.data?.errors?.map((a: any) => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
    reset('create-review')
    openModal()
}


const { closeModal, isModalShow, openModal } = useModal()
</script>