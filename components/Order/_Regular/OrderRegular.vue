<template>
    <OrderRegularForm v-bind="$attrs" v-if="product?.info_timetables?.data?.length ?? 0 > 0" @close="emit('close')" :product="product"/>
    <OrderRegularCallback v-bind="$attrs" v-else @close="emit('close')" :name="product?.lang_info?.title"></OrderRegularCallback>
</template>
<script lang="ts" setup>
const props = defineProps({
    product: Object,
})

defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])
</script>