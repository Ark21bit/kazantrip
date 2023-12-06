<template>
    <div class="flex gap-10 items-center">
        <template v-for="link in generalConfig?.static_info?.menu?.footer">
            <DropdownHover v-if="link?.children?.length ?? 0 > 0" dark>
                <template #title>
                    <CustomLink :to="link?.slug">{{ link?.title }}</CustomLink>
                </template>
                <template #default="{ classes }">
                    <CustomLink v-for="item in link?.children" class="w-46" :class="classes" :to="item?.slug">{{ item?.title }}</CustomLink>
                </template>
            </DropdownHover>
            <CustomLink v-else :to="link?.slug" class="text-white text-3.75 font-medium leading-1.25 hover:text-#39919A transition-colors">{{ link?.title }}</CustomLink>
        </template>
    </div>
</template>

<script setup lang="ts">
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>