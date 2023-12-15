<template>
    <FormKit @submit="setOrder" v-model="forms" type="form" form-class="flex flex-col gap-6" :actions="false">
        <h2 class="text-5.5 lg:text-6.5 text-fblack leading-1.2 font-bold [&>span]:text-primary max-w-[calc(100%-27px)]">{{ product?.lang_info?.title }}</h2>
        <div class="grid grid-cols-2 gap-4 lg:gap-4.5">
            <FormKit name="product_in_certificate_id" validation="required" type="selectC" :options="products" :validation-label="generalConfig?.static_info?.global_words?.title_excursion" :placeholder="generalConfig?.static_info?.global_words?.title_excursion" outer-class="col-span-full" />
            <FormKit name="client_fio" validation="required:trim|length:3,64" type="text" :validation-label="generalConfig?.static_info?.global_words?.fio" :placeholder="generalConfig?.static_info?.global_words?.fio" outer-class="col-span-full" />
            <FormKit name="client_email" validation="email|required|length:0,32" type="email" :validation-label="generalConfig?.static_info?.global_words?.email" :placeholder="generalConfig?.static_info?.global_words?.email" />
            <FormKit name="client_telephone" validation="required:trim" type="tel" :validation-label="generalConfig?.static_info?.global_words?.telephone" :placeholder="generalConfig?.static_info?.global_words?.telephone" v-maska data-maska="+7(###)###-##-##" />
        </div>
        <div class="flex justify-between gap-3 text-xl lg:text-6.5 leading-1.2 font-semibold text-fblack max-lg:-my-1">
            <p>{{ generalConfig?.static_info?.global_words?.total }}</p>
            <p class="text-primary">{{ selectPrice ?? '-' }}₽</p>
        </div>
        <FormKit :disabled="paymentTypes?.length == 0" name="payment_type_id" validation="required" type="selectC" :options="paymentTypes" :validation-label="generalConfig?.static_info?.global_words?.type_payment" :placeholder="generalConfig?.static_info?.global_words?.type_payment" />
        <div class="flex flex-col gap-4">
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
        <div class="flex flex-col lg:flex-row gap-3 lg:justify-between">
            <Button @click="emit('close')" class="w-full lg:w-49" type="button" variant="outline">{{ generalConfig?.static_info?.global_words?.cancel }}</Button>
            <Button class="w-full lg:w-49">{{ generalConfig?.static_info?.global_words?.reservation }}</Button>
        </div>
        <FormKit type="meta" name="product_id" :value="product?.id"></FormKit>
        <FormKit type="meta" name="title" :value="product?.lang_info?.title"></FormKit>
        <FormKit type="meta" name="certificateTitle" v-model="selectSertificateTitle"></FormKit>
        <FormKit type="meta" name="price" v-model="selectPrice"></FormKit>
        <FormKit type="meta" name="type_id" :value="product?.type_id"></FormKit>
    </FormKit>
</template>

<script setup lang="ts">
import type { CertificateData } from '~/types/fetch/pathMatch/certificate';
const emit = defineEmits(['close'])
const props = defineProps({
    product: Object as PropType<CertificateData>,
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { setOrder } = useOrderStore()

const forms = ref()

const products = ref<{ value: any, label: string }[]>([])
const prices = ref<Record<string, number>>({})

watchEffect(() => {
    props?.product?.info_recommendations?.data?.forEach(a => {
        products.value.push({ value: a.data?.id, label: a?.data?.lang_info?.title ?? '' })
        prices.value[String(a.data?.id)] = Number(a.data?.price_see)
    })
})

const selectPrice = computed(() => (prices.value?.[String(forms.value?.product_in_certificate_id)] ?? 0) * 2)

const paymentTypes = computed(() =>
    props.product?.info_recommendations?.data?.find(a => a.data?.id == forms.value?.product_in_certificate_id)?.data?.payment_types?.map(paymentType => { return { label: getTitlePaymentTypes(paymentType), value: paymentType } }) ?? []
)
const selectSertificateTitle = computed(() => props.product?.info_recommendations?.data?.find(a => a.data?.id == forms.value?.product_in_certificate_id)?.data?.lang_info?.title)
</script>