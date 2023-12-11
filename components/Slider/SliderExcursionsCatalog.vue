<template>
    <Swiper slides-per-view="auto" class="w-full flex flex-col gap-5 lg:flex-row relative" v-bind="options">
        <SwiperSlide v-for="item in 25" class="w-fit last:mr-0 mr-2">
            <CustomLink to="/test" class="flex text-sm leading-1.2 font-medium shrink-0 px-4 py-2.25 bg-#E2F1F2 text-black rounded-lg transition-colors duration-500 ease-linear">Экскурсия в храм всех религий</CustomLink>
        </SwiperSlide>
        <div class="flex gap-3 justify-between lg:absolute left-1/2 pointer-events-none lg:top-1/2 lg:-translate-1/2 w-full">
            <div class="max-lg:hidden absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)]"></div>
            <div class="max-lg:hidden absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)] rotate-180"></div>
            <SliderButton color="transparent" padding="p-0" size="text-7.25" class="lg:-translate-x-5/6"></SliderButton>
            <SliderButton color="transparent" padding="p-0" size="text-7.25" class="rotate-180 lg:translate-x-5/6"></SliderButton>
        </div>
    </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel } from 'swiper/modules';
const options = {
    modules: [Mousewheel, Navigation],
    navigation: {
        enabled: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        forceToAxis: true
    }
}
</script>

