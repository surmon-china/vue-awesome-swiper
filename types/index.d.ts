/**
 * @file vue-awesome-swiper
 * @module entry
 * @author Surmon <https://github.com/surmon-china>
 */
import { SwiperOptions } from 'swiper';
import _Vue, { PluginFunction } from 'vue';
interface InstallFunction extends PluginFunction<SwiperOptions> {
    installed?: boolean;
}
export declare const install: InstallFunction;
export declare const Swiper: import("vue").VueConstructor<_Vue>;
export declare const SwiperSlide: import("vue").VueConstructor<_Vue>;
export declare const directive: import("vue").DirectiveOptions;
declare const _default: {
    install: InstallFunction;
    directive: import("vue").DirectiveOptions;
    Swiper: import("vue").VueConstructor<_Vue>;
    SwiperSlide: import("vue").VueConstructor<_Vue>;
};
export default _default;
