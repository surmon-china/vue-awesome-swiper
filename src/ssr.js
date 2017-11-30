
/*
* VueAwesomeSwiper ssr.js
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-awesome-swiper
*/

// Require sources
import _Swiper from 'swiper'
import objectAssign from 'object-assign'

const Swiper = window.Swiper || _Swiper

// swiperDirective
const swiperDirective = globalOptions => {

  // Get swiper instace name in directive
  const getInstanceName = (el, binding, vnode) => {
    let instanceName = null
    if (binding.arg) {
      instanceName = binding.arg
    } else if (vnode.data.attrs && (vnode.data.attrs.instanceName || vnode.data.attrs['instance-name'])) {
      instanceName = (vnode.data.attrs.instanceName || vnode.data.attrs['instance-name'])
    } else if (el.id) {
      instanceName = el.id
    }
    return instanceName || 'swiper'
  }

  return {

    // Init
    bind(el, binding, vnode) {
      const self = vnode.context
      if (el.className.indexOf('swiper-container') === -1) {
        el.className += ((el.className ? ' ' : '') + 'swiper-container')
      }
    },

    // DOM inserted
    inserted(el, binding, vnode) {
      const self = vnode.context
      const options = binding.value
      const instanceName = getInstanceName(el, binding, vnode)
      let swiper = self[instanceName]
      if (!swiper) {
        const swiperOptions = objectAssign({}, globalOptions, options)
        swiper = self[instanceName] = new Swiper(el, swiperOptions)
      }
    },

    // Parse options change
    componentUpdated(el, binding, vnode) {
      const instanceName = getInstanceName(el, binding, vnode)
      const swiper = vnode.context[instanceName]
      if (swiper) {
        swiper.update && swiper.update(true)
        swiper.updatePagination && swiper.updatePagination(true)
        if (binding.value.loop) {
          swiper.reLoop && swiper.reLoop()
        }
      }
    },

    // Destroy this directive
    unbind(el, binding, vnode) {
      const instanceName = getInstanceName(el, binding, vnode)
      const swiper = vnode.context[instanceName]
      if (swiper) {
        swiper.destroy && swiper.destroy()
        delete vnode.context[instanceName]
      }
    }
  }
}

// swiperDirective
const swiper = swiperDirective({})

// Global swiper default options
const install = function (Vue, globalOptions = {}) {

  // Mount swiper directive for Vue global
  Vue.directive('swiper', swiperDirective(globalOptions))
}

const VueAwesomeSwiper = { Swiper, swiper, install }

export { Swiper, swiper, install }
export default VueAwesomeSwiper
