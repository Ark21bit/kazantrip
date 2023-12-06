<template>
    <nav class="flex gap-4 justify-between items-center flex-wrap">
        <DropdownHover :dark="dark">
            <template #title>
                <CustomLink to="/">Экскурсии</CustomLink>
            </template>
            <template #default="{ classes }">
                <CustomLink to="/" class="w-46" :class="classes">Экскурсии</CustomLink>
                <CustomLink to="/" class="w-46" :class="classes">Экскурсии</CustomLink>
                <CustomLink to="/" class="w-46" :class="classes">Экскурсии</CustomLink>
            </template>
        </DropdownHover>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest hover:text-primary transition-colors ease-linear">Отзывы</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest hover:text-primary transition-colors ease-linear">О нас</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest hover:text-primary transition-colors ease-linear">Наши акции</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest hover:text-primary transition-colors ease-linear">Панорама</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest hover:text-primary transition-colors ease-linear">FAQ</CustomLink>
    </nav>
</template>

<script setup lang="ts">
defineProps({
    dark: { type: Boolean, default: false }
})
</script>