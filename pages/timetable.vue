<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-20">{{ pageInfo?.content?.title }}</h1>
    <div class="flex flex-col md:flex-row gap-3 lg:gap-1.75 mt-5 lg:mt-7.5">
        <Bage v-for="file in pageInfo?.files" href="#" :download="file?.url" tag="a" link class="max-lg:py-1.5 max-lg:px-3">{{ file?.title }}</Bage>
    </div>
    <div class="col-span-full pt-7.5 border-t border-#EBEBEB mt-7.5 lg:mb-12.5">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5 wrapper">
            <CardTimetable v-for="item in pageInfo?.timetable" :info="item?.info" :day="item?.day" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { PageTimetable } from '~/types/fetch/timetable';
const { data: pageInfo } = await useBaseFetch<PageTimetable>('search/page', {
    query: { key: 'timetable' },
    key: 'page-timetable'
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? " ",
    description: () => pageInfo.value?.seo?.description ?? " ",
    keywords: () => pageInfo.value?.seo?.keywords ?? ' ',
})
</script>