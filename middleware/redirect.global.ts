import { isEqual } from 'ufo'
export default defineNuxtRouteMiddleware(async (to, from) => {
    const { getGeneralConfig } = useGeneralConfigStore()
    const { generalConfig } = storeToRefs(useGeneralConfigStore())

    const getUrl = (url: string) => {
        return url.substring(0, 1) == '/' ? url : `/${url}`
    }

    if (process.server) {
        await getGeneralConfig()
    }
    for (const redirect of generalConfig?.value?.redirect_page ?? []) {
        if (isEqual(to.path, redirect?.old_slug, { trailingSlash: true })) {
            return await navigateTo(getUrl(redirect?.new_slug), { redirectCode: redirect?.type });
        }
    }
});