<template>
    <div class="col-span-full">
        <SliderIndex :slides="pageInfo?.slider?.data" class=""></SliderIndex>
    </div>
    <div class="flex flex-col lg:flex-row gap-5 justify-between mt-7.5 lg:mt-12.5">
        <Button :tag="CustomLink" :to="pageInfo?.content?.timetable?.slug" class="max-lg:w-full">{{ pageInfo?.content?.timetable?.title }}</Button>
        <TimetableSearch></TimetableSearch>
    </div>
    <SliderExcursions class="py-5 mt-5 lg:mt-10"></SliderExcursions>
    <IndexProducts class="lg:mt-20" :title="pageInfo?.content?.main_products?.title" :products="pageInfo?.main_products?.data" :link="pageInfo?.content?.timetable" />
    <Feedback :subTitle="pageInfo?.content?.form_search?.description" :title="pageInfo?.content?.form_search?.title" />
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5 mt-15 lg:mt-37.5">
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-fblack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2 [&>span]:text-#FF3D15" v-html="generalConfig?.static_info?.global_words?.yandex_review"></h3>
            <p class="text-second text-sm leading-1.4">{{ generalConfig?.static_info?.global_words?.read_reviews_our_clients }}</p>
            <Button :tag="CustomLink" to="https://yandex.ru/profile/1020776306" target="_blank" size="sm" class="w-41 mt-auto">{{ generalConfig?.static_info?.global_words?.more }}</Button>
        </div>
        <div v-if="pageInfo?.main_is_exclusive" class="flex relative flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 border-(#F6F6F6 1) bg-black/50 rounded-5 overflow-hidden">
            <h3 class="text-white text-lg lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2">{{ pageInfo?.main_is_exclusive?.lang_info?.title }}</h3>
            <Button :tag="CustomLink" :to="pageInfo?.main_is_exclusive?.slug" size="sm" class="w-41 mt-auto" color="yellow">{{ generalConfig?.static_info?.global_words?.more }}</Button>
            <div class="absolute h-full w-full -z-1 top-0 left-0 [&>img]:(object-cover object-center w-full h-full)" v-html="pageInfo?.main_is_exclusive?.media_preview"></div>
        </div>
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-fblack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2">{{ generalConfig?.static_info?.global_words?.individual_excursions }}</h3>
            <Button :tag="CustomLink" to="/excursions/individual" size="sm" class="w-41 mt-auto">{{ generalConfig?.static_info?.global_words?.more }}</Button>
        </div>
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-fblack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2 [&>span]:text-primary" v-html="generalConfig?.static_info?.global_words?.['2gis_review']"></h3>
            <p class="text-second text-sm leading-1.4">{{ generalConfig?.static_info?.global_words?.read_reviews_our_clients }}</p>
            <Button :tag="CustomLink" to="https://2gis.ru/kazan/branches/70000001053847404/firm/70000001053847405/49.122043%2C55.786542/tab/reviews" target="_blank" size="sm" class="w-41 mt-auto">{{ generalConfig?.static_info?.global_words?.more }}</Button>
        </div>
    </div>
    <div class="mt-20 lg:mt-37.5">
        <h2 class="text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold font-Montserrat text-fblack wrapper">{{ pageInfo?.content?.partners?.title }}</h2>
        <SliderPartners :slides="pageInfo?.partners?.data" class="mt-7.5 lg:mt-10" />
    </div>
</template>

<script lang="ts" setup>
import { CustomLink } from '#components';
import type { IndexPage } from '~/types/fetch';

definePageMeta({
    headerAttrs: {
        absolute: true,
        dark: true,
    },
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { data: pageInfo } = await useBaseFetch<IndexPage>('search/page', {
    query: { key: 'main' },
    key: 'index-page'
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? " ",
    description: () => pageInfo.value?.seo?.description ?? " ",
    keywords: () => pageInfo.value?.seo?.keywords ?? ' ',
})
</script>