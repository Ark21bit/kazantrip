<template>
    <div :class="context.classes.inner">
        <button type="button" @click="decrement" :disabled="context._value <= 0" :class="context.classes.decrement">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="1" viewBox="0 0 9 1" fill="none">
                <rect x="9" y="1" width="9" height="0.999999" rx="0.5" transform="rotate(-180 9 1)" fill="CurrentColor" />
            </svg>
        </button>
        <input @input="handleInput" type="number" :value="context._value" :class="context.classes.input">
        <button type="button" @click="increment" :class="context.classes.increment">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                <rect x="9" y="5" width="9" height="0.999999" rx="0.5" transform="rotate(-180 9 5)" fill="CurrentColor" />
                <rect x="4" y="9" width="9" height="1" rx="0.5" transform="rotate(-90 4 9)" fill="CurrentColor" />
            </svg>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    context: Object,
})

onMounted(() => {
    props.context.node.input(0)
})

const increment = () => {
    props.context.node.input(Number(props.context._value) + 1)
}
const decrement = () => {
    props.context.node.input(Number(props.context._value) - 1)
}

function handleInput(e) {
    props.context.node.input(Number(e.target.value))
}
</script>
