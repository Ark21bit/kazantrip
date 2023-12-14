<template>
    <Swiper class="w-full flex flex-col relative contain-layout overflow-visible" v-bind="options">
        <SwiperSlide class="w-full min-w-62.5 lg:min-w-76.25 h-full shrink-0 [&>img]:(w-full h-full object-cover object-center) lg:w-[calc(25%-10px)] mr-5 last:mr-0 group/swiperTrail" v-for="(trail, index) in trails">
            <div class="relative translate-x-3.25">
                <div class="ring-(1 inset #F6F6F6) relative z-1 w-fit bg-white rounded-full p-1.25 after-swiper-trail">
                    <span class="w-8 aspect-square rounded-full bg-primary flex items-center justify-center text-white text-lg leading-1.2 font-semibold">{{ index + 1 }}</span>
                </div>
                <div class="group-last/swiperTrail:hidden absolute top-1/2 -translate-y-1/2 border-t border-dashed border-primary w-[calc(100%+20px)]"></div>
            </div>
            <div class="relative mt-6 lg:mt-7 flex flex-col gap-5 shadow-base ring-(1 inset #F6F6F6) p-5 text-fblack rounded-5 bg-white">
                <svg class="-z-1 absolute left-4.5 translate-x-1/2 translate-y-1 bottom-full" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M7.13397 0.5C7.51887 -0.166666 8.48112 -0.166667 8.86602 0.5L15.7942 12.5C16.1791 13.1667 15.698 14 14.9282 14H1.0718C0.301996 14 -0.179129 13.1667 0.205771 12.5L7.13397 0.5Z" fill="#fff" stroke="#F6F6F6" />
                </svg>
                <h3 class="text-lg leading-1.2 font-semibold">{{ trail?.lang_info?.title }}</h3>
                <p class="text-sm leading-1.4 min-h-30">{{ trail?.lang_info?.text }}</p>
                <div class="w-full h-30 lg:h-37.5 [&>img]:(w-full h-full object-center object-cover rounded-2.5)" v-html="trail?.media_preview"></div>
            </div>
        </SwiperSlide>
        <SliderController color="azul" class="max-lg:hidden absolute top-1/2 left-0 -translate-y-1/2 w-full z-1" />
        <SliderPagination class="mt-5 lg:hidden" />
    </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import type { InfoRouteBlocksData } from '~/types/fetch/pathMatch/regularE';
defineProps({
    imgs: Array as PropType<String[]>,
    trails: Array as PropType<InfoRouteBlocksData[]>
})

const options = {
    modules: [Mousewheel, Navigation, Pagination],
    mousewheel: {
        forceToAxis: true,
    },
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
            pagination: {
                enabled: true,
            },
        },
        768: {
            slidesPerView: 3,
            pagination: {
                enabled: true,
            },
        },
        1024: {
            slidesPerView: 4,
            navigation: {
                enabled: true,
            },
            pagination: {
                enabled: false,
            },
        }
    },
    slidesPerView: 1.15,
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
}
</script>

<style>
.group\/swiperTrail:first-child .after-swiper-trail::after {
    --at-apply: "-translate-y-full -translate-x-1/2 -top-2.5 left-1/2 absolute text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-semibold text-primary";
    content: 'Cтарт';
}
</style>