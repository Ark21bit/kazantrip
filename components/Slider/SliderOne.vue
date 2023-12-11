<template>
    <Swiper class="w-full flex overflow-hidden relative" v-bind="options">
        <SwiperSlide class="w-full h-full shrink-0 [&>img]:(w-full h-full object-cover object-center)" v-for="img in imgs" v-html="img?.html" />
        <div class="absolute bottom-7.5 lg:top-1/2 lg:-translate-y-1/2 w-full h-fit z-1">
            <SliderController class="wrapper max-lg:hidden" />
            <SliderPagination class="lg:hidden" />
        </div>
    </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import type { MediaGalleryData } from '~/types/fetch/shared';
defineProps({
    imgs: Array as PropType<MediaGalleryData[]>
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
</script>