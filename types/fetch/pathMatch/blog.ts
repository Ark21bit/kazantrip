import type { BasePage, InfoBreadcrumbs, InfoRecommendations, InfoSEOBlocks, MediaGallery, PageLangInfo } from "../shared";

export type Blog = BasePage<BlogData>

export interface BlogData {
    id: number;
    slug: string;
    info_breadcrumbs: InfoBreadcrumbs;
    info_seo_blocks: InfoSEOBlocks;
    lang_info: PageLangInfo;
    media_preview: string | null;
    media_gallery: MediaGallery;
    info_recommendations: InfoRecommendations;
}