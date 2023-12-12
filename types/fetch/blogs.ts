import type { PageLangInfo, SEO, StatusAndData } from './shared'
export interface Blogs {
    content: Content;
    articles: BlogsArticles;
    seo: SEO;
}

export type BlogsArticles = StatusAndData<BlogsArticlesDatum[]>;

export interface BlogsArticlesDatum {
    id: number;
    slug: string;
    lang_info: PageLangInfo;
    media_preview: string;
}

export interface Content {
    title: string;
    text_1: string;
    text_2: string;
}
