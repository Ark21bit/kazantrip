import type { SEO, StatusAndData } from './shared'
export interface About {
    content: AboutContent;
    teams: Teams;
    guides: Teams;
    seo: SEO;
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
    post: null | string;
    media_avatar: null | string;
}