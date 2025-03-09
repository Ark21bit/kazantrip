<template>
	<FormKit @submit="formSubmit" v-model="forms" type="form" form-class="flex flex-col gap-5 lg:gap-3 3xl:gap-6 lg:mt-1" :actions="false">
		<div class="flex flex-col gap-3 mt-1 lg:mt-0">
			<h2 class="text-5.5 lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2 text-fblack">
				{{ generalConfig?.static_info?.global_words?.reservation_a_place }}
				<span class="text-primary">{{ $dayjs(day).tz('Europe/Moscow').locale(locale).format('DD MMMM YYYY') }}</span>
			</h2>
		</div>
		<p class="text-base font-semibold text-fblack leading-1.2 max-lg:hidden font-Montserrat">{{ generalConfig?.static_info?.global_words?.select_datetime }}</p>
		<div class="flex flex-col gap-5 lg:gap-4">
			<div class="flex items-center gap-3">
				<button class="swiper-button-prev-modal i-custom:arrow text-7.25 text-fblack disabled:opacity-50 shrink-0"></button>
				<Swiper v-bind="optionsSwiper" @active-index-change="(i) => selectTimetableProduct = availableSelectTimetable?.[i.activeIndex]" class="grow">
					<SwiperSlide v-for="item in availableSelectTimetable" class="h-auto">
						<div @click="selectTimetableProduct = item" :class="{ active: selectTimetableProduct?.product_id === item.product_id }"
							class="cursor-pointer h-full flex items-center rounded-2 bg-#e2f1f2 text-3.5 lg:text-4 font-600 leading-1.2 text-fblack py-3 px-5 hover:(bg-primary text-white) [&.active]:(bg-primary text-white) transition-colors">
							{{ item.name }}
						</div>
					</SwiperSlide>
				</Swiper>
				<button class="swiper-button-next-modal i-custom:arrow text-7.25 rotate-180 text-fblack disabled:opacity-50 shrink-0"></button>
			</div>
			<div class="flex flex-col gap-5.5 lg:mx-10.25">
				<div class="h-px w-[calc(100%+40px)] -translate-x-20px px-20px lg:(w-[calc(100%+30px)] -translate-x-15px px-15px) 3xl:(w-[calc(100%+60px)] -translate-x-30px px-30px) bg-#EBEBEB lg:hidden"></div>
				<!-- <FormKit :disabled="!forms?.date" name="time" validation="required" type="selectC" :options="timeatableTimes" :validation-label="generalConfig?.static_info?.global_words?.time" :placeholder="generalConfig?.static_info?.global_words?.time" /> -->
				<FormKit v-show="productStatus !== 'pending'" name="time" validation="required" type="toggleButtons" :options="timeatableTimes" :validation-label="generalConfig?.static_info?.global_words?.time" innerClass="bg-transparent" />
				<span v-if="productStatus === 'pending'" class="text-5xl text-primary m-auto i-eos-icons:loading"></span>
			</div>
		</div>
		<div class="h-px w-[calc(100%+40px)] -translate-x-20px px-20px lg:(w-[calc(100%+30px)] -translate-x-15px px-15px) 3xl:(w-[calc(100%+60px)] -translate-x-30px px-30px) bg-#EBEBEB"></div>
		<div class="flex flex-col lg:flex-row gap-x-4.5 gap-y-5">
			<div class="flex flex-col gap-4.5 lg:gap-3 3xl:gap-5 flex-1">
				<h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.select_type_ticket }}</h4>
				<FormKit name="tickets" type="list" :validation="`counterGMin:1|children|*counterGMax:${maxCountTickets}`"
					:validation-messages="{ children: generalConfig?.static_info?.global_words?.no_only_children, counterGMin: generalConfig?.static_info?.global_words?.need_select_min_one_ticket, counterGMax: generalConfig?.static_info?.global_words?.not_enough_tickets }">
					<TicketsTable class="bg-white" :oldPrice="product?.price_see_old" :tickets="sortPrices" :loading="statusPrices === 'pending'"></TicketsTable>
					<div>
						<p v-if="forms?.time && remainingTickets < 10" class="flex gap-1 -mt-2 flex-wrap justify-between text-base leading-1.2 text-fblack">{{ generalConfig?.static_info?.global_words?.tickets_left?.replace("%s", remainingTickets) }}</p>
						<FormKitMessages />
					</div>
				</FormKit>
			</div>
			<div class="flex flex-col gap-4.5 lg:gap-3 3xl:gap-5 flex-1" v-if="product?.info_additional_products?.data?.length ?? 0 > 0">
				<h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.additional_service }}</h4>
				<FormKit name="additional" type="list">
					<AdditionalsTable class="bg-white" :tickets="product?.info_additional_products?.data"></AdditionalsTable>
				</FormKit>
				<!-- <p v-if="product?.info_additional_products?.data?.some(a => a?.addition_info?.id === 2)" class="text-sm text-fblack leading-1.2 font-italic -mt-4">с 13 мая стоимость обеда 500 руб</p> -->
			</div>
		</div>
		<FormKitCoupon />
		<div class="flex bg-#3BA1A5 w-[calc(100%+40px)] -translate-x-20px px-20px lg:(w-[calc(100%+30px)] -translate-x-15px px-15px) 3xl:(w-[calc(100%+60px)] -translate-x-30px px-30px  mt-4) py-3 text-lg font-semibold leading-1.2 text-white mt-2.5">
			<span class="w-60">{{ generalConfig?.static_info?.global_words?.total }}</span>
			<span class="mr-1.5 text-sm text-#88BDC2 line-through decoration-white" v-if="forms?.coupon?.sale_percent">{{ totalPrice }}₽</span>
			<span class="text-fred">{{ totalSalePrice }}</span>₽
		</div>
		<div class="flex flex-col gap-4 lg:gap-3 3xl:gap-5 max-lg:mt-2.5">
			<h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.person_data_contract }}</h4>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 3xl:gap-5">
				<FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" />
				<FormKit name="place_start_id" validation="required:trim" type="selectC" :options="TitlePlacesStart" :validation-label="generalConfig?.static_info?.global_words?.starting_point" :placeholder="generalConfig?.static_info?.global_words?.starting_point"></FormKit>
				<FormKit name="client_telephone" type="selectTel" :validation="getPhoneValidation()" :validation-label="generalConfig?.static_info?.global_words?.telephone" />
				<FormKit name="payment_type_id" validation="required" type="selectC" :options="paymentTypes" :validation-label="generalConfig?.static_info?.global_words?.type_payment" :placeholder="generalConfig?.static_info?.global_words?.type_payment" />
				<FormKit name="client_email" validation="email|required|length:0,64" type="email" :validation-label="generalConfig?.static_info?.global_words?.email" :placeholder="generalConfig?.static_info?.global_words?.email" />
				<div class="flex flex-col gap-4 lg:gap-2 3xl:gap-4 col-span-full">
					<FormKit :validation-messages="{ accepted: String(generalConfig?.static_info?.global_words?.confirm_excursion_info) }" validation="accepted" type="checkbox" inner-class="bg-transparent" label-class="[&_a]:text-primary [&_a]:hover:text-#21747C">
						<template #label="{ classes }">
							<span :class="classes.label" v-html="generalConfig?.static_info?.global_words?.order_confirm_procedure_provision_excursion_services"></span>
						</template>
					</FormKit>
					<FormKit :validation-messages="{ accepted: String(generalConfig?.static_info?.global_words?.confirm_personal_data) }" validation="accepted" type="checkbox" inner-class="bg-transparent" label-class="[&_a]:text-primary [&_a]:hover:text-#21747C">
						<template #label="{ classes }">
							<span :class="classes.label" v-html="generalConfig?.static_info?.global_words?.order_fz_confirm_text"></span>
						</template>
					</FormKit>
				</div>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row gap-3 lg:gap-2 3xl:gap-3 lg:justify-between mt-2.5 lg:mt-0 3xl:mt-1.5">
			<Button @click="emit('close')" class="w-full lg:w-49 max-lg:py-2.5" color="green-faded" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
			<Button class="w-full lg:w-49 max-lg:order-first">{{ generalConfig?.static_info?.global_words?.reservation }}</Button>
		</div>
	</FormKit>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel } from 'swiper/modules';
import { FormKitMessages } from '@formkit/vue'
const props = defineProps({
	timetable: Array,
	day: String
})

let availableSelectTimetable = computed(() => {
	const uniqueDate = []
	props?.timetable?.forEach((a, i) => {
		if (a.product_id !== uniqueDate?.[i - 1]?.product_id) uniqueDate.push({ url: a.url, name: a.product_name, product_id: a.product_id })
	})
	return uniqueDate
})

const selectTimetableProduct = ref()
watchEffect(() => {
	selectTimetableProduct.value = availableSelectTimetable.value?.[0]
})

const { data: productData, error, status: productStatus } = await useBaseFetch(() => `search/slugs?slug=${selectTimetableProduct.value?.url}`, {
	watch: [selectTimetableProduct]
})

const product = computed(() => productData.value?.data)
const emit = defineEmits(['close'])
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { locale } = useI18n()
const { setOrder } = useOrderStore()

const formSubmit = (form) => {
	setOrder({
		...form,
		title: product.value?.lang_info?.title,
		type_id: product.value?.type_id,
		product_id: product.value?.id,
	})
}

const forms = ref({
	time: null
})

const dayjs = useDayjs()

const timeatableTimes = computedWithControl(product, () =>
	filterMap(product.value?.info_timetables?.data,
		timetable => dayjs(timetable?.start_event_at).tz('Europe/Moscow').isSame(dayjs(props.day).tz('Europe/Moscow'), 'day'),
		timetable => { return { value: { id: timetable?.id, label: timetable?.start_event_at_format_time }, label: timetable?.start_event_at_format_time } }
	)
)
watch(timeatableTimes, () => forms.value.time = timeatableTimes.value?.find(() => true)?.value, { immediate: true })

const additionalPrice = computed(() => forms.value?.additional?.reduce((a, b) => a + b.count * b.price, 0) ?? 0)
const totalPrice = computed(() => {
	let regularSumm = forms.value?.tickets?.reduce((a, b) => a + b.count * b.price, 0) ?? 0
	return Math.round(additionalPrice.value + regularSumm)
})
const totalSalePrice = computed(() => {
	let regularSumm = 0
	let sale_percent = (100 - (forms.value?.coupon?.sale_percent ?? 0)) / 100
	forms.value?.tickets?.forEach((a) => {
		if (a.id == 10) return regularSumm = regularSumm + a.count * a.price * sale_percent
		regularSumm = regularSumm + a.count * a.price
	})
	return Math.round(additionalPrice.value + regularSumm)
})

const paymentTypes = computed(() =>
	product.value?.payment_types?.map(paymentType => { return { label: getTitlePaymentTypes(paymentType), value: paymentType } }) ?? []
)

const TitlePlacesStart = computed(() =>
	product.value?.start_place_types?.map(TitlePlaceStart => ({ label: getPlacesStart(TitlePlaceStart)?.title, value: TitlePlaceStart })) ?? []
)

const selectTimetable = computedWithControl(() => forms.value?.time, () => product.value?.info_timetables?.data?.find(a => a.id === forms.value?.time?.id))

const maxCountTickets = computed(() => selectTimetable.value?.left_count)
const selectedNumberTickets = computed(() => forms.value?.tickets?.reduce((a, b) => a + Number(b?.count), 0))
const remainingTickets = computed(() => Number(maxCountTickets.value) - Number(selectedNumberTickets.value))

const { data: prices, error: errorPrices, execute: executePrices, status: statusPrices } = useBaseFetch(() => `products/${selectTimetable.value?.id}/price-timetable`, {
	immediate: false,
	watch: false,
	key: 'products/:timetable/price-timetable'
})

const sortPrices = computed(() => {
	const array = [...prices.value?.data ?? []]
	return array?.sort((a, b) => generalConfig.value?.static_info?.ticket_sort?.indexOf(a?.type_ticket_id) - generalConfig.value?.static_info?.ticket_sort?.indexOf(b?.type_ticket_id))
})

watch(selectTimetable, async (newValue, oldValue) => {
	clearNuxtData('products/:timetable/price-timetable')
	if (newValue === undefined) return
	await executePrices()
}, { immediate: true })

const toast = useToast()
const unwatch = watch(() => forms.value?.payment_type_id, (newValue) => {
	if (newValue === 2 || newValue == null) return
	toast.add({ severity: 'info', duration: 4000, messages: 'Оплатите онлайн на сайте и тогда вам не придется приходить на экскурсию заранее' })
	unwatch()
})

if (!props?.product?.payment_types?.includes(2)) unwatch()

const optionsSwiper = {
	modules: [Navigation, Mousewheel],
	navigation: {
		nextEl: '.swiper-button-next-modal',
		prevEl: '.swiper-button-prev-modal',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
		},
		640: {
			slidesPerView: 2,
		}
	},
	mousewheel: {
		forceToAxis: true
	},
	spaceBetween: 18,
	slidesPerView: 1,
}
</script>