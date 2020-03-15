import Vue from 'vue';
import Swiper, { SwiperOptions } from 'swiper';
import { SWIPER_INSTANCE_NAME } from './constants';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    $swiper: Swiper | null;
}, {
    handleSwiperClick(event: MouseEvent): void;
    autoReLoop(): void;
    update(): void;
    bindEvents(swiper: Swiper): void;
    initSwiper(): void;
}, {
    swiperInstance: Swiper | null;
    swiperOptions: SwiperOptions;
    wrapperClass: string;
}, {
    defaultOptions: SwiperOptions;
    options: SwiperOptions;
    autoUpdate: boolean;
    autoDestroy: boolean;
    deleteInstanceOnDestroy: boolean;
    cleanupStylesOnDestroy: boolean;
}>;
export default _default;
