<template>
    <div :class="context.classes.inner">
        <button type="button" @click="decrement" :disabled="context._value <= 0" :class="context.classes.decrement">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="13" y="7.22229" width="13" height="1.44444" rx="0.722222" transform="rotate(-180 13 7.22229)" fill="CurrentColor" />
            </svg>
        </button>
        <input @input="handleInput" type="number" :value="context._value" :class="context.classes.input">
        <button type="button" @click="increment" :class="context.classes.increment">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="13" y="7.22217" width="13" height="1.44444" rx="0.722222" transform="rotate(-180 13 7.22217)" fill="CurrentColor" />
                <rect x="5.77783" y="13" width="13" height="1.44445" rx="0.722223" transform="rotate(-90 5.77783 13)" fill="CurrentColor" />
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
