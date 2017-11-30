'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.swiper = exports.Swiper = undefined;

var _swiper = require('swiper/dist/js/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swiper = window.Swiper || _swiper2.default;

var swiperDirective = function swiperDirective(globalOptions) {
  var getInstanceName = function getInstanceName(el, binding, vnode) {
    var instanceName = null;
    if (binding.arg) {
      instanceName = binding.arg;
    } else if (vnode.data.attrs && (vnode.data.attrs.instanceName || vnode.data.attrs['instance-name'])) {
      instanceName = vnode.data.attrs.instanceName || vnode.data.attrs['instance-name'];
    } else if (el.id) {
      instanceName = el.id;
    }
    return instanceName || 'swiper';
  };

  return {
    bind: function bind(el, binding, vnode) {
      var self = vnode.context;
      if (el.className.indexOf('swiper-container') === -1) {
        el.className += (el.className ? ' ' : '') + 'swiper-container';
      }
    },
    inserted: function inserted(el, binding, vnode) {
      var self = vnode.context;
      var options = binding.value;
      var instanceName = getInstanceName(el, binding, vnode);
      var swiper = self[instanceName];
      if (!swiper) {
        var swiperOptions = (0, _objectAssign2.default)({}, globalOptions, options);
        swiper = self[instanceName] = new Swiper(el, swiperOptions);
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      var instanceName = getInstanceName(el, binding, vnode);
      var swiper = vnode.context[instanceName];
      if (swiper) {
        swiper.update && swiper.update(true);
        swiper.updatePagination && swiper.updatePagination(true);
        if (binding.value.loop) {
          swiper.reLoop && swiper.reLoop();
        }
      }
    },
    unbind: function unbind(el, binding, vnode) {
      var instanceName = getInstanceName(el, binding, vnode);
      var swiper = vnode.context[instanceName];
      if (swiper) {
        swiper.destroy && swiper.destroy();
        delete vnode.context[instanceName];
      }
    }
  };
};

var swiper = swiperDirective({});

var install = function install(Vue) {
  var globalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue.directive('swiper', swiperDirective(globalOptions));
};

var VueAwesomeSwiper = { Swiper: Swiper, swiper: swiper, install: install };

exports.Swiper = Swiper;
exports.swiper = swiper;
exports.install = install;
exports.default = VueAwesomeSwiper;
