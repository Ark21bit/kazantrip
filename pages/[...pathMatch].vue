<template>
    <component :is="page" :pageInfo="pageInfo?.data"></component>
</template>

<script lang="ts" setup>
import type { BasePage } from '~/types/fetch/shared';

const route = useRoute()

/* получение информации о запршиваемой странице из api */
const { data: pageInfo, error } = await useBaseFetch<BasePage<any>>(`search/slugs`, {
    query: { slug: route.path },
})
if (error.value) throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.statusMessage, fatal: true })

const page = computed(() => {
    if (pageInfo.value?.type === 'product') {
        if (pageInfo.value?.data?.type_id == 11) return resolveComponent('PagesRegular')
        if (pageInfo.value?.data?.type_id == 12) return resolveComponent('PagesIndividual')
        if (pageInfo.value?.data?.type_id == 41) return resolveComponent('PagesCertificate')
    }
    if (pageInfo.value?.type === 'page' || pageInfo.value?.type === 'timetable') return resolveComponent('PagesCatalog')
    if (pageInfo.value?.type === 'blog') return resolveComponent('PagesBlog')
    return null
})

useSeoMeta({
    title: () => pageInfo.value?.data?.lang_info?.seo_title ?? pageInfo.value?.data?.lang_info?.title ?? '',
    description: () => pageInfo.value?.data?.lang_info?.seo_description ?? pageInfo.value?.data?.lang_info?.description ?? '',
    keywords: () => pageInfo.value?.data?.lang_info?.seo_keywords ?? '',
})
</script>

