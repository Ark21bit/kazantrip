<template>
    <FeedbackFormContainer img="/imgs/feedback.png" class="mt-25 lg:mt-37.5">
        <FormKit type="form" form-class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5" :actions="false">
            <FormKit name="name" validation="required" type="text" :validation-label="generalConfig?.static_info?.global_words?.title_excursion" :placeholder="generalConfig?.static_info?.global_words?.title_excursion" outer-class="col-span-full" />
            <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" outer-class="col-span-full" />
            <FormKit name="client_email" validation="email|required|length:0,32" type="email" :validation-label="generalConfig?.static_info?.global_words?.email" :placeholder="generalConfig?.static_info?.global_words?.email" />
            <FormKit name="date" type="datepickerC" :validation-label="generalConfig?.static_info?.global_words?.product_date" :placeholder="generalConfig?.static_info?.global_words?.product_date" />
            <FormKit name="comment" validation="required:trim|length:5,2000" type="textarea" :validation-label="generalConfig?.static_info?.global_words?.wishes" :placeholder="generalConfig?.static_info?.global_words?.wishes" input-class="max-lg:text-sm h-30 lg:h-46.25" outer-class="col-span-full" />
            <Button class="w-full lg:w-49 mt-1 lg:mt-1.5 max-lg:text-sm">{{ generalConfig?.static_info?.global_words?.send }}</Button>
        </FormKit>
    </FeedbackFormContainer>
</template>

<script setup lang="ts">
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>