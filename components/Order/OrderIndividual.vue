<template>
    <FormKit @submit="setOrder" v-model="forms" type="form" form-class="flex flex-col gap-5 lg:gap-6 lg:mt-1" :actions="false">
        <p class="text-sm lg:text-base font-medium leading-1.4 lg:leading-1.4 text-primary mt-1 lg:mt-0">{{ product?.lang_info?.title }}</p>
        <div class="flex flex-col gap-4.5 lg:gap-5">
            <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.select_datetime }}</h4>
            <FormKit name="date" validation="required" type="datepickerC" :minDate="$dayjs().toDate()" :placeholder="generalConfig?.static_info?.global_words?.date"></FormKit>
        </div>
        <div v-if="product?.info_additional_products?.data?.length ?? 0 > 0" class="flex flex-col gap-5">
            <FormKit name="additional" type="list">
                <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.additional_service }}</h4>
                <AdditionalsTable :tickets="product?.info_additional_products?.data"></AdditionalsTable>
            </FormKit>
        </div>
        <div class="flex flex-col gap-4.5 lg:gap-5">
            <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.comment_for_order }}</h4>
            <FormKit name="comment_client" validation="length:0,2000" type="textarea" :validation-label="generalConfig?.static_info?.global_words?.comment_for_order"></FormKit>
        </div>
        <div class="flex flex-col gap-4 lg:gap-6 max-lg:mt-2.5">
            <h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.person_data_contract }}</h4>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4.5">
                <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" />
                <FormKit name="type_price_id" validation="required:trim" type="selectC" :options="typePrices" :validation-label="generalConfig?.static_info?.global_words?.count_people" :placeholder="generalConfig?.static_info?.global_words?.count_people"></FormKit>
                <FormKit name="client_telephone" validation="required:trim" type="tel" v-maska data-maska="+7(###)###-##-##" :validation-label="generalConfig?.static_info?.global_words?.telephone" :placeholder="generalConfig?.static_info?.global_words?.telephone" />
                <FormKit name="payment_type_id" validation="required" type="selectC" :options="paymentTypes" :validation-label="generalConfig?.static_info?.global_words?.type_payment" :placeholder="generalConfig?.static_info?.global_words?.type_payment" />
                <FormKit name="client_email" validation="email|required|length:0,32" type="email" :validation-label="generalConfig?.static_info?.global_words?.email" :placeholder="generalConfig?.static_info?.global_words?.email" />
                <div class="flex flex-col gap-4 col-span-full">
                    <FormKit :validation-messages="{ accepted: String(generalConfig?.static_info?.global_words?.confirm_excursion_info) }" validation="accepted" type="checkbox" label-class="[&_a]:text-primary [&_a]:hover:text-#21747C">
                        <template #label="{ classes }">
                            <span :class="classes.label" v-html="generalConfig?.static_info?.global_words?.order_confirm_procedure_provision_excursion_services"></span>
                        </template>
                    </FormKit>
                    <FormKit :validation-messages="{ accepted: String(generalConfig?.static_info?.global_words?.confirm_personal_data) }" validation="accepted" type="checkbox" label-class="[&_a]:text-primary [&_a]:hover:text-#21747C">
                        <template #label="{ classes }">
                            <span :class="classes.label" v-html="generalConfig?.static_info?.global_words?.order_fz_confirm_text"></span>
                        </template>
                    </FormKit>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-3 lg:justify-between mt-2.5 lg:mt-1.5">
            <Button @click="emit('close')" class="w-full lg:w-49" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
            <Button class="w-full lg:w-49">{{ generalConfig?.static_info?.global_words?.reservation }}</Button>
        </div>
        <FormKit type="meta" name="title" :value="product?.lang_info?.title"></FormKit>
        <FormKit type="meta" name="price" :value="product?.price_see"></FormKit>
        <FormKit type="meta" name="type_id" :value="product?.type_id"></FormKit>
        <FormKit type="meta" name="product_id" :value="product?.id"></FormKit>
    </FormKit>
</template>
<script setup lang="ts">
import type { IndividualEData } from '~/types/fetch/pathMatch/individualE';
const props = defineProps({
    product: Object as PropType<IndividualEData>
})
const emit = defineEmits(['close'])
const forms = ref()

const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { setOrder } = useOrderStore()

const paymentTypes = computed(() =>
    props.product?.payment_types?.map(paymentType => { return { label: getTitlePaymentTypes(paymentType), value: paymentType } }) ?? []
)

const typePrices = computed(() =>
    props.product?.info_prices?.data?.map(infoPrice => { return { label: getTitleInfoPrices(infoPrice?.type_price_id), value: infoPrice?.type_price_id } }) ?? []
)
</script>