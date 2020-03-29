/**
 * @file vue-awesome-swiper
 * @module default-export
 * @author Surmon <https://github.com/surmon-china>
 */

import SwiperClass from 'swiper'
import exporter from './exporter'

const VueAwesomeSwiper = exporter(SwiperClass)

export const version = VueAwesomeSwiper.version
export const install = VueAwesomeSwiper.install
export const directive = VueAwesomeSwiper.directive
export const Swiper = VueAwesomeSwiper.Swiper
export const SwiperSlide = VueAwesomeSwiper.SwiperSlide
export default VueAwesomeSwiper
