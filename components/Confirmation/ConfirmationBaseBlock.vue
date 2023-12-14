<template>
    <div class="flex flex-col sm:flex-row justify-between gap-3 py-3 px-5 lg:py-1.5 3xl:py-3 3xl:px-7.5 last:border-none border-b border-#E8E8E8 text-sm leading-1.4 text-fblack">
        <p>
            <slot name="title" />
        </p>
        <p class="font-medium">
            <slot name="description" />
        </p>
    </div>
</template>