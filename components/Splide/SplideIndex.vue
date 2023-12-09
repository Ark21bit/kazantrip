<template>
    <Splide :has-track="false" class="w-full h-136 lg:h-205.5 flex visible" :options="options">
        <SplideTrack class="w-full">
            <SplideSlide class="w-full h-full shrink-0 relative flex items-center" v-for="slide in slides">
                <div class="absolute inset-0">
                    <img src="/sliderBg2.svg" class="w-full h-full object-cover object-bottom" alt="">
                </div>
                <div class="absolute inset-0 index__slider-img [&>img]:(w-full h-full object-cover object-bottom)" v-html="slide?.media_preview"></div>
                <div class="flex flex-col items-center gap-4 lg:gap-5 text-white z-1 wrapper">
                    <h2 class="font-Montserrat text-6.5 lg:text-10.5 leading-1.2 lg:leading-1.2 font-bold text-center lg:w-[calc(100%-6.25rem)] lg:max-w-266">{{ slide?.lang_info?.title }}</h2>
                    <p class="text-sm lg:text-lg leading-1.4 lg:leading-1.4 text-center max-w-211.5">{{ slide?.lang_info?.description }}</p>
                    <Button :tag="CustomLink" :to="slide?.target_url" class="mt-2 lg:mt-1 max-lg:w-full">узнать подробнее</Button>
                </div>
            </SplideSlide>
        </SplideTrack>
        <div class="absolute max-lg:bottom-16 lg:top-1/2 lg:-translate-y-1/2 w-full z-1">
            <SplideController class="wrapper max-lg:hidden" />
            <SplidePagination></SplidePagination>
        </div>
        <div class="flex absolute top-26.5 z-1 w-full max-lg:hidden">
            <p class="py-2 px-5 bg-white rounded-full font-medium text-base text-diamondBlack leading-1.25 [&>span]:text-primary w-fit mx-auto block wrapper mx-auto">
                Добро пожаловать в экскурсионный центр города <span>Казани</span>
                <span>👋</span>
            </p>
        </div>
    </Splide>
</template>

<script setup lang="ts">
import { CustomLink } from '#components';
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
import type { SliderIndexDatum } from '~/types/fetch';

defineProps({
    slides: Array as PropType<SliderIndexDatum[]>
})

const options: Options = {
    pagination: true,
    breakpoints: {
        1024: {
            pagination: false,
            arrows: true,
        }
    },
    arrows: false,
    rewind: true,
    perPage: 1,
    mediaQuery: 'min'
}
</script>