import type { SEO } from "./shared";

export interface PageTimetable {
    content: Content;
    timetable: { [key: string]: Timetable };
    files: File[];
    seo: SEO;
}

export interface Content {
    title: string;
    text_1: string;
    text_2: string;
}

export interface File {
    title: string;
    description: string;
    url: string;
}

export interface Timetable {
    day: string;
    info: TimetableInfo[];
}

export interface TimetableInfo {
    time: string;
    timetable_id: number;
    product_id: number;
    product_name: null;
    visible_prices: VisiblePrices;
    product_prices: ProductPrice[];
    url: string;
}

export interface ProductPrice {
    type_ticket_id: number;
    price: number;
}

export interface VisiblePrices {
    new: number;
    old: number;
}
