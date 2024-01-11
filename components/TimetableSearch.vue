<template>
    <div class="flex flex-col lg:flex-row gap-2.5 lg:gap-5">
        <FormKit v-model="date" type="datepickerC" :minDate="$dayjs().tz('Europe/Moscow').toDate()" outer-class="w-full lg:w-39.5"></FormKit>
        <Button @click="changeTimetamble" class="max-lg:w-full">{{ generalConfig?.static_info?.global_words?.choose_an_excursion }}</Button>
    </div>
</template>

<script setup>
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const dayjs = useDayjs()
const localePath = useLocalePath()
const date = ref(dayjs().toDate())
const changeTimetamble = async () => await navigateTo(localePath(`/excursion/timetable/${dayjs(date.value).tz('Europe/Moscow').format('YYYY/MM/DD')}`))
</script>