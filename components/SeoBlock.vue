<template>
    <div class="flex flex-col gap-5 lg:gap-7.5">
        <h3 class="text-5.5 lg:text-2xl font-semibold font-Montserrat leading-1.2 lg:leading-1.2 text-fblack">{{ title }}</h3>
        <p class="text-sm lg:text-base leading-1.4 lg:leading-1.4 text-fblack">{{ description }}</p>
        <CustomLink to="/test" class="w-fit text-#39919A underline leading-1.2 text-base hover:text-#21747C">Показать больше</CustomLink>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String
})
</script>