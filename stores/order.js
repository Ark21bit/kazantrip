import { skipHydrate } from "pinia";

export const useOrderStore = defineStore("order", () => {
    const orderInfo = useLocalStorage('order-store', {})
    const $reset = () => {
        orderInfo.value = {}
        orderCompleted.value = false
    }
    const orderCompleted = useLocalStorage('order-completed', false)

    const localePath = useLocalePath()
    const router = useRouter()
    const setOrder = (form) => {
        $reset()
        orderInfo.value = form
        router.push(localePath('/confirmation'))
    }

    return {
        orderInfo: skipHydrate(orderInfo),
        $reset,
        setOrder,
        orderCompleted: skipHydrate(orderCompleted)
    };
});
