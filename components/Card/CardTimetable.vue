<template>
    <div class="flex flex-col rounded-5 overflow-hidden border border-#EBEBEB lg:border-transparent shadow-base">
        <div class="bg-#E2F1F2 p-5 text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-fblack border-b border-#EBEBEB">
            <p>{{ generalConfig?.static_info?.global_words?.timetable_on }}</p>
            <p class="text-primary">{{ $dayjs(day).tz('Europe/Moscow').locale(locale).format('dddd DD MMMM') }}</p>
        </div>
        <div>
            <div v-for="item in isShort ? infoShorts : info" class="flex flex-col gap-2 py-4.5 p-5 first:border-none border-t border-#EBEBEB text-sm lg:text-base font-semibold leading-1.2 lg:leading-1.2">
                <p class="leading-1.4 text-#7B7B7B">{{ item?.time }}</p>
                <CustomLink :to="item?.url" class="text-fblack">{{ item?.product_name }}</CustomLink>
                <p class="text-primary text-xl">{{ item?.visible_prices?.new }}₽<span class="ml-1.5 py-1.5 text-sm text-#A4A4A4 line-through decoration-fblack">{{ item?.visible_prices?.old }}₽</span></p>
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
    info: Array as PropType<TimetableInfo[]>,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { locale } = useI18n()

const infoShorts = computed(() => props.info?.slice(0, 3))

const isShort = ref(true)

const toggle = () => {
    isShort.value = !isShort.value
}
</script>