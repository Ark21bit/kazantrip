<template>
    <div @click="emit('openTeamFull')" class="flex flex-col rounded-5 overflow-hidden shadow-base cursor-pointer">
        <div class="h-62.25 lg:h-70.25 [&>img]:(w-full h-full object-cover object-center)" v-html="media_avatar ?? `<img src='/imgs/avatar.svg' style='padding:20px 20px 0;object-fit:contain' alt=''>`"></div>
        <div class="flex flex-col grow rounded-t-5 -mt-5 lg:-mt-10 p-5 bg-white relative ring ring-inset ring-#F6F6F6">
            <p class="font-semibold text-lg lg:text-xl lg:leading-1.2 leading-1.2 text-fblack">{{ fio }}</p>
            <p class="mt-3 lg:mt-1.5 text-sm text-#A8A8A8 leading-1.2">{{ post }}</p>
            <NuxtLink @click.stop v-if="email" :to="`mailto:${email}`" class="flex gap-1.75 items-center text-primary text-sm leading-1.4 mt-3">
                <span class="text-lg i-custom:mail"></span>{{ email }}
            </NuxtLink>
            <p ref="pMessage" class="text-fblack text-sm leading-1.4 mt-4 line-clamp-3 lg:line-clamp-5">{{ about }}</p>
            <div v-if="clampButtonVisible" class="mt-auto pt-5">
                <Button padded size="lg" variant="link" @click="emit('openTeamFull')">{{ generalConfig?.static_info?.global_words?.more }}</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TeamsDatum } from '~/types/fetch/about';
const { generalConfig } = storeToRefs(useGeneralConfigStore())

defineProps<TeamsDatum>()

const pMessage = ref<HTMLElement>()
const { clampButtonVisible } = useClamp(pMessage)
const emit = defineEmits(['openTeamFull'])
</script>