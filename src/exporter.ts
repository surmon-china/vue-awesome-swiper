/**
 * @file vue-awesome-swiper
 * @module exporter
 * @author Surmon <https://github.com/surmon-china>
 */

import Swiper, {
  SwiperOptions,
  A11y,
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  HashNavigation,
  History,
  Keyboard,
  Lazy,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from "swiper";
import _Vue, { PluginFunction } from 'vue'
import { CoreNames } from './constants'
import getDirective from './directive'
import getSwiperComponent from './swiper'
import SwiperSlideComponent from './slide'

Swiper.use([
  A11y,
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  HashNavigation,
  History,
  Keyboard,
  Lazy,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom
])

export interface InstallFunction extends PluginFunction<SwiperOptions> {
  installed?: boolean
}

const getInstaller = (SwiperClass: typeof Swiper) => {
  const install: InstallFunction = (Vue: typeof _Vue, globalOptions?: SwiperOptions) => {
    if (install.installed) return

    const SwiperComponent = getSwiperComponent(SwiperClass)
    if (globalOptions) {
      (SwiperComponent as any).options.props.defaultOptions.default = () => globalOptions
    }

    Vue.component(CoreNames.SwiperComponent, SwiperComponent)
    Vue.component(CoreNames.SwiperSlideComponent, SwiperSlideComponent)
    Vue.directive(CoreNames.SwiperDirective, getDirective(SwiperClass, globalOptions))
    install.installed = true
  }
  return install
}

export default function exporter(SwiperClass: typeof Swiper) {
  return {
    version: 'PACKAGE_VERSION',
    install: getInstaller(SwiperClass),
    directive: getDirective(SwiperClass),
    [CoreNames.SwiperComponent as const]: getSwiperComponent(SwiperClass),
    [CoreNames.SwiperSlideComponent as const]: SwiperSlideComponent
  }
}
