<template>
    <div class="flex flex-col rounded-5 overflow-hidden border border-#EBEBEB lg:border-transparent shadow-base">
        <div class="bg-#E2F1F2 p-5 text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-diamondBlack border-b border-#EBEBEB">
            <p>Расписание на</p>
            <p class="text-primary">четверг 31 октября</p>
        </div>
        <div v-for="n in 3" class="flex flex-col gap-2 py-4.5 p-5 border-b border-#EBEBEB text-sm lg:text-base font-semibold leading-1.2 lg:leading-1.2">
            <p class="leading-1.4 text-#7B7B7B">11:00</p>
            <p class="text-diamondBlack">Остров-град Свияжск и Храм всех религий (внешний осмотр)</p>
            <p class="text-primary text-xl">1999₽<span class="ml-1.5 py-1.5 text-sm text-#A4A4A4 line-through decoration-diamondBlack">1350₽</span></p>
        </div>
        <CustomLink to="/test" class="text-#39919A underline leading-1.2 text-base hover:text-#21747C mx-auto my-5">Еще экскурсии</CustomLink>
    </div>
</template>

<script setup lang="ts">

</script>