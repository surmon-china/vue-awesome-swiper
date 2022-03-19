/**
 * @file vue-awesome-swiper
 * @author Surmon <https://github.com/surmon-china>
 */

import { Swiper, SwiperSlide } from 'swiper/vue';
export * from 'swiper/vue';
export default {
  Swiper: Swiper,
  SwiperSlide: SwiperSlide,
  install(app) {
    app.component('Swiper', Swiper);
    app.component('SwiperSlide', SwiperSlide);
  }
};
