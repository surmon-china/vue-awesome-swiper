
/*
* VueAwesomeSwiper
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-awesome-swiper
*/


import _Swiper from 'swiper/dist/js/swiper.js'
import SlideComponent from './slide.vue'
import SwiperComponent from './swiper.vue'

const Swiper = typeof window !== 'undefined' && window.Swiper || _Swiper
const swiper = SwiperComponent
const swiperSlide = SlideComponent
const install = function (Vue, globalOptions) {
  if (globalOptions) {
    SwiperComponent.props.globalOptions.default = () => globalOptions
  }
  Vue.component(SwiperComponent.name, SwiperComponent)
  Vue.component(SlideComponent.name, SlideComponent)
}
const VueAwesomeSwiper = { Swiper, swiper, swiperSlide, install }

export default VueAwesomeSwiper
export { Swiper, swiper, swiperSlide, install }
