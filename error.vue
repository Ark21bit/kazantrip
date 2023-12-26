<template>
    <Header></Header>
    <main class="grid-container grow py-20 items-center h-175">
        <div class="flex flex-col gap-2.5 items-center text-center">
            <p class="text-primary text-8xl font-bold">{{ error.statusCode }}</p>
            <h1 class="font-Montserrat text-4xl lg:text-14.5 leading-1.1 text-fblack">KazanTrip</h1>
            <p class="max-w-143.5 text-fblack text-sm leading-1.4">{{ message }}</p>
            <Button class="mt-5 w-full lg:w-fit" @click="handleError">{{ generalConfig?.static_info?.global_words?.on_main_page }}</Button>
        </div>
    </main>
    <Footer />
    <div id="teleported"></div>
    <div class="fixed z-30 right-[--width-content-margin] bottom-7.5 leading-none items-end flex flex-col gap-2 text-white group-[.modal-open]/body:pr-4.25 group-[.modal-open.modal-open-mobile]/body:pr-0">
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.telegram" class="p-2.5 bg-#2AABEE transition-colors duration-500 ease-linear rounded-lg">
            <span class="i-custom:tg text-2xl"></span>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp" class="p-2.75 bg-#60D669 transition-colors duration-500 ease-linear rounded-lg">
            <span class="text-5.5 i-custom:whatsapp"></span>
        </CustomLink>
        <CustomLink to="/excursions" class="py-3 px-4.125 bg-primary transition-colors duration-500 ease-linear rounded-lg text-base font-medium">
            {{ generalConfig?.static_info?.global_words?.all_excursion }}
        </CustomLink>
    </div>
    <Toasts></Toasts>
</template>

<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app';

const props = defineProps<{ error: NuxtError }>()
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const localePath = useLocalePath()
const { locale } = useI18n()

const message = computed(() => {
    if (props.error.statusCode == 404) return generalConfig.value?.static_info?.global_words?.error_404
    if (props.error.statusCode == 429) return generalConfig.value?.static_info?.global_words?.error_429
    if (props.error.statusCode == 500) return generalConfig.value?.static_info?.global_words?.error_500
    return ' '
})

const title = computed(() => {
    if (props.error.statusCode == 429) return '429 - Слишком много запросов' ?? ' '
    if (props.error.statusCode == 404) return "404 - Страница не найдена" ?? ' '
    if (props.error.statusCode == 500) return "500 - Что-то пошло не так" ?? ' '
    return ' '
})

useSeoMeta({
    title: () => title.value ?? ' '
})

useHead({
    htmlAttrs: {
        lang: () => locale.value,
    },
})

const handleError = () => clearError({ redirect: localePath('/') })
</script>