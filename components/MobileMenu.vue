<template>
    <div class="flex flex-col gap-4 py-5 px-3.75 bg-white w-full absolute top-full left-0 col-span-full">
        <div class="flex flex-col">
            <p class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-#C7C7C7 text-3.75 leading-1.25">{{ generalConfig?.static_info?.global_words?.menu }}</p>
            <template v-for="link in generalConfig?.static_info?.menu?.header">
                <Dropdown v-if="link?.children?.length ?? 0 > 0" class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB">
                    <template #dropdown-header-content>
                        <CustomLink :to="link?.slug">{{ link?.title }}</CustomLink>
                    </template>
                    <CustomLink v-for="item in link?.children" :to="item?.slug" class="text-fblack text-3.75 leading-1.25">{{ item?.title }}</CustomLink>
                </Dropdown>
                <CustomLink v-else :to="link?.slug" class="py-4 -mx-3.75 px-3.75 border-b border-#EBEBEB text-fblack text-3.75 leading-1.25 hover:text-primary">{{ link?.title }}</CustomLink>
            </template>
        </div>
        <Socials class="flex gap-3 mt-auto text-fblack text-xl" />
    </div>
</template>

<script setup lang="ts">
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>