<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-5 3xl:mt-20">{{ pageInfo?.content?.title }}</h1>
    <div class="flex flex-wrap items-center gap-3 lg:gap-1.75 mt-5 3xl:mt-7.5">
        <Bage v-for="file in pageInfo?.files" :to="file?.url" target="_blank" :tag="NuxtLink" link class="max-lg:py-1.5 max-lg:px-3">{{ file?.title }}</Bage>
        <TimetableSearch class="order-first lg:order-last lg:ml-auto max-lg:w-full"></TimetableSearch>
    </div>
    <div class="col-span-full pt-7.5 lg:pt-4 3xl:pt-7.5 border-t border-#EBEBEB mt-7.5 lg:mt-4 3xl:mt-7.5 lg:mb-12.5">
        <div class="flex flex-wrap gap-7.5 lg:gap-3 3xl:gap-7.5 justify-center wrapper">
            <CardTimetable class="w-full sm:w-[calc(50%-15px)] lg:w-[calc(100%/3-20px)] xl:w-[calc(25%-22.5px)]" v-for="item in pageInfo?.timetable" :info="item?.info" :day="item?.day" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { NuxtLink } from '#components'
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