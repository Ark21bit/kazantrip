<template>
    <Splide :has-track="false" class="w-full flex flex-col relative" :options="options">
        <ModalTeams #="{ openModal }">
            <SplideTrack class="overflow-visible max-w-full">
                <CardTeams @open-team-full="openModal" v-for="item in 10" :tag="SplideSlide" class="w-full flex-shrink-0 lg:w-[calc(25%-15px)] last:mr-0 mr-5"></CardTeams>
            </SplideTrack>
        </ModalTeams>
        <SplideController color="azul" class="mt-7.5 w-fit" />
        <SplidePagination class="mt-5" />
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
const options: Options = {
    breakpoints: {
        640: { fixedWidth: 305 },
        868: { fixedWidth: 370 },
        1024: {
            perPage: 4,
            arrows: true,
            pagination: false,
            fixedWidth: undefined
        }
    },
    pagination: true,
    gap: 20,
    fixedWidth: 270,
    arrows: false,
    mediaQuery: 'min',
    perMove: 1
}
</script>

