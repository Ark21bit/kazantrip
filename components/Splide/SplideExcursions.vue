<template>
    <Splide class="w-full flex relative visible" :options="options" :has-track="false">
        <SplideTrack>
            <SplideSlide v-for="item in 25" class="w-fit last:mr-0 mr-2">
                <NuxtLink to="/test" class="flex text-sm leading-1.2 font-medium shrink-0 px-4 py-2.25 bg-#E2F1F2 text-#28303F rounded-lg transition-colors duration-500 ease-linear">Экскурсия в храм всех религий</NuxtLink>
            </SplideSlide>
        </SplideTrack>
        <SplideController class="absolute left-1/2 pointer-events-none top-1/2 -translate-1/2  w-full" color="transparent" />
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

