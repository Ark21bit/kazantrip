<template>
    <div class="flex flex-col rounded-5 overflow-hidden border border-#EBEBEB lg:border-transparent shadow-base">
        <div class="flex bg-#E2F1F2 p-5 gap-3 text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-fblack border-b border-#EBEBEB  justify-between">
            <div>
                <p>{{ generalConfig?.static_info?.global_words?.timetable_on }}</p>
                <p class="text-primary">{{ $dayjs(day).tz('Europe/Moscow').locale(locale).format('dddd DD MMMM') }}</p>
            </div>
            <slot name="calendar"></slot>
        </div>
        <div>
            <template v-if="info">
                <div v-for="item in isShort ? infoShorts : info" class="flex flex-col gap-2 py-4.5 p-5 first:border-none border-t border-#EBEBEB text-sm lg:text-base font-semibold leading-1.2 lg:leading-1.2">
                    <p class="leading-1.4 text-#7B7B7B">{{ item?.time }}</p>
                    <CustomLink :to="item?.url" class="text-fblack">{{ item?.product_name }}</CustomLink>
                    <p class="text-primary text-xl">{{ item?.visible_prices?.new }}₽<span class="ml-1.5 py-1.5 text-sm text-#A4A4A4 line-through decoration-fblack" v-if="item?.visible_prices?.old">{{ item?.visible_prices?.old }}₽</span></p>
                </div>
            </template>
            <div v-else class="h-110 flex justify-center items-center">
                <Icon class="text-5xl text-primary" name="eos-icons:loading"></Icon>
            </div>
        </div>
        <div v-if="Number(info?.length) > 3" class="mt-auto flex py-5 border-t border-#EBEBEB">
            <Button @click="toggle" variant="link" size="lg" padded class="mx-auto">{{ isShort ? generalConfig?.static_info?.global_words?.more_excursions : generalConfig?.static_info?.global_words?.hide_more_details }}</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TimetableInfo } from '~/types/fetch/timetable';
const props = defineProps({
    day: String,
    info: Array as PropType<TimetableInfo[] | null>,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { locale } = useI18n()

const infoShorts = computed(() => props.info?.slice(0, 3))

const isShort = ref(true)

const toggle = () => {
    isShort.value = !isShort.value
}
</script>