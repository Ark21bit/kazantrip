export interface GeneralConfig {
    products: Products;
    structure: any[];
    orders: Orders;
    static_info: StaticInfo;
    locales: Locales;
    redirect_page: any[];
    timetable: Timetable;
}

export interface Locales {
    ru: string;
    en: string;
}

export interface Orders {
    places_start: PaymentType[];
    payment_types: PaymentType[];
    price_types: PaymentType[];
    ticket_types: PaymentType[];
    week_days: PaymentType[];
    type_other_form: PaymentType[];
}

export interface PaymentType {
    id: number;
    key: string;
    title: string;
    url?: string;
}

export interface Products {
    types: PaymentType[];
    categories: PaymentType[];
    icons: PaymentType[];
}

export interface StaticInfo {
    contact: Contact;
    menu: Menu;
    footer_seo: FooterSEO;
    global_words: GlobalWords;
    bottom_footer: BottomFooter;
    other_links: OtherLinks;
}

export interface BottomFooter {
    procedure_provision_excursion_services: PaymentRules;
    payment_rules: PaymentRules;
    privacy_policy: PaymentRules;
}

export interface PaymentRules {
    title: string;
    slug: string;
}

export interface Contact {
    opening_hours: OpeningHours;
    telephones: string[];
    emails: string[];
    addresses: Addresses;
    office_info: OfficeInfo;
    number_rto: NumberRto;
    socials: Socials;
    departure_points: string[];
    company_details: string;
}

export interface OfficeInfo {
    office_1: Office;
    office_2: Office;
}

export interface Office {
    address: string;
    telephone: string;
}


export type Socials = 'telegram' | 'vk' | 'whatsApp'

export interface Addresses {
    main: string;
    index_mail: string;
}

export interface NumberRto {
    title: string;
    value: string;
}

export interface OpeningHours {
    line_1: string;
}

export interface FooterSEO {
    column_1: Column;
    column_2: Column;
}

export interface Column {
    title: string;
    data: PaymentRules[];
}
export interface GlobalWords {
    time_text: TimeText;
    up: string;
    departure_excursions: string;
    calendar_excursions: string;
    address: string;
    addresses: string;
    single_line: string;
    no_breaks_off: string;
    main_office: string;
    mail_index_address: string;
    telephone: string;
    email: string;
    time_work: string;
    seo_footer_text_1: string;
    seo_footer_text_2: string;
    copyright: string;
    select_date: string;
    menu: string;
    more: string;
    duration: string;
    reviews: string;
    order: string;
    hotel: string;
    group: string;
    all_excursion: string;
    "1_people_placement": string;
    "2_people_placement": string;
    additional_people_placement: string;
    request_call: string;
    tic: string;
    thank_you: string;
    subscribe_telegram_text: string;
    subscribe: string;
    pay: string;
    success_send_request: string;
    success_send_request_no_status_pay: string;
    fail_send_request: string;
    on_main_page: string;
    send_review: string;
    yandex_review: string;
    tell_about_impressions_trip: string;
    about_impressions_trip: string;
    title_excursion: string;
    you_mark: string;
    fio: string;
    excursion: string;
    total: string;
    order_certificate: string;
    email_text: string;
    recommendations: string;
    date: string;
    send: string;
    confirmation_order: string;
    total_order_payment: string;
    note: string;
    services: string;
    confirm_booking: string;
    confirm_who: string;
    confirm_description_text: string;
    product_name: string;
    product_date: string;
    product_time: string;
    starting_point: string;
    tourist_telephone: string;
    sale_coupon: string;
    type_payment: string;
    type_ticket: string;
    comment_for_order: string;
    reservation: string;
    price: string;
    count: string;
    count_people: string;
    select_hotel: string;
    select_datetime: string;
    select_date_static: string;
    product_program: string;
    price_list: string;
    price_tour_list: string;
    additional_service: string;
    show_more: string;
    add_review: string;
    hide: string;
    person_data_contract: string;
    order_confirm_procedure_provision_excursion_services: string;
    order_fz_confirm_text: string;
    general_description: string;
    nearest_date: string;
    departure: string;
    all_price: string;
    type_excursion: string;
    included_in_the_price: string;
    free_child_seven_years: string;
    members_in_the_group: string;
    cost_per_group: string;
    contact: string;
    requisites: string;
    cancel: string;
    select_category: string;
    time: string;
    check: string;
    select_tickets: string;
    select_additional: string;
    number_telephone: string;
    type_allocation: string;
    not_enough_tickets: string;
    tickets_left: string;
    review: string;
    review_added_successfully: string;
    wishes: string;
    an_error_occurred: string;
    sale: string;
    ot: string;
    ot_people: string;
    error_404: string;
    error_500: string;
    error_429: string;
    to_learn_more: string;
    view_all_excursions: string;
    order_now: string;
    we_will_answer_any_your_questions: string;
    ask_question: string;
    regular_excursions: string;
    individual_excursions: string;
    schedule: string;
    enter_code: string;
    enter_text: string;
    select_hotel_q: string;
    people_price_s: string;
    hide_more_details: string;
    more_excursions: string;
    timetable_on: string;
}
export interface TimeText {
    short_h: string;
    short_i: string;
}

export interface Menu {
    header: Footer;
    footer: Footer;
}

export interface Footer {
    excursions: Excursions;
    about: Excursions;
    panorams: Excursions;
    reviews?: Excursions;
}

export interface Excursions {
    title: string;
    slug: string;
    children?: PaymentRules[];
}

export interface OtherLinks {
    visit_tatarstan_afisha: VisitTatarstan;
    visit_tatarstan_site: VisitTatarstan;
}

export interface VisitTatarstan {
    title: string;
    url: string;
}

export interface Timetable {
    today: any[];
}