import type { TimetableInfo } from "./timetable";

export interface GeneralConfig {
	products: Products;
	structure: any[];
	orders: Orders;
	static_info: StaticInfo;
	locales: Locales;
	redirect_page: any[];
	timetable: Timetable;
	banners: Banners[]
}

export interface Banners {
	id: number
	key: string
	title: string
	description: string
	image: string
	url: string
	is_active: boolean
}

export interface Locales {
	ru: string;
	en: string;
}

export interface Orders {
	places_start: {
		id: number;
		title: string;
		map_href: string;
		key: string;
	}[];
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
	agent_info: {
		title: string;
		url: string;
	},
	ticket_sort: number[],
	price_type_sort: number[],
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
	socials: Record<Socials, string>;
	departure_points: departure_pointsData[];
	company_details: string;
}

export interface departure_pointsData {
	url: string;
	title: string;
	phone: string;
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
	need_select_min_one_ticket: string
	no_only_children: string
	select_date_and_time: string
	select_date: string;
	menu: string;
	more: string;
	duration: string;
	reviews: string;
	order: string;
	hotel: string;
	group: string;
	no_prepayment_required: string;
	check_data_and_send_order: string,
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
	"2gis_review": string;
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
	sale_coupon_active_online: string;
	sale_coupon_active: string;
	starting_point: string;
	tourist_telephone: string;
	sale_coupon: string;
	type_payment: string;
	type_ticket: string;
	finish: string,
	on_map: string,
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
	total: string;
	order_certificate: string;
	circular_photo_panorama: string;
	video_reviews_ou_tourists: string;
	brief_audio_tour: string;
	radio_guide: string;
	yes_free: string;
	partner: string;
	route: string;
	similar_excursions: string;
	congratulations: string;
	waiting_call_manager: string;
	more_excursion: string;
	choose_an_excursion: string;
	send_request_to_indiv_excursion: string;
	leave_your_review: string;
	close: string;
	welcome_excursion_center_the_city: string;
	sale_text: string;
	count_reviews: string;
	find_suitable_excursion: string;
	submit_request_private: string;
	message: string;
	email_en: string;
	find_out_more: string;
	read_reviews_our_clients: string;
	reservation_a_place: string;
	guide_loudspeaker: string;
	confirm_excursion_info: string;
	confirm_personal_data: string;
	select_type_ticket: string;
	pick_up: string;
	certificate_name: string;
	start: string;
	date_time_order_select: string;
	team_managers: string;
	team_gid: string;
	our_history: string;
	our_employee: string;
	our_gids: string;
	have_sales: string;
	sale_price_additional_text: string;
}
export interface TimeText {
	short_h: string;
	short_i: string;
}

export interface Menu {
	header: Record<'excursions' | 'reviews' | 'about' | 'panorams', Excursions>;
	footer: Record<'excursions' | 'about' | 'panorams' | 'blog', Excursions>;
}

export interface Excursions {
	title: string;
	slug: string;
	children?: Excursions[];
	title_hidden?: string;
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
	today: TimetableInfo[];
}