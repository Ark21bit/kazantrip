<template>
    <Splide :has-track="false" class="w-full flex-col flex relative contain-layout visible" :options="options">
        <ReviewsModalFull #="{ openFullReview }">
            <SplideTrack class="overflow-visible max-w-full">
                <ReviewsCard v-for="review in reviews" :name="review?.name" :rating="review?.rating" :created_at="review?.created_at" :message="review?.message" :title="review?.product_info?.lang_info?.title" @open-full-review="openFullReview(review)" :tag="SplideSlide"
                    class="w-full flex-shrink-0 lg:w-[calc(50%-10px)] last:mr-0 mr-5"></ReviewsCard>
            </SplideTrack>
        </ReviewsModalFull>
        <SplideController color="azul" class="mt-7.5 w-fit" />
        <SplidePagination class="mt-5" />
    </Splide>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack, type Options } from '@splidejs/vue-splide';
import type { ReviewsDatum } from '~/types/fetch/review';
defineProps({
    reviews: Array as PropType<ReviewsDatum[]>
})
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

