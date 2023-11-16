<template>
    <div class="text-diamondBlack text-sm leading-[normal]">
        <CustomLink v-for="n in 3" to="/test" class="after:(mx-1 content-['/']) last:(text-inactive pointer-events-none after:content-none)">Экскурсии по Татарстану</CustomLink>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    links: Array
})
</script>