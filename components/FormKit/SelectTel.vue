<template>
	<div ref="reference" v-on-click-outside="close" :data-expented="isShow" class="flex grow" type="button">
		<span @click="isShow = !isShow" class="flex gap-2 items-center border-r border-#E8E8E8 pl-3.75 pr-1">
			<span :class="selectCountrie.icon"></span>
			<span class="i-custom:chevron-down"></span>
		</span>
		<input @input="handleInput" :value="context._value" :class="context.classes.input" :id="context.id" v-maska :placeholder="selectCountrie.code" :data-maska="selectCountrie.value" type="tel">
		<Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-500 ease-in-out" leave-active-class="transition-opacity duration-500 ease-in">
			<div v-show="isShow" ref="floating" :class="context.classes.dropdownWrapper" :style="floatingStyles">
				<ul role="listbox" :class="context.classes.listbox">
					<li v-for="item in countries" @click="[selectCountrie = item, close(), context.node.input(null)]" :class="[context.classes.listitem, selectCountrie.name == item.name ? context.classes.listitemSelect : null, { 'pointer-events-none': !isShow }]">
						<span :class="item.icon"></span>
						{{ item.name }}
						{{ item.code }}
					</li>
				</ul>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { useFloating, autoUpdate, flip, shift } from '@floating-ui/vue';
const props = defineProps({
	context: Object,
})

const isShow = ref(false)

const close = () => {
	isShow.value = false
}

function handleInput(e) {
	props.context.node.input(e.target.value)
}

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating, {
	whileElementsMounted: autoUpdate,
	middleware: [flip(), shift()],
});

const countries = [
	{
		"value": "",
		"name": "Свободный ввод",
		"code": "",
		"icon": "i-flag:none"
	},
	{
		"value": "+7 ### ### ## ##",
		"name": "Россия",
		"code": "+7",
		"icon": "i-flag:ru-4x3"
	},
	{
		"value": "+375 ## ### ## ##",
		"name": "Беларусь",
		"code": "+375",
		"icon": "i-flag:by-4x3"
	},
	{
		"value": ["+7 ### ### ## ##"],
		"name": "Казахстан",
		"code": "+7",
		"icon": "i-flag:kz-4x3"
	},
	{
		"value": "+994 ## ### ## ##",
		"name": "Азербайджан",
		"code": "+994",
		"icon": "i-flag:az-4x3"
	},
	{
		"value": "+374 ## ######",
		"name": "Армения",
		"code": "+374",
		"icon": "i-flag:am-4x3"
	},
	{
		"value": "+996 ### ### ###",
		"name": "Кыргызстан",
		"code": "+996",
		"icon": "i-flag:kg-4x3"
	},
	{
		"value": "+373 ### ## ###",
		"name": "Молдова",
		"code": "+373",
		"icon": "i-flag:md-4x3"
	},
	{
		"value": "+992 ### ## ####",
		"name": "Таджикистан",
		"code": "+992",
		"icon": "i-flag:tj-4x3"
	},
	{
		"value": "+993 ## ### ## ##",
		"name": "Туркменистан",
		"code": "+993",
		"icon": "i-flag:tm-4x3"
	},
	{
		"value": "+998 ## ### ## ##",
		"name": "Узбекистан",
		"code": "+998",
		"icon": "i-flag:uz-4x3"
	},
	{
		"value": "+380 ## ### ####",
		"name": "Украина",
		"code": "+380",
		"icon": "i-flag:ua-4x3"
	}
]

const selectCountrie = ref(countries?.find(a => a.code === '+7'))
</script>
