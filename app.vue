<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
    <div id="teleported"></div>
    <div class="fixed z-30 right-[var(--width-content-margin)] bottom-7.5 leading-none items-end flex flex-col gap-2 text-white group-[.modal-open]/body:pr-4.25 group-[.modal-open.modal-open-mobile]/body:pr-0">
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.telegram" class="p-2.5 bg-#2AABEE transition-colors duration-500 ease-linear rounded-lg">
            <Icon size="24" name="Tg"></Icon>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp" class="p-2.75 bg-#60D669 transition-colors duration-500 ease-linear rounded-lg">
            <Icon size="22" name="Whatsapp"></Icon>
        </CustomLink>
        <NuxtLink target="_blank" to="/test" class="py-3 px-4.125 bg-primary transition-colors duration-500 ease-linear rounded-lg text-base font-medium">
            Все экскурсии
        </NuxtLink>
    </div>    
    <Toasts></Toasts>
</template>
<script setup lang="ts">
import type { FormKitConfig } from '@formkit/core'
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const config = inject<FormKitConfig>(Symbol.for('FormKitConfig'))

const { locale } = useI18n()
watch(locale, (newValue) => {
    if (config?.locale === undefined) return
    config.locale = newValue
}, { immediate: true })

useScrollWidth()

useHead({
    htmlAttrs: {
        lang: () => locale.value,
    },
})
</script>

