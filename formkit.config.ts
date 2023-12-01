import { generateClasses } from '@formkit/themes'
import theme from './FormkitTheme'
import { ru, en } from '@formkit/i18n'
import { createInput } from '@formkit/vue'
import select from './components/FormKit/Select.vue'
export default {
    locales: { ru, en },
    locale: 'en',
    config: {
        classes: generateClasses(theme),
    },
    inputs: {
        /* counter: createInput(counter, {
            component: counter
        }), */
        selectC: createInput(select, {
            props: ['options']
        }),
        /* datepickerC: createInput(datepicker, {
            props: [
                'autoApply',
                'minDate',
                'locale',
                'ignoreTimeValidation',
                'allowedDates',
                'enableTimePicker',
                'clearable',
                'monthNameFormat',
                'timezone',
            ]
        }),
        ratingC: createInput(rating, {
            props: ['max']
        }), */
    },
}

declare module '@formkit/inputs' {
    interface FormKitInputProps<Props extends FormKitInputs<Props>> {
        'selectC': {
            type: 'selectC',
            options: any
        }
        'datepickerC': {
            type: 'datepickerC',
        }
        'counter': {
            type: 'counter',
        }
        'ratingC': {
            type: 'ratingC',
        }
    }
}