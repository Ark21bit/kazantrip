<template>
    <div class="flex flex-col gap-4 lg:gap-5 rounded-2xl overflow-hidden shadow-base ring-( 1 inset #F6F6F6) p-5 lg:p-6 min-h-100 lg:min-h-76.25 bg-[url(/imgs/reviewBg.svg)] bg-no-repeat bg-[position:bottom_0_right_30%]">
        <div class="flex flex-col lg:flex-row gap-4 lg:justify-between">
            <div class="flex items-center gap-3 lg:gap-4">
                <Avatar size="sm" class="max-lg:w-13 max-lg:h-13"></Avatar>
                <div class="text-sm lg:text-base font-medium text-primary flex flex-col gap-3 lg:gap-2">
                    <p class="text-fblack font-semibold text-base lg:text-lg leading-1.2 lg:leading-1.2">{{ name }}</p>
                    <CustomLink :to="slug">{{ title }}</CustomLink>
                </div>
            </div>
            <Rating :rating="rating"></Rating>
        </div>
        <div>
            <p ref="pMessage" class="text-fblack text-sm lg:text-base leading-1.4 lg:leading-1.4 line-clamp-10 lg:line-clamp-7">{{ message }}</p>
            <Button v-if="clampButtonVisible" @click="emit('open-full-review')" variant="link" padded class="self-start">{{ generalConfig?.static_info?.global_words?.show_more }}</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Review } from '~/types/fetch/review';
defineProps<Review & { slug?: string }>()
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const pMessage = ref<HTMLElement>()
const { clampButtonVisible } = useClamp(pMessage)
const emit = defineEmits(['open-full-review'])
</script>

