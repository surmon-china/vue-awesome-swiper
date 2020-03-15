/**
 * @file vue-awesome-swiper
 * @module constants
 * @author Surmon <https://github.com/surmon-china>
 */
import { CommonEvent } from 'swiper';
export declare const SWIPER_COMPONENT_NAME = "Swiper";
export declare const SWIPER_SLIDE_COMPONENT_NAME = "SwiperSlide";
export declare const SWIPER_DIRECTIVE_NAME = "swiper";
export declare const SWIPER_INSTANCE_NAME = "$swiper";
export declare const DEFAULT_CLASSES: Readonly<{
    containerClass: string;
    wrapperClass: string;
    slideClass: string;
}>;
export declare type SwiperClassKey = keyof typeof DEFAULT_CLASSES;
export declare enum ComponentEvents {
    Ready = "ready",
    ClickSlide = "click-slide"
}
export declare enum ComponentPropNames {
    AutoUpdate = "autoUpdate",
    AutoDestroy = "autoDestroy",
    DeleteInstanceOnDestroy = "deleteInstanceOnDestroy",
    CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
}
export declare const SWIPER_EVENTS: CommonEvent[];
