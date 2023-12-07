<template>
    <nav class="flex gap-4 justify-between items-center flex-wrap">
        <template v-for="link in generalConfig?.static_info?.menu?.header">
            <DropdownHover v-if="link?.children?.length ?? 0 > 0" :dark="dark">
                <template #title>
                    <CustomLink :to="link?.slug">{{ link?.title }}</CustomLink>
                </template>
                <template #default="{ classes }">
                    <CustomLink v-for="item in link?.children" class="w-46" :class="classes" :to="item?.slug">{{ item?.title }}</CustomLink>
                </template>
            </DropdownHover>
            <CustomLink v-else :to="link?.slug" class="text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors ease-linear">{{ link?.title }}</CustomLink>
        </template>
    </nav>
</template>

<script setup lang="ts">
defineProps({
    dark: { type: Boolean, default: false }
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>