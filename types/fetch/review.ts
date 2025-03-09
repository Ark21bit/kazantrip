import type { SEO } from "./shared";

export interface ReviewsPage {
    content: Content;
    seo: SEO;
}

export interface Content {
    title: string;
    text_1: string;
    text_2: string;
}

export type Review = Pick<ReviewsDatum, 'name' | 'rating' | 'message' | 'created_at'> & { title?: string }

export interface Reviews {
    status: boolean;
    data: ReviewsDatum[];
    links: Links;
    meta: Meta;
}

export interface ReviewsDatum {
    rating: number;
    name: string;
    message: string;
    created_at: string;
    created_at_format: string;
    product_info: any;
}

export interface Links {
    first: string;
    last: string;
    prev: null;
    next: null;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Link {
    url: null | string;
    label: string;
    active: boolean;
}