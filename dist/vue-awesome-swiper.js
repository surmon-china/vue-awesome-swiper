
/**
 * @file vue-awesome-swiper v4.0.0-rc.0
 * @copyright Copyright (c) Surmon. All rights reserved.
 * @license Released under the MIT License.
 * @author Surmon <https://github.com/surmon-china>
 */

(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports,require('swiper'),require('vue')):typeof define==='function'&&define.amd?define(['exports','swiper','vue'],f):(g=g||self,f(g.VueAwesomeSwiper={},g.Swiper,g.Vue));}(this,(function(exports, Swiper$1, Vue){'use strict';Swiper$1=Swiper$1&&Object.prototype.hasOwnProperty.call(Swiper$1,'default')?Swiper$1['default']:Swiper$1;Vue=Vue&&Object.prototype.hasOwnProperty.call(Vue,'default')?Vue['default']:Vue;/**
 * @file vue-awesome-swiper
 * @module constants
 * @author Surmon <https://github.com/surmon-china>
 */
var SWIPER_COMPONENT_NAME = 'Swiper';
var SWIPER_SLIDE_COMPONENT_NAME = 'SwiperSlide';
var SWIPER_DIRECTIVE_NAME = 'swiper';
var SWIPER_INSTANCE_NAME = '$swiper';
var DEFAULT_CLASSES = Object.freeze({
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide'
});
var ComponentEvents;

(function (ComponentEvents) {
  ComponentEvents["Ready"] = "ready";
  ComponentEvents["ClickSlide"] = "clickSlide";
})(ComponentEvents || (ComponentEvents = {}));

var ComponentPropNames;

(function (ComponentPropNames) {
  ComponentPropNames["AutoUpdate"] = "autoUpdate";
  ComponentPropNames["AutoDestroy"] = "autoDestroy";
  ComponentPropNames["DeleteInstanceOnDestroy"] = "deleteInstanceOnDestroy";
  ComponentPropNames["CleanupStylesOnDestroy"] = "cleanupStylesOnDestroy";
})(ComponentPropNames || (ComponentPropNames = {})); // https://swiperjs.com/api/#events


var SWIPER_EVENTS = ['init', 'beforeDestroy', 'slideChange', 'slideChangeTransitionStart', 'slideChangeTransitionEnd', 'slideNextTransitionStart', 'slideNextTransitionEnd', 'slidePrevTransitionStart', 'slidePrevTransitionEnd', 'transitionStart', 'transitionEnd', 'touchStart', 'touchMove', 'touchMoveOpposite', 'sliderMove', 'touchEnd', 'click', 'tap', 'doubleTap', 'imagesReady', 'progress', 'reachBeginning', 'reachEnd', 'fromEdge', 'setTranslate', 'setTransition', 'resize', 'observerUpdate', 'beforeLoopFix', 'loopFix'];/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}/**
 * @file vue-awesome-swiper
 * @module utils
 * @author Surmon <https://github.com/surmon-china>
 */
var kebabcase = function (string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
};/**
 * @file vue-awesome-swiper
 * @module event
 * @author Surmon <https://github.com/surmon-china>
 */
var handleClickSlideEvent = function (swiper, event, emit) {
  var _a, _b;

  if (swiper && (event === null || event === void 0 ? void 0 : event.target)) {
    var eventPath = Array.from(event.path);
    var slides_1 = Array.from(swiper.slides); // Click slide || slide[children]

    if (slides_1.includes(event.target) || eventPath.some(function (item) {
      return slides_1.includes(item);
    })) {
      var clickedIndex = swiper.clickedIndex;
      var reallyIndex = Number((_b = (_a = swiper.clickedSlide) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.swiperSlideIndex);
      var reallyIndexValue = Number.isInteger(reallyIndex) ? reallyIndex : null;
      emit(ComponentEvents.ClickSlide, clickedIndex, reallyIndexValue);
      emit(kebabcase(ComponentEvents.ClickSlide), clickedIndex, reallyIndexValue);
    }
  }
};
var bindSwiperEvents = function (swiper, emit) {
  SWIPER_EVENTS.forEach(function (eventName) {
    swiper.on(eventName, function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      emit.apply(void 0, __spreadArrays([eventName], args));
      var kebabcaseName = kebabcase(eventName);

      if (kebabcaseName !== eventName) {
        emit.apply(void 0, __spreadArrays([kebabcaseName], args));
      }
    });
  });
};/**
 * @file vue-awesome-swiper
 * @module directive
 * @author Surmon <https://github.com/surmon-china>
 */
var INSTANCE_NAME_KEY = 'instanceName';
var SwiperDirective = getDirectiveByOptions();
function getDirectiveByOptions(globalOptions) {
  var getStandardisedOptionByAttrs = function (vnode, key) {
    var _a, _b, _c, _d;

    var value = (_b = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b[key];
    return value !== undefined ? value : (_d = (_c = vnode.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d[kebabcase(key)];
  }; // Get swiper instace name in directive


  var getSwiperInstanceName = function (element, binding, vnode) {
    return binding.arg || getStandardisedOptionByAttrs(vnode, INSTANCE_NAME_KEY) || element.id || SWIPER_INSTANCE_NAME;
  };

  var getSwiperInstance = function (element, binding, vnode) {
    var instanceName = getSwiperInstanceName(element, binding, vnode);
    return vnode.context[instanceName] || null;
  };

  var getSwipeOptions = function (binding) {
    return binding.value || globalOptions;
  };

  var getBooleanValueByInput = function (input) {
    return [true, undefined, null, ''].includes(input);
  }; // Emit event in Vue directive


  var getEventEmiter = function (vnode) {
    var _a, _b;

    var handlers = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.on) || ((_b = vnode.componentOptions) === null || _b === void 0 ? void 0 : _b.listeners);
    return function (name) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      var _a;

      var handle = (_a = handlers) === null || _a === void 0 ? void 0 : _a[name];

      if (handle) {
        handle.fns.apply(handle, args);
      }
    };
  };

  return {
    // Init
    bind: function (element, binding, vnode) {
      // auto class name
      if (element.className.indexOf(DEFAULT_CLASSES.containerClass) === -1) {
        element.className += (element.className ? ' ' : '') + DEFAULT_CLASSES.containerClass;
      } // bind click event


      element.addEventListener('click', function (event) {
        var emitEvent = getEventEmiter(vnode);
        var swiper = getSwiperInstance(element, binding, vnode);
        handleClickSlideEvent(swiper, event, emitEvent);
      });
    },
    // DOM inserted
    inserted: function (element, binding, vnode) {
      var context = vnode.context;
      var swiperOptions = getSwipeOptions(binding);
      var instanceName = getSwiperInstanceName(element, binding, vnode);
      var emitEvent = getEventEmiter(vnode);
      var vueContext = context;
      var swiper = vueContext === null || vueContext === void 0 ? void 0 : vueContext[instanceName];

      if (!swiper) {
        swiper = new Swiper$1(element, swiperOptions);
        vueContext[instanceName] = swiper;
        bindSwiperEvents(swiper, emitEvent);
        emitEvent(ComponentEvents.Ready, swiper);
      }
    },
    // On options changed or DOM updated
    componentUpdated: function (element, binding, vnode) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      var autoUpdate = getStandardisedOptionByAttrs(vnode, ComponentPropNames.AutoUpdate);

      if (getBooleanValueByInput(autoUpdate)) {
        var swiper = getSwiperInstance(element, binding, vnode);

        if (swiper) {
          var swiperOptions = getSwipeOptions(binding);
          var isLoop = swiperOptions.loop;

          if (isLoop) {
            (_b = (_a = swiper) === null || _a === void 0 ? void 0 : _a.loopDestroy) === null || _b === void 0 ? void 0 : _b.call(_a);
          }

          (_c = swiper === null || swiper === void 0 ? void 0 : swiper.update) === null || _c === void 0 ? void 0 : _c.call(swiper);
          (_e = (_d = swiper.navigation) === null || _d === void 0 ? void 0 : _d.update) === null || _e === void 0 ? void 0 : _e.call(_d);
          (_g = (_f = swiper.pagination) === null || _f === void 0 ? void 0 : _f.render) === null || _g === void 0 ? void 0 : _g.call(_f);
          (_j = (_h = swiper.pagination) === null || _h === void 0 ? void 0 : _h.update) === null || _j === void 0 ? void 0 : _j.call(_h);

          if (isLoop) {
            (_l = (_k = swiper) === null || _k === void 0 ? void 0 : _k.loopCreate) === null || _l === void 0 ? void 0 : _l.call(_k);
            (_m = swiper === null || swiper === void 0 ? void 0 : swiper.update) === null || _m === void 0 ? void 0 : _m.call(swiper);
          }
        }
      }
    },
    // Destroy this directive
    unbind: function (element, binding, vnode) {
      var _a;

      var autoDestroy = getStandardisedOptionByAttrs(vnode, ComponentPropNames.AutoDestroy);

      if (getBooleanValueByInput(autoDestroy)) {
        var swiper = getSwiperInstance(element, binding, vnode);

        if (swiper && swiper.initialized) {
          (_a = swiper === null || swiper === void 0 ? void 0 : swiper.destroy) === null || _a === void 0 ? void 0 : _a.call(swiper, getBooleanValueByInput(getStandardisedOptionByAttrs(vnode, ComponentPropNames.DeleteInstanceOnDestroy)), getBooleanValueByInput(getStandardisedOptionByAttrs(vnode, ComponentPropNames.CleanupStylesOnDestroy)));
        }
      }
    }
  };
}var _a;
var script = Vue.extend({
  name: SWIPER_COMPONENT_NAME,
  props: (_a = {
    defaultOptions: {
      type: Object,
      required: false,
      default: function () {
        return {};
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    options: {
      type: Object,
      required: false
    }
  }, _a[ComponentPropNames.AutoUpdate] = {
    type: Boolean,
    default: true
  }, // https://github.com/surmon-china/vue-awesome-swiper/pull/550/files
  _a[ComponentPropNames.AutoDestroy] = {
    type: Boolean,
    default: true
  }, // https://github.com/surmon-china/vue-awesome-swiper/pull/388
  _a[ComponentPropNames.DeleteInstanceOnDestroy] = {
    type: Boolean,
    required: false,
    default: true
  }, _a[ComponentPropNames.CleanupStylesOnDestroy] = {
    type: Boolean,
    required: false,
    default: true
  }, _a),
  data: function () {
    var _a;

    return _a = {}, _a[SWIPER_INSTANCE_NAME] = null, _a;
  },
  computed: {
    swiperInstance: {
      cache: false,
      set: function (swiper) {
        this[SWIPER_INSTANCE_NAME] = swiper;
      },
      get: function () {
        return this[SWIPER_INSTANCE_NAME];
      }
    },
    swiperOptions: function () {
      return this.options || this.defaultOptions;
    },
    wrapperClass: function () {
      return this.swiperOptions.wrapperClass || DEFAULT_CLASSES.wrapperClass;
    }
  },
  mounted: function () {
    if (!this.swiperInstance) {
      this.initSwiper();
    }
  },
  activated: function () {
    this.update();
  },
  updated: function () {
    this.update();
  },
  beforeDestroy: function () {
    var _this = this; // https://github.com/surmon-china/vue-awesome-swiper/commit/2924a9d4d3d1cf51c0d46076410b1f804b2b8a43#diff-7f4e0261ac562c0f354cb91a1ca8864f


    this.$nextTick(function () {
      var _a, _b;

      if (_this[ComponentPropNames.AutoDestroy] && _this.swiperInstance) {
        // https://github.com/surmon-china/vue-awesome-swiper/pull/341
        // https://github.com/surmon-china/vue-awesome-swiper/issues/340
        if (_this.swiperInstance.initialized) {
          (_b = (_a = _this.swiperInstance) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, _this[ComponentPropNames.DeleteInstanceOnDestroy], _this[ComponentPropNames.CleanupStylesOnDestroy]);
        }
      }
    });
  },
  methods: {
    // Feature: click event
    handleSwiperClick: function (event) {
      handleClickSlideEvent(this.swiperInstance, event, this.$emit.bind(this));
    },
    autoReLoop: function () {
      var _a, _b;

      if (this.swiperInstance && this.swiperOptions.loop) {
        // https://github.com/surmon-china/vue-awesome-swiper/issues/593
        // https://github.com/surmon-china/vue-awesome-swiper/issues/544
        // https://github.com/surmon-china/vue-awesome-swiper/pull/545/files
        var swiper = this.swiperInstance;
        (_a = swiper === null || swiper === void 0 ? void 0 : swiper.loopDestroy) === null || _a === void 0 ? void 0 : _a.call(swiper);
        (_b = swiper === null || swiper === void 0 ? void 0 : swiper.loopCreate) === null || _b === void 0 ? void 0 : _b.call(swiper);
      }
    },
    update: function () {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      if (this[ComponentPropNames.AutoUpdate] && this.swiperInstance) {
        this.autoReLoop();
        (_b = (_a = this.swiperInstance) === null || _a === void 0 ? void 0 : _a.update) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = this.swiperInstance.navigation) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c);
        (_f = (_e = this.swiperInstance.pagination) === null || _e === void 0 ? void 0 : _e.render) === null || _f === void 0 ? void 0 : _f.call(_e);
        (_h = (_g = this.swiperInstance.pagination) === null || _g === void 0 ? void 0 : _g.update) === null || _h === void 0 ? void 0 : _h.call(_g);
      }
    },
    initSwiper: function () {
      this.swiperInstance = new Swiper$1(this.$el, this.swiperOptions);
      bindSwiperEvents(this.swiperInstance, this.$emit.bind(this));
      this.$emit(ComponentEvents.Ready, this.swiperInstance);
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "swiper-container",
    on: {
      "click": function ($event) {
        return _vm.handleSwiperClick($event);
      }
    }
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    class: _vm.wrapperClass
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);var script$1 = Vue.extend({
  name: SWIPER_SLIDE_COMPONENT_NAME,
  computed: {
    slideClass: function () {
      var _a, _b;

      return ((_b = (_a = this.$parent) === null || _a === void 0 ? void 0 : _a.swiperOptions) === null || _b === void 0 ? void 0 : _b.slideClass) || DEFAULT_CLASSES.slideClass;
    }
  },
  mounted: function () {
    this.update();
  },
  updated: function () {
    this.update();
  },
  methods: {
    update: function () {
      var _a, _b;

      (_b = (_a = this.$parent) === null || _a === void 0 ? void 0 : _a.swiperInstance) === null || _b === void 0 ? void 0 : _b.update();
    }
  }
});/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.slideClass
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);/**
 * @file vue-awesome-swiper
 * @module entry
 * @author Surmon <https://github.com/surmon-china>
 */
var install = function (Vue, globalOptions) {
  if (install.installed) return;
  install.installed = true;

  if (globalOptions) {
    __vue_component__.options.props.defaultOptions.default = function () {
      return globalOptions;
    };
  }

  Vue.component(SWIPER_COMPONENT_NAME, __vue_component__);
  Vue.component(SWIPER_SLIDE_COMPONENT_NAME, __vue_component__$1);
  Vue.directive(SWIPER_DIRECTIVE_NAME, getDirectiveByOptions(globalOptions));
};
var Swiper = __vue_component__;
var SwiperSlide = __vue_component__$1;
var directive = SwiperDirective;
var index = {
  install: install,
  directive: directive,
  Swiper: __vue_component__,
  SwiperSlide: __vue_component__$1
};exports.Swiper=Swiper;exports.SwiperSlide=SwiperSlide;exports.default=index;exports.directive=directive;exports.install=install;Object.defineProperty(exports,'__esModule',{value:true});})));