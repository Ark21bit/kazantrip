<template>
    <Swiper class="w-full flex flex-col relative contain-layout overflow-visible" v-bind="options">
        <SwiperSlide>
            <CardRecomendation v-for="item in data" :img="item?.data?.media_preview" :slug="item?.data?.slug" :is-sale="item?.data?.is_sale" :title="item?.data?.lang_info?.title" :price-old="item?.data?.price_see_old" :price="item?.data?.price_see"
                class="w-full flex-shrink-0 lg:w-[calc(50%-10px)] last:mr-0 mr-5" />
        </SwiperSlide>
        <SliderController color="azul" class="mt-7.5 max-lg:hidden w-fit" />
        <SliderPagination class="mt-5 lg:hidden" />
    </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper/modules';
import type { InfoRecommendationsDatum } from '~/types/fetch/shared';
defineProps({
    data: Array as PropType<InfoRecommendationsDatum[]>
})
const options = {
    modules: [Pagination, Mousewheel],
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: { slidesPerView: 3 },
        1024: {
            slidesPerView: 4,
            pagination: {
                enabled: false
            }
        }
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

