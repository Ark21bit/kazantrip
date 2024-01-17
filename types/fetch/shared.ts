export interface StatusAndData<Type> {
    status: boolean;
    data: Type
}

export interface BasePage<Type> {
    type: PageType;
    data: Type;
    is_redirect: boolean;
}
export type PageType = "product" | "page" | "timetable"

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

export type InfoSEOBlocks = StatusAndData<InfoSEOBlocksDatum[]>
export interface InfoSEOBlocksDatum {
    sort: number;
    lang_info: InfoSEOBlocksLangInfo;
    media_preview: string | null;
}
export interface InfoSEOBlocksLangInfo {
    lang: Lang;
    title: string;
    text: string;
}

export type InfoPrices = StatusAndData<InfoPricesDatum[]>
export interface InfoPricesDatum {
    type_ticket_id: number;
    price: number;
}

export interface LangInfo {
    lang: Lang;
    title: string;
    description?: string;
    text?: string;
}
export interface PageLangInfo extends LangInfo {
    seo_title?: string;
    seo_description?: string;
}

export type InfoRecommendations = StatusAndData<InfoRecommendationsDatum[]>
export interface InfoRecommendationsDatum {
    type: string;
    data: any
}

export type InfoAdditionalProducts = StatusAndData<InfoAdditionalProductsDatum[]>
export interface InfoAdditionalProductsDatum {
    price: number;
    addition_info: AdditionInfo;
}
export interface AdditionInfo {
    id: number;
    slug: string;
    rating: number;
    type_id: number;
    duration_event: string | null;
    lang_info: LangInfo;
}

export type MediaGallery = StatusAndData<MediaGalleryData[]>
export interface MediaGalleryData {
    html: string;
}


