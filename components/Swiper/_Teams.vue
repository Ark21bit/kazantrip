<template>
    <Swiper class="w-full flex relative" :options="options">
        <CardTeams v-for="item in 10" tag="swiper-slide" class="w-full flex-shrink-0 lg:w-[calc(25%-15px)] last:mr-0 mr-5"></CardTeams>
        <div slot="container-end" class="flex gap-3 mt-7.5 max-lg:hidden">
            <SwiperButton color="azul" class="swiper-button-prev"></SwiperButton>
            <SwiperButton color="azul" class="swiper-button-next rotate-180"></SwiperButton>
        </div>
    </Swiper>
</template>

<script lang="ts" setup>
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from 'swiper/types';
const options: SwiperOptions = {
    mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true
    },
    pagination: { clickable: true, enabled: true },
    breakpoints: {
        640: { slidesPerView: 2.1 },
        868: { slidesPerView: 3.1 },
        1024: {
            slidesPerView: 4,
            pagination: { enabled: false },
            navigation: { enabled: true }
        }
    },
    spaceBetween: 20,
    slidesPerView: 1.07,
    navigation: { enabled: false, nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    modules: [Mousewheel, Navigation, Pagination],
    injectStyles: [
        `
        .swiper {
            display:flex;
            overflow:visible;
            flex-direction:column;
        }
        .swiper-pagination {
            display:flex;
            gap:8px;
            margin-top:20px;
            flex-wrap:wrap;
            justify-content: center;
        }
        .swiper-pagination-bullet {
            width:10px;
            height:10px;
            border-radius:10px;
            background:#E9E9E9;
            display:block;
            transition: background .5s linear;
            flex-shrink:0;
            cursor:pointer;
        } 
        .swiper-pagination.swiper-pagination-disabled {
            display:none;
        } 
        .swiper-pagination-bullet-active  {           
            background:#39919A;
        } 
      `,
    ],
}
</script>

