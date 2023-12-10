import type { InfoBreadcrumbs } from "../shared";

export interface Certificate {
    type: string;
    data: CertificateData;
    is_redirect: boolean;
}

export interface CertificateData {
    id: number;
    slug: string;
    url_panorama: null;
    type_id: number;
    type_certificate: number;
    category_id: null;
    is_active_pay: boolean;
    is_active: boolean;
    is_sale: boolean;
    is_radio_gid: boolean;
    sort: number;
    rating: number;
    is_auto_access: boolean;
    payment_types: number[];
    start_place_types: null;
    duration_event: null;
    duration_event_text: string;
    price_see: number;
    price_see_old: number;
    info_breadcrumbs: InfoBreadcrumbs;
    info_reviews: InfoAdditionalProducts;
    media_preview: null;
    media_gallery: InfoAdditionalProducts;
    lang_info: FluffyLangInfo;
    info_recommendations: InfoAdditionalProducts;
    info_seo_blocks: InfoAdditionalProducts;
    info_route_blocks: InfoAdditionalProducts;
    info_partners_blocks: InfoAdditionalProducts;
    info_additional_products: InfoAdditionalProducts;
    info_prices: InfoAdditionalProducts;
}

export interface DatumData {
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
    media_preview: string;
    lang_info: PurpleLangInfo;
    info_prices: InfoAdditionalProducts;
}

export interface Datum {
    type?: string;
    data?: DatumData;
    type_ticket_id?: number;
    price?: number;
}

export interface InfoAdditionalProducts {
    status: boolean;
    data: Datum[];
}

export interface PurpleLangInfo {
    lang: string;
    title: string;
    description: string;
    text: string;
    visible_text: string;
    seo_title: string;
    seo_description: string;
}

export interface FluffyLangInfo {
    lang: string;
    title: string;
    description: string;
}