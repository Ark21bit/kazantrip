import type { SEO } from "./shared";

export interface IndexPage {
    content: Content;
    slider: SliderIndex;
    recommendations: RecommendationsClass;
    main_products: RecommendationsClass;
    main_certificates: any;
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

export interface MainCertificatesLangInfo {
    lang: string;
    title: string;
}

export interface RecommendationsClass {
    status: boolean;
    data: any[];
}

export interface SliderIndex {
    status: boolean;
    data: SliderIndexDatum[];
}

export interface SliderIndexDatum {
    target_url: string;
    is_sales: boolean;
    lang_info: FluffyLangInfo;
    media_preview: string;
}

export interface FluffyLangInfo {
    lang: string;
    title: string;
    description: string;
}