<template>
    <h1 class="font-Montserrat text-6.5 lg:text-9.5 leading-1.2 font-bold text-fblack mt-10 lg:mt-20">{{ pageInfo?.content?.title }}</h1>
    <p class="mt-5 lg:mt-7.5 font-semibold leading-1.4 text-base lg:text-xl max-w-211.75 text-fblack [&>span]:text-primary">{{ pageInfo?.content?.text_1 }}</p>
    <AboutHistory :data="pageInfo?.history_year" />
    <img srcset="https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_622_1280.jpeg 622w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_520_1070.jpeg 520w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_435_895.jpeg 435w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_364_749.jpeg 364w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_304_626.jpeg 304w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_254_523.jpeg 254w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_213_438.jpeg 213w, https://hb.bizmrg.com/excursion_dev/158/responsive-images/WhatsApp-Image-2022-05-14-at-18.13.43___media_library_original_178_366.jpeg 178w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgNjIyIDEyODAiPgoJPGltYWdlIHdpZHRoPSI2MjIiIGhlaWdodD0iMTI4MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FRZ0FnQXdFUkFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE0RHd4YTNmaUVJSTRXWTV4d0svVXNQWGk0WGt6NDJyVGFsWkhxOC93YWtoOE0vYjVmbGt4bmFhNWxtQ2RYa1JzOE0xVDVtZWUvd0JtdGJTRkR3UWE5WnBUVnpnVW5GbnB2Z05iR3hnRTE0NE9PMWZOWTFTVHRCSHM0WnFTdXkvOEhiZlJvTEV6UnFyTjF4WHowTVU2dWtXZW02U2h1ZFQ0cjhXaWVMN0dpL3V1bUJYZFFwdFBtT2VwTldzZWZhbDRhL3RCOTF2R1N4OXEram9ZamtYdm5oMXFmTS9kTUcvMGU5MDM1RzNBZWdydFRwVnRUbGNxbEk0YjRkL0VTTHcvYm56WlNBZTJhL0g4SGk0UWZ2SDN0ZW5KN0hxUGgzeC9vdC9NSjdxZGNkY0UxOUtzd3BjdnVzOHg0T3EzZHJRN2VMNGllRnJXQjNXZU5XeHh6V0x4eWs3Tm1pd2pncjJNUStNUEQycnN6UGN4OWU1cnZoam93Mlp3VHc3bTlVZkpkaHBEK1ltL09QU3Z6R1VYR056OUV5M0R3eEdJakNleHZtMEVhaFJsUlhqdkZWSXZjL291aHcxZ0tsQ0s1U2UwMGVYVkpWZ1JuSkp4d2EycFlxbzVhSGpaMXcxZ3FPRmxLS3MwZERlL0N5NzBleldjelNmTU03YzE3cnFUakM3UDU3clVGR1RzdEQwSHdUOE5yUHhIY0s4OXMwQ1I5UVJqTmRFSXFvdFREQzRpcENvbkhjUEgvd0FKV2lrV1RUWWlZODRPQlhqNHZBdTk0SS9vRElPSll4cCt5eEV0VWFIZy93QURRZUhiVVhWMG9hZkdjSHRYVmhNR3FhNXBibmtaN256eGpkS0Q5MG9lTmZIT20rUzFzczZDVWNIMnIwSzIxajhseFZibWZMSFlwYVorMGxGYjhDelJNOWNDdUNHS3NlTEdkdFVlbmVIL0FJbzJuaWpSUzhNSUxnWllZNlY2MEswYWtkRDA4Sk56bmVVckhoUHhyK08wR2dOSlkybVd1RHdTdmF0VWt0V1hpc2EyK1NMMFBuZVh4aGU2ek04cXh5czdIT2VheG5LbmZVOHRUYlBZTFQ0WDZtN0RNWkZmTyt5a2pYMko2ZDRGMExWZkROckxFa1FJa0dPYTZLVHFVOWdWTnJZNW5XdmdLL2lUVnBMMjVBM09jNE5hT1ZXUWV4dnF6UTB6OW4yS3pYQVZSK0Zjem8xSlBWbHhwMlBTNENvQUpBL0t2VHNiWE5DQ1RJOXFMQmN0SmNCZUtMQ3VUcGRnOVRSWWR6bkQwRlVJdVFmNnFrSWtYN3dwQVB6KzhxZ1AvOWs9Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w"
        onload="console.log(getBoundingClientRect())" sizes="1px" src="https://hb.bizmrg.com/excursion_dev/158/WhatsApp-Image-2022-05-14-at-18.13.43.jpeg" width="622" height="1280">
    <div class="flex flex-col gap-20 mt-20 lg:mt-37.5">
        <div>
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat [&>span]:text-primary">Наша команда <span>менеджеров</span></h2>
            <TeamsSlider :teams="pageInfo?.teams.data" class="mt-7.5 lg:mt-10"></TeamsSlider>
        </div>
        <div>
            <h2 class="text-fblack text-5.5 lg:text-7 font-bold leading-1.2 lg:leading-1.2 font-Montserrat [&>span]:text-primary">Наша команда <span>экскурсоводов</span></h2>
            <TeamsSlider :teams="pageInfo?.guides?.data" class="mt-7.5 lg:mt-10"></TeamsSlider>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { About } from '~/types/fetch/about';

const { data: pageInfo } = await useBaseFetch<About>(`search/page`, {
    key: 'about',
    query: { key: 'about' }
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? '',
    description: () => pageInfo.value?.seo?.description ?? '',
    keywords: () => pageInfo.value?.seo?.keywords ?? '',
})
</script>