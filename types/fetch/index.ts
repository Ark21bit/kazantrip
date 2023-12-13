import type { SEO } from "./shared";

export interface IndexPage {
    content: Content;
    slider: SliderIndex;
    recommendations: Recommendations;
    partners: Partners;
    main_is_exclusive: MainIsExclusive;
    main_products: IndexPageMainProducts;
    main_certificates: MainCertificates;
    seo: SEO;
}

export interface Content {
    timetable: Timetable;
    recommendation: PartnersClass;
    form_search: FormSearch;
    partners: PartnersClass;
    main_products: PartnersClass;
}

export interface FormSearch {
    title: string;
    description: string;
}

export interface PartnersClass {
    title: string;
}

export interface Timetable {
    title: string;
    slug: string;
}

export interface MainCertificates {
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
    media_preview: null;
    lang_info: MainCertificatesLangInfo;
}

export interface MainCertificatesLangInfo {
    lang: string;
    title: string;
}

export interface MainIsExclusive {
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
    reviews_count: number;
    media_preview: string;
    lang_info: MainIsExclusiveLangInfo;
    info_prices: Recommendations;
}

export interface Recommendations {
    status: boolean;
    data: RecommendationsDatum[];
}

export interface RecommendationsDatum {
    type_ticket_id: number;
    price: number;
}

export interface MainIsExclusiveLangInfo {
    lang: string;
    title: string;
    description: string;
}

export interface IndexPageMainProducts {
    status: boolean;
    data: MainProductsDatum[];
}

export interface MainProductsDatum {
    id: number;
    slug: string;
    url_panorama: null | string;
    type_id: number;
    type_certificate: number | null;
    category_id: number;
    is_active_pay: boolean;
    is_active: boolean;
    is_sale: boolean;
    is_radio_gid: boolean;
    sort: number;
    rating: number;
    is_auto_access: boolean;
    payment_types: number[];
    start_place_types: number[] | null;
    duration_event:  string;
    duration_event_text: string;
    price_see: number;
    price_see_old: number;
    reviews_count: number;
    media_preview: string;
    lang_info: PurpleLangInfo;
    info_prices?: Recommendations | null;
}

export interface PurpleLangInfo {
    lang: string;
    title: string;
    mini_description?: string;
    description?: string;
    text?: string;
    half_text?: string[];
    visible_text?: string;
    video_url?: string;
}

export interface Partners {
    status: boolean;
    data: PartnersDatum[];
}

export interface PartnersDatum {
    id: number;
    lang_info: FluffyLangInfo;
    media_preview: string;
}

export interface FluffyLangInfo {
    lang: string;
    title: string;
    url?: string;
}

export interface SliderIndex {
    status: boolean;
    data: SliderIndexDatum[];
}

export interface SliderIndexDatum {
    target_url: string;
    is_sales: boolean;
    lang_info: MainIsExclusiveLangInfo;
    media_preview: string;
}