<template>
    <ImageFullSlider :images="imgs" :initialSlide="initialSlide">
        <template #default="{ openModal }">
            <Swiper class="w-full flex overflow-hidden relative" v-bind="options, $attrs">
                <SwiperSlide class="w-full h-full shrink-0" v-for="(img, i) in imgs">
                    <div @click="openModal(), initialSlide = i" v-html="img?.html" class="w-full h-full cursor-pointer [&>img]:(w-full h-full object-cover object-center)"></div>
                </SwiperSlide>
                <div class="absolute bottom-7.5 lg:top-1/2 lg:-translate-y-1/2 w-full h-fit z-1 pointer-events-none">
                    <SliderController class="wrapper max-lg:hidden pointer-events-auto" />
                    <SliderPagination />
                </div>
            </Swiper>
        </template>
        <template #image="{ image }">
            <div v-html="image?.html" class="w-full h-full [&>img]:(w-full h-full object-contain)"></div>
        </template>
    </ImageFullSlider>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import type { MediaGalleryData } from '~/types/fetch/shared';
defineProps({
    imgs: Array as PropType<MediaGalleryData[]>
})

defineOptions({
    inheritAttrs: false
})

const options = {
    modules: [Navigation, Pagination, Mousewheel],
    rewind: true,
    mousewheel: {
        forceToAxis: true,
    },
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
    breakpoints: {
        1024: {
            navigation: { enabled: true },
            pagination: {
                enabled: false
            },
        }
    },
}

const initialSlide = ref(0)
</script>