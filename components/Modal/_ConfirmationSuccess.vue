<template>
    <Modal size="lg">
        <img class="w-49 h-24 mt-2.5 mx-auto" src="/thanksBg.png" alt="">
        <h3 class="mt-7.5 lg:mt-5 text-center font-Montserrat font-bold leading-1.2 sm:leading-1.2 text-5.5 sm:text-6.5 text-fblack">{{ generalConfig?.static_info?.global_words?.thank_you }}</h3>
        <template v-if="orderResponse?.data?.url_telegram_subscribe">
            <p class="mt-4 text-center">{{ generalConfig?.static_info?.global_words?.subscribe_telegram_text }}</p>
            <Button :tag="CustomLink" :to="orderResponse?.data?.url_telegram_subscribe" class="mt-1 mx-auto w-full gap-2">
                {{ generalConfig?.static_info?.global_words?.subscribe }}
                <Icon name="icon-park-outline:telegram" class="text-lg" />
            </Button>
        </template>
        <p class="mt-5 text-center" v-if="orderResponse?.data?.status_pay === true && orderResponse?.data?.url_pay === null">{{ generalConfig?.static_info?.global_words?.success_send_request_no_status_pay }}</p>
        <p class="mt-5 text-center" v-else>{{ generalConfig?.static_info?.global_words?.success_send_request }}</p>

        <Button v-if="orderResponse?.data?.status_pay === true && orderResponse?.data?.url_pay != null" :to="orderResponse?.data?.url_pay" :tag="CustomLink" class="mt-1 mx-auto w-41">{{ generalConfig?.static_info?.global_words?.pay }}</Button>
        <Button v-else to="/" :tag="CustomLink" class="mt-1 mx-auto w-full">{{ generalConfig?.static_info?.global_words?.on_main_page }}</Button>
    </Modal>
</template>

<script setup>
import CustomLink from '../atoms/CustomLink.vue';
defineProps({
    orderResponse: Object
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>