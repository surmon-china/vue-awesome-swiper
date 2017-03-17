
const Swiper = window.Swiper = require('swiper')

var swiper = {
  install: function(Vue) {
    Vue.directive('swiper', {
    	bind: function (el, binding, vnode) {
    		var _this = vnode.context
    		if (!el.className.includes('swiper-container')) {
    			el.className += (!!el.className ? ' ' : '' + 'swiper-container')
    		}
    	},
		  inserted: function (el, binding, vnode) {
		  	var _this = vnode.context
		  	var instanceName = binding.arg
		  	var options = binding.value
		  	var swiper = _this[instanceName]
		  	if (!swiper) {
	        _this[instanceName] = new Swiper(el, options)
	      }
		  },
		  componentUpdated: function (el, binding, vnode) {
		  	var swiper = vnode.context[binding.arg]
		  	if (swiper) {
		  		swiper.update(true)
		  		swiper.updatePagination(true)
		  		if (binding.value.loop) {
            swiper.reLoop()
          }
		  	}
		  },
		  unbind: function (el, binding, vnode) {
		  	var swiper = vnode.context[binding.arg]
	  		if (swiper) {
	  			swiper.destroy()
	  			delete vnode.context[binding.arg]
	  		}
		  }
    })
  }
}

module.exports = swiper