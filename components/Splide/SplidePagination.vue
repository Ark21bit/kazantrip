<template>
    <ul class="splide__pagination flex gap-2 " role="tablist" aria-label="Select a slide to show">
    </ul>
</template>

<style>
.splide__pagination__page {
    --at-apply: "w-2.5 h-2.5 bg-#E9E9E9 rounded-full transition-colors hover:bg-primary";
}

.splide__pagination__page.is-active {
    --at-apply: "bg-primary";
}
</style>