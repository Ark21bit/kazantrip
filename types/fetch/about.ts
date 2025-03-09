import type { SEO, StatusAndData } from './shared'
export interface About {
    content: AboutContent;
    teams: Teams;
    guides: Teams;
    seo: SEO;
    history_year: HistoryYear
}

export interface AboutContent {
    title: string;
    title_team: string;
    text_1: string;
    text_2: string;
}

export type Teams = StatusAndData<TeamsDatum[]>

export interface TeamsDatum {
    fio: string;
    first_name: string;
    last_name: string;
    middle_name: null | string;
    email?: string | null;
    post: null | string;
    media_avatar: null | string;
    about: null | string;
}

export type HistoryYear = Record<string, HistoryYearData> 

export interface HistoryYearData {
    year: number;
    image: string;
    title: string;
    text: string;
}