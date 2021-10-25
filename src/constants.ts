/**
 * @file vue-awesome-swiper
 * @module constants
 * @author Surmon <https://github.com/surmon-china>
 */

import { SwiperEvents } from 'swiper/types'

export enum CoreNames {
  SwiperComponent = 'Swiper',
  SwiperSlideComponent = 'SwiperSlide',
  SwiperDirective = 'swiper',
  SwiperInstance = '$swiper'
}

export const DEFAULT_CLASSES = Object.freeze({
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide'
})
export type SwiperClassKey = keyof typeof DEFAULT_CLASSES

export enum ComponentEvents {
  Ready = 'ready',
  ClickSlide = 'clickSlide',
}

export enum ComponentPropNames {
  AutoUpdate = 'autoUpdate',
  AutoDestroy = 'autoDestroy',
  DeleteInstanceOnDestroy = 'deleteInstanceOnDestroy',
  CleanupStylesOnDestroy = 'cleanupStylesOnDestroy'
}

// https://swiperjs.com/api/#events
type CommonEvent = keyof SwiperEvents
export const SWIPER_EVENTS: CommonEvent[] = [
  'init',
  'beforeDestroy',
  'slideChange',
  'slideChangeTransitionStart',
  'slideChangeTransitionEnd',
  'slideNextTransitionStart',
  'slideNextTransitionEnd',
  'slidePrevTransitionStart',
  'slidePrevTransitionEnd',
  'transitionStart',
  'transitionEnd',
  'touchStart',
  'touchMove',
  'touchMoveOpposite',
  'sliderMove',
  'touchEnd',
  'click',
  'tap',
  'doubleTap',
  'imagesReady',
  'progress',
  'reachBeginning',
  'reachEnd',
  'fromEdge',
  'setTranslate',
  'setTransition',
  'resize',
  'observerUpdate' as CommonEvent,
  'beforeLoopFix' as CommonEvent,
  'loopFix' as CommonEvent
]
