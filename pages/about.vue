<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-20">{{ pageInfo?.content?.title }}</h1>
    <p class="mt-5 lg:mt-7.5 font-semibold leading-1.4 text-base lg:text-xl max-w-211.75 text-fblack [&>span]:text-primary">{{ pageInfo?.content?.text_1 }}</p>
    <AboutHistory :data="pageInfo?.history_year" />
    <div class="flex flex-col gap-20 mt-20 lg:mt-37.5">
        <div>
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat [&>span]:text-primary" v-html="generalConfig?.static_info?.global_words?.team_managers"></h2>
            <TeamsSlider :teams="pageInfo?.teams.data" class="mt-7.5 lg:mt-10"></TeamsSlider>
        </div>
        <div>
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat [&>span]:text-primary" v-html="generalConfig?.static_info?.global_words?.team_gid"></h2>
            <TeamsSlider :teams="pageInfo?.guides?.data" class="mt-7.5 lg:mt-10"></TeamsSlider>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { About } from '~/types/fetch/about';

const { data: pageInfo } = await useBaseFetch<About>(`search/page`, {
    key: 'about',
    query: { key: 'about' }
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? '',
    description: () => pageInfo.value?.seo?.description ?? '',
    keywords: () => pageInfo.value?.seo?.keywords ?? '',
})
</script>