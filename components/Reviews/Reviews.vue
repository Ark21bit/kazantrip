<template>
    <div>
        <div class="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.reviews }}</h2>
            <ReviewsModalCreate :product-id="productId" :product-title="productTitle" #="{ openModal }">
                <Button @click="openModal" class="ml-auto">{{ generalConfig?.static_info?.global_words?.add_review }}</Button>
            </ReviewsModalCreate>
        </div>
        <ReviewsSlider v-if="reviews?.length ?? 0 > 0" :reviews="reviews" class="mt-7.5 lg:mt-10" />
    </div>
</template>

<script setup lang="ts">
import type { ReviewsDatum } from '~/types/fetch/review';

defineProps({
    reviews: Array as PropType<ReviewsDatum[]>,
    productId: Number,
    productTitle: String,
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>