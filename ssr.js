
var Swiper = window.Swiper = require('swiper')
var swiper = {
  install: function(Vue) {
  	var getInstanceName = function(el, binding, vnode) {
  		var customInstanceName = ''
        if (binding.arg) {
        	customInstanceName = binding.arg
        } else if (vnode.data.attrs && vnode.data.attrs.instanceName) {
          customInstanceName = vnode.data.attrs.instanceName
        } else if (el.id) {
          customInstanceName = el.id
        }
        var instanceName = customInstanceName || 'swiper'
        return instanceName
  	}
    Vue.directive('swiper', {
      bind: function(el, binding, vnode) {
        var _this = vnode.context
        if (!el.className.includes('swiper-container')) {
          el.className += (!!el.className ? ' ' : '' + 'swiper-container')
        }
      },
      inserted: function(el, binding, vnode) {
        var _this = vnode.context
        var options = binding.value
        var instanceName = getInstanceName(el, binding, vnode)
        var swiper = _this[instanceName]
        if (!swiper) {
          _this[instanceName] = new Swiper(el, options)
        }
      },
      componentUpdated: function(el, binding, vnode) {
      	var instanceName = getInstanceName(el, binding, vnode)
        var swiper = vnode.context[instanceName]
        if (swiper) {
          swiper.update(true)
          swiper.updatePagination(true)
          if (binding.value.loop) {
            swiper.reLoop()
          }
        }
      },
      unbind: function(el, binding, vnode) {
      	var instanceName = getInstanceName(el, binding, vnode)
        var swiper = vnode.context[instanceName]
        if (swiper) {
          swiper.destroy()
          delete vnode.context[instanceName]
        }
      }
    })
  }
}

module.exports = swiper
