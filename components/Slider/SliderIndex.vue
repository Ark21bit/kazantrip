<template>
    <Swiper class="w-full h-136 lg:h-205.5 flex" v-bind="options">
        <SwiperSlide class="w-full h-full shrink-0 relative flex items-center" v-for="slide in slides">
            <div class="absolute inset-0">
                <img src="/sliderBg2.svg" class="w-full h-full object-cover object-bottom" alt="">
            </div>
            <div class="absolute inset-0 index__slider-img-container">
                <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                <div class="w-full h-full [&>img]:(w-full h-full object-cover object-bottom)" v-html="slide?.media_preview"></div>
            </div>
            <div class="flex flex-col items-center gap-4 lg:gap-5 text-white z-1 wrapper">
                <h2 class="font-Montserrat text-6.5 lg:text-10.5 leading-1.2 lg:leading-1.2 font-bold text-center lg:w-[calc(100%-6.25rem)] lg:max-w-266">{{ slide?.lang_info?.title }}</h2>
                <p class="text-sm lg:text-lg leading-1.4 lg:leading-1.4 text-center max-w-211.5">{{ slide?.lang_info?.description }}</p>
                <Button :tag="CustomLink" :to="slide?.target_url" class="mt-2 lg:mt-1 max-lg:w-full">{{ generalConfig?.static_info?.global_words?.find_out_more }}</Button>
            </div>
        </SwiperSlide>
        <div class="absolute max-lg:bottom-16 lg:top-1/2 lg:-translate-y-1/2 w-full z-1">
            <SliderController class="wrapper max-lg:hidden" />
            <SliderPagination></SliderPagination>
        </div>
        <div class="flex absolute top-26.5 z-1 w-full max-lg:hidden">
            <p class="py-2 px-5 bg-white rounded-full font-medium text-base text-fblack leading-1.25 [&>span]:text-primary w-fit mx-auto block wrapper mx-auto" v-html="generalConfig?.static_info?.global_words?.welcome_excursion_center_the_city"></p>
        </div>
    </Swiper>
</template>

<script setup lang="ts">
import { CustomLink } from '#components';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import type { SliderIndexDatum } from '~/types/fetch';
const { generalConfig } = storeToRefs(useGeneralConfigStore())
defineProps({
    slides: Array as PropType<SliderIndexDatum[]>
})

const options = {
    modules: [Navigation, Pagination, Mousewheel],
    breakpoints: {
        1024: {
            pagination: {
                enabled: false
            },
            navigation: {
                enabled: true
            },
        }
    },
    loop: true,
    navigation: {
        enabled: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
    },
    mousewheel: {
        forceToAxis: true
    }
}
</script>