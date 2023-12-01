interface Options {
    fontSize?: number,
    lineHeight?: number,
    countLine?: number,
}

export default function useClamp(clampNode: Ref<HTMLElement | undefined>, options: Options) {
    const { fontSize = 16, lineHeight = 1.5, countLine = 10 } = options;

    const isClamp = ref(true);
    const clampButtonVisible = computed(() => {
        if (clampNodeH.value > fontSize * lineHeight * countLine) return true;
        return false;
    });

    const isClampToglle = () => {
        isClamp.value = !isClamp.value;
    };

    const clampNodeH = ref(0);

    const getMessageScrollH = () => {
        if (clampNode.value === undefined) return clampNodeH.value = 0
        clampNodeH.value = clampNode.value.scrollHeight;
    };

    onMounted(() => {
        setTimeout(getMessageScrollH, 1)
    });

    useEventListener('resize', getMessageScrollH)

    return { isClamp, clampButtonVisible, isClampToglle };
}
