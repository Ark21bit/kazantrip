<template>
    <slot :openModal="openModal"></slot>
    <Modal v-bind="$attrs" @close="closeModal" :size="status === 'success' ? 'md' : '2xl'" :is-show="isModalShow">
        <template v-if="status === 'success'">
            <ModalThanksContent @ok="closeModal" :subTitle="generalConfig?.static_info?.global_words?.review_added_successfully" :title="generalConfig?.static_info?.global_words?.thank_you" />
        </template>
        <template v-else>
            <FormKit id="create-review" v-model="forms" @submit="reviewStore" type="form" form-class="flex flex-col gap-1 lg:gap-6" :actions="false">
                <div class="flex flex-col gap-3">
                    <h2 class="text-5.5 lg:text-6.5 text-fblack leading-1.2 font-bold [&>span]:text-primary max-w-[calc(100%-27px)]" v-html="generalConfig?.static_info?.global_words?.send_review"></h2>
                    <p class="text-sm text-second leading-1.4">{{ generalConfig?.static_info?.global_words?.tell_about_impressions_trip }}</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5">
                    <FormKit name="rating" :value="5" validation="required" size="text-6.5" :label="generalConfig?.static_info?.global_words?.you_mark" type="ratingC" input-class="max-lg:text-sm" outer-class="col-span-full" />
                    <FormKit type="text" disabled :value="productTitle" :validation-label="generalConfig?.static_info?.global_words?.title_excursion" :placeholder="generalConfig?.static_info?.global_words?.title_excursion" input-class="max-lg:text-sm" outer-class="col-span-full" />
                    <FormKit name="email" validation="email|required|length:0,64" :validation-label="generalConfig?.static_info?.global_words?.email_en" :placeholder="generalConfig?.static_info?.global_words?.email_en" type="email" outer-class="col-span-full" input-class="max-lg:text-sm" />
                    <FormKit name="name" validation="required:trim" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" type="text" input-class="max-lg:text-sm" />
                    <FormKit name="date" validation="required" :maxDate="$dayjs().tz('Europe/Moscow').toDate()" :validation-label="generalConfig?.static_info?.global_words?.product_date" :placeholder="generalConfig?.static_info?.global_words?.product_date" type="datepickerC"
                        input-class="max-lg:text-sm" />
                    <FormKit name="message" validation="required:trim" :validation-label="generalConfig?.static_info?.global_words?.message" :placeholder="generalConfig?.static_info?.global_words?.message" type="textarea" input-class="max-lg:text-sm h-30 lg:h-46.25" outer-class="col-span-full" />
                </div>
                <div class="flex flex-col lg:flex-row gap-3 lg:justify-between mt-1 lg:mt-0">
                    <Button :disabled="status == 'pending'" :loading="status == 'pending'" class="w-full lg:w-49">{{ generalConfig?.static_info?.global_words?.send }}</Button>
                    <Button :disabled="status == 'pending'" :loading="status == 'pending'" @click="closeModal" class="w-full lg:w-49" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
                </div>
            </FormKit>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { reset } from '@formkit/core'
defineOptions({
    inheritAttrs: false,
})
const props = defineProps({
    productId: Number,
    productTitle:String,
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { closeModal, isModalShow, openModal: openModalInit } = useModal()
const openModal = () => {
    if (status.value == 'success') clearNuxtData('reviews/store')
    openModalInit()
}

const forms = ref()

const { error, execute, status } = await useBaseFetch('reviews/store', {
    method: 'POST',
    immediate: false,
    onRequest({ options }) {
        options.body = {
            product_id: props?.productId,
            rating: forms.value?.rating,
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
}
</script>