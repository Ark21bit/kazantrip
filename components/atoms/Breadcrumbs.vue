<template>
    <div class="text-fblack text-sm leading-[normal]">
        <CustomLink v-for="link in links" :to="link?.slug" class="after:(mx-1 content-['/']) last:(text-inactive pointer-events-none after:content-none)">{{ link?.lang_info?.title }}</CustomLink>
    </div>
</template>

<script lang="ts" setup>
import type { InfoBreadcrumbsDatum } from '~/types/fetch/shared';

defineProps({
    links: Array as PropType<InfoBreadcrumbsDatum[]>
})
</script>