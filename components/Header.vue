<template>
    <header class="grid-container py-3.75 z-20 max-lg:hidden">
        <div class="flex gap-10 justify-between items-center flex-wrap">
            <NuxtLink to="/" class="shrink-0"><img src="/imgs/logo.svg" alt="" class="w-17 lg:w-18 h-13 lg:h-14"></NuxtLink>
            <Nav class="grow" />
            <DropdownHover>
                <template #title>
                    RU
                </template>
                <CustomLink>RU</CustomLink>
                <CustomLink>EN</CustomLink>
            </DropdownHover>
            <CustomLink to="/test" class="text-lg font-medium text-white lining-nums">8 800 2222 161</CustomLink>
            <Button class="w-41" size="sm">Заказать звонок</Button>
            <div class="flex gap-2 text-2xl text-white">
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
        </div>
    </header>
</template>

<script lang="ts" setup>
</script>