import type { Reviews } from "../review";
import type { InfoPrices, InfoRecommendations, InfoSEOBlocks, LangInfo, MediaGallery, StatusAndData } from "../shared";

export interface RegularE {
    type: string;
    data: RegularEData;
    is_redirect: boolean;
}

export interface RegularEData {
    id: number;
    slug: string;
    url_panorama: null;
    type_id: number;
    type_certificate: null;
    category_id: number;
    is_active_pay: boolean;
    is_active: boolean;
    is_sale: boolean;
    is_radio_gid: boolean;
    sort: number;
    rating: number;
    is_auto_access: boolean;
    payment_types: number[];
    start_place_types: number[];
    duration_event: string;
    duration_event_text: string;
    price_see: number;
    price_see_old: number;
    info_breadcrumbs: InfoBreadcrumbs;
    info_reviews: Reviews;
    media_preview: string | null;
    media_gallery: MediaGallery;
    lang_info: AdditionInfoLangInfo;
    info_recommendations: InfoRecommendations;
    info_seo_blocks: InfoSEOBlocks;
    info_route_blocks: InfoRouteBlocks;
    info_partners_blocks: InfoPartnersBlocks;
    info_additional_products: InfoAdditionalProducts;
    info_timetables: InfoTimetables;
    info_prices: InfoPrices;
}

export type InfoPartnersBlocks = StatusAndData<InfoPartnersBlocksData[]>
export interface InfoPartnersBlocksData {
    sort: number;
    lang_info: {
        lang: string;
        title: string;
        url: string;
    }
    media_preview: string
}

export interface InfoAdditionalProducts {
    status: boolean;
    data: InfoAdditionalProductsDatum[];
}

export interface InfoAdditionalProductsDatum {
    price: number;
    addition_info: AdditionInfo;
}

export interface AdditionInfo {
    id: number;
    slug: string;
    rating: number;
    type_id: number;
    duration_event: Date | null;
    lang_info: AdditionInfoLangInfo;
}

export interface AdditionInfoLangInfo {
    lang: Lang;
    title: string;
    description?: string;
    text?: string;
    visible_text?: string;
    half_text?: string[];
    mini_description?: string;
}

export enum Lang {
    Ru = "ru",
}

export interface InfoBreadcrumbs {
    status: boolean;
    data: InfoBreadcrumbsDatum[];
}

export interface InfoBreadcrumbsDatum {
    id: number;
    sort: number;
    slug: string;
    lang_info: DatumLangInfo;
}

export interface DatumLangInfo {
    lang: Lang;
    title: string;
    title_short: string;
}

export interface DatumData {
    id: number;
    slug: string;
    url_panorama: null;
    type_id: number;
    type_certificate: number | null;
    category_id: number | null;
    is_active_pay: boolean;
    is_active: boolean;
    is_sale: boolean;
    is_radio_gid: boolean;
    sort: number;
    rating: number;
    is_auto_access: boolean;
    payment_types: number[];
    start_place_types: number[] | null;
    duration_event: null | string;
    duration_event_text: string;
    price_see: number | null;
    price_see_old: number | null;
    media_preview: null;
    lang_info: AdditionInfoLangInfo;
    info_prices?: InfoPrices;
}

export interface InfoTimetables {
    status: boolean;
    data: InfoTimetablesDatum[];
}

export interface InfoTimetablesDatum {
    id: number;
    max_count_people: number;
    left_count: number;
    start_event_at: Date;
    start_event_at_format_day: string;
    start_event_at_format_time: string;
}

export type InfoRouteBlocks = StatusAndData<InfoRouteBlocksData[]>
export interface InfoRouteBlocksData {
    sort: number;
    lang_info: LangInfo;
    media_preview: string;
}