<template>
    <div class="flex flex-col rounded-5 overflow-hidden border border-#EBEBEB lg:border-transparent shadow-base">
        <div class="bg-#E2F1F2 p-5 text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-diamondBlack border-b border-#EBEBEB">
            <p>Расписание на</p>
            <p class="text-primary">{{ day }}</p>
        </div>
        <div v-for="item in info" class="flex flex-col gap-2 py-4.5 p-5 border-t border-#EBEBEB text-sm lg:text-base font-semibold leading-1.2 lg:leading-1.2">
            <p class="leading-1.4 text-#7B7B7B">{{ item?.time }}</p>
            <p class="text-diamondBlack">{{ item?.product_name }}</p>
            <p class="text-primary text-xl">1999₽<span class="ml-1.5 py-1.5 text-sm text-#A4A4A4 line-through decoration-diamondBlack">1350₽</span></p>
        </div>
        <div class="mt-auto flex py-5 border-t border-#EBEBEB">
            <CustomLink to="/test" class="text-#39919A underline leading-1.2 text-base hover:text-#21747C mx-auto">Еще экскурсии</CustomLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    day: String,
    info: Array as PropType<any>
})
</script>