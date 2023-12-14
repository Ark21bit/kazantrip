<template>
    <div class="flex flex-col lg:flex-row justify-between gap-3 py-3 px-5 lg:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
        <p>
            <slot name="title" />
        </p>
        <p class="font-medium">
            <slot name="description" />
        </p>
    </div>
</template>