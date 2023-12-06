<template>
    <header class="grid-container py-3.75 z-20 max-lg:bg-white" :class="[absolute ? 'absolute w-full z-10' : 'relative', dark ? 'text-diamondBlack lg:text-white' : 'text-diamondBlack']">
        <div class="flex gap-2.5 lg:gap-10 justify-between items-center">
            <CustomLink to="/" class="shrink-0">
                <Icon name="Logo" class="w-17 lg:w-18 h-13 lg:h-14" />
            </CustomLink>
            <Nav :dark="dark" class="grow max-lg:hidden" />
            <DropdownHover :dark="dark" class="max-lg:hidden" title="RU" #default="{ classes }">
                <CustomLink :class="classes" to="/test">RU</CustomLink>
                <CustomLink :class="classes" to="/test">EN</CustomLink>
            </DropdownHover>
            <CustomLink to="/test" class="text-lg font-medium lining-nums">8 800 2222 161</CustomLink>
            <Button class="lg:w-41 max-lg:p-2.25" size="sm">
                <Icon class="lg:!hidden text-xl" name="Phone"></Icon>
                <span class="max-lg:hidden">Заказать звонок</span>
            </Button>
            <div class="hidden lg:flex gap-2 text-2xl text-white ">
                <CustomLink to="/test">
                    <Icon name="Tg" class="hover:text-#39919A transition-colors"></Icon>
                </CustomLink>
                <CustomLink to="/test">
                    <Icon name="Whatsapp" class="hover:text-#39919A transition-colors"></Icon>
                </CustomLink>
                <CustomLink to="/test">
                    <Icon name="Vk" class="hover:text-#39919A transition-colors"></Icon>
                </CustomLink>
            </div>
            <button @click="menuToggle" class="lg:hidden h-3.5 flex flex-col justify-between items-end w-6.5">
                <span :class="{ '-rotate-45 -translate-y-0.75': isMobileMenuShow }" class="w-full h-0.5 bg-diamondBlack rounded-.25 origin-right transition-transform ease-linear duration-300" />
                <span :class="isMobileMenuShow ? 'opacity-0 w-0' : 'w-full'" class="h-0.5 bg-diamondBlack rounded-.25 transition-width,opacity ease-linear duration-300" />
                <span :class="{ 'rotate-45 translate-y-0.75': isMobileMenuShow }" class="w-full h-0.5 bg-diamondBlack rounded-.25 origin-right transition-transform ease-linear duration-300" />
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
const isMobileMenuShow = ref(false)
const menuClose = () => { isMobileMenuShow.value = false }
const menuToggle = () => { isMobileMenuShow.value = !isMobileMenuShow.value }

useNuxtApp().hook('page:start', () => menuClose())
</script>