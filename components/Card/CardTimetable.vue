<template>
    <div class="flex flex-col rounded-5 lg:rounded-3 3xl:rounded-5 overflow-hidden border border-#EBEBEB lg:border-transparent shadow-base">
        <div class="flex bg-#E2F1F2 p-5 lg:p-3 3xl:p-5 gap-3 text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-fblack border-b border-#EBEBEB  justify-between">
            <div>
                <p>{{ generalConfig?.static_info?.global_words?.timetable_on }}</p>
                <div class="flex gap-1">
                    <button v-if="isCalendar" @click="emits('dec')" class="flex items-center justify-center i-custom:chevron-down text-xl rotate-90"></button>
                    <ClientOnly>
                        <p class="text-primary">{{ $dayjs(day).tz('Europe/Moscow').locale(locale).format('DD MMMM') }}</p>
                    </ClientOnly>
                    <button v-if="isCalendar" @click="emits('inc')" class="flex items-center justify-center i-custom:chevron-down text-xl -rotate-90"></button>
                </div>
            </div>
            <slot name="calendar"></slot>
        </div>
        <div>
            <div v-if="!isLoading" v-for="item in isShort ? infoShorts : info" class="flex flex-col gap-2 lg:gap-1 3xl:gap-2 py-4.5 lg:py-2 3xl:py-4.5 p-5 lg:p-3 3xl:p-5 first:border-none border-t border-#EBEBEB text-sm lg:text-base font-semibold leading-1.2 lg:leading-1.2">
                <p class="leading-1.4 text-#7B7B7B">{{ item?.time }}</p>
                <CustomLink :to="item?.url" class="text-fblack">{{ item?.product_name }}</CustomLink>
                <p class="text-primary text-xl">{{ item?.visible_prices?.new }}₽<span class="ml-1.5 py-1.5 text-sm text-#A4A4A4 line-through decoration-fblack" v-if="item?.visible_prices?.old">{{ item?.visible_prices?.old }}₽</span></p>
            </div>
            <div v-if="isLoading || !info" class="h-90 flex justify-center items-center">
                <span class="text-5xl text-primary i-eos-icons:loading"></span>
            </div>
        </div>
        <div class="mt-auto flex flex-col gap-2 py-5 lg:py-3 3xl:py-5 border-t border-#EBEBEB">
            <Button v-if="Number(info?.length) > 3" @click="toggle" variant="link" size="lg" padded class="mx-auto">{{ isShort ? generalConfig?.static_info?.global_words?.more_excursions : generalConfig?.static_info?.global_words?.hide }}</Button>
            <Button @click="openModal" class="mx-5">{{ generalConfig?.static_info?.global_words?.reservation }}</Button>
        </div>
        <Modal @close="closeModal" :is-show="isModalShow">
            <OrderTimetable v-if="info" :day="day" :timetable="info" @close="closeModal" />
        </Modal>
    </div>
</template>

<script setup lang="ts">
import type { TimetableInfo } from '~/types/fetch/timetable';
const props = defineProps({
    day: String,
    info: Array as PropType<TimetableInfo[] | null>,
    isLoading: Boolean,
    isCalendar: Boolean
})

const emits = defineEmits<{
    inc: [],
    dec: []
}>()

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { locale } = useI18n()

const infoShorts = computed(() => props.info?.slice(0, 3))

const isShort = ref(true)

const toggle = () => {
    isShort.value = !isShort.value
}

const { closeModal, isModalShow, openModal } = useModal()
</script>