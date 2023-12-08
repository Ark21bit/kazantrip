<template>
    <Splide class="w-full flex flex-col gap-5 lg:flex-row relative visible" :options="options" :has-track="false">
        <SplideTrack>
            <SplideSlide v-for="item in 25" class="w-fit last:mr-0 mr-2">
                <NuxtLink to="/test" class="flex text-sm leading-1.2 font-medium shrink-0 px-4 py-2.25 bg-#E2F1F2 text-#28303F rounded-lg transition-colors duration-500 ease-linear">Экскурсия в храм всех религий</NuxtLink>
            </SplideSlide>
        </SplideTrack>
        <div class="flex gap-3 justify-between splide__arrows lg:absolute left-1/2 pointer-events-none lg:top-1/2 lg:-translate-1/2 w-full">
            <div class="max-lg:hidden absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)]"></div>
            <div class="max-lg:hidden absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-none w-37.5 h-19 [background:linear-gradient(89deg,#FFF_57.43%,rgba(255,255,255,0)_95.33%)] rotate-180"></div>
            <SplideButton color="transparent" padding="p-0" size="text-7.25" class="splide__arrow--prev lg:-translate-x-5/6"></SplideButton>
            <SplideButton color="transparent" padding="p-0" size="text-7.25" class="splide__arrow--next rotate-180 lg:translate-x-5/6"></SplideButton>
        </div>
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
const options: Options = {
    pagination: false,
    autoWidth: true,
    arrows: true,
}
</script>

