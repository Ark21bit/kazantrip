<template>
    <Swiper class="w-full flex flex-col relative contain-layout overflow-visible" v-bind="options">
        <SwiperSlide class="lg:w-[calc(50%-10px)] last:mr-0 mr-5 h-auto" v-for="item in data">
            <CardRecomendation :img="item?.data?.media_preview" :slug="item?.data?.slug" :is-sale="item?.data?.is_sale" :title="item?.data?.lang_info?.title" :price-old="item?.data?.price_see_old" :price="item?.data?.price_see" class="h-full" />
        </SwiperSlide>
        <SliderController color="azul" class="absolute max-lg:hidden top-1/2 -translate-y-1/2 w-full z-1" />
        <SliderPagination color="gray" class="mt-5 lg:hidden" />
    </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import type { InfoRecommendationsDatum } from '~/types/fetch/shared';
defineProps({
    data: Array as PropType<InfoRecommendationsDatum[]>
})
const options = {
    modules: [Pagination, Mousewheel, Navigation],
    breakpoints: {
        640: {
            slidesPerView: 2,
            pagination: {
                enabled: true,
            }
        },
        768: {
            slidesPerView: 3,
            pagination: {
                enabled: true,
            }
        },
        1024: {
            slidesPerView: 4,
            pagination: {
                enabled: false,
            },
            navigation: {
                enabled: true,
            },
        }
    },
    navigation: {
        enabled: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
    },
    mousewheel: {
        forceToAxis: true,
    },
}
</script>

