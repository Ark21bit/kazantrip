<template>
	<div @mouseenter="open" @mouseleave="close" class="shrink-0">
		<span ref="reference" class="flex items-center justify-center w-4 h-4 bg-primary/20 hover:(bg-primary text-white) text-primary text-3 font-medium rounded-full cursor-pointer transition-colors">
			<slot name="icon">
				?
			</slot>
		</span>
		<div v-if="isShow" ref="floating" class="absolute z-50 max-w-90vw py-2.5 px-4" :style="floatingStyles">
			<div class="bg-#e2f1f2 shadow-[0_4px_34px_0] shadow-black/2 rounded-2 border border-#F6F6F6 p-4 text-3.5 w-max text-black overflow-auto max-w-full">
				<slot>
					{{ title }}
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useFloating, autoUpdate, flip, shift, arrow } from '@floating-ui/vue';
defineProps<{
	title?: string;
}>();

const reference = ref(null);
const floating = ref(null);
const floatingArrow = ref(null);

const isShow = ref(false)
const open = () => isShow.value = true
const close = () => isShow.value = false

const { floatingStyles } = useFloating(reference, floating, {
	whileElementsMounted: autoUpdate,
	middleware: [flip(), shift(), arrow({ element: floatingArrow })],
});
</script>