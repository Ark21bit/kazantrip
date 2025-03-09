export interface Toasts {
    title?: String,
    severity: 'info' | 'error',
    messages?: String | String[]
    id: number,
	duration?:number
}

export type ToastAddOptions = Omit<Toasts, 'id'>