<template>
    <slot :openTeamFull="openTeamFull"></slot>
    <Modal size="2xl" padding="p-5 lg:p-6" @close="closeModal" :is-show="isModalShow">
        <div class="flex items-center gap-3 lg:gap-4">
            <Avatar size="md" #default="{ classes }">
                <div class="max-lg:w-13 max-lg:h-13" :class="classes" v-html="team?.media_avatar"></div>
            </Avatar>
            <div class="text-sm font-medium text-primary flex flex-col lg:gap-3 gap-2">
                <p class="text-fblack font-semibold text-lg leading-1.2">{{ team?.fio }}</p>
                <p class="text-#A8A8A8">{{ team?.post }}</p>
            </div>
        </div>
        <!-- <NuxtLink v-if="team?.email" :to="`mailto:${team.email}`" class="flex gap-1.75 items-center text-primary text-sm leading-1.4 mt-3">
            <Icon name="Mail" class="text-lg"></Icon> {{ team.email }}
        </NuxtLink> -->
        <!-- <p class="text-fblack text-base leading-1.2 mt-5">{{ team?.description }}</p> -->
        <Button @click="closeModal" class="mx-auto w-48 mt-7.5" variant="outline">Закрыть</Button>
    </Modal>
</template>

<script setup lang="ts">
import type { TeamsDatum } from '~/types/fetch/about';

const emit = defineEmits(['close'])
const { closeModal, isModalShow, openModal } = useModal()
const team = ref<TeamsDatum>()

const openTeamFull = (selectTeam: TeamsDatum) => {
    team.value = selectTeam
    openModal()
}

</script>