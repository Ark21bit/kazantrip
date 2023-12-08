import type { ToastAddOptions, Toasts } from "~/types/toast";

export const useToast = () => {
    const toasts = useState<Toasts[]>('toasts', () => [])
    const add = (options: ToastAddOptions) => {
        const { title, severity = 'info', messages } = options
        toasts.value.push({ title: title, severity: severity, id: new Date().getTime(), messages: messages })
    }
    const del = (id: number) => {
        toasts.value.splice(toasts.value.findIndex(a => a.id == id), 1)
    }
    return { toasts, add, del }
};
