<template>
    <img class="w-49 h-24 mt-2.5 mx-auto" src="/thanksBg.png" alt="">
    <h2 class="mt-7.5 lg:mt-5 text-center font-Montserrat font-bold leading-1.2 sm:leading-1.2 text-5.5 sm:text-6.5 text-fblack">{{ title }}</h2>
    <p class="mt-3 text-center text-second text-sm leading-1.4">{{ subTitle }}</p>
    <Button @click="emit('ok')" class="mt-6 w-full lg:w-49 mx-auto"> Ок </Button>
</template>

<script lang="ts" setup>
import CustomLink from '../atoms/CustomLink.vue';
defineProps({
    title: String,
    subTitle: String,
})

const emit = defineEmits(['ok'])
</script>