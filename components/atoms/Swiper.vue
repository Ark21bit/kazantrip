<template>
    <swiper-container ref="swiperContainer" :init="false">
        <slot></slot>
    </swiper-container>
</template>

<script lang="ts" setup>
import type { SwiperOptions } from 'swiper/types';
const props = defineProps({
    options: Object as PropType<SwiperOptions>
})
const swiperContainer = ref<HTMLElement>()
useSwiper(swiperContainer, props.options)
</script>