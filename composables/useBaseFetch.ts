import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useBaseFetch<T>(url: MaybeRefOrGetter, options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig();
    const { $i18n } = useNuxtApp()

    const defaults: UseFetchOptions<T> = {
        baseURL: `${config.public.APIbaseURL}/api/` ?? "/",
        headers: {
            Locale: $i18n.locale
        },
    };

    const params = defu(options, defaults);

    return useFetch(url, params);
}
