<template>
    <div class="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 gap-7.5">
        <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack">{{ pageInfo?.content?.title }}</h1>
        <Button :tag="NuxtLink" to="#create-review">
            <span v-html="generalConfig?.static_info?.global_words?.send_review"></span>
        </Button>
    </div>
    <ReviewsSlider class="mt-7.5 lg:mt-10" :reviews="reviews?.data" />
    <div class="mt-20 lg:mt-37.5">
        <h2 class="text-5.5 lg:text-7 leading-1.2 font-Montserrat text-fblack font-bold" v-html="generalConfig?.static_info?.global_words?.yandex_review"></h2>
        <div class="flex justify-center mt-7.5 lg:mt-10 w-full h-187.5 lg:h-196.5 relative overflow-hidden">
            <iframe style="width: 760px;height: 100%;border-radius: 16px; border:1px solid #F6F6F6" src="https://yandex.ru/maps-reviews-widget/1020776306?comments"></iframe>
            <a href="https://yandex.ru/maps/org/kazantrip/1020776306/" target="_blank"
                style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Kazantrip
                на карте Казани — Яндекс Карты</a>
        </div>
    </div>
    <ReviewsCreateForm id="create-review" class="mt-20 lg:mt-37.5" />
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import type { ReviewsPage, Reviews } from '~/types/fetch/review';

const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { data: pageInfo } = await useBaseFetch<ReviewsPage>('search/page', {
    query: { key: 'reviews' },
    key: 'reviews-page'
})

const { data: reviews } = await useBaseFetch<Reviews>('reviews/list', {
    key: 'reviews'
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? " ",
    description: () => pageInfo.value?.seo?.description ?? " ",
    keywords: () => pageInfo.value?.seo?.keywords ?? ' ',
})
</script>