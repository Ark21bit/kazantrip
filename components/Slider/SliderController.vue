<template>
    <div class="flex gap-3 justify-between pointer-events-none">        
        <SliderButton :color="color" class="swiper-button-prev"></SliderButton>
        <SliderButton :color="color" class="swiper-button-next rotate-180"></SliderButton>
    </div>
</template>

<script setup lang="ts">
import type { SliderButtonColors } from './SliderButton.vue';

defineProps({
    color: String as PropType<SliderButtonColors>
})
</script>