<template>
    <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack">{{ data?.content?.title }}</h1>
    <div class="text-base lg:text-xl font-medium leading-1.4 lg:leading-1.4 text-fblack mt-7.5" v-html="data?.content?.text"></div>
</template>

<script lang="ts" setup>
export interface Fetch {
    content: {
        title: string;
        text: string;
    }
    seo: any;
}
const { data } = await useBaseFetch<Fetch>('search/page', {
    query: { key: 'procedure-provision-excursion-services' }
})

useSeoMeta({
    title: () => data.value?.seo?.title ?? " ",
    description: () => data.value?.seo?.description ?? " ",
    keywords: () => data.value?.seo?.keywords ?? ' ',
})
</script>
