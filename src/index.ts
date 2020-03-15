/**
 * @file vue-awesome-swiper
 * @module entry
 * @author Surmon <https://github.com/surmon-china>
 */

import { SwiperOptions } from 'swiper'
import _Vue, { PluginFunction } from 'vue'
import { SWIPER_DIRECTIVE_NAME } from './constants'
import SwiperDirective, { getDirectiveByOptions } from './directive'
import SwiperComponent from './swiper.vue'
import SwiperSlideComponent from './slide.vue'
import { SWIPER_COMPONENT_NAME, SWIPER_SLIDE_COMPONENT_NAME } from './constants'

interface InstallFunction extends PluginFunction<SwiperOptions> {
  installed?: boolean
}

export const install: InstallFunction = (Vue: typeof _Vue, globalOptions?: SwiperOptions) => {
  if (install.installed) return
  install.installed = true

  if (globalOptions) {
    (SwiperComponent as any).props.defaultOptions.default = () => globalOptions
  }

  Vue.component(SWIPER_COMPONENT_NAME, SwiperComponent)
  Vue.component(SWIPER_SLIDE_COMPONENT_NAME, SwiperSlideComponent)
  Vue.directive(SWIPER_DIRECTIVE_NAME, getDirectiveByOptions(globalOptions))
}

export const Swiper = SwiperComponent
export const SwiperSlide = SwiperSlideComponent
export const directive = SwiperDirective

export default {
  install,
  directive,
  Swiper: SwiperComponent,
  SwiperSlide: SwiperSlideComponent
}
