<template>
	<div :class="context.classes.options">
		<button v-for="option in context.options" @click="handleInput(option.value)" :class="[context.classes.option, { active: option.value?.id ? option.value.id === context.value.id : option.value === context.value }]" type="button">{{ option.label }}</button>
	</div>
</template>

<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core';
const props = defineProps<{
	context: FormKitFrameworkContext & {
		options: [{ label: string, value: any }],
	}
}>();

function handleInput(_value: any) {
	/* if (_value === props.context.value) return props.context.node.input(undefined); */
	props.context.node.input(_value);
}
</script>