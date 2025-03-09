<template>
	<div v-bind="$attrs" class="flex flex-col lg:flex-row gap-y-7.5 gap-x-5">
		<CustomLink v-for="banner in banners" :to="banner.url" :key="banner.id" class="lg:hidden max-w-78 mx-auto">
			<img class="w-full h-auto" :src="banner.image" alt="">
		</CustomLink>
		<div class="lg:w-75.75 shrink-0 max-lg:order-1 relative">
			<div class="sticky top-5 flex flex-col gap-5 max-h-[calc(100vh-28px)] overflow-auto scroll-customize pl-5 -ml-5 pr-3 -mr-3">
				<CustomLink v-for="banner in banners" :to="banner.url" :key="banner.id" class="max-lg:hidden">
					<img class="w-full h-auto" :src="banner.image" alt="">
				</CustomLink>
				<CardTimetable isCalendar @dec="date = dayjs(date).add(-1, 'day')" @inc="date = dayjs(date).add(1, 'day')" :is-loading="status === 'pending'" v-if="timitableVisible" :info="timetableData" :day="date" class="max-lg:hidden shrink-0">
					<template #calendar>
						<CalendarForm v-model="date" />
					</template>
				</CardTimetable>
				<div class="flex flex-col gap-5 p-5 rounded-5 border border-#F6F6F6">
					<p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack [&>span]:text-primary" v-html="generalConfig?.static_info?.global_words?.send_request_to_indiv_excursion"></p>
					<ModalRequestIndividual #="{ openModal }">
						<Button @click="openModal(undefined), reachGoal('private_from_sidebar')" size="sm" class="w-41">{{ generalConfig?.static_info?.global_words?.pick_up }}</Button>
					</ModalRequestIndividual>
				</div>
				<CustomLink to="https://yandex.ru/profile/1020776306" target="_blank" class="hidden lg:flex flex-col gap-2 p-5 rounded-5 border border-#F6F6F6">
					<p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack [&>span]:text-#FF3D15" v-html="generalConfig?.static_info?.global_words?.yandex_review"></p>
					<p class="text-sm text-second leading-1.4">{{ generalConfig?.static_info?.global_words?.leave_your_review }}</p>
				</CustomLink>
				<CustomLink to="https://2gis.ru/kazan/branches/70000001053847404/firm/70000001053847405/49.122043%2C55.786542/tab/reviews" target="_blank" class="hidden lg:flex flex-col gap-2 p-5 rounded-5 border border-#F6F6F6">
					<p class="text-lg lg:text-xl leading-1.2 lg:leading-1.2 font-Montserrat font-bold text-fblack [&>span]:text-primary" v-html="generalConfig?.static_info?.global_words?.['2gis_review']"></p>
					<p class="text-sm text-second leading-1.4">{{ generalConfig?.static_info?.global_words?.leave_your_review }}</p>
				</CustomLink>
				<div v-if="false" class="mt-2.5 rounded-5 bg-#EFEFEF h-106"></div>
			</div>
		</div>
		<slot></slot>
	</div>
</template>
<script setup lang="ts">
import type { PageType } from '~/types/fetch/shared';
import type { TimetableInfo } from '~/types/fetch/timetable';

const props = defineProps({
	timetable: { type: Boolean, default: false },
	type: { type: String as PropType<PageType> }
})
const date = ref()
const route = useRoute()

if (props.type === 'timetable') date.value = route.path.slice(-10)

defineOptions({
	inheritAttrs: false
})

const banners = computed(() => {
	return generalConfig?.value?.banners?.filter(a => a.is_active === true)
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const localePath = useLocalePath()
const dayjs = useDayjs()
watch(date, async () => {
	if (props.type === 'timetable') return await navigateTo(localePath(`/excursion/timetable/${dayjs(date.value).tz('Europe/Moscow').format('YYYY/MM/DD')}`))
})

const { data: timetableData, execute, status } = await useBaseFetch<TimetableInfo[]>(() => `products/timetable-date-info?date=${dayjs(date.value).tz('Europe/Moscow').format('YYYY/MM/DD')}`, {
	watch: [date]
})

const timitableVisible = computed(() => {
	if (props.type === 'timetable' || route.path === localePath('/excursions/regulyarnyye') || route.path === localePath('/excursions')) return true
	return false
})
const { reachGoal } = useYandexMetrika()
</script>