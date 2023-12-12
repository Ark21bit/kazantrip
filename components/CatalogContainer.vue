<template>
    <div v-bind="$attrs" class="flex flex-col lg:flex-row gap-y-7.5 gap-x-5">
        <div class="flex flex-col gap-5 lg:w-75.75 shrink-0 max-lg:order-1">
            <CardTimetable :info="generalConfig?.timetable?.today" class="max-lg:hidden" v-if="timetable"></CardTimetable>
            <div class="flex flex-col gap-5 p-5 rounded-5 border border-#F6F6F6">
                <p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack">Отправьте запрос на <span class="text-primary">индивидуальную</span> экскурсию</p>
                <ModalRequestIndividual #="{ openModal }">
                    <Button @click="openModal" size="sm" class="w-41">Подобрать</Button>
                </ModalRequestIndividual>
            </div>
            <CustomLink to="https://yandex.ru/profile/1020776306" target="_blank" class="hidden lg:flex flex-col gap-2 p-5 rounded-5 border border-#F6F6F6">
                <p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack"><span class="text-#FF3D15">Яндекс</span>отзывы</p>
                <p class="text-sm text-second leading-1.4">Оставьте свой отзыв на сайте</p>
            </CustomLink>
            <div class="mt-2.5 rounded-5 bg-#EFEFEF h-106">

            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    inheritAttrs: false
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

defineProps({
    timetable: { type: Boolean, defaults: false }
})
</script>