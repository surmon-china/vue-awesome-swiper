/**
 * Vue-awesome-swiper
 * @author Surmon.me
 */

var Swiper = require('swiper')
var SwiperComponent = require('./swiper.vue')
var SlideComponent = require('./slide.vue')
SwiperComponent = SwiperComponent.default || SwiperComponent
SlideComponent = SlideComponent.default || SlideComponent
if (typeof window !== 'undefined') {
	window.Swiper = Swiper
}

var swiper = {
  swiperSlide: SlideComponent,
  swiper: SwiperComponent,
  swiperPlugins: Swiper.prototype.plugins,
  install: function(Vue) {
    Vue.component(SwiperComponent.name, SwiperComponent)
    Vue.component(SlideComponent.name, SlideComponent)
  }
}

module.exports = swiper
