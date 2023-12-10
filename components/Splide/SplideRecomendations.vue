<template>
    <Splide :has-track="false" class="w-full flex flex-col relative contain-layout visible" :options="options">
        <SplideTrack class="overflow-visible max-w-full">
            <CardRecomendation v-for="item in data" :img="item?.data?.media_preview" :slug="item?.data?.slug" :is-sale="item?.data?.is_sale" :title="item?.data?.lang_info?.title" :price-old="item?.data?.price_see_old" :price="item?.data?.price_see" :tag="SplideSlide"
                class="w-full flex-shrink-0 lg:w-[calc(50%-10px)] last:mr-0 mr-5"></CardRecomendation>
        </SplideTrack>
        <SplideController color="azul" class="mt-7.5 max-lg:hidden w-fit" />
        <SplidePagination class="mt-5" />
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
import type { InfoRecommendationsDatum } from '~/types/fetch/shared';
defineProps({
    data: Array as PropType<InfoRecommendationsDatum[]>
})
const options: Options = {
    breakpoints: {
        640: {
            perPage: 2
        },
        768: { perPage: 3 },
        1024: {
            perPage: 4,
            pagination: false
        }
    },
    gap: 20,
    perPage: 1,
    mediaQuery: 'min',
    pagination: true,
    perMove: 1
}
</script>

