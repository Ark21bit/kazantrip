export default function useCaptcha() {
    const config = useRuntimeConfig()
    const src = ref<string>()
    const secretCode = ref<string | null>()
    const isLoading = ref(false)
    const getCaptcha = async () => {
        revokeSrcURL()
        isLoading.value = true
        const data = await $fetch<Blob>('captcha', {
            onResponse({ response }) {
                secretCode.value = response.headers.get('secret-code')
            },
            responseType: 'blob',
            baseURL: `${config.public.APIbaseURL}/api/`
        })
        src.value = URL.createObjectURL(data)
        isLoading.value = false
    }
    const revokeSrcURL = () => {
        if (src.value !== undefined) URL.revokeObjectURL(src.value)
    }
    return { src, secretCode, getCaptcha, revokeSrcURL, isLoading };
}
