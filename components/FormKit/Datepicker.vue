<template>
    <VueDatePicker :locale="locale" :timezone="timezone" :model-value="context.value" :clearable="clearable" :format="format" :monthNameFormat="monthNameFormat" @update:model-value="handleInput" :enableTimePicker="enableTimePicker" :allowedDates="allowedDates"
        :autoApply="autoApply" :min-date="minDate" :ignore-time-validation="ignoreTimeValidation">
        <template #calendar-header="{ day }">
            <span class="text-sm font-medium">{{ day[0] }}</span>
        </template>
        <template #input-icon>
            <Icon :class="context.classes.inputIcon" name="CalendarOutline"></Icon>
        </template>
        <template #calendar-icon>
            <Icon :class="context.classes.calendarIcon" name="CalendarOutline"></Icon>
        </template>
        <template #arrow-left>
            <svg class="text-sm inline" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L3.55 12Z" />
            </svg>
        </template>
        <template #arrow-right>
            <svg class="text-sm inline" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z" />
            </svg>
        </template>
    </VueDatePicker>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
const props = defineProps({
    context: Object,
})
function handleInput(value) {
    props.context.node.input(value)
}
const { locale: localeI18n } = useI18n()

const autoApply = props.context.autoApply ?? true
const minDate = props.context.minDate ?? null
const locale = props.context.locale ?? localeI18n.value
const ignoreTimeValidation = props.context.ignoreTimeValidation ?? true
const allowedDates = props.context.allowedDates ?? null
const enableTimePicker = props.context.enableTimePicker ?? false
const clearable = props.context.clearable ?? false
const monthNameFormat = props.context.monthNameFormat ?? "long"
const timezone = props.context.timezone ?? "Europe/Moscow"

const format =(value)=>{
    return useDayjs()(value).locale(locale).format(props.context.format ?? "L")
}


</script>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';

.dp__theme_light {
    --dp-background-color: white;
    --dp-text-color: #333333;
    --dp-hover-color: #19B6D6;
    --dp-hover-text-color: white;
    --dp-hover-icon-color: #19B6D6;
    --dp-primary-color: #19B6D6;
    --dp-primary-text-color: white;
    --dp-secondary-color: #CFCFCF;
    --dp-border-color: transparent;
    --dp-menu-border-color: transparent;
    --dp-border-color-hover: transparent;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #333333;
    --dp-danger-color: #ff6f60;
    --dp-highlight-color: rgba(25, 118, 210, 0.1);
}

.dp__input {
    padding: 13px 12px;
    border: 0;
    border-radius: 0;
    color:currentColor;
    background: transparent;
}

.dp__arrow_top {
    display: none;
}

.dp__input_icon {
    display: flex;
    left: calc(100% - 30px);
    right: 0;
}

.dp__inner_nav:hover {
    background: transparent;
}

.dp__button:hover {
    background: transparent;
}

.dp--year-select {
    color: #19B6D6;
}

.dp__menu {
    box-shadow: 0px 6px 25px 0px rgba(34, 115, 141, 0.1);
}

.dp__month_year_select:hover {
    background: transparent;
    color: #19B6D6;
}

.dp__month_year_wrap {
    gap: 4px;
}

.dp__month_year_select:first-child {
    justify-content: flex-end;
}

.dp__month_year_select:last-child {
    justify-content: flex-start;
}

.dp__inner_nav {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dp__inner_nav svg {
    height: auto;
    width: auto;
}

.dp__month_year_row {
    margin-bottom: 21px;
}

.dp__calendar_row {
    gap: 10px;
}

.dp__calendar_header {
    gap: 10px;
}

:root {
    /*General*/
    --dp-font-family: Inter;
    --dp-border-radius: 15px;
    /*Configurable border-radius*/
    --dp-cell-border-radius: 4px;
    /*Specific border radius for the calendar cell*/
    --dp-common-transition: all 0.1s ease-in;
    /*Generic transition applied on buttons and calendar cells*/

    /*Sizing*/
    --dp-button-height: 35px;
    /*Size for buttons in overlays*/
    --dp-month-year-row-height: auto;
    /*Height of the month-year select row*/
    --dp-month-year-row-button-size: auto;
    /*Specific height for the next/previous buttons*/
    --dp-button-icon-height: 20px;
    /*Icon sizing in buttons*/
    --dp-cell-size: 24px;
    /*Width and height of calendar cell*/
    --dp-cell-padding: 4px 4.5px;
    /*Padding in the cell*/
    --dp-common-padding: 10px;
    /*Common padding used*/
    --dp-input-icon-padding: 35px;
    /*Padding on the left side of the input if icon is present*/
    --dp-input-padding: 6px 30px 6px 12px;
    /*Padding in the input*/
    --dp-menu-min-width: 260px;
    /*Adjust the min width of the menu*/
    --dp-action-buttons-padding: 2px 5px;
    /*Adjust padding for the action buttons in action row*/
    --dp-row-maring: 10px 0;
    /*Adjust the spacing between rows in the calendar*/
    --dp-calendar-header-cell-padding: 0.5rem;
    /*Adjust padding in calendar header cells*/
    --dp-two-calendars-spacing: 10px;
    /*Space between multiple calendars*/
    --dp-overlay-col-padding: 3px;
    /*Padding in the overlay column*/
    --dp-time-inc-dec-button-size: 32px;
    /*Sizing for arrow buttons in the time picker*/
    --dp-menu-padding: 15px;
    /*Menu padding*/

    /*Font sizes*/
    --dp-font-size: 0.875rem;
    /*Default font-size*/
    --dp-preview-font-size: 0.8rem;
    /*Font size of the date preview in the action row*/
    --dp-time-font-size: 0.8rem;
    /*Font size in the time picker*/

    /*Transitions*/
    --dp-animation-duration: 0.1s;
    /*Transition duration*/
    --dp-menu-appear-transition-timing: cubic-bezier(.4, 0, 1, 1);
    /*Timing on menu appear animation*/
    --dp-transition-timing: ease-out;
    /*Timing on slide animations*/
}
</style>