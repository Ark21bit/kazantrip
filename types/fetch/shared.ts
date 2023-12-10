export interface StatusAndData<Type> {
    status: boolean;
    data: Type
}

export interface BasePage<Type> {
    type: PageType;
    data: Type;
    is_redirect: boolean;
}
export type PageType = "hotel" | "product" | "blog" | "page" | "timetable"

export type Lang = 'en' | 'ru'

export interface SEO {
    title?: string;
    description?: string;
    keywords?: string;
    text?: string;
}

export interface ProductsShortList {
    id: number;
    title: string;
}

export type InfoBreadcrumbs = StatusAndData<InfoBreadcrumbsDatum[]>
export interface InfoBreadcrumbsDatum {
    id: number;
    sort: number;
    slug: string;
    lang_info: BreadcrumbsLangInfo;
}
export interface BreadcrumbsLangInfo {
    lang: Lang;
    title: string;
    title_short: string;
}

