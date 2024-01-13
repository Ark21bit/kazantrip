<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-20">{{ generalConfig?.static_info?.global_words?.contact }}</h1>
    <div class="flex flex-col lg:flex-row py-7.5 mt-5 lg:mt-7.5 border-t border-#EBEBEB lg:items-start justify-between gap-5">
        <div class="flex gap-5 sm:max-lg:flex-row flex-col">
            <div class="text-fblack sm:max-lg:flex-1">
                <h2 class="text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.addresses }}</h2>
                <ul class="mt-2 flex flex-col gap-3 text-sm font-medium leading-1.4">
                    <li v-for="item in generalConfig?.static_info?.contact?.departure_points" class="flex gap-3">{{ `${item?.title} \n${item?.phone} ` }}</li>
                </ul>
                <!-- <p class="mt-2 text-sm leading-1.2 max-w-[284px]">{{ generalConfig?.static_info?.contact?.addresses?.main }}</p> -->
            </div>
            <div class="text-fblack sm:max-lg:flex-1 lg:mt-auto">
                <h2 class="text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.mail_index_address }}</h2>
                <p class="mt-2 text-sm leading-1.2">{{ generalConfig?.static_info?.contact?.addresses?.index_mail }}</p>
            </div>
        </div>
        <div class="flex gap-5 sm:max-lg:flex-row flex-col">
            <div class="text-fblack sm:max-lg:flex-1">
                <h2 class="text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.single_line }}</h2>
                <div class="flex max-lg:flex-wrap lg:flex-col mt-2 gap-4 lg:gap-1.5">
                    <NuxtLink v-for="telephon in generalConfig?.static_info?.contact?.telephones" :to="phoneLinkReplace(telephon)" class="text-primary text-sm leading-1.2 max-lg:w-2/5 font-medium">{{ telephon }}</NuxtLink>
                </div>
            </div>
            <div class="text-fblack sm:max-lg:flex-1 lg:mt-auto">
                <h2 class="text-lg font-bold">{{ generalConfig?.static_info?.global_words?.email }}</h2>
                <NuxtLink v-for="email in generalConfig?.static_info?.contact?.emails" :to="`mailto:${email}`" class="text-primary mt-2 text-sm leading-1.2 font-medium ">{{ email }}</NuxtLink>
            </div>
        </div>
        <div class="text-fblack">
            <h2 class="text-lg font-bold">{{ generalConfig?.static_info?.global_words?.requisites }}</h2>
            <p class="mt-2 text-sm leading-1.2">{{ generalConfig?.static_info?.contact?.company_details }}</p>
        </div>
        <Socials class="flex gap-2 text-2xl" />
    </div>
    <div class="col-span-full h-90 lg:h-125 mt-20 lg:mt-20">
        <yandex-map :settings="{ location: { center: [49.122386, 55.786445], zoom: 15 } }">
            <YandexMapDefaultSchemeLayer />
            <YandexMapDefaultFeaturesLayer />
            <yandex-map-default-marker :settings="{ coordinates: [49.122386, 55.786445] }" />
            <yandex-map-default-marker :settings="{ coordinates: [49.103726, 55.788344] }" />
            <yandex-map-default-marker :settings="{ coordinates: [49.130027, 55.815289] }" />
        </yandex-map>
    </div>
</template>
<script lang="ts" setup>
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapDefaultMarker } from 'vue-yandex-maps';
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { data: pageInfo } = await useBaseFetch<any>('search/page', {
    query: { key: 'contact' },
    key: 'contact',
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? " ",
    description: () => pageInfo.value?.seo?.description ?? " ",
    keywords: () => pageInfo.value?.seo?.keywords ?? ' ',
})
</script>

