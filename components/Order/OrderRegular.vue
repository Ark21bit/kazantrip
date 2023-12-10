<template>
    <slot :openModal="openModal"></slot>
    <Modal v-bind="$attrs" @close="closeModal" class="flex flex-col gap-6" :is-show="isModalShow">
        <div class="flex flex-col gap-3 mt-1 lg:mt-0">
            <h2 class="text-5.5 lg:text-6.5 font-Montserrat font-bold leading-1.2 lg:leading-1.2 text-fblack">Бронирование места</h2>
            <p class="text-sm lg:text-base font-medium leading-1.4 lg:leading-1.4 text-primary">{{ product?.lang_info?.title }}</p>
        </div>
        <FormKit @submit="setOrder" v-model="forms" type="form" form-class="flex flex-col gap-5 lg:gap-6 lg:mt-1" :actions="false">
            <div class="flex flex-col gap-4.5 lg:gap-5">
                <p class="text-base font-semibold text-fblack leading-1.2 max-lg:hidden font-Montserrat">{{ generalConfig?.static_info?.global_words?.select_datetime }}</p>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4.5">
                    <FormKit name="date" validation="required" type="datepickerC" :allowedDates="availableSelectDate" :minDate="$dayjs().toDate()" :placeholder="generalConfig?.static_info?.global_words?.date"></FormKit>
                    <FormKit :disabled="!forms?.date" name="time" validation="required" type="selectC" :options="timeatableTimes" :placeholder="generalConfig?.static_info?.global_words?.time"></FormKit>
                </div>
                <p v-if="forms?.date && forms?.time" class="lg:mt-1 text-base font-semibold text-fblack leading-1.2 [&>span]:text-primary">
                    <span>{{ $dayjs(forms?.date).tz('Europe/Moscow').locale(locale).format('LL') }}</span>
                    на
                    <span>{{ forms?.time?.label }}</span>
                </p>
            </div>
            <div class="h-px w-[calc(100%+40px)] lg:w-[calc(100%+60px)] -translate-x-20px lg:-translate-x-30px bg-#EBEBEB"></div>
            <div class="flex flex-col lg:flex-row gap-x-4.5 gap-y-5">
                <div class="flex flex-col gap-4 lg:gap-5 grow">
                    <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">Выберите тип билета</h4>
                    <FormKit name="tickets" type="list">
                        <TicketsTable :tickets="product?.info_prices?.data"></TicketsTable>
                    </FormKit>
                </div>
                <div class="flex flex-col gap-4 lg:gap-5" v-if="product?.info_additional_products?.data?.length ?? 0 > 0">
                    <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.additional_service }}</h4>
                    <FormKit name="additional" type="list">
                        <AdditionalsTable :tickets="product?.info_additional_products?.data"></AdditionalsTable>
                    </FormKit>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.sale_coupon }}</h4>
                <div class="flex flex-col lg:flex-row gap-x-5.5 gap-y-4 lg:items-end">
                    <FormKit type="group" name="coupon">
                        <FormKit type="text" name="text" :placeholder="generalConfig?.static_info?.global_words?.sale_coupon" outer-class="grow"></FormKit>
                        <FormKit type="meta" name="id" :value="couponData?.data?.id"></FormKit>
                        <FormKit type="meta" name="sale_percent" :value="couponData?.data?.sale_percent"></FormKit>
                    </FormKit>
                    <Button :loading="couponStatus == 'pending'" :disabled="couponStatus == 'pending' || !Boolean(forms?.coupon?.text)" @click="couponExecute" type="button" class="lg:w-49" variant="outline">{{ generalConfig?.static_info?.global_words?.check }}</Button>
                </div>
                <p class="text-sm text-fblack leading-1.1" v-if="couponData">{{ couponText }}</p>
            </div>
            <div class="flex bg-#3BA1A5 w-[calc(100%+40px)] lg:w-[calc(100%+60px)] -translate-x-20px lg:-translate-x-30px px-20px lg:px-30px py-3 text-lg font-semibold leading-1.2 text-white mt-2.5 lg:mt-4">
                <span class="w-60">Итого</span>
                {{ totalPriceTickets }}₽
            </div>
            <div class="flex flex-col gap-4 lg:gap-6 max-lg:mt-2.5">
                <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.person_data_contract }}</h4>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5">
                    <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" />
                    <FormKit name="place_start_id" validation="required:trim" type="selectC" :options="TitlePlacesStart" :validation-label="generalConfig?.static_info?.global_words?.starting_point" :placeholder="generalConfig?.static_info?.global_words?.starting_point"></FormKit>
                    <FormKit name="client_telephone" validation="required:trim" type="tel" v-maska data-maska="+7(###)###-##-##" :validation-label="generalConfig?.static_info?.global_words?.telephone" :placeholder="generalConfig?.static_info?.global_words?.telephone" />
                    <FormKit name="payment_type_id" validation="required" type="selectC" :options="paymentTypes" :validation-label="generalConfig?.static_info?.global_words?.type_payment" :placeholder="generalConfig?.static_info?.global_words?.type_payment" />
                    <FormKit name="client_email" validation="email|required|length:0,32" type="email" :validation-label="generalConfig?.static_info?.global_words?.email" :placeholder="generalConfig?.static_info?.global_words?.email" />
                    <div class="flex flex-col gap-4 col-span-full">
                        <FormKit validation="accepted" type="checkbox" :label="generalConfig?.static_info?.global_words?.order_confirm_procedure_provision_excursion_services" />
                        <FormKit validation="accepted" type="checkbox" :label="generalConfig?.static_info?.global_words?.order_fz_confirm_text" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-3 lg:justify-between mt-2.5 lg:mt-1.5">
                <Button class="w-full lg:w-49">{{ generalConfig?.static_info?.global_words?.reservation }}</Button>
                <Button @click="closeModal" class="w-full lg:w-49" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
            </div>
            <FormKit type="meta" name="title" :value="product?.lang_info?.title"></FormKit>
            <FormKit type="meta" name="type_id" :value="product?.type_id"></FormKit>
            <FormKit type="meta" name="product_id" :value="product?.id"></FormKit>
        </FormKit>
    </Modal>
</template>
<script setup>
defineOptions({
    inheritAttrs: false,
})
const props = defineProps({
    product: Object
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { locale } = useI18n()
const { setOrder } = useOrderStore()

const forms = ref()

const { data: couponData, error: couponError, execute: couponExecute, status: couponStatus } = useBaseFetch('orders/check-coupon', {
    immediate: false,
    onRequest({ options }) {
        options.query = { coupon: forms.value?.coupon?.text?.trim() }
    },
    key: 'coupon',
    ignoreResponseError: true
})
watchEffect(() => {
    if (couponError.value) return useToast().add({
        title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
        messages: couponError.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
        severity: 'error'
    })
})
const couponText = computedEager(() => couponData.value?.status ? `${generalConfig.value?.static_info?.global_words?.sale} ${couponData.value?.message}` : couponData.value?.message)

const dayjs = useDayjs()

const timeatableTimes = computedWithControl(() => forms.value?.date, () =>
    filterMap(props.product?.info_timetables?.data,
        timetable => dayjs(timetable?.start_event_at).tz('Europe/Moscow').isSame(dayjs(forms.value?.date ?? null).tz('Europe/Moscow'), 'day'),
        timetable => { return { value: { id: timetable?.id, label: timetable?.start_event_at_format_time }, label: timetable?.start_event_at_format_time } }
    )
)
watch(timeatableTimes, () => forms.value.time = timeatableTimes.value?.find(() => true)?.value)

const totalPriceTickets = computed(() => forms.value?.tickets?.reduce((a, b) => a + Number(b?.count) * Number(b?.price), 0))

let availableSelectDate = computed(() => {
    const uniqueDate = new Set()
    props?.product?.info_timetables?.data?.forEach(a => {
        uniqueDate.add(a?.start_event_at)
    })
    return [...uniqueDate]
})

const paymentTypes = computed(() =>
    props.product?.payment_types?.map(paymentType => { return { label: getTitlePaymentTypes(paymentType), value: paymentType } }) ?? []
)

const TitlePlacesStart = computed(() =>
    props.product?.start_place_types?.map(TitlePlaceStart => ({ label: getTitlePlacesStart(TitlePlaceStart), value: TitlePlaceStart })) ?? []
)

const { closeModal, isModalShow, openModal } = useModal()
</script>