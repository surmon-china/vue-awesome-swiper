/**
 * @file vue-awesome-swiper
 * @module directive
 * @author Surmon <https://github.com/surmon-china>
 */

import { DirectiveOptions, VNode } from 'vue'
import { DirectiveBinding } from 'vue/types/options'
import Swiper, { SwiperOptions } from 'swiper'
import { SWIPER_EVENTS, SWIPER_INSTANCE_NAME, DEFAULT_CLASSES, ComponentEvents, ComponentPropNames } from './constants'
import { kebabcase } from './utils'

const INSTANCE_NAME_KEY = 'instanceName'

export default getDirectiveByOptions()
export function getDirectiveByOptions (globalOptions?: SwiperOptions): DirectiveOptions {

  const getStandardisedOptionByAttrs = (vnode: VNode, key: string): any => {
    const value = vnode.data?.attrs?.[key]
    return value !== undefined
      ? value
      : vnode.data?.attrs?.[kebabcase(key)]
  }

  // Get swiper instace name in directive
  const getSwiperInstanceName = (element: HTMLElement, binding: DirectiveBinding, vnode: VNode): string => {
    return (
      binding.arg ||
      getStandardisedOptionByAttrs(vnode, INSTANCE_NAME_KEY) ||
      element.id ||
      SWIPER_INSTANCE_NAME
    )
  }

  const getSwiperInstance = (element: HTMLElement, binding: DirectiveBinding, vnode: VNode): Swiper | void => {
    const instanceName = getSwiperInstanceName(element, binding, vnode)
    return (vnode.context as any)[instanceName]
  }

  const getSwipeOptions = (binding: DirectiveBinding): SwiperOptions => {
    return binding.value || globalOptions
  }

  const getBooleanValueByInput = (input: any): boolean => {
    return [true, undefined, null, ''].includes(input)
  }

  // Emit event in Vue directive
  const getEventEmiter = (vnode: VNode) => {
    const handlers = vnode.data?.on || vnode.componentOptions?.listeners
    return (name: string, ...args: any[]) => {
      const handle = (handlers as any)?.[name]
      if (handle) {
        handle.fns(...args)
      }
    }
  }

  return {
    // Init
    bind(element, binding, vnode) {
      // auto class name
      if (element.className.indexOf(DEFAULT_CLASSES.containerClass) === -1) {
        element.className += ((element.className ? ' ' : '') + DEFAULT_CLASSES.containerClass)
      }
      // bind click event
      element.addEventListener('click', event => {
        const emitEvent = getEventEmiter(vnode)
        const swiper = getSwiperInstance(element, binding, vnode)
        if (swiper && Array.from(swiper.slides).includes(event.target)) {
          const reallyIndex = Number(swiper.clickedSlide?.dataset?.swiperSlideIndex)
          emitEvent(
            ComponentEvents.ClickSlide,
            swiper.clickedIndex,
            Number.isInteger(reallyIndex) ? reallyIndex : null
          )
        }
      })
    },
    // DOM inserted
    inserted(element, binding, vnode) {
      const context = vnode.context
      const swiperOptions = getSwipeOptions(binding)
      const instanceName = getSwiperInstanceName(element, binding, vnode)
      const emitEvent = getEventEmiter(vnode)

      const vueContext = context as any
      let swiper: Swiper = vueContext?.[instanceName]

      if (!swiper) {
        swiper = new Swiper(element, swiperOptions)
        vueContext[instanceName] = swiper

        SWIPER_EVENTS.forEach(eventName => {
          swiper.on(eventName, (...args: any[]) => {
           emitEvent(eventName, ...args)
           const kebabcaseName = kebabcase(eventName)
            if (kebabcaseName !== eventName) {
             emitEvent(kebabcaseName, ...args)
            }
          })
        })
      }

      emitEvent(ComponentEvents.Ready, swiper)
    },
    // On options changed or DOM updated
    componentUpdated(element, binding, vnode) {
      const autoUpdate = getStandardisedOptionByAttrs(
        vnode,
        ComponentPropNames.AutoUpdate
      )
      if (getBooleanValueByInput(autoUpdate)) {
        const swiper = getSwiperInstance(element, binding, vnode)
        if (swiper) {
          const swiperOptions = getSwipeOptions(binding)
          const isLoop = swiperOptions.loop
          if (isLoop) {
            ;(swiper as any)?.loopDestroy?.()
          }
          swiper?.update?.()
          swiper.navigation?.update?.()
          swiper.pagination?.render?.()
          swiper.pagination?.update?.()
          if (isLoop) {
            ;(swiper as any)?.loopCreate?.()
            swiper?.update?.()
          }
        }
      }
    },
    // Destroy this directive
    unbind(element, binding, vnode) {
      const autoDestroy = getStandardisedOptionByAttrs(
        vnode,
        ComponentPropNames.AutoDestroy
      )
      if (getBooleanValueByInput(autoDestroy)) {
        const swiper = getSwiperInstance(element, binding, vnode)
        if (swiper) {
          swiper?.destroy?.(
            getBooleanValueByInput(
              getStandardisedOptionByAttrs(
                vnode,
                ComponentPropNames.DeleteInstanceOnDestroy
              )
            ),
            getBooleanValueByInput(
              getStandardisedOptionByAttrs(
                vnode,
                ComponentPropNames.CleanupStylesOnDestroy
              )
            )
          )
        }
      }
    }
  }
}
