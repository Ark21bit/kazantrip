<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-diamondBlack mt-10 lg:mt-20">Экскурсии по Казани и Татарстану</h1>
    <div class="flex flex-col md:flex-row gap-3 lg:gap-1.75 mt-5 lg:mt-7.5">
        <Bage to="/test" :tag="CustomLink" link class="max-lg:py-1.5 max-lg:px-3">Расписание ОКТЯБРЬ 2023 - АПРЕЛЬ 2024</Bage>
        <Bage to="/test" :tag="CustomLink" link class="max-lg:py-1.5 max-lg:px-3">НОВЫЙ ГОД 2024</Bage>
    </div>
    <div class="col-span-full pt-7.5 border-t border-#EBEBEB mt-7.5">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5 wrapper">
            <CardTimetable v-for="n in 4"></CardTimetable>
        </div>
    </div>
</template>
<script setup lang="ts">
import CustomLink from '~/components/atoms/CustomLink.vue';
</script>