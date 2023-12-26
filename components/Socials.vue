<template>
    <div>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.telegram">
            <span name="Tg" class="hover:text-#39919A transition-colors i-custom:tg"></span>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp">
            <span name="Whatsapp" class="hover:text-#39919A transition-colors i-custom:whatsapp"></span>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.vk">
            <span name="Vk" class="hover:text-#39919A transition-colors i-custom:vk"></span>
        </CustomLink>
    </div>
</template>

<script setup lang="ts">
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>