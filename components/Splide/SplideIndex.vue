<template>
    <Splide :has-track="false" class="w-full h-125 lg:h-205.5 flex" :options="options">
        <SplideTrack>
            <SplideSlide class="w-full h-full shrink-0 relative flex items-center" v-for="n in 10">
                <div class="absolute inset-0">
                    <img src="/imgs/swiper.png" class="w-full h-full object-cover object-center" alt="">
                </div>
                <div class="flex flex-col items-center gap-4 lg:gap-5 text-white z-1 wrapper">
                    <h2 class="font-Montserrat text-6.5 lg:text-10.5 leading-1.2 lg:leading-1.2 font-bold text-center w-[calc(100%-6.25rem)] max-w-266">Беззаботные субботы в Верхнем Услоне</h2>
                    <p class="text-lg leading-1.4 text-center max-w-211.5">“Волжская тропа” представляет однодневные туры на природную локацию Верхнеуслонского района! Приходите к нам на “Беззаботные субботы”. Вдохните воздух свободы от города!</p>
                    <Button class="mt-2 lg:mt-1 max-lg:w-full">Узнать подробнее</Button>
                </div>
            </SplideSlide>
        </SplideTrack>
        <div class="absolute max-lg:bottom-16 lg:top-1/2 lg:-translate-y-1/2 w-full z-1">
            <SplideController class="wrapper max-lg:hidden" />
            <SplidePagination></SplidePagination>
        </div>
        <div class="flex absolute top-25 z-1 w-full max-lg:hidden">
            <p class="py-2 px-5 bg-white rounded-full font-medium text-base text-diamondBlack leading-1.25 [&>span]:text-primary w-fit mx-auto block wrapper mx-auto">
                Добро пожаловать в экскурсионный центр города <span>Казани</span>
                <span>👋</span>
            </p>
        </div>
    </Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';

defineProps({
    slides: Object as PropType<{
        title: string,
        description: string,
        slug: string,
        img: string,
    }>
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