<template>
	<SliderOne :imgs="pageInfo?.media_gallery?.data" class="col-span-full h-100 lg:h-150"></SliderOne>
	<Breadcrumbs :links="pageInfo?.info_breadcrumbs?.data" class="max-lg:hidden mt-7.5"></Breadcrumbs>
	<div class="col-span-full mt-7.5 lg:mt-10 pb-7.5 border-b border-#EBEBEB">
		<PageTextBlock class="wrapper" :title="pageInfo?.lang_info?.title" :text="pageInfo?.lang_info?.text" />
	</div>
	<div v-if="pageInfo?.url_panorama" class="mt-7.5 lg:mt-15 flex gap-5 flex-wrap">
		<Button v-if="pageInfo?.url_panorama" target="_blank" :tag="CustomLink" :to="pageInfo?.url_panorama" class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
			<template #prefix>
				<span class="text-2xl i-custom:panorama"></span>
			</template>
			{{ generalConfig?.static_info?.global_words?.circular_photo_panorama }}
		</Button>
		<Button v-if="false" class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
			<template #prefix>
				<span class="text-2xl i-custom:video"></span>
			</template>
			{{ generalConfig?.static_info?.global_words?.video_reviews_ou_tourists }}
		</Button>
		<Button v-if="false" class="!px-8 max-lg:(px-6 justify-center w-full)" variant="outline">
			<template #prefix>
				<span class="text-2xl i-custom:audio"></span>
			</template>
			{{ generalConfig?.static_info?.global_words?.brief_audio_tour }}
		</Button>
	</div>
	<div class="mt-7.5">
		<div class="grid lg:grid-cols-[1fr_1.03fr_1fr] rounded-5 ring-(inset 1 #F6F6F6) shadow-base">
			<div class="p-5 lg:p-6 max-lg:border-b lg:border-r border-#EBEBEB flex flex-col justify-center gap-1.5">
				<FormKit type="selectC" v-model="date" :options="dateOptions" :placeholder="generalConfig?.static_info.global_words.select_date"></FormKit>
			</div>
			<div class="flex max-lg:flex-wrap gap-4 lg:gap-10 p-5 lg:p-6 max-lg:border-b lg:border-r border-#EBEBEB">
				<div class="flex flex-col justify-center gap-1.5">
					<p class="text-sm leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.price_list }}</p>
					<p class="flex items-end gap-1.5 text-2xl font-semibold leading-1.2 text-primary">
						{{ pageInfo?.price_see }}₽
						<span class="leading-1.2 text-#A4A4A4 text-sm line-through decoration-fblack mb-1" v-if="pageInfo?.price_see_old">{{ pageInfo?.price_see_old }}₽</span>
						<Tooltip class="self-center">
							<NuxtLink to="#prices" class="hover:underline">{{ generalConfig?.static_info.global_words.have_sales ?? 'Есть скидки' }}</NuxtLink>
						</Tooltip>
					</p>
					<p v-if="generalConfig?.static_info.global_words?.sale_price_additional_text" class="text-3 leading-1.2 text-#A4A4A4 ">{{ generalConfig?.static_info.global_words?.sale_price_additional_text }}</p>
				</div>
				<div v-if="props.pageInfo?.sale_end_at" class="flex flex-col gap-2 text-#DC3333">
					<p class="font-500 text-3.5 leading-1.2">Горящее предложение:</p>
					<div class="flex items-center gap-2">
						<span class="bg-#DC3333/10 rounded-full font-500 text-3.75 leading-1.2 flex items-center justify-center size-7.5 border-#DC3333/10 border">{{ timerString.days.toString().padStart(2, "0") }}</span>дн.
						<span class="bg-#DC3333/10 rounded-full font-500 text-3.75 leading-1.2 flex items-center justify-center size-7.5 border-#DC3333/10 border">{{ timerString.hours.toString().padStart(2, "0") }}</span>ч.
						<span class="bg-#DC3333/10 rounded-full font-500 text-3.75 leading-1.2 flex items-center justify-center size-7.5 border-#DC3333/10 border">{{ timerString.minutes.toString().padStart(2, "0") }}</span>мин.
					</div>
				</div>
			</div>
			<div class="p-5 py-6 lg:p-6 flex justify-center items-center gap-3 lg:gap-4">
				<Button @click="openModal(), reachGoal('acquire')" class="grow">{{ generalConfig?.static_info?.global_words?.order }}</Button>
				<CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp" class="hover:text-#39919A transition-colors flex p-2.5 bg-primary rounded-2">
					<span class="text-6.25 lg:text-3xl i-custom:whatsapp text-white"></span>
				</CustomLink>
			</div>
		</div>
		<!-- <p class="text-base lg:text-lg leading-1.2 lg:leading-1.2 font-medium text-fblack mt-3 text-center">{{ generalConfig?.static_info?.global_words?.no_prepayment_required }}</p> -->
	</div>
	<div class="mt-15 lg:mt-22">
		<div class="flex flex-col lg:flex-row gap-4 justify-between">
			<h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.general_description }}</h2>
			<div v-if="pageInfo?.info_partners_blocks?.data?.length ?? 0 > 0" class="flex gap-1.5 items-center flex-wrap">
				<p class="mr-1"> {{ generalConfig?.static_info?.global_words?.partner }}:</p>
				<CustomLink v-for="item in pageInfo?.info_partners_blocks?.data" target="_blank" :to="item?.lang_info?.url" class="flex ring-(1 inset primary) text-primary py-2 px-4 rounded-full text-sm leading-1.2">{{ item?.lang_info?.title }}</CustomLink>
			</div>
		</div>
		<div class="mt-5 lg:mt-7.5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
			<div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
				<div class="inline-flex text-base lg:text-xl bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg ">
					<span class="i-custom:calendar"></span>
				</div>
				<p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.nearest_date }}</p>
				<p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ nearestDate }}</p>
			</div>
			<div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
				<div class="inline-flex text-base lg:text-xl bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg">
					<span class="i-custom:time"></span>
				</div>
				<p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.duration }}</p>
				<p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ pageInfo?.duration_event_text }}</p>
			</div>
			<div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
				<div class="inline-flex text-base lg:text-xl bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg">
					<span class="i-custom:trail"></span>
				</div>
				<p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.type_excursion }}</p>
				<p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl">{{ getTitleCategoriesProduct(pageInfo?.category_id) }}</p>
			</div>
			<div class="ring-(inset 1 #F6F6F6) rounded-5 py-4 px-3 lg:p-5 bg-white shadow-base">
				<div class="inline-flex text-base lg:text-xl bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg">
					<span :class="pageInfo?.is_radio_gid ? 'i-custom:radiogid' : 'i-custom:megaphone'"></span>
				</div>
				<p class="mt-3 lg:mt-6 text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4"> {{ generalConfig?.static_info?.global_words?.radio_guide }}</p>
				<p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-base lg:text-2xl break-words"> {{ pageInfo?.is_radio_gid ? generalConfig?.static_info?.global_words?.yes_free : generalConfig?.static_info?.global_words?.guide_loudspeaker }}</p>
			</div>
			<div class="ring-(inset 1 #F6F6F6) rounded-5 bg-white shadow-base col-span-full" :class="Number(pageInfo?.start_place_types?.length) > 3 ? '' : 'lg:col-span-[3]'">
				<div class="p-4 pb-3 lg:p-5 flex gap-2.5 lg:gap-3.75 items-center">
					<div class="inline-flex text-base lg:text-xl bg-#E2F1F2 text-primary p-2 lg:p-2.5 rounded-lg">
						<span class="i-custom:map"></span>
					</div>
					<p class="text-second text-xs lg:text-sm leading-1.4 lg:leading-1.4">{{ generalConfig?.static_info?.global_words?.departure }}</p>
				</div>
				<div class="flex flex-col lg:flex-row flex-wrap">
					<div v-for="item in PlacesStart" class="flex flex-col w-full lg:w-1/4 grow py-3 lg:py-5 p-5 border-t lg:border-r lg:[&:nth-child(4)]:border-r-none lg:last:border-r-none border-#EBEBEB items-start">
						<p class="mt-1.5 lg:mt-.75 font-semibold text-fblack leading-1.2 lg:leading-1.2 text-sm sm:text-base lg:text-xl">{{ item?.title }}</p>
						<CustomLink v-if="item?.href" :to="item?.href" target="_blank" class="flex items-center hover:text-primary transition-colors text-fblack leading-1.2 text-sm">
							<span class="text-6 text-primary i-healthicons:geo-location"></span>
							{{ generalConfig?.static_info?.global_words?.on_map }}
						</CustomLink>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative mt-10 lg:mt-25 col-span-full pt-23.5 lg:pt-26 pb-20 lg:pb-33.75 overflow-hidden">
		<div class="flex justify-end absolute w-full h-full top-0 left-0">
			<div class="shrink-0 w-full h-full animation-waves bg-[url(/imgs/trailMBg.svg)] lg:bg-[url(/imgs/trailBg.svg)] bg-[length:100%_100%]"></div>
			<div class="shrink-0 w-full h-full animation-waves bg-[url(/imgs/trailMBg.svg)] lg:bg-[url(/imgs/trailBg.svg)] bg-[length:100%_100%]"></div>
		</div>
		<div class="wrapper">
			<h2 class="max-lg:hidden text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat"> {{ generalConfig?.static_info?.global_words?.route }}</h2>
			<SliderTrail :trails="pageInfo?.info_route_blocks?.data" class="mt-5 lg:mt-16" />
		</div>
	</div>
	<div class="mt-10 lg:mt-17.5" id="prices">
		<h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.all_price }}</h2>
		<div class="grid relative grid-cols-[repeat(auto-fit,minmax(122px,1fr))] mt-5 lg:mt-7.5 p-3.75 py-5 lg:px-5 lg:py-6 gap-y-5 gap-4 lg:gap-5 bg-#E2F1F2 rounded-5">
			<div @click="openModal" v-for="ticket in sortTickets" class="flex flex-col gap-1.5 lg:gap-2 p-4 lg:p-5 rounded-5 ring-(1 inset #F6F6F6) font-semibold bg-white cursor-pointer">
				<p class="text-fblack text-sm lg:text-base leading-1.4 lg:leading-1.4">{{ getTitleTypeTicket(ticket?.type_ticket_id) }}</p>
				<div class="flex max-lg:flex-col gap-col-2 lg:items-end">
					<p class="text-primary text-2xl lg:text-8 leading-1.25 lg:leading-1.25 flex flex-col lg:flex-row gap-x-1.5 mt-auto">{{ ticket?.price }}₽</p>
					<p v-if="pageInfo?.price_see_old" class="text-#a4a4a4 text-3.5 leading-1.2 font-600 line-through lg:mb-2.5">{{ pageInfo?.price_see_old }}₽</p>
				</div>
			</div>
			<div class="absolute max-lg:-translate-1/2 top-0 lg:-top-4 lg:-translate-y-full left-16% rounded-full w-2 aspect-square bg-#F7C03F"></div>
			<div class="absolute top-12.75 lg:top-0 left-0 lg:left-full -translate-1/2 rounded-full aspect-square w-3.75 lg:w-9.75 bg-primary"></div>
			<div class="absolute top-5 lg:top-6 left-1/2 lg:left-6 -translate-1/2 rounded-full aspect-square w-3.2 lg:w-6 bg-primary max-lg:hidden"></div>
			<div class="absolute top-full lg:top-1.5 left-full lg:left-3/5 lg:translate-1/2 rounded-full aspect-square w-3 lg:w-5 bg-#F7C03F"></div>
			<div class="absolute top-full lg:top-8/9 left-0 lg:left-2/5 translate-1/2 rounded-full aspect-square w-3.5 lg:w-4 bg-#F7C03F"></div>
			<div class="absolute bottom-0 lg:-bottom-6.75 translate-y-1/2 lg:translate-y-full left-60% lg:left-2.5 rounded-full w-3.5 lg:w-5.75 aspect-square bg-primary"></div>
			<div class="max-lg:hidden absolute -bottom-5 translate-y-full right-22% rounded-full w-3.5 aspect-square bg-#F7C03F"></div>
		</div>
		<p v-if="pageInfo?.lang_info?.mini_description" class="text-second text-base leading-1.4 mt-6 lg:mt-16">{{ pageInfo?.lang_info?.mini_description }}</p>
	</div>
	<div class="mt-15 lg:mt-25">
		<h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.included_in_the_price }}</h2>
		<ul class="mt-5 lg:mt-7.5 grid lg:grid-cols-4 gap-4 lg:gap-5 text-base lg:text-lg leading-1.2 lg:leading-1.2 font-medium text-#333 ">
			<li v-for="item in pageInfo?.lang_info?.half_text" class="flex gap-2.5 items-start before:(aspect-square shrink-0 bg-primary mt-0.6em -translate-y-1/2 content-empty w-2.5 rounded-full)">{{ item }}</li>
		</ul>
	</div>
	<div class="rounded-5 bg-#E2F1F2/70 p-5 lg:p-7.5 mt-15 lg:mt-25">
		<OrderRegular theme="green" :product="pageInfo"></OrderRegular>
	</div>
	<SliderPurple class="mt-15 lg:mt-25" :title="pageInfo?.lang_info?.title"></SliderPurple>
	<div v-if="pageInfo?.info_seo_blocks?.data?.length ?? 0 > 0" class="mt-15 lg:mt-25 col-span-full pb-7.5 border-b border-#EBEBEB">
		<SeoBlock :data="pageInfo?.info_seo_blocks?.data" class="wrapper"></SeoBlock>
	</div>
	<Reviews id="reviews" :reviews="pageInfo?.info_reviews?.data" :product-id="pageInfo?.id" :product-title="pageInfo?.lang_info?.title" class="mt-15 lg:mt-25"></Reviews>
	<div v-if="pageInfo?.info_recommendations?.data?.length ?? 0 > 0" class="mt-15 lg:mt-25">
		<h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat"> {{ generalConfig?.static_info?.global_words?.similar_excursions }}</h2>
		<SliderRecomendations :data="pageInfo?.info_recommendations?.data" class="mt-5 lg:mt-10" />
	</div>
	<Modal @close="closeModal" :is-show="isModalShow">
		<OrderRegular :defaultDate="date" @close="closeModal" :product="pageInfo" />
	</Modal>
</template>

<script setup lang="ts">
import CustomLink from '~/components/atoms/CustomLink.vue';
import type { RegularEData } from '~/types/fetch/pathMatch/regularE';
import type { PageType } from '~/types/fetch/shared';
const props = defineProps({
	pageInfo: Object as PropType<RegularEData>,
	type: String as PropType<PageType>
})

const { locale } = useI18n()
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const dayjs = useDayjs()
const nearestDate = computed(() => {
	if (props.pageInfo?.info_timetables?.data?.length ?? 0 > 0) return dayjs(props.pageInfo?.info_timetables?.data?.[0]?.start_event_at ?? null).tz('Europe/Moscow').locale(locale.value).format('D MMMM')
	return '-'
})

const { closeModal, isModalShow, openModal } = useModal()

const PlacesStart = computed(() => props.pageInfo?.start_place_types?.map(a => getPlacesStart(a)))

const sortTickets = computed(() => {
	const array = [...props.pageInfo?.info_prices?.data ?? []]
	return array?.sort((a, b) => Number(generalConfig.value?.static_info?.ticket_sort?.indexOf(a?.type_ticket_id)) - Number(generalConfig.value?.static_info?.ticket_sort?.indexOf(b?.type_ticket_id)))
})

const { reachGoal } = useYandexMetrika()
const dateOptions = computed(() => {
	return props.pageInfo?.info_timetables.data.map(a => ({ label: dayjs(a.start_event_at).tz('Europe/Moscow').locale(locale.value).format('DD MMMM HH:mm'), value: a }))
})
const date = ref(dateOptions.value?.find(() => true)?.value)

const timer = ref(0)
if (props.pageInfo?.sale_end_at) {
	timer.value = dayjs(props.pageInfo?.sale_end_at).tz('Europe/Moscow').diff(dayjs(new Date()).tz('Europe/Moscow'), 'minute')
}

const timerString = computed(() => {
	return {
		days: Math.floor(timer.value / (60 * 24)),
		hours: Math.floor((timer.value % (60 * 24)) / 60),
		minutes: Math.floor(timer.value % 60)
	}
})

onMounted(() => {
	if (props.pageInfo?.sale_end_at) {
		setInterval(() => {
			timer.value = Math.max(timer.value - 1, 0)
		}, 1000 * 60)
	}
})
</script>