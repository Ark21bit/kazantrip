<template>
    <div class="flex">
        <span v-for="star in max" :key="star" @mouseleave="hoverStarIndex = 0" @mouseover="hoverStarIndex = star" @click="handleInput(star)" class="cursor-pointer transition ease-linear duration-500 i-material-symbols:star-rounded"
            :class="[star <= context.value || star <= hoverStarIndex ? 'text-primary' : 'text-inactive', size]"></span>
    </div>
</template>

<script setup>
const props = defineProps({
    context: Object,
})
const max = props.context.max ?? 5
const size = props.context.size ?? '24'

function handleInput(e) {
    props.context.node.input(e)
}

let hoverStarIndex = ref(0)

</script>