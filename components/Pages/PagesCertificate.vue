<template>
    <div class="w-full h-100 lg:h-150 col-span-full [&>img]:(w-full h-full object-cover object-center)" v-html="pageInfo?.media_preview"></div>
    <div class="flex flex-col gap-7.5 mt-15">
        <Breadcrumbs :links="pageInfo?.info_breadcrumbs?.data" class="max-lg:hidden"></Breadcrumbs>
        <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack">{{ pageInfo?.lang_info?.title }}</h1>
        <p class="text-base leading-1.4 text-second">{{ pageInfo?.lang_info?.description }}</p>
        <OrderCertificate :product="pageInfo" #="{ openModal }">
            <Button @click="openModal" class="w-full lg:w-76.25">{{ generalConfig?.static_info?.global_words?.order_certificate }}</Button>
        </OrderCertificate>
    </div>
</template>

<script lang="ts" setup>
import type { CertificateData } from '~/types/fetch/pathMatch/certificate';

const props = defineProps({
    pageInfo: Object as PropType<CertificateData>
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>