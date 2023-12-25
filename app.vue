<template>
    <Header v-bind="headerAttrs"></Header>
    <main class="grid-container grow auto-rows-min pb-20 lg:pb-25">
        <NuxtPage></NuxtPage>
    </main>
    <Footer />
    <CustomLoadingIndicator />
    <div id="teleported"></div>
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-opacity duration-300 ease-in-out" leave-active-class="transition-opacity duration-300 ease-in">
        <button v-show="scrollToUpButtonVisible" @click="scrollToUp" class="text-primary fixed top-1/2 -translate-y-1/2 right-[--width-content-margin] z-30 flex items-center gap-2.5 text-sm leading-1.25 group-[.modal-open]/body:pr-4.25 group-[.modal-open.modal-open-mobile]/body:pr-0">
            <span class="max-lg:hidden">{{ generalConfig?.static_info?.global_words?.up }}</span>
            <Icon name="ArrowUp" class="text-11 p-2.5 text-white bg-#39919A rounded-full"></Icon>
        </button>
    </Transition>
    <div class="fixed z-30 right-[--width-content-margin] bottom-7.5 leading-none items-end flex flex-col gap-2 text-white group-[.modal-open]/body:pr-4.25 group-[.modal-open.modal-open-mobile]/body:pr-0">
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.telegram" class="p-2.5 bg-#2AABEE transition-colors duration-500 ease-linear rounded-lg">
            <Icon size="24" name="Tg"></Icon>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp" class="p-2.75 bg-#60D669 transition-colors duration-500 ease-linear rounded-lg">
            <Icon size="22" name="Whatsapp"></Icon>
        </CustomLink>
        <CustomLink to="/excursions" class="py-3 px-4.125 bg-primary transition-colors duration-500 ease-linear rounded-lg text-base font-medium">
            {{ generalConfig?.static_info?.global_words?.all_excursion }}
        </CustomLink>
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

const { y: scrollWindowY } = useWindowScroll()

const scrollToUpButtonVisible = computed(() => {
    if (scrollWindowY.value > 600) return true
    return false
})

const scrollToUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
}

const route = useRoute()
const headerAttrs = computed(() => ({ ...route.meta?.headerAttrs as object }))
</script>

