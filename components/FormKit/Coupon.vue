<template>
	<div class="flex flex-col gap-5">
		<FormKit type="group" name="coupon" v-model="coupon">
			<h4 class="text-base font-semibold text-fblack leading-1.2 font-Montserrat">{{ generalConfig?.static_info?.global_words?.sale_coupon }}</h4>
			<div class="flex flex-col lg:flex-row gap-x-5.5 gap-y-4 lg:items-start">
				<FormKit :disabled="coupon.id" :validation-rules="{ couponCheck }" :validation-messages="{ couponCheck: String(generalConfig?.static_info?.global_words?.coupon_access_only_card) }" validation="couponCheck" type="text" name="coupon_text"
					:placeholder="generalConfig?.static_info?.global_words?.sale_coupon" outer-class="grow" />
				<FormKit type="meta" name="id" />
				<FormKit type="meta" name="sale_percent" />
				<FormKit type="meta" name="is_only_online_pay" />
				<Button :loading="couponStatus == 'pending'" :disabled="couponStatus == 'pending' || !Boolean(coupon?.coupon_text)" @click="coupon.id ? couponReset() : couponExecute()" type="button" class="lg:w-49" variant="outline">{{ coupon.id ? generalConfig?.static_info?.global_words?.cancel :
			generalConfig?.static_info?.global_words?.check }}</Button>
			</div>
			<p class="text-sm text-primary leading-1.1" v-if="couponText">{{ couponText }}</p>
		</FormKit>
	</div>
</template>

<script setup>
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const coupon = ref({
	id: null,
	sale_percent: null,
	is_only_online_pay: null
})
const { data: couponData, error: couponError, execute: couponExecute, status: couponStatus } = useBaseFetch('orders/check-coupon', {
	immediate: false,
	onRequest({ options }) {
		options.query = { coupon: coupon.value?.coupon_text.trim() }
	},
	key: 'coupon',
	ignoreResponseError: true,
	watch: false,
})
watchEffect(() => {
	if (couponError.value) return useToast().add({
		title: generalConfig.value?.static_info?.global_words?.an_error_occurred,
		messages: couponError.value?.data?.errors?.map(a => a?.error_descr) ?? generalConfig.value?.static_info?.global_words?.fail_send_request,
		severity: 'error'
	})
})
watch(couponData, (newValue) => {
	if (newValue?.status === true) {
		coupon.value.sale_percent = newValue?.data?.sale_percent
		coupon.value.id = newValue?.data?.id
		coupon.value.is_only_online_pay = newValue?.data?.is_only_online_pay
		return
	}
	coupon.value.sale_percent = null
	coupon.value.id = null
	coupon.value.is_only_online_pay = null
})
const couponText = computed(() => {
	if (couponData.value?.status === false) return couponData.value?.message
	if (coupon.value?.is_only_online_pay) return generalConfig.value?.static_info?.global_words?.sale_coupon_active_online?.replace('%s', `${couponData.value?.data?.sale_percent}%`)
	if (coupon.value?.id) return generalConfig.value?.static_info?.global_words?.sale_coupon_active?.replace('%s', `${couponData.value?.data?.sale_percent}%`)
})
function couponCheck(node) {
	const root = node.at('$root')
	const parent = node.at('$parent')
	if (root.value) {
		if (parent.value?.is_only_online_pay === true && root.value?.payment_type_id !== 2) return false
	}
	return true
}

const couponReset = () => {
	coupon.value.sale_percent = null
	coupon.value.id = null
	coupon.value.is_only_online_pay = null
}
</script>