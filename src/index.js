
/*
* VueAwesomeSwiper
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-awesome-swiper
*/


import _Swiper from 'swiper'
import SlideComponent from './slide.vue'
import SwiperComponent from './swiper.vue'

const Swiper = window.Swiper || _Swiper
const VueAwesomeSwiper = {
  Swiper,
  swiper: SwiperComponent,
  swiperSlide: SlideComponent,
  install(Vue, globalOptions) {
    if (globalOptions) {
      SwiperComponent.props.globalOptions.default = () => globalOptions
    }
    Vue.component(SwiperComponent.name, SwiperComponent)
    Vue.component(SlideComponent.name, SlideComponent)
  }
}

export default VueAwesomeSwiper
