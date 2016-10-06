/**
 * Vue-awesome-swiper
 * @author Surmon.me
 */

var Swiper = require('swiper')
var SwiperComponent = require('./swiper.vue')
var SlideComponent = require('./slide.vue')

var swiper = {
  swiperSlide: SlideComponent,
  swiper: SwiperComponent,
  swiperPlugins: Swiper.prototype.plugins,
  install: function(Vue) {
    Vue.component('swiper', SwiperComponent)
    Vue.component('swiper-slide', SlideComponent)
  }
}

module.exports = swiper