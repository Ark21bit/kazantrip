<template>
    <div class="swiper-pagination" :class="{ '[--pagination-bullet-color:#E9E9E9]': color == 'gray' }"></div>
</template>

<script setup lang="ts">
defineProps({
    color: String as PropType<'white' | 'gray'>
})
</script>