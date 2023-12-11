<template>
    <div>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.telegram">
            <Icon name="Tg" class="hover:text-#39919A transition-colors"></Icon>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp">
            <Icon name="Whatsapp" class="hover:text-#39919A transition-colors"></Icon>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.vk">
            <Icon name="Vk" class="hover:text-#39919A transition-colors"></Icon>
        </CustomLink>
    </div>
</template>

<script setup lang="ts">
const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>