import { generateClasses } from '@formkit/themes'
import theme from './FormkitTheme'
import { ru, en } from '@formkit/i18n'
import { createInput } from '@formkit/vue'
import select from './components/FormKit/Select.vue'
import datepicker from './components/FormKit/Datepicker.vue'
import rating from './components/FormKit/Rating.vue'
import selectTel from './components/FormKit/SelectTel.vue'
import counter from './components/FormKit/Counter.vue'
import toggleButtons from './components/FormKit/toggleButtons.vue'
import counterGMin from './rules/counterGMin'
import counterGMax from './rules/counterGMax'
import children from './rules/children'
export default {
    rules: { counterGMin, counterGMax, children },
    locales: { ru, en },
    locale: 'ru',
    config: {
        classes: generateClasses(theme),
    },
    icons: {
        checkboxDecorator: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.33366 11.3333L13.2503 6.41667C13.4031 6.26389 13.5975 6.1875 13.8337 6.1875C14.0698 6.1875 14.2642 6.26389 14.417 6.41667C14.5698 6.56944 14.6462 6.76389 14.6462 7C14.6462 7.23611 14.5698 7.43056 14.417 7.58333L8.91699 13.0833C8.75033 13.25 8.55588 13.3333 8.33366 13.3333C8.11144 13.3333 7.91699 13.25 7.75033 13.0833L5.58366 10.9167C5.43088 10.7639 5.35449 10.5694 5.35449 10.3333C5.35449 10.0972 5.43088 9.90278 5.58366 9.75C5.73644 9.59722 5.93088 9.52083 6.16699 9.52083C6.4031 9.52083 6.59755 9.59722 6.75033 9.75L8.33366 11.3333Z" fill="CurrentColor"/></svg>'
    },
    inputs: {
        counter: createInput(counter, {
            component: counter
        }),
        selectC: createInput(select, {
            props: ['options', 'placeholder', 'optionLabel', 'optionValue']
        }),
        datepickerC: createInput(datepicker, {
            props: [
                'autoApply',
                'minDate',
                'maxDate',
                'locale',
                'ignoreTimeValidation',
                'allowedDates',
                'enableTimePicker',
                'clearable',
                'monthNameFormat',
                'timezone',
                'placeholder',
                'teleport'
            ]
        }),
        ratingC: createInput(rating, {
            props: ['max', 'size']
        }),
        toggleButtons: createInput(toggleButtons, {
            props: ['options']
        }),
        selectTel: createInput(selectTel, { family: 'text' }),
    },
}

declare module '@formkit/inputs' {
    interface FormKitInputProps<Props extends FormKitInputs<Props>> {
        'selectC': {
            type: 'selectC',
            options: any,
            placeholder?: string,
            optionLabel?: string,
            optionValue?: string,
        }
        'datepickerC': {
            type: 'datepickerC',
        }
        'counter': {
            type: 'counter',
        }
        'ratingC': {
            type: 'ratingC',
            max?: number,
            size?: string
        },
        "toggleButtons": {
            options: [{ label: string, value: any }]
        }
    }
}