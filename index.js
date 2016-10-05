/**
 * Vue-swiper-master
 * @author Surmon.me
 * @date 2016-10-5
 */

var SwiperComponent = require('./swiper.vue')
var SlideComponent = require('./slide.vue')

var swiper = {
  slide: SlideComponent,
  swiper: SwiperComponent,
  install: function(Vue) {
    Vue.component('swiper', SwiperComponent)
    Vue.component('swiper-slide', SlideComponent)
  }
}

module.exports = swiper