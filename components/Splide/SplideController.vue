<template>
    <div class="flex gap-3 justify-between splide__arrows">
        
        <SplideButton :color="color" class="splide__arrow--prev"></SplideButton>
        <SplideButton :color="color" class="splide__arrow--next rotate-180"></SplideButton>
    </div>
</template>

<script setup lang="ts">
import type { SplideButtonColors } from './SplideButton.vue';

defineProps({
    color: String as PropType<SplideButtonColors>
})
</script>