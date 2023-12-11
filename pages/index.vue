<template>
    <div class="col-span-full">
        <SliderIndex :slides="pageInfo?.slider?.data" class=""></SliderIndex>
    </div>
    <div class="flex flex-col lg:flex-row gap-5 mt-7.5 lg:mt-12.5 justify-between">
        <Button :tag="CustomLink" :to="pageInfo?.content?.timetable?.slug" class="max-lg:w-full">{{ pageInfo?.content?.timetable?.title }}</Button>
        <div class="flex flex-col lg:flex-row gap-2.5 lg:gap-5 max-lg:border-t border-#E2E2E2 max-lg:pt-5">
            <FormKit type="datepickerC" outer-class="w-full lg:w-39.5"></FormKit>
            <Button class="max-lg:w-full">Подобрать экскусрию</Button>
        </div>
    </div>
    <SliderExcursions class="py-5 mt-5 lg:mt-10"></SliderExcursions>
    <div class="flex flex-col gap-7.5 lg:gap-10 mt-15 lg:mt-20">
        <h2 class="font-Montserrat text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold text-fblack">{{ pageInfo?.content?.main_products?.title }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-y-7.5">
            <CardCatalog v-for="card in pageInfo?.main_products?.data" :type_id="card?.type_id" :img="card?.media_preview" :slug="card?.slug" :title="card?.lang_info?.title" :duration="card?.duration_event" :price="card?.price_see" :description="card?.lang_info?.description"
                :reviews-count="card.reviews_count" :is-sale="card?.is_sale" :category_id="card?.category_id" :is-radio-gid="card?.is_radio_gid" :price-old="card?.price_see_old" :rating="card?.rating"></CardCatalog>
            <Button class="col-span-full lg:mx-auto mt-2.5 lg:mt-0">Больше экскурсий</Button>
        </div>
    </div>
    <Feedback :subTitle="pageInfo?.content?.form_search?.description" :title="pageInfo?.content?.form_search?.title" />
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-15 lg:mt-37.5">
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-fblack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2"><span class="text-#FF3D15">Яндекс</span> отзывы</h3>
            <p class="text-second text-sm leading-1.4">Прочитайте отзывы наших гостей!</p>
            <Button size="sm" class="w-41 mt-auto">Подробнее</Button>
        </div>
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 border-(#F6F6F6 1) bg1 bg-cover bg-center bg-black/50 rounded-5">
            <h3 class="text-white text-lg lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2">Эксклюзивная экскурсия в закулисье цирка!</h3>
            <Button size="sm" class="w-41 mt-auto" color="yellow">Подробнее</Button>
        </div>
        <div class="flex flex-col gap-3 min-h-45.25 lg:min-h-48.75 p-5 lg:p-6 pr-20 border-(#F6F6F6 1) bg-[position:top_0_right_15px] lg:bg-[position:top_0_right_30px] bg-[length:48px] lg:bg-[length:51px] bg-[url(/imgs/pattern.svg)] bg-repeat-y rounded-5">
            <h3 class="text-fblack text-xl lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2">Индивидуальные эксркусии</h3>
            <Button size="sm" class="w-41 mt-auto">Подробнее</Button>
        </div>
    </div>
    <div class="mt-20 lg:mt-37.5">
        <h2 class="text-5.5 lg:text-8 leading-1.2 lg:leading-1.2 font-bold font-Montserrat text-fblack wrapper">{{ pageInfo?.content?.partners?.title }}</h2>
        <SliderPartners class="mt-7.5 lg:mt-10" />
    </div>
</template>

<script lang="ts" setup>
import { CustomLink } from '#components';
import type { IndexPage } from '~/types/fetch';

definePageMeta({
    layout: 'main'
})

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