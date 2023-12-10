<template>
    <slot :openFullReview="openFullReview"></slot>
    <Modal v-bind="$attrs" @close="closeModal" size="2xl" class="flex flex-col gap-6" :is-show="isModalShow">
        <div class="mt-8 flex flex-col lg:flex-row gap-4 lg:justify-between">
            <div class="flex items-center gap-3 lg:gap-4">
                <Avatar size="sm" class="max-lg:w-13 max-lg:h-13"></Avatar>
                <div class="text-sm lg:text-base font-medium text-primary flex flex-col gap-3 lg:gap-2">
                    <p class="text-fblack font-semibold text-base lg:text-lg leading-1.2 lg:leading-1.2">{{ review?.name }}</p>
                    <p>{{ review?.title }}</p>
                </div>
            </div>
            <Rating :rating="review?.rating"></Rating>
        </div>
        <p class="text-fblack text-sm lg:text-base leading-1.4 lg:leading-1.4">{{ review?.message }}</p>
        <p class="mt-auto text-sm leading-1.4 text-#7B7B7B">{{ $dayjs(review?.created_at).tz('Europe/Moscow').locale(locale).format('L') }}</p>
    </Modal>
</template>

<script setup lang="ts">
import type { Review, ReviewsDatum } from '~/types/fetch/review';
const { locale } = useI18n()

defineOptions({
    inheritAttrs: false,
})
const { closeModal, isModalShow, openModal } = useModal()

const review = ref<Review>()
const openFullReview = (newReview: ReviewsDatum) => {
    review.value = {
        created_at: newReview?.created_at,
        message: newReview?.message,
        name: newReview?.name,
        rating: newReview?.rating,
        title: newReview?.product_info?.lang_info?.title,
    }
    openModal()
}
</script>