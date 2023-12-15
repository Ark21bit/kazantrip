<template>
    <div v-bind="$attrs" class="flex flex-col lg:flex-row gap-y-7.5 gap-x-5">
        <div class="flex flex-col gap-5 lg:w-75.75 shrink-0 max-lg:order-1">
            <CardTimetable v-if="timitableVisible" :info="type === 'timetable' ? timetableData : generalConfig?.timetable?.today" :day="day" class="max-lg:hidden">
                <template #calendar>
                    <CalendarForm v-model="date" />
                </template>
            </CardTimetable>
            <div class="flex flex-col gap-5 p-5 rounded-5 border border-#F6F6F6">
                <p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack [&>span]:text-primary" v-html="generalConfig?.static_info?.global_words?.send_request_to_indiv_excursion"></p>
                <ModalRequestIndividual #="{ openModal }">
                    <Button @click="openModal" size="sm" class="w-41">Подобрать</Button>
                </ModalRequestIndividual>
            </div>
            <CustomLink to="https://yandex.ru/profile/1020776306" target="_blank" class="hidden lg:flex flex-col gap-2 p-5 rounded-5 border border-#F6F6F6">
                <p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack [&>span]:text-#FF3D15" v-html="generalConfig?.static_info?.global_words?.yandex_review"></p>
                <p class="text-sm text-second leading-1.4">{{ generalConfig?.static_info?.global_words?.leave_your_review }}</p>
            </CustomLink>
            <div class="mt-2.5 rounded-5 bg-#EFEFEF h-106">
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import type { PageType } from '~/types/fetch/shared';
import type { TimetableInfo } from '~/types/fetch/timetable';

const date = ref()
defineOptions({
    inheritAttrs: false
})


const { generalConfig } = storeToRefs(useGeneralConfigStore())

const props = defineProps({
    timetable: { type: Boolean, default: false },
    type: { type: String as PropType<PageType> }
})
const localePath = useLocalePath()
const dayjs = useDayjs()
const route = useRoute()
watch(date, async () => {
    return await navigateTo(localePath(`/excursion/timetable/${dayjs(date.value).format('YYYY/MM/DD')}`))
})

const day = computed(() => {
    if (props.type === 'timetable') return route.path.slice(-10)
    return undefined
})

const { data: timetableData, execute } = await useBaseFetch<TimetableInfo[]>(() => `products/timetable-date-info?date=${day.value}`, {
    immediate: false,
})

const timitableVisible = computed(() => {
    if (props.type === 'timetable' || route.path === localePath('/ekskursii/regulyarnyye') || route.path === localePath('/ekskursii')) return true
    return false
})

watchEffect(() => {
    if (day.value) execute()
})

</script>