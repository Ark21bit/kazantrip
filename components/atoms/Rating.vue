<template>
    <div class="flex">
        <span v-for="n in rating" class="i-material-symbols:star-rounded" :class="[colorClass, size]"></span>
        <span v-for="n in count - rating" class="text-inactive i-material-symbols:star-rounded" :class="size"></span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    rating: { type: Number, default: 3 },
    count: { type: Number, default: 5 },
    size: { type: String, default: "text-6.5" },
    colorClass: { type: String, default: "text-#F7C03F" }
})
</script>