import type { Reviews } from "../review";
import type { BasePage, InfoAdditionalProducts, InfoBreadcrumbs, InfoRecommendations, InfoSEOBlocks, LangInfo, MediaGallery, StatusAndData } from "../shared";

export type IndividualE = BasePage<IndividualEData>

export interface IndividualEData {
    id: number;
    slug: string;
    type_id: number;
    category_id: number;
    is_active_pay: boolean;
    is_active: boolean;
    is_sale: boolean;
    sort: number;
    is_auto_access: boolean;
    payment_types: number[];
    start_place_types: number[] | null;
    duration_event: string | null;
    duration_event_text: string;
    price_see: number;
    price_see_old: number | null;
    info_breadcrumbs: InfoBreadcrumbs;
    info_reviews: Reviews;
    media_preview: string | null;
    media_gallery: MediaGallery;
    lang_info: IndividualELangInfo;
    info_recommendations: InfoRecommendations;
    info_seo_blocks: InfoSEOBlocks;
    info_additional_products: InfoAdditionalProducts;
    info_prices: InfoPrices;
}

export interface IndividualELangInfo extends LangInfo {
    mini_description?: string;
    part_info: string[]
}

type InfoPrices = StatusAndData<InfoPricesData[]>
interface InfoPricesData {
    type_price_id: number;
    price: number;
}