/**
 * @file vue-awesome-swiper
 * @author Surmon <https://github.com/surmon-china>
 */

import type { App } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

export * from 'swiper/vue';

declare const _default: {
  Swiper: typeof Swiper;
  SwiperSlide: typeof SwiperSlide;
  install(app: App): void;
};

export default _default;
