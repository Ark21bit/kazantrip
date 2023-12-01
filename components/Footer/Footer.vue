<template>
    <footer>
        <div class="h-14 lg:h-30">
            <picture>
                <source media="(max-width: 1024px)" srcset="/imgs/footerBgMobile.svg">
                <img class="w-full h-full object-top object-cover" src="/imgs/footerBg.svg" alt="">
            </picture>
        </div>
        <div class="grid-container bg-#031F27">
            <div>
                <div class="flex justify-between gap-2 items-center py-4 lg:py-6">
                    <Icon name="Logo" class="w-16.75 h-13 lg:(w-19 h-15) text-white"></Icon>
                    <FooterNav class="max-lg:hidden" />
                    <button class="text-white flex items-center gap-2.5 text-sm leading-1.25 max-lg:hidden">
                        Вверх
                        <Icon name="ArrowUp" class="text-11 p-2.5 bg-#39919A rounded-full"></Icon>
                    </button>
                    <div class="flex gap-2 text-2xl text-white lg:hidden ">
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
                <div class="flex flex-col lg:flex-row border-t lg:border-y border-#303030 py-5 lg:py-7.5 gap-5 lg:gap-7.5">
                    <div class="w-full h-50 lg:w-103.25 lg:h-71.5 rounded-5 bg-slate">
    
                    </div>
                    <div class="flex flex-col gap-5 grow">
                        <div class="flex flex-col lg:flex-row gap-5 w-full">
                            <div class="text-white grow max-lg:(pb-5 border-b border-#303030)">
                                <h2 class="text-base font-semibold leading-1.2">Адреса</h2>
                                <p class="mt-4 text-#7B7B7B text-sm leading-1.2">Отправление экскурсий:</p>
                                <ul class="mt-3 flex flex-col gap-3 text-3.25 font-medium leading-1.4">
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">Пушкина. 4, гостиница "Татарстан" </li>
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">ул. Б. Шахиди, 7 (ЦСК "Смена")</li>
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">ул. Амирхана, 1А гостиница "Ривьера"</li>
                                </ul>
                            </div>
                            <div class="text-white grow max-lg:(pb-5 border-b border-#303030)">
                                <h2 class="text-base font-semibold leading-1.2">Контакты</h2>
                                <p class="mt-4 text-#7B7B7B text-sm leading-1.2">Единая линия: 8 800 2222 161</p>
                                <ul class="mt-3 flex flex-col gap-3 text-3.25 font-medium leading-1.4">
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">{{ `Офис на Пушкина, 4: \n+7 937 009 32 34` }}</li>
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">{{ `Офис на Пушкина, 4: \n+7 927 032 32 34` }}</li>
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">{{ 'Офис на Амирхана,1А: : \n+7 937 005 32 34' }}</li>
                                </ul>
                            </div>
                            <div class="text-white max-lg:(pb-5 border-b border-#303030)">
                                <h2 class="text-base font-semibold leading-1.2">Часы работы</h2>
                                <p class="mt-4 text-#7B7B7B text-sm leading-1.2">Без перерывов и выходных</p>
                                <ul class="mt-3 flex flex-col gap-3 text-3.25 font-medium leading-1.4">
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">пн-сб: 9:00-19:00</li>
                                    <li class="flex gap-3 before:(bg-#39919A w-2.5 h-2.5 content-empty rounded-full mt-.7em -translate-y-1/2)">вс: 09.00-14.00</li>
                                </ul>
                            </div>
                            <div class="flex lg:hidden pb-5 border-b border-#303030">
                                <CustomLink class="text-base font-semibold leading-1.2 text-white" to="/test">Блог</CustomLink>
                            </div>
                        </div>
                        <div class="flex justify-between gap-2 mt-auto">
                            <div class="flex gap-2 text-2xl text-white max-lg:hidden">
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
                            <div class="flex items-center gap-5 text-2xl text-white">
                                <img src="/icons/visa.svg" alt="">
                                <img src="/icons/mastercard.svg" alt="">
                                <img src="/icons/mir.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-sm leading-1.2 text-#7B7B7B flex flex-col lg:flex-row gap-5 lg:gap-6 py-5 lg:py-6">
                    <p class="mr-auto">@Copyright 2021-2023 Все права защищены</p>
                    <CustomLink class="hover:text-white transition-colors">Порядок предоставления экскурсионных услуг</CustomLink>
                    <CustomLink class="hover:text-white transition-colors">Правила оплаты</CustomLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>