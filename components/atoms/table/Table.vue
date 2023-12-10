<template>
    <table class="grid max-lg:grid-cols-1 rounded-2xl text-fblack ring ring-inset ring-#F6F6F6 shadow-base overflow-hidden">
        <thead class="lg:contents hidden" v-if="$slots.head">
            <slot name="head"></slot>
        </thead>
        <tbody class="contents">
            <slot></slot>
        </tbody>
    </table>
</template>
