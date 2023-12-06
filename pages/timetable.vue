<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-diamondBlack mt-10 lg:mt-20">{{ data?.content?.title }}</h1>
    <div class="flex flex-col md:flex-row gap-3 lg:gap-1.75 mt-5 lg:mt-7.5">
        <Bage v-for="file in data?.files" :to="file?.url" :tag="CustomLink" link class="max-lg:py-1.5 max-lg:px-3">{{ file?.title }}</Bage>
    </div>
    <div class="col-span-full pt-7.5 border-t border-#EBEBEB mt-7.5">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5 wrapper">
            <CardTimetable v-for="item in data?.timetable" :info="item?.info" :day="item?.day" />
        </div>
    </div>
</template>
<script setup lang="ts">
import CustomLink from '~/components/atoms/CustomLink.vue';

export interface Fetch {
    content: {
        title: string;
        text: string;
    }
    timetable: any;
    files: any[],
    seo: any;
}
const { data } = await useBaseFetch<Fetch>('search/page', {
    query: { key: 'timetable' }
})

useSeoMeta({
    title: () => data.value?.seo?.title ?? " ",
    description: () => data.value?.seo?.description ?? " ",
    keywords: () => data.value?.seo?.keywords ?? ' ',
})
</script>