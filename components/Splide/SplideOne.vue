<template>
    <Splide :has-track="false" class="w-full flex overflow-hidden relative" :options="options">
        <SplideTrack>
            <SplideSlide class="w-full h-full shrink-0 [&>img]:(w-full h-full object-cover object-center)" v-for="img in imgs" v-html="img?.html">
            </SplideSlide>
        </SplideTrack>
        <div class="absolute bottom-7.5 lg:top-1/2 lg:-translate-y-1/2 w-full h-fit z-1">
            <SplideController class="wrapper" />
            <SplidePagination></SplidePagination>
        </div>
    </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
import type { MediaGalleryData } from '~/types/fetch/shared';
defineProps({
    imgs: Array as PropType<MediaGalleryData[]>
})

const options: Options = {
    rewind: true,
    breakpoints: {
        1024: {
            arrows: true,
            pagination: false,
        }
    },
    arrows: false,
    pagination: true,
    mediaQuery: 'min',
}
</script>