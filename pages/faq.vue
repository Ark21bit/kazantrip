<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-20">{{ pageInfo?.content?.title }}</h1>
    <div class="flex flex-col gap-5 mt-7.5 lg:mt-10">
        <div v-for="item in pageInfo?.questions?.data" class="flex flex-col gap-4 lg:gap-5 border shadow-base border-#F6F6F6 p-5 lg:pt-6 lg:p-8 lg:pr-27 rounded-5 lg:bg-[url(/imgs/pattern.svg)] bg-repeat-y bg-[position:top_0_right_40px]">
            <h2 class="text-fblack font-semibold text-lg lg:text-2xl leading-1.2 lg:leading-1.2">{{ item?.question }}</h2>
            <p class="text-sm lg:text-base leading-1.4 lg:leading-1.4 text-second max-w-225">{{ item?.answer }} </p>
        </div>
    </div>
    <div class="col-span-full max-lg:hidden -mb-65 -z-1">
        <img src="/eventImg.png" alt="">
    </div>
</template>

<script setup lang="ts">
const { data: pageInfo } = await useBaseFetch<any>('search/page', {
    query: { key: 'faq' },
    key: 'page-faq',
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? " ",
    description: () => pageInfo.value?.seo?.description ?? " ",
    keywords: () => pageInfo.value?.seo?.keywords ?? ' ',
})
</script>