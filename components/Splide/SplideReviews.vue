<template>
    <Splide :has-track="false" class="w-full flex-col flex relative" :options="options">
        <ModalFullReview #="{ openModal }">
            <SplideTrack class="overflow-visible max-w-full">
                <CardReview @open-full-review="openModal" v-for="item in 10" :tag="SplideSlide" class="w-full flex-shrink-0 lg:w-[calc(50%-10px)] last:mr-0 mr-5"></CardReview>
            </SplideTrack>
        </ModalFullReview>
        <SplideController color="azul" class="mt-7.5 w-fit" />
        <SplidePagination class="mt-5" />
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
const options: Options = {
    mediaQuery: 'min',
    breakpoints: {
        1024: {
            perPage: 2,
            pagination: false,
            arrows: true,
        }
    },
    arrows: false,
    pagination: true,
    gap: 20,
    perPage: 1,
    perMove: 1,
}
</script>

