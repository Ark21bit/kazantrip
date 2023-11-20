<template>
    <Swiper class="w-full flex overflow-hidden relative" :options="options">
        <swiper-slide class="w-full h-full shrink-0 [&>img]:(w-full h-full object-cover object-center)" v-for="n in 10">
            <img src="/imgs/img3.png" alt="">
        </swiper-slide>
        <div slot="container-end" class="max-lg:hidden absolute top-1/2 -translate-y-1/2 w-full z-1">
            <div class="wrapper flex gap-4 justify-between">
                <SwiperButton class="prev"></SwiperButton>
                <SwiperButton class="next rotate-180"></SwiperButton>
            </div>
        </div>
    </Swiper>
</template>

<script setup lang="ts">
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import type { SwiperOptions } from 'swiper/types';
defineProps({
    imgs: Array as PropType<String[]>
})

const options: SwiperOptions = {
    rewind: true,
    mousewheel: { forceToAxis: true },
    breakpoints: {
        1024: {
            navigation: { enabled: true },
            pagination: { enabled: false },
        }
    },
    pagination: {
        enabled: true,
        clickable: true
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
        enabled: false
    },
    modules: [Navigation, Mousewheel, Pagination],
    injectStyles: [
        `
        .swiper {
            display:flex;
        }        
        .swiper-pagination {
            display:flex;
            gap:8px;            
            flex-wrap:wrap;
            justify-content: center;
            position:absolute;
            bottom:30px;
            z-index:1;
            left:50%;
            transform:translateX(-50%);
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