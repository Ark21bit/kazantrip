<template>
    <ReviewsModalFull #="{ openFullReview }">
        <Swiper class="w-full flex-col flex relative contain-layout overflow-visible" v-bind="options, $attrs">
            <SwiperSlide v-for="review in reviews" class="lg:w-[calc(50%-10px)] mr-5 last:mr-0">
                <ReviewsCard class="h-full" :slug="review?.product_info?.slug" :name="review?.name" :rating="review?.rating" :created_at="review?.created_at" :message="review?.message" :title="review?.product_info?.lang_info?.title" @open-full-review="openFullReview(review)" />
            </SwiperSlide>
            <SliderController color="azul" class="mt-7.5 w-fit max-lg:hidden" />
            <SliderPagination class="mt-5 lg:hidden" />
        </Swiper>
    </ReviewsModalFull>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import type { ReviewsDatum } from '~/types/fetch/review';
defineProps({
    reviews: Array as PropType<ReviewsDatum[]>
})
defineOptions({
    inheritAttrs: false
})
const options = {
    modules: [Navigation, Pagination, Mousewheel],
    breakpoints: {
        1024: {
            slidesPerView: 2,
            pagination: {
                enabled: false
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
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
    },
    mousewheel: {
        forceToAxis: true
    },
    spaceBetween: 20,
    slidesPerView: 1,
}
</script>

