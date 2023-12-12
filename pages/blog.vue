<template>
    <h1 class="mt-10 lg:mt-20 text-6.5 lg:text-9.5 font-Montserrat leading-1.2 font-bold text-fblack">{{ pageInfo?.content?.title }}</h1>
    <SliderExcursionsCatalog class="py-5 lg:mt-2.5" />
    <div class="mt-2.5 col-span-full border-t lg:border-y border-#EBEBEB pt-7.5 lg:py-7.5">
        <CatalogContainer class="wrapper" :timetable="true">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-7.5 h-fit max-lg:(pb-7.5 border-b border-#EBEBEB)">
                <CardBlog :description="item?.lang_info?.description" :title="item?.lang_info?.title" :img="item?.media_preview" :slug="item?.slug" v-for="item in pageInfo?.articles?.data"></CardBlog>
            </div>
        </CatalogContainer>
    </div>
</template>

<script lang="ts" setup>
import type { Blogs } from '~/types/fetch/blogs';

const { data: pageInfo } = await useBaseFetch<Blogs>(`search/page`, {
    key: 'blogs',
    query: { key: 'blog' }
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? '',
    description: () => pageInfo.value?.seo?.description ?? '',
    keywords: () => pageInfo.value?.seo?.keywords ?? '',
})
</script>