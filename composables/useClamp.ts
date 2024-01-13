export default function useClamp(clampNode: Ref<HTMLElement | undefined>) {

    const isClamp = ref(true)
    const clampButtonVisible = ref(false)

    const getClampButtonVisible = () => {
        if (!isClamp.value) return clampButtonVisible.value = true
        if (clampNode.value === undefined) return clampButtonVisible.value = false
        if (clampNode.value.scrollHeight > clampNode.value.clientHeight) return clampButtonVisible.value = true
        return clampButtonVisible.value = false
    }

    const isClampToglle = () => {
        isClamp.value = !isClamp.value;
    };

    watch(clampNode, () => getClampButtonVisible(), {
        flush: 'post'
    })

    useEventListener('resize', getClampButtonVisible)

    return { isClamp, clampButtonVisible, isClampToglle };
}
