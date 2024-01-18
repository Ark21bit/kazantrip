<template>
    <Swiper slides-per-view="auto" class="w-full flex relative contain-layout overflow-visible" v-bind="options">
        <SwiperSlide v-for="slide in slides" class="size-44 lg:size-52 last:mr-0 mr-5 rounded-5 border-#F6F6F6 shadow-base">
            <div class="w-full h-22 lg:h-30 [&>img]:(h-full w-full object-contain object-center)" v-html="slide?.media_preview"></div>
            <p class="p-3 lg:p-5 text-#7B7B7B text-sm leading-1.25 text-center">{{ slide?.lang_info?.title }}</p>
            <CustomLink v-if="slide?.lang_info?.url" :to="slide?.lang_info?.url" target="_blank" class="text-sm lg:text-base absolute top-0 left-0 h-full w-full"></CustomLink>
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';
import type { PartnersDatum } from '~/types/fetch';
const options = {
    rewind: true,
    modules: [Mousewheel],
    mousewheel: {
        forceToAxis: true,
    },
}
defineProps({
    slides: Array as PropType<PartnersDatum[]>
})
</script>

