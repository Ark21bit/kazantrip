<template>
    <Splide :has-track="false" class="w-full flex relative" :options="options">
        <SplideTrack class="overflow-visible max-w-full">
            <SplideSlide v-for="item in 25" class="h-49.25 w-49.25 last:mr-0 mr-5 rounded-5 border-#F6F6F6 shadow-base">
                <div class="w-full h-34.5">
                    <img src="/imgs/partner.png" class="h-full w-full object-contain" alt="">
                </div>
                <p class="py-5 text-#7B7B7B text-sm leading-[normal] text-center">Кума</p>
            </SplideSlide>
        </SplideTrack>
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
const options: Options = {
    pagination: false,
    arrows: false,
    rewind: true,
    autoWidth: true,
}
</script>

