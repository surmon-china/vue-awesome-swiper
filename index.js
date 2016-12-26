/**
 * Vue-awesome-swiper
 * @author Surmon.me
 */

const Swiper = require('swiper')
const SwiperComponent = require('./swiper.vue')
const SlideComponent = require('./slide.vue')
if (typeof global.window != 'undefined') window.Swiper = Swiper

const swiper = {
  swiperSlide: SlideComponent,
  swiper: SwiperComponent,
  swiperPlugins: Swiper.prototype.plugins,
  install: function(Vue) {
    Vue.component('swiper', SwiperComponent)
    Vue.component('swiper-slide', SlideComponent)
  }
}

module.exports = swiper
