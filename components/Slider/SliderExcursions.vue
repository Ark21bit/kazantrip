<template>
    <div class="flex flex-col gap-5 lg:flex-row relative contain-layout">
        <Swiper slides-per-view="auto" class="w-full" v-bind="options">
            <SwiperSlide v-for="item in generalConfig?.structure" class="w-fit last:mr-0 mr-2">
                <Bage :tag="CustomLink" :to="item?.slug" link>{{ item?.title }}</Bage>
            </SwiperSlide>
        </Swiper>
        <div class="flex gap-3 justify-between lg:absolute left-1/2 pointer-events-none lg:top-1/2 lg:-translate-1/2 w-full z-1">
            <div class="max-lg:hidden absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)]"></div>
            <div class="max-lg:hidden absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)] rotate-180"></div>
            <SliderButton color="transparent" padding="p-0" size="text-7.25" class="swiper-button-prev-excursions lg:-translate-x-5/6"></SliderButton>
            <SliderButton color="transparent" padding="p-0" size="text-7.25" class="swiper-button-next-excursions rotate-180 lg:translate-x-5/6"></SliderButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel } from 'swiper/modules';
import { CustomLink } from '#components';
const options = {
    modules: [Mousewheel, Navigation],
    navigation: {
        nextEl: '.swiper-button-next-excursions',
        prevEl: '.swiper-button-prev-excursions',
    },
    mousewheel: {
        forceToAxis: true
    },
    loop: true
}

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>

