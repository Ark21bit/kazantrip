export const useModal = () => {
    const isModalShow = ref(false);

    const scrollWidth = useState<{ width: number, isScroll: boolean }>('scrollWidth')

    const openModal = () => {
        isModalShow.value = true;
        document.querySelector("body")?.classList.add('modal-open')
        if (scrollWidth.value.width === 0 || !scrollWidth.value.isScroll === true) return document.querySelector("body")?.classList.add('modal-open-mobile')
    };

    const closeModal = () => {
        isModalShow.value = false;
        setTimeout(() => {
            document.querySelector("body")?.classList.remove('modal-open');
            document.querySelector("body")?.classList.remove('modal-open-mobile')
        }, 500)
    };

    onUnmounted(() => {
        document.querySelector("body")?.classList.remove('modal-open-mobile')
        document.querySelector("body")?.classList.remove('modal-open')
    });

    return { isModalShow, closeModal, openModal };
};
