<template>
    <TeamsModal #="{ openTeamFull }">
        <Swiper class="w-full flex flex-col relative contain-layout overflow-visible" v-bind="options, $attrs">
            <SwiperSlide class="w-67.5 sm:w-76.25 min-[868px]:w-92.5 lg:w-[calc(25%-15px)] h-auto" v-for="team in teams">
                <TeamsCard @open-team-full="openTeamFull(team)" v-bind="team" class="w-full h-full" />
            </SwiperSlide>
            <SliderController color="azul" class="w-full mt-7.5 max-lg:hidden" />
            <SliderPagination class="mt-5 mx-auto" color="gray" />
        </Swiper>
    </TeamsModal>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import type { TeamsDatum } from '~/types/fetch/about';
defineOptions({
    inheritAttrs: false
})
defineProps({
    teams: Array as PropType<TeamsDatum[]>
})
const options: SwiperOptions = {
    modules: [Navigation, Pagination, Mousewheel],
    breakpoints: {
        1024: {
            slidesPerView: 4,
            navigation: {
                enabled: true,
            },
            pagination: {
                enabled: false,
            },
        }
    },
    navigation: {
        enabled: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true,
        dynamicBullets: true
    },
    mousewheel: {
        forceToAxis: true
    },
    spaceBetween: 20,
    slidesPerView: 'auto',
}
</script>

