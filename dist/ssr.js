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

var DEFAULT_EVENTS = ['beforeDestroy', 'slideChange', 'slideChangeTransitionStart', 'slideChangeTransitionEnd', 'slideNextTransitionStart', 'slideNextTransitionEnd', 'slidePrevTransitionStart', 'slidePrevTransitionEnd', 'transitionStart', 'transitionEnd', 'touchStart', 'touchMove', 'touchMoveOpposite', 'sliderMove', 'touchEnd', 'click', 'tap', 'doubleTap', 'imagesReady', 'progress', 'reachBeginning', 'reachEnd', 'fromEdge', 'setTranslate', 'setTransition', 'resize'];

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

      var eventEmit = function eventEmit(vnode, name, data) {
        var handlers = vnode.data && vnode.data.on || vnode.componentOptions && vnode.componentOptions.listeners;
        if (handlers && handlers[name]) handlers[name].fns(data);
      };

      if (!swiper) {
        var swiperOptions = (0, _objectAssign2.default)({}, globalOptions, options);
        swiper = self[instanceName] = new Swiper(el, swiperOptions);
        DEFAULT_EVENTS.forEach(function (eventName) {
          swiper.on(eventName, function () {
            eventEmit.apply(undefined, [vnode, eventName].concat(Array.prototype.slice.call(arguments)));
            eventEmit.apply(undefined, [vnode, eventName.replace(/([A-Z])/g, '-$1')].concat(Array.prototype.slice.call(arguments)));
          });
        });
      }

      eventEmit(vnode, 'ready', swiper);
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      var instanceName = getInstanceName(el, binding, vnode);
      var swiper = vnode.context[instanceName];
      if (swiper) {
        swiper.update && swiper.update();
        swiper.navigation && swiper.navigation.update();
        swiper.pagination && swiper.pagination.render();
        swiper.pagination && swiper.pagination.update();
      }
    },
    unbind: function unbind(el, binding, vnode) {
      var instanceName = getInstanceName(el, binding, vnode);
      var swiper = vnode.context[instanceName];
      if (swiper) {
        setTimeout(function() {
          swiper.destroy && swiper.destroy();
          delete vnode.context[instanceName];
        }, 1000);
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
