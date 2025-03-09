<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-4 lg:gap-5">
            <FormKit v-model="date" type="datepickerC" :minDate="$dayjs().tz('Europe/Moscow').toDate()" outer-class="lg:w-39.5 max-lg:[&_input]:(!w-11 !aspect-square !p-0 !invisible) datepicker-timetable"></FormKit>
            <Button @click="changeTimetamble" class="grow">{{ generalConfig?.static_info?.global_words?.choose_an_excursion }}</Button>
        </div>
        <span v-if="date" class="lg:hidden text-3 font-500 text-fblack">{{ $dayjs(date).tz('Europe/Moscow').locale(locale).format('L') }}</span>
    </div>
</template>

<script setup>
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const dayjs = useDayjs()
const { locale } = useI18n()
const localePath = useLocalePath()
const date = ref(dayjs().toDate())
const changeTimetamble = async () => await navigateTo(localePath(`/excursion/timetable/${dayjs(date.value).tz('Europe/Moscow').format('YYYY/MM/DD')}`))
</script>
<style>
.datepicker-timetable .dp__input_icon {
    --at-apply: "max-lg:(left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2)"
}
</style>