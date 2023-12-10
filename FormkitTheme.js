// The following Tailwind theme aspires to be a reproduction of the
// default optional Genesis CSS theme that ships with FormKit

export default {
    // Global styles apply to _all_ inputs with matching section keys
    global: {
        fieldset: 'border border-gray-400 rounded px-2 pb-1',
        help: 'text-xs leading-1.2 text-#868686',/* true */
        inner: 'relative formkit-invalid:border-#FA2E2E formkit-disabled:bg-gray-200 bg-#F2F8F8 overflow-hidden formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
        input: 'leading-1.2 appearance-none focus:outline-none bg-transparent focus:ring-0 focus:shadow-none',
        label: 'block mb-1 text-base leading-1.2 text-fblack',/* true */
        legend: 'font-bold text-sm',
        loaderIcon: 'inline-flex items-center w-4 text-gray-600 animate-spin',
        message: 'text-#FA2E2E text-xs leading-1.25 font-light',
        messages: 'list-none p-0 mt-1.25 mb-0 space-y-1',
        outer: 'formkit-disabled:opacity-50 relative',
        prefixIcon: 'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-1em [&>svg]:max-h-1em [&>svg]:m-auto',
        suffixIcon: 'w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-1em [&>svg]:max-h-1em [&>svg]:m-auto'
    },
    // Family styles apply to all inputs that share a common family
    'family:box': {
        decorator: 'block relative h-5 w-5 mr-3.5 rounded-.75 bg-transparent ring-inset ring ring-primary peer-checked:bg-primary text-transparent peer-checked:text-white',
        decoratorIcon: 'flex w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
        help: 'mb-2 mt-1.5',
        input: 'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
        inner: '$remove:formkit-disabled:bg-gray-200 shrink-0 $remove:bg-#F2F8F8',
        label: '$reset text-base leading-1.2 text-fblack select-none',
        wrapper: 'flex items-start',
    },
    'family:button': {
        input: '$reset inline-flex items-center bg-fblue text-white text-base leading-1.2 py-3 px-6 rounded-2.5 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
        prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
        suffixIcon: '$reset block w-4 ml-2 stretch',
    },
    'family:text': {
        inner: 'flex items-center border border-#E8E8E8 focus-within:border-primary [&>label:first-child]:focus-within:text-blue-500 rounded-lg',
        input: 'w-full px-3.75 py-3.5 text-base text-fblack placeholder-#868686',
    },
    'family:date': {
        inner: 'flex items-center border border-#E8E8E8 focus-within:border-primary [&>label:first-child]:focus-within:text-blue-500 rounded-lg',
        input: 'w-full px-3.75 py-3.5 text-base text-fblack placeholder-#868686',
    },
    radio: {
        decorator: 'rounded-full',
        decoratorIcon: 'w-5 p-1.25'
    },
    textarea: {
        inner: 'flex border border-#E8E8E8 focus-within:border-primary [&>label:first-child]:focus-within:text-blue-500 rounded-lg',
        input: 'block resize-none w-full px-3.75 py-3.5 text-base text-fblack placeholder-#868686',
    },
    counter: {
        input: 'w-8.5 p-0.5 text-center $remove:bg-transparent bg-#F6F6F6 rounded-1.25 font-medium text-sm text-fblack placeholder-#868686 leading-1.2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        inner: 'flex items-center gap-1.5 w-fit $remove:bg-#F2F8F8',
        decrement: 'aspect-square hover:text-primary transition-colors duration-500 easy-linear text-fblack disabled:text-inactive',
        increment: 'aspect-square hover:text-primary transition-colors duration-500 easy-linear text-fblack disabled:text-inactive'
    },
    selectC: {
        inner: '$remove:overflow-hidden flex relative items-center border border-#E8E8E8 focus-within:border-primary rounded-lg',
        input: 'items-center px-3.75 py-3.5 appearance-none bg-transparent flex grow justify-between w-full',
        dropdownWrapper: 'absolute mt-1.25 shadow-base ring ring-inset ring-#F6F6F6 z-1 top-full overflow-auto min-w-full max-h-100',
        listbox: 'bg-white overflow-hidden rounded-lg p-2.5',
        listitem: 'cursor-pointer hover:bg-primary px-3 py-2.5 rounded-lg hover:text-white transition-colors duration-500',
        listitemSelect: 'bg-primary text-white',
        selectIcon: 'text-lg transition-transform duration-500 ease-linear leading-none',
        selectText: 'min-h-1.2em text-base leading-1.2 text-fblack',
        placeholder: 'min-h-1.2em text-base leading-1.2 text-#868686',
    },
    datepickerC: {
        inner: '$remove:overflow-hidden flex items-center text-fblack border border-#E8E8E8 focus-within:border-primary [&>label:first-child]:focus-within:text-blue-500 rounded-lg leading-1.2',
        inputIcon: 'text-5.75 text-fblack formkit-invalid:text-error',
        calendarIcon: 'text-xl',
    },
    ratingC: {
        inner: '$remove:bg-#F2F8F8 bg-transparent'
    }
}
