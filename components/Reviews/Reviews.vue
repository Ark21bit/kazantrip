<template>
    <div>
        <div class="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.reviews }}</h2>
            <ReviewsModalCreate #="{ openModal }">
                <Button @click="openModal">{{ generalConfig?.static_info?.global_words?.add_review }}</Button>
            </ReviewsModalCreate>
        </div>
        <ReviewsSlider v-if="reviews?.length ?? 0 > 0" :reviews="reviews" class="mt-7.5 lg:mt-10" />
    </div>
</template>

<script setup lang="ts">
import type { ReviewsDatum } from '~/types/fetch/review';

defineProps({
    reviews: Array as PropType<ReviewsDatum[]>,
    title: String,
    productId: Number,
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>