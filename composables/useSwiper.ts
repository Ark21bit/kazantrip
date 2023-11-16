import { register } from "swiper/element";
import type { SwiperOptions } from 'swiper/types';
export const useSwiper = (swiperContainer: MaybeRefOrGetter<any>, options: MaybeRefOrGetter<SwiperOptions | undefined> | undefined) => {
    register();
    onMounted(() => {
        Object.assign(toValue(swiperContainer), {
            ...toValue(options),
        });
        toValue(swiperContainer).initialize();
    });
};
