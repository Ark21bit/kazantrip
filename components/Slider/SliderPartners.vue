<template>
    <Swiper slides-per-view="auto" class="w-full flex relative contain-layout overflow-visible" v-bind="options">
        <SwiperSlide v-for="slide in slides" class="w-33.75 h-33.75 lg:h-49.25 lg:w-49.25 last:mr-0 mr-5 rounded-5 border-#F6F6F6 shadow-base">
            <div class="w-full h-23.75 lg:h-34.5 [&>img]:(h-full w-full object-contain object-center)" v-html="slide?.media_preview"></div>
            <p class="py-3 lg:py-5 text-#7B7B7B text-sm leading-1.25 text-center">{{ slide?.lang_info?.title }}</p>
            <CustomLink :to="slide?.lang_info?.url" class="absolute top-0 left-0 h-full w-full"></CustomLink>
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';
const options = {
    rewind: true,
    modules: [Mousewheel],
    mousewheel: {
        forceToAxis: true,
    },
}
defineProps({
    slides: Array
})
</script>

