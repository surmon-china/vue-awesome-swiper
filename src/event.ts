/**
 * @file vue-awesome-swiper
 * @module event
 * @author Surmon <https://github.com/surmon-china>
 */

import Swiper from 'swiper'
import { SWIPER_EVENTS, ComponentEvents } from './constants'
import { kebabcase } from './utils'

export const handleClickSlideEvent = (swiper: Swiper | null, event: MouseEvent, emit: any): void => {
  if (swiper && event?.target) {
    const eventPath = Array.from((event as any).path)
    const slides = Array.from(swiper.slides)
    // Click slide || slide[children]
    if (slides.includes(event.target) || eventPath.some(item => slides.includes(item))) {
      const clickedIndex = swiper.clickedIndex
      const reallyIndex = Number(swiper.clickedSlide?.dataset?.swiperSlideIndex)
      const reallyIndexValue = Number.isInteger(reallyIndex) ? reallyIndex : null
      emit(ComponentEvents.ClickSlide, clickedIndex, reallyIndexValue)
      emit(kebabcase(ComponentEvents.ClickSlide), clickedIndex, reallyIndexValue)
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
