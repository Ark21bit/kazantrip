export const useScrollWidth = () => {
    const scrollWidth = useState('scrollWidth', () => { return { width: 0, isScroll: true } })

    useNuxtApp().hook('page:finish', () => {
        if (document.body.offsetHeight <= window.innerHeight) scrollWidth.value.isScroll = false
        else scrollWidth.value.isScroll = true
    })

    onMounted(() => {
        if (document.body.offsetHeight <= window.innerHeight) scrollWidth.value.isScroll = false
        scrollWidth.value.width = getScrollWidth()
    })
    return { scrollWidth }
}