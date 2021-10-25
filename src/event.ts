/**
 * @file vue-awesome-swiper
 * @module event
 * @author Surmon <https://github.com/surmon-china>
 */

import Swiper from 'swiper'
import { SWIPER_EVENTS, ComponentEvents } from './constants'
import { kebabcase } from './utils'

export const handleClickSlideEvent = (swiper: Swiper | null, event: MouseEvent, emit: any): void => {
  if (swiper && !(swiper.destroyed)) {
    const eventPath = event.composedPath?.() || (event as any).path
    if (event?.target && eventPath) {
      const slides = Array.from(swiper.slides)
      const paths = Array.from(eventPath)
      // Click slide || slide[children]
      if (slides.includes(event.target as Element) || paths.some(item => slides.includes(item as Element))) {
        const clickedIndex = swiper.clickedIndex
        const reallyIndex = Number(swiper.clickedSlide?.dataset?.swiperSlideIndex)
        const reallyIndexValue = Number.isInteger(reallyIndex) ? reallyIndex : null
        emit(ComponentEvents.ClickSlide, clickedIndex, reallyIndexValue)
        emit(kebabcase(ComponentEvents.ClickSlide), clickedIndex, reallyIndexValue)
      }
    }
  }
}

export const bindSwiperEvents = (swiper: Swiper, emit: any): void => {
  SWIPER_EVENTS.forEach(eventName => {
    swiper.on(eventName, (...args: any[]) => {
      emit(eventName, ...args)
      const kebabcaseName = kebabcase(eventName)
      if (kebabcaseName !== eventName) {
        emit(kebabcaseName, ...args)
      }
    })
  })
}
