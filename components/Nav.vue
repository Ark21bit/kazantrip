<template>
    <nav class="flex gap-4 justify-between items-center flex-wrap">
        <DropdownHover>
            <template #title>
                <CustomLink to="/" class="text-base font-medium leading-1.2">Экскурсии</CustomLink>
            </template>
            <CustomLink to="/" class="w-41.25 text-sm leading-1.2 text-diamondBlack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors">Экскурсии</CustomLink>
            <CustomLink to="/" class="w-41.25 text-sm leading-1.2 text-diamondBlack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors">Экскурсии</CustomLink>
            <CustomLink to="/" class="w-41.25 text-sm leading-1.2 text-diamondBlack p-3 rounded-lg hover:bg-primary hover:text-white transition-colors">Экскурсии</CustomLink>
        </DropdownHover>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest text-white hover:text-primary transition-colors ease-linear">Отзывы</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest text-white hover:text-primary transition-colors ease-linear">О нас</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest text-white hover:text-primary transition-colors ease-linear">Наши акции</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest text-white hover:text-primary transition-colors ease-linear">Панорама</CustomLink>
        <CustomLink to="/" class="text-3.75 leading-1.25 font-medium font-Onest text-white hover:text-primary transition-colors ease-linear">FAQ</CustomLink>
    </nav>
    <!-- <nav class="max-lg:hidden flex gap-7.5 text-sm leading-1.2 text-fblack">
        <template>
            <DropdownHover v-if="true">
                <template #title>
                    <CustomLink to="/"></CustomLink>
                </template>
                <CustomLink to="/" class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear"></CustomLink>
            </DropdownHover>
            <CustomLink v-else to="/"></CustomLink>
        </template>
    </nav> -->
</template>

<script setup lang="ts">

</script>