<template>
    <h1 class="font-Montserrat text-6.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-fblack">{{ data?.content?.title }}</h1>
    <div class="text-sm lg:text-base font-medium leading-1.4 lg:leading-1.4 text-second mt-7.5" v-html="data?.content?.text"></div>
</template>

<script lang="ts" setup>
import type { SEO } from '~/types/fetch/shared'
interface Fetch {
    content: {
        title: string;
        text: string;
    }
    seo: SEO;
}

const { data } = await useBaseFetch<Fetch>('search/page', {
    query: { key: 'privacy-policy' },
    key: 'privacy-policy'
})

useSeoMeta({
    title: () => data.value?.seo?.title ?? " ",
    description: () => data.value?.seo?.description ?? " ",
    keywords: () => data.value?.seo?.keywords ?? ' ',
})
</script>