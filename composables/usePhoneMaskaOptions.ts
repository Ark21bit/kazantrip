export const usePhoneMaskaOptions = () => {
    const options = {
        mask: (value: string) => {
            if (value.startsWith('8')) return '8(###)###-##-##'
            if (value.startsWith('+7') || value.startsWith('7')) return '+7(###)###-##-##'
            if (value.startsWith('+375') || value.startsWith('375')) return '+375(##)###-##-##'
            return null
        }
    }

    return { options }
};

