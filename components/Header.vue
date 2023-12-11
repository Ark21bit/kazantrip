<template>
    <header class="grid-container py-1.5 lg:py-3.75 z-20 max-lg:bg-white" :class="[absolute ? 'absolute w-full z-10' : 'relative border-b border-#EBEBEB', dark ? 'text-fblack lg:text-white' : 'text-fblack']">
        <div class="flex gap-2.5 lg:gap-10 justify-between items-center">
            <CustomLink to="/" class="shrink-0">
                <Icon name="Logo" class="w-17 lg:w-18 h-13 lg:h-14" />
            </CustomLink>
            <Nav :dark="dark" class="grow max-lg:hidden" />
            <DropdownHover :dark="dark" class="max-lg:hidden">
                <template #title>
                    <span class="text-primary uppercase">{{ generalConfig?.locales?.[locale as 'ru' | 'en'].slice(0, 2) }}</span>
                </template>
                <template #default="{ classes }">
                    <NuxtLink v-for="(item, key) in generalConfig?.locales" :to="switchLocalePath(key)" :class="classes">{{ item?.slice(0, 2) }}</NuxtLink>
                </template>
            </DropdownHover>
            <NuxtLink :to="phoneLinkReplace(generalConfig?.static_info?.contact?.telephones?.find(() => true))" class="text-lg font-medium lining-nums">{{ generalConfig?.static_info?.contact?.telephones?.find(() => true) }}</NuxtLink>
            <ModalCallback #="{ openModal }">
                <Button @click="openModal" class="lg:w-41 max-lg:p-2.25" size="sm">
                    <Icon class="lg:!hidden text-xl" name="Phone"></Icon>
                    <span class="max-lg:hidden">{{ generalConfig?.static_info?.global_words?.request_call }}</span>
                </Button>
            </ModalCallback>
            <Socials class="hidden lg:flex gap-2 text-2xl" />
            <button @click="menuToggle" class="lg:hidden h-3.5 flex flex-col justify-between items-end w-6.5">
                <span :class="{ '-rotate-45 -translate-y-0.75': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-300" />
                <span :class="isMobileMenuShow ? 'opacity-0 w-0' : 'w-full'" class="h-0.5 bg-fblack rounded-.25 transition-width,opacity ease-linear duration-300" />
                <span :class="{ 'rotate-45 translate-y-0.75': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-300" />
            </button>
        </div>
        <MobileMenu class="lg:hidden" v-if="isMobileMenuShow" />
    </header>
</template>

<script lang="ts" setup>
defineProps({
    absolute: { type: Boolean, default: false },
    dark: { type: Boolean, default: false }
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isMobileMenuShow = ref(false)
const menuClose = () => { isMobileMenuShow.value = false }
const menuToggle = () => { isMobileMenuShow.value = !isMobileMenuShow.value }

useNuxtApp().hook('page:start', () => menuClose())
</script>