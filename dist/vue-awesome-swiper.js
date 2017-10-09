(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.VueAwesomeSwiper = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Vue-awesome-swiper
 * @author Surmon.me
 */

var Swiper = require('swiper');
var SwiperComponent = require('./src/swiper.vue');
var SlideComponent = require('./src/slide.vue');
SwiperComponent = SwiperComponent.default || SwiperComponent;
SlideComponent = SlideComponent.default || SlideComponent;
if (typeof window !== 'undefined') {
  window.Swiper = Swiper;
}

var swiper = {
  swiperSlide: SlideComponent,
  swiper: SwiperComponent,
  swiperPlugins: Swiper.prototype.plugins,
  install: function install(Vue) {
    Vue.component(SwiperComponent.name, SwiperComponent);
    Vue.component(SlideComponent.name, SlideComponent);
  }
};

module.exports = swiper;

},{"./src/slide.vue":3,"./src/swiper.vue":4,"swiper":2}],2:[function(require,module,exports){
/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
(function () {
    'use strict';
    var $;

    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);
    

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            flip: {
                slideShadows : true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Zoom
            zoom: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: 'container',
            // Hash Navigation
            hashnav: false,
            hashnavWatchState: false,
            // History
            history: false,
            // Commong Nav State
            replaceState: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            normalizeSlideIndex: true,
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-container-', // NEW
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            paginationClickableClass: 'swiper-pagination-clickable', // NEW
            paginationModifierClass: 'swiper-pagination-', // NEW
            lazyLoadingClass: 'swiper-lazy',
            lazyStatusLoadingClass: 'swiper-lazy-loading',
            lazyStatusLoadedClass: 'swiper-lazy-loaded',
            lazyPreloaderClass: 'swiper-lazy-preloader',
            notificationClass: 'swiper-notification',
            preloaderClass: 'preloader',
            zoomContainerClass: 'swiper-zoom-container',
        
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onBeforeResize: function (swiper)
            onAfterResize: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            onKeyPress: function (swiper, keyCode)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Params
        s.params = params;
        s.originalParams = originalParams;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if(needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push(s.params.containerModifierClass + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push(s.params.containerModifierClass + 'free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push(s.params.containerModifierClass + 'autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Max resistance when touchReleaseOnEdges
        if (s.params.touchReleaseOnEdges) {
            s.params.resistanceRatio = 0;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push(s.params.containerModifierClass + '3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push(s.params.containerModifierClass + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
        
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
            }
            else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        
        // Is Horizontal
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        // s.isH = isH;
        
        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push(s.params.containerModifierClass + 'rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push(s.params.containerModifierClass + 'multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push(s.params.containerModifierClass + 'android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
            if (s.params.grabCursor) s.unsetGrabCursor();
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
            if (s.params.grabCursor) s.setGrabCursor();
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        s.setGrabCursor = function(moving) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            s.container[0].style.cursor = moving ? 'grabbing': 'grab';
        };
        s.unsetGrabCursor = function () {
            s.container[0].style.cursor = '';
        };
        if (s.params.grabCursor) {
            s.setGrabCursor();
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) {
                        image.sizes = sizes;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null || !s) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            var autoplayDelay = s.params.autoplay;
            var activeSlide = s.slides.eq(s.activeIndex);
            if (activeSlide.attr('data-swiper-autoplay')) {
                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
            }
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, autoplayDelay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            var activeSlides = [];
            var newHeight = 0;
            var i;
        
            // Find slides currently in view
            if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
                    var index = s.activeIndex + i;
                    if(index > s.slides.length) break;
                    activeSlides.push(s.slides.eq(index)[0]);
                }
            } else {
                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
            }
        
            // Find new height from heighest slide in view
            for (i = 0; i < activeSlides.length; i++) {
                if (typeof activeSlides[i] !== 'undefined') {
                    var height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            }
        
            // Update Height
            if (newHeight) s.wrapper.css('height', newHeight + 'px');
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
        
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
        
            // Store values
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css(
                            'margin-' + (s.isHorizontal() ? 'top' : 'left'),
                            (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        )
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if(prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Dynamic Slides Per View
          ===========================*/
        s.currentSlidesPerView = function () {
            var spv = 1, i, j;
            if (s.params.centeredSlides) {
                var size = s.slides[s.activeIndex].swiperSlideSize;
                var breakLoop;
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slides[i] && !breakLoop) {
                        size += s.slides[i].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
                for (j = s.activeIndex - 1; j >= 0; j--) {
                    if (s.slides[j] && !breakLoop) {
                        size += s.slides[j].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
            }
            else {
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                        spv++;
                    }
                }
            }
            return spv;
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            }
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
            s.updateRealIndex();
        };
        s.updateRealIndex = function(){
            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
            }
            // Next Slide
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                nextSlide = s.slides.eq(0);
                nextSlide.addClass(s.params.slideNextClass);
            }
            // Prev Slide
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                prevSlide = s.slides.eq(-1);
                prevSlide.addClass(s.params.slidePrevClass);
            }
            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
            }
        
            // Pagination
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                // Current/Total
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    }
                    else {
                        current = s.activeIndex || 0;
                    }
                }
                // Types
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    }
                    else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    }
                    else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    }
                    else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                        }
                        else {
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }
                    else {
                        paginationHTML =
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + s.params.paginationTotalClass+'"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    }
                    else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            if (!s) return;
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            var newTranslate;
            function forceSetTranslate() {
                var translate = s.rtl ? -s.translate : s.translate;
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            if (s.params.onBeforeResize) s.params.onBeforeResize(s);
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
        
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
        
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
            if (s.params.onAfterResize) s.params.onAfterResize(s);
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides,
                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button, video',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
                if (!s.isHorizontal()) {
                    // Vertical
                    if (
                        (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
                else {
                    if (
                        (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle;
                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
                    isScrolling = false;
                }
                else {
                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
                }
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined') {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                    s.setGrabCursor(true);
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
        
            if (!s.params.followFinger) return;
        
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                s.setGrabCursor(false);
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                for (var i = 0; i < s.slidesGrid.length; i++) {
                    if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                        slideIndex = i;
                    }
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            s.updateRealIndex();
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
        
            if (speed === 0 || s.browser.lteIE9) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
        
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.history && s.history) {
                s.history.setHistory(s.params.history, s.activeIndex);
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        s.disableTouchControl = function () {
            s.params.onlyExternal = true;
            return true;
        };
        s.enableTouchControl = function () {
            s.params.onlyExternal = false;
            return true;
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
        
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
        
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = s.isHorizontal() ? x : y;
        
            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (s.rtl) {
                            rotateY = -rotateY;
                        }
        
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
        
                        if (s.params.flip.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
        
                        slide
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
        
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
        
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
        
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };
        

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
        
                var slide = s.slides.eq(index);
                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass(s.params.lazyStatusLoadingClass);
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset'),
                        sizes = _img.attr('data-sizes');
                    s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
                        if (typeof s === 'undefined' || s === null || !s) return;
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                _img.attr('sizes', sizes);
                                _img.removeAttr('data-sizes');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
        
                        }
        
                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
        
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
        
            },
            load: function () {
                var i;
                var slidesPerView = s.params.slidesPerView;
                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }
                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        // Next Slides
                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = minIndex; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
        
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
        
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
        
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            draggableEvents: (function () {
                if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
                else return s.touchEvents;
            })(),
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
                $(target).on(sb.draggableEvents.move, sb.dragMove);
                $(target).on(sb.draggableEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
                $(target).off(sb.draggableEvents.move, sb.dragMove);
                $(target).off(sb.draggableEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
        
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };
        

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
        
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (Array.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
        
                        });
                    }
                }
                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };
        

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            onHashCange: function (e, a) {
                var newHash = document.location.hash.replace('#', '');
                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
                if (newHash !== activeSlideHash) {
                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
                }
            },
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
                $(window)[action]('hashchange', s.hashnav.onHashCange);
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                if (s.params.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
                } else {
                    var slide = s.slides.eq(s.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                }
            },
            init: function () {
                if (!s.params.hashnav || s.params.history) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
            },
            destroy: function () {
                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
            }
        };
        

        /*=========================
          History Api with fallback to Hashnav
          ===========================*/
        s.history = {
            init: function () {
                if (!s.params.history) return;
                if (!window.history || !window.history.pushState) {
                    s.params.history = false;
                    s.params.hashnav = true;
                    return;
                }
                s.history.initialized = true;
                this.paths = this.getPathValues();
                if (!this.paths.key && !this.paths.value) return;
                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
                if (!s.params.replaceState) {
                    window.addEventListener('popstate', this.setHistoryPopState);
                }
            },
            setHistoryPopState: function() {
                s.history.paths = s.history.getPathValues();
                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
            },
            getPathValues: function() {
                var pathArray = window.location.pathname.slice(1).split('/');
                var total = pathArray.length;
                var key = pathArray[total - 2];
                var value = pathArray[total - 1];
                return { key: key, value: value };
            },
            setHistory: function (key, index) {
                if (!s.history.initialized || !s.params.history) return;
                var slide = s.slides.eq(index);
                var value = this.slugify(slide.attr('data-history'));
                if (!window.location.pathname.includes(key)) {
                    value = key + '/' + value;
                }
                if (s.params.replaceState) {
                    window.history.replaceState(null, null, value);
                } else {
                    window.history.pushState(null, null, value);
                }
            },
            slugify: function(text) {
                return text.toString().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            },
            scrollToSlide: function(speed, value, runCallbacks) {
                if (value) {
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHistory = this.slugify(slide.attr('data-history'));
                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    s.slideTo(0, speed, runCallbacks);
                }
            }
        };
        

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
            s.emit('onKeyPress', s, kc);
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        function isEventSupported() {
            var eventName = 'onwheel';
            var isSupported = eventName in document;
        
            if (!isSupported) {
                var element = document.createElement('div');
                element.setAttribute(eventName, 'return;');
                isSupported = typeof element[eventName] === 'function';
            }
        
            if (!isSupported &&
                document.implementation &&
                document.implementation.hasFeature &&
                    // always returns true in newer browsers as per the standard.
                    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
                document.implementation.hasFeature('', '') !== true ) {
                // This is the only way to test support for the `wheel` event in IE9+.
                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
            }
        
            return isSupported;
        }
        /**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */
        function normalizeWheel( /*object*/ event ) /*object*/ {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
        
            var sX = 0, sY = 0,       // spinX, spinY
                pX = 0, pY = 0;       // pixelX, pixelY
        
            // Legacy
            if( 'detail' in event ) {
                sY = event.detail;
            }
            if( 'wheelDelta' in event ) {
                sY = -event.wheelDelta / 120;
            }
            if( 'wheelDeltaY' in event ) {
                sY = -event.wheelDeltaY / 120;
            }
            if( 'wheelDeltaX' in event ) {
                sX = -event.wheelDeltaX / 120;
            }
        
            // side scrolling on FF with DOMMouseScroll
            if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
                sX = sY;
                sY = 0;
            }
        
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
        
            if( 'deltaY' in event ) {
                pY = event.deltaY;
            }
            if( 'deltaX' in event ) {
                pX = event.deltaX;
            }
        
            if( (pX || pY) && event.deltaMode ) {
                if( event.deltaMode === 1 ) {          // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {                             // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
        
            // Fall-back if spin cannot be determined
            if( pX && !sX ) {
                sX = (pX < 1) ? -1 : 1;
            }
            if( pY && !sY ) {
                sY = (pY < 1) ? -1 : 1;
            }
        
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        if (s.params.mousewheelControl) {
            /**
             * The best combination if you prefer spinX + spinY normalization.  It favors
             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
             * 'wheel' event, making spin speed determination impossible.
             */
            s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
                'DOMMouseScroll' :
                isEventSupported() ?
                    'wheel' : 'mousewheel';
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
        
            var data = normalizeWheel( e );
        
            if (s.params.mousewheelForceToAxis) {
                if (s.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
                    else return;
                }
                else {
                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
                    else return;
                }
            }
            else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
            }
        
            if (delta === 0) return;
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) {
                            s.slideNext();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
                            s.slidePrev();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
        
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
                else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                // Emit event
                s.emit('onScroll', s, e);
        
                // Stop autoplay
                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.off(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = false;
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.on(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = true;
            return true;
        };
        

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
        
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
        
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
        
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
        
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Zoom
          ===========================*/
        s.zoom = {
            // "Global" Props
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
                slide: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                image: undefined,
                imageWrap: undefined,
                zoomMax: s.params.zoomMax
            },
            image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
            },
            velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            },
            // Calc Scale From Multi-touches
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var x1 = e.targetTouches[0].pageX,
                    y1 = e.targetTouches[0].pageY,
                    x2 = e.targetTouches[1].pageX,
                    y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            },
            // Events
            onGestureStart: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.slide || !z.gesture.slide.length) {
                    z.gesture.slide = $(this);
                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
                    if (z.gesture.imageWrap.length === 0) {
                        z.gesture.image = undefined;
                        return;
                    }
                }
                z.gesture.image.transition(0);
                z.isScaling = true;
            },
            onGestureChange: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (s.support.gestures) {
                    z.scale = e.scale * z.currentScale;
                }
                else {
                    z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
                }
                if (z.scale > z.gesture.zoomMax) {
                    z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
                }
                if (z.scale < s.params.zoomMin) {
                    z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
                }
                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
            },
            onGestureEnd: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                        return;
                    }
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                z.currentScale = z.scale;
                z.isScaling = false;
                if (z.scale === 1) z.gesture.slide = undefined;
            },
            onTouchStart: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (z.image.isTouched) return;
                if (s.device.os === 'android') e.preventDefault();
                z.image.isTouched = true;
                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            },
            onTouchMove: function (e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                s.allowClick = false;
                if (!z.image.isTouched || !z.gesture.slide) return;
        
                if (!z.image.isMoved) {
                    z.image.width = z.gesture.image[0].offsetWidth;
                    z.image.height = z.gesture.image[0].offsetHeight;
                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
                    z.gesture.imageWrap.transition(0);
                    if (s.rtl) z.image.startX = -z.image.startX;
                    if (s.rtl) z.image.startY = -z.image.startY;
                }
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
        
                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
        
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
        
                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
                if (!z.image.isMoved && !z.isScaling) {
                    if (s.isHorizontal() &&
                        (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
                        (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                    else if (!s.isHorizontal() &&
                        (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
                        (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                }
                e.preventDefault();
                e.stopPropagation();
        
                z.image.isMoved = true;
                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
        
                if (z.image.currentX < z.image.minX) {
                    z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
                }
                if (z.image.currentX > z.image.maxX) {
                    z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
                }
        
                if (z.image.currentY < z.image.minY) {
                    z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
                }
                if (z.image.currentY > z.image.maxY) {
                    z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
                }
        
                //Velocity
                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
                z.velocity.prevPositionX = z.image.touchesCurrent.x;
                z.velocity.prevPositionY = z.image.touchesCurrent.y;
                z.velocity.prevTime = Date.now();
        
                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTouchEnd: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (!z.image.isTouched || !z.image.isMoved) {
                    z.image.isTouched = false;
                    z.image.isMoved = false;
                    return;
                }
                z.image.isTouched = false;
                z.image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = z.velocity.x * momentumDurationX;
                var newPositionX = z.image.currentX + momentumDistanceX;
                var momentumDistanceY = z.velocity.y * momentumDurationY;
                var newPositionY = z.image.currentY + momentumDistanceY;
        
                //Fix duration
                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        
                z.image.currentX = newPositionX;
                z.image.currentY = newPositionY;
        
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
        
                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTransitionEnd: function (s) {
                var z = s.zoom;
                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
                    z.scale = z.currentScale = 1;
                }
            },
            // Toggle Zoom
            toggleZoom: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.slide) {
                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
        
                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
        
                if (typeof z.image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                }
                else {
                    touchX = z.image.touchesStart.x;
                    touchY = z.image.touchesStart.y;
                }
        
                if (z.scale && z.scale !== 1) {
                    // Zoom Out
                    z.scale = z.currentScale = 1;
                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
                    z.gesture.slide = undefined;
                }
                else {
                    // Zoom In
                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                    if (e) {
                        slideWidth = z.gesture.slide[0].offsetWidth;
                        slideHeight = z.gesture.slide[0].offsetHeight;
                        offsetX = z.gesture.slide.offset().left;
                        offsetY = z.gesture.slide.offset().top;
                        diffX = offsetX + slideWidth/2 - touchX;
                        diffY = offsetY + slideHeight/2 - touchY;
        
                        imageWidth = z.gesture.image[0].offsetWidth;
                        imageHeight = z.gesture.image[0].offsetHeight;
                        scaledWidth = imageWidth * z.scale;
                        scaledHeight = imageHeight * z.scale;
        
                        translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
                        translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
                        translateMaxX = -translateMinX;
                        translateMaxY = -translateMinY;
        
                        translateX = diffX * z.scale;
                        translateY = diffY * z.scale;
        
                        if (translateX < translateMinX) {
                            translateX =  translateMinX;
                        }
                        if (translateX > translateMaxX) {
                            translateX = translateMaxX;
                        }
        
                        if (translateY < translateMinY) {
                            translateY =  translateMinY;
                        }
                        if (translateY > translateMaxY) {
                            translateY = translateMaxY;
                        }
                    }
                    else {
                        translateX = 0;
                        translateY = 0;
                    }
                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                }
            },
            // Attach/Detach Events
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
        
                if (s.params.zoom) {
                    var target = s.slides;
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    // Scale image
                    if (s.support.gestures) {
                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
                    }
                    else if (s.touchEvents.start === 'touchstart') {
                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
                    }
        
                    // Move image
                    s[action]('touchStart', s.zoom.onTouchStart);
                    s.slides.each(function (index, slide){
                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                        }
                    });
                    s[action]('touchEnd', s.zoom.onTouchEnd);
        
                    // Scale Out
                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
                    if (s.params.zoomToggle) {
                        s.on('doubleTap', s.zoom.toggleZoom);
                    }
                }
            },
            init: function () {
                s.zoom.attachEvents();
            },
            destroy: function () {
                s.zoom.attachEvents(true);
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };
        

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };
        

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.zoom && s.zoom) {
                s.zoom.init();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
            if (s.params.hashnavReplaceState) {
                s.params.replaceState = s.params.hashnavReplaceState;
            }
            if (s.params.history) {
                if (s.history) s.history.init();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        
            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
        
            // Destroy zoom
            if (s.params.zoom && s.zoom) {
                s.zoom.destroy();
            }
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Delete history popstate
            if (s.params.history && !s.params.replaceState) {
                window.removeEventListener('popstate', s.history.setHistoryPopState);
            }
            if (s.params.hashnav && s.hashnav)  {
                s.hashnav.destroy();
            }
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = window.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
            lteIE9: (function() {
                // create temporary DIV
                var div = document.createElement('div');
                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
                // return true / false value based on what will browser render
                return div.getElementsByTagName('i').length === 1;
            })()
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = window.navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })(),
    
            passiveListener: (function () {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            })(),
    
            gestures: (function () {
                return 'ongesturestart' in window;
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
    Dom7 Library
    ===========================*/
    var Dom7 = (function () {
        var Dom7 = function (arr) {
            var _this = this, i = 0;
            // Create array-like object
            for (i = 0; i < arr.length; i++) {
                _this[i] = arr[i];
            }
            _this.length = arr.length;
            // Return collection with methods
            return this;
        };
        var $ = function (selector, context) {
            var arr = [], i = 0;
            if (selector && !context) {
                if (selector instanceof Dom7) {
                    return selector;
                }
            }
            if (selector) {
                // String
                if (typeof selector === 'string') {
                    var els, tempParent, html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) toCreate = 'ul';
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
                        if (html.indexOf('<option') === 0) toCreate = 'select';
                        tempParent = document.createElement(toCreate);
                        tempParent.innerHTML = selector;
                        for (i = 0; i < tempParent.childNodes.length; i++) {
                            arr.push(tempParent.childNodes[i]);
                        }
                    }
                    else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                            // Pure ID selector
                            els = [document.getElementById(selector.split('#')[1])];
                        }
                        else {
                            // Other selectors
                            els = (context || document).querySelectorAll(selector);
                        }
                        for (i = 0; i < els.length; i++) {
                            if (els[i]) arr.push(els[i]);
                        }
                    }
                }
                // Node/element
                else if (selector.nodeType || selector === window || selector === document) {
                    arr.push(selector);
                }
                //Array of elements or instance of Dom
                else if (selector.length > 0 && selector[0].nodeType) {
                    for (i = 0; i < selector.length; i++) {
                        arr.push(selector[i]);
                    }
                }
            }
            return new Dom7(arr);
        };
        Dom7.prototype = {
            // Classes and attriutes
            addClass: function (className) {
                if (typeof className === 'undefined') {
                    return this;
                }
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.add(classes[i]);
                    }
                }
                return this;
            },
            removeClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.remove(classes[i]);
                    }
                }
                return this;
            },
            hasClass: function (className) {
                if (!this[0]) return false;
                else return this[0].classList.contains(className);
            },
            toggleClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.toggle(classes[i]);
                    }
                }
                return this;
            },
            attr: function (attrs, value) {
                if (arguments.length === 1 && typeof attrs === 'string') {
                    // Get attr
                    if (this[0]) return this[0].getAttribute(attrs);
                    else return undefined;
                }
                else {
                    // Set attrs
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            // String
                            this[i].setAttribute(attrs, value);
                        }
                        else {
                            // Object
                            for (var attrName in attrs) {
                                this[i][attrName] = attrs[attrName];
                                this[i].setAttribute(attrName, attrs[attrName]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function (attr) {
                for (var i = 0; i < this.length; i++) {
                    this[i].removeAttribute(attr);
                }
                return this;
            },
            data: function (key, value) {
                if (typeof value === 'undefined') {
                    // Get value
                    if (this[0]) {
                        var dataKey = this[0].getAttribute('data-' + key);
                        if (dataKey) return dataKey;
                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                        else return undefined;
                    }
                    else return undefined;
                }
                else {
                    // Set value
                    for (var i = 0; i < this.length; i++) {
                        var el = this[i];
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                        el.dom7ElementDataStorage[key] = value;
                    }
                    return this;
                }
            },
            // Transforms
            transform : function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            },
            transition: function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            },
            //Events
            on: function (eventName, targetSelector, listener, capture) {
                function handleLiveEvent(e) {
                    var target = e.target;
                    if ($(target).is(targetSelector)) listener.call(target, e);
                    else {
                        var parents = $(target).parents();
                        for (var k = 0; k < parents.length; k++) {
                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                        }
                    }
                }
                var events = eventName.split(' ');
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof targetSelector === 'function' || targetSelector === false) {
                        // Usual events
                        if (typeof targetSelector === 'function') {
                            listener = arguments[1];
                            capture = arguments[2] || false;
                        }
                        for (j = 0; j < events.length; j++) {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    }
                    else {
                        //Live events
                        for (j = 0; j < events.length; j++) {
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }
    
                return this;
            },
            off: function (eventName, targetSelector, listener, capture) {
                var events = eventName.split(' ');
                for (var i = 0; i < events.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof targetSelector === 'function' || targetSelector === false) {
                            // Usual events
                            if (typeof targetSelector === 'function') {
                                listener = arguments[1];
                                capture = arguments[2] || false;
                            }
                            this[j].removeEventListener(events[i], listener, capture);
                        }
                        else {
                            // Live event
                            if (this[j].dom7LiveListeners) {
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                    if (this[j].dom7LiveListeners[k].listener === listener) {
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            },
            once: function (eventName, targetSelector, listener, capture) {
                var dom = this;
                if (typeof targetSelector === 'function') {
                    targetSelector = false;
                    listener = arguments[1];
                    capture = arguments[2];
                }
                function proxy(e) {
                    listener(e);
                    dom.off(eventName, targetSelector, proxy, capture);
                }
                dom.on(eventName, targetSelector, proxy, capture);
            },
            trigger: function (eventName, eventData) {
                for (var i = 0; i < this.length; i++) {
                    var evt;
                    try {
                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
                    }
                    catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(eventName, true, true);
                        evt.detail = eventData;
                    }
                    this[i].dispatchEvent(evt);
                }
                return this;
            },
            transitionEnd: function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },
            // Sizing/Styles
            width: function () {
                if (this[0] === window) {
                    return window.innerWidth;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('width'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerWidth: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            },
            height: function () {
                if (this[0] === window) {
                    return window.innerHeight;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('height'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerHeight: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
                    else
                        return this[0].offsetHeight;
                }
                else return null;
            },
            offset: function () {
                if (this.length > 0) {
                    var el = this[0];
                    var box = el.getBoundingClientRect();
                    var body = document.body;
                    var clientTop  = el.clientTop  || body.clientTop  || 0;
                    var clientLeft = el.clientLeft || body.clientLeft || 0;
                    var scrollTop  = window.pageYOffset || el.scrollTop;
                    var scrollLeft = window.pageXOffset || el.scrollLeft;
                    return {
                        top: box.top  + scrollTop  - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                }
                else {
                    return null;
                }
            },
            css: function (props, value) {
                var i;
                if (arguments.length === 1) {
                    if (typeof props === 'string') {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                    }
                    else {
                        for (i = 0; i < this.length; i++) {
                            for (var prop in props) {
                                this[i].style[prop] = props[prop];
                            }
                        }
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === 'string') {
                    for (i = 0; i < this.length; i++) {
                        this[i].style[props] = value;
                    }
                    return this;
                }
                return this;
            },
    
            //Dom manipulation
            each: function (callback) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(this[i], i, this[i]);
                }
                return this;
            },
            html: function (html) {
                if (typeof html === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].innerHTML = html;
                    }
                    return this;
                }
            },
            text: function (text) {
                if (typeof text === 'undefined') {
                    if (this[0]) {
                        return this[0].textContent.trim();
                    }
                    else return null;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].textContent = text;
                    }
                    return this;
                }
            },
            is: function (selector) {
                if (!this[0]) return false;
                var compareWith, i;
                if (typeof selector === 'string') {
                    var el = this[0];
                    if (el === document) return selector === document;
                    if (el === window) return selector === window;
    
                    if (el.matches) return el.matches(selector);
                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                    else {
                        compareWith = $(selector);
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                }
                else if (selector === document) return this[0] === document;
                else if (selector === window) return this[0] === window;
                else {
                    if (selector.nodeType || selector instanceof Dom7) {
                        compareWith = selector.nodeType ? [selector] : selector;
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                    return false;
                }
    
            },
            index: function () {
                if (this[0]) {
                    var child = this[0];
                    var i = 0;
                    while ((child = child.previousSibling) !== null) {
                        if (child.nodeType === 1) i++;
                    }
                    return i;
                }
                else return undefined;
            },
            eq: function (index) {
                if (typeof index === 'undefined') return this;
                var length = this.length;
                var returnIndex;
                if (index > length - 1) {
                    return new Dom7([]);
                }
                if (index < 0) {
                    returnIndex = length + index;
                    if (returnIndex < 0) return new Dom7([]);
                    else return new Dom7([this[returnIndex]]);
                }
                return new Dom7([this[index]]);
            },
            append: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].appendChild(newChild[j]);
                        }
                    }
                    else {
                        this[i].appendChild(newChild);
                    }
                }
                return this;
            },
            prepend: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                        }
                        // this[i].insertAdjacentHTML('afterbegin', newChild);
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                        }
                    }
                    else {
                        this[i].insertBefore(newChild, this[i].childNodes[0]);
                    }
                }
                return this;
            },
            insertBefore: function (selector) {
                var before = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (before.length === 1) {
                        before[0].parentNode.insertBefore(this[i], before[0]);
                    }
                    else if (before.length > 1) {
                        for (var j = 0; j < before.length; j++) {
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                        }
                    }
                }
            },
            insertAfter: function (selector) {
                var after = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (after.length === 1) {
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    }
                    else if (after.length > 1) {
                        for (var j = 0; j < after.length; j++) {
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                        }
                    }
                }
            },
            next: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            nextAll: function (selector) {
                var nextEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.nextElementSibling) {
                    var next = el.nextElementSibling;
                    if (selector) {
                        if($(next).is(selector)) nextEls.push(next);
                    }
                    else nextEls.push(next);
                    el = next;
                }
                return new Dom7(nextEls);
            },
            prev: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            prevAll: function (selector) {
                var prevEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.previousElementSibling) {
                    var prev = el.previousElementSibling;
                    if (selector) {
                        if($(prev).is(selector)) prevEls.push(prev);
                    }
                    else prevEls.push(prev);
                    el = prev;
                }
                return new Dom7(prevEls);
            },
            parent: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    }
                    else {
                        parents.push(this[i].parentNode);
                    }
                }
                return $($.unique(parents));
            },
            parents: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    var parent = this[i].parentNode;
                    while (parent) {
                        if (selector) {
                            if ($(parent).is(selector)) parents.push(parent);
                        }
                        else {
                            parents.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                }
                return $($.unique(parents));
            },
            find : function (selector) {
                var foundElements = [];
                for (var i = 0; i < this.length; i++) {
                    var found = this[i].querySelectorAll(selector);
                    for (var j = 0; j < found.length; j++) {
                        foundElements.push(found[j]);
                    }
                }
                return new Dom7(foundElements);
            },
            children: function (selector) {
                var children = [];
                for (var i = 0; i < this.length; i++) {
                    var childNodes = this[i].childNodes;
    
                    for (var j = 0; j < childNodes.length; j++) {
                        if (!selector) {
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                        }
                        else {
                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }
                    }
                }
                return new Dom7($.unique(children));
            },
            remove: function () {
                for (var i = 0; i < this.length; i++) {
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                }
                return this;
            },
            add: function () {
                var dom = this;
                var i, j;
                for (i = 0; i < arguments.length; i++) {
                    var toAdd = $(arguments[i]);
                    for (j = 0; j < toAdd.length; j++) {
                        dom[dom.length] = toAdd[j];
                        dom.length++;
                    }
                }
                return dom;
            }
        };
        $.fn = Dom7.prototype;
        $.unique = function (arr) {
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
            }
            return unique;
        };
    
        return $;
    })();
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }
    

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
        if (!('outerWidth' in domLib.fn)) {
            domLib.fn.outerWidth = function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            };
        }
    }
    

    window.Swiper = Swiper;
})();

/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}



},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMC4yQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImluZGV4LmpzIiwibm9kZV9tb2R1bGVzL19zd2lwZXJAMy40LjJAc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzIiwic3JjL3NsaWRlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7O0FBS0EsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSSxrQkFBa0IsUUFBUSxrQkFBUixDQUF0QjtBQUNBLElBQUksaUJBQWlCLFFBQVEsaUJBQVIsQ0FBckI7QUFDQSxrQkFBa0IsZ0JBQWdCLE9BQWhCLElBQTJCLGVBQTdDO0FBQ0EsaUJBQWlCLGVBQWUsT0FBZixJQUEwQixjQUEzQztBQUNBLElBQUksT0FBTyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLFNBQU8sTUFBUCxHQUFnQixNQUFoQjtBQUNEOztBQUVELElBQUksU0FBUztBQUNYLGVBQWEsY0FERjtBQUVYLFVBQVEsZUFGRztBQUdYLGlCQUFlLE9BQU8sU0FBUCxDQUFpQixPQUhyQjtBQUlYLFdBQVMsaUJBQVMsR0FBVCxFQUFjO0FBQ3JCLFFBQUksU0FBSixDQUFjLGdCQUFnQixJQUE5QixFQUFvQyxlQUFwQztBQUNBLFFBQUksU0FBSixDQUFjLGVBQWUsSUFBN0IsRUFBbUMsY0FBbkM7QUFDRDtBQVBVLENBQWI7O0FBVUEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzF1S0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIFZ1ZS1hd2Vzb21lLXN3aXBlclxyXG4gKiBAYXV0aG9yIFN1cm1vbi5tZVxyXG4gKi9cclxuXHJcbnZhciBTd2lwZXIgPSByZXF1aXJlKCdzd2lwZXInKVxyXG52YXIgU3dpcGVyQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9zcmMvc3dpcGVyLnZ1ZScpXHJcbnZhciBTbGlkZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vc3JjL3NsaWRlLnZ1ZScpXHJcblN3aXBlckNvbXBvbmVudCA9IFN3aXBlckNvbXBvbmVudC5kZWZhdWx0IHx8IFN3aXBlckNvbXBvbmVudFxyXG5TbGlkZUNvbXBvbmVudCA9IFNsaWRlQ29tcG9uZW50LmRlZmF1bHQgfHwgU2xpZGVDb21wb25lbnRcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgd2luZG93LlN3aXBlciA9IFN3aXBlclxyXG59XHJcblxyXG52YXIgc3dpcGVyID0ge1xyXG4gIHN3aXBlclNsaWRlOiBTbGlkZUNvbXBvbmVudCxcclxuICBzd2lwZXI6IFN3aXBlckNvbXBvbmVudCxcclxuICBzd2lwZXJQbHVnaW5zOiBTd2lwZXIucHJvdG90eXBlLnBsdWdpbnMsXHJcbiAgaW5zdGFsbDogZnVuY3Rpb24oVnVlKSB7XHJcbiAgICBWdWUuY29tcG9uZW50KFN3aXBlckNvbXBvbmVudC5uYW1lLCBTd2lwZXJDb21wb25lbnQpXHJcbiAgICBWdWUuY29tcG9uZW50KFNsaWRlQ29tcG9uZW50Lm5hbWUsIFNsaWRlQ29tcG9uZW50KVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzd2lwZXJcclxuIiwiLyoqXG4gKiBTd2lwZXIgMy40LjJcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvc3dpcGVyL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNywgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqIFRoZSBpRGFuZ2Vyby51c1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9cbiAqIFxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKiBcbiAqIFJlbGVhc2VkIG9uOiBNYXJjaCAxMCwgMjAxN1xuICovXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgJDtcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgU3dpcGVyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB2YXIgU3dpcGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgcGFyYW1zKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTd2lwZXIpKSByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHBhcmFtcyk7XG4gICAgXG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgLy8gYXV0b3BsYXlcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVN0b3BPbkxhc3Q6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHAsIHdpdGggVUlXZWJWaWV3KS5cbiAgICAgICAgICAgIGlPU0VkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBpT1NFZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAgICAgICAgICAgLy8gRnJlZSBtb2RlXG4gICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVTdGlja3k6IGZhbHNlLFxuICAgICAgICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG4gICAgICAgICAgICAvLyBBdXRvaGVpZ2h0XG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gICAgICAgICAgICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICAgICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBFZmZlY3RzXG4gICAgICAgICAgICBlZmZlY3Q6ICdzbGlkZScsIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogNTAsXG4gICAgICAgICAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgICAgICAgICBkZXB0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93cyA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaGFkb3dzIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3ViZToge1xuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaGFkb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0OiAyMCxcbiAgICAgICAgICAgICAgICBzaGFkb3dTY2FsZTogMC45NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhZGU6IHtcbiAgICAgICAgICAgICAgICBjcm9zc0ZhZGU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gUGFyYWxsYXhcbiAgICAgICAgICAgIHBhcmFsbGF4OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFpvb21cbiAgICAgICAgICAgIHpvb206IGZhbHNlLFxuICAgICAgICAgICAgem9vbU1heDogMyxcbiAgICAgICAgICAgIHpvb21NaW46IDEsXG4gICAgICAgICAgICB6b29tVG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgLy8gU2Nyb2xsYmFyXG4gICAgICAgICAgICBzY3JvbGxiYXI6IG51bGwsXG4gICAgICAgICAgICBzY3JvbGxiYXJIaWRlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsYmFyRHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbGJhclNuYXBPblJlbGVhc2U6IGZhbHNlLFxuICAgICAgICAgICAgLy8gS2V5Ym9hcmQgTW91c2V3aGVlbFxuICAgICAgICAgICAga2V5Ym9hcmRDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsSW52ZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxGb3JjZVRvQXhpczogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsU2Vuc2l0aXZpdHk6IDEsXG4gICAgICAgICAgICBtb3VzZXdoZWVsRXZlbnRzVGFyZ2VkOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIC8vIEhhc2ggTmF2aWdhdGlvblxuICAgICAgICAgICAgaGFzaG5hdjogZmFsc2UsXG4gICAgICAgICAgICBoYXNobmF2V2F0Y2hTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBIaXN0b3J5XG4gICAgICAgICAgICBoaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIENvbW1vbmcgTmF2IFN0YXRlXG4gICAgICAgICAgICByZXBsYWNlU3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gQnJlYWtwb2ludHNcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBTbGlkZXMgZ3JpZFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW4nLFxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsIC8vIGluIHB4XG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCwgLy8gaW4gcHhcbiAgICAgICAgICAgIC8vIFJvdW5kIGxlbmd0aFxuICAgICAgICAgICAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFRvdWNoZXNcbiAgICAgICAgICAgIHRvdWNoUmF0aW86IDEsXG4gICAgICAgICAgICB0b3VjaEFuZ2xlOiA0NSxcbiAgICAgICAgICAgIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gICAgICAgICAgICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXM6IHRydWUsXG4gICAgICAgICAgICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXNNczogMzAwLFxuICAgICAgICAgICAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICAgICAgICAgICAgb25seUV4dGVybmFsOiBmYWxzZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgICAgICAgICAgIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHBhZ2luYXRpb25FbGVtZW50OiAnc3BhbicsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25IaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRSZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ3VzdG9tUmVuZGVyOiBudWxsLFxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6ICdidWxsZXRzJywgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzcycgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgICAgICAgLy8gUmVzaXN0YW5jZVxuICAgICAgICAgICAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgICAgICAgICAgIC8vIE5leHQvcHJldiBidXR0b25zXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiBudWxsLFxuICAgICAgICAgICAgcHJldkJ1dHRvbjogbnVsbCxcbiAgICAgICAgICAgIC8vIFByb2dyZXNzXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgICAgICAvLyBDdXJzb3JcbiAgICAgICAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICAgICAgICAgICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBMYXp5IExvYWRpbmdcbiAgICAgICAgICAgIGxhenlMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dDogZmFsc2UsXG4gICAgICAgICAgICBsYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQ6IDEsXG4gICAgICAgICAgICBsYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEltYWdlc1xuICAgICAgICAgICAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgICAgICAgICAgIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IHRydWUsXG4gICAgICAgICAgICAvLyBsb29wXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICAgICAgICAgICAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgLy8gQ29udHJvbFxuICAgICAgICAgICAgY29udHJvbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29udHJvbEludmVyc2U6IGZhbHNlLFxuICAgICAgICAgICAgY29udHJvbEJ5OiAnc2xpZGUnLCAvL29yICdjb250YWluZXInXG4gICAgICAgICAgICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICAgICAgICAgICAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gICAgICAgICAgICBhbGxvd1N3aXBlVG9QcmV2OiB0cnVlLFxuICAgICAgICAgICAgYWxsb3dTd2lwZVRvTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHN3aXBlSGFuZGxlcjogbnVsbCwgLy8nLnN3aXBlLWhhbmRsZXInLFxuICAgICAgICAgICAgbm9Td2lwaW5nOiB0cnVlLFxuICAgICAgICAgICAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gICAgICAgICAgICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICAgICAgICAgICAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgICAgICAgICAgIC8vIE5TXG4gICAgICAgICAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLCAvLyBORVdcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICAgICAgICAgICAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgICAgICAgICAgIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnLFxuICAgICAgICAgICAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gICAgICAgICAgICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gICAgICAgICAgICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgICAgICAgICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgICAgICAgICAgIGJ1bGxldENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZScsXG4gICAgICAgICAgICBidXR0b25EaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ3VycmVudENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcsXG4gICAgICAgICAgICBwYWdpbmF0aW9uVG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25IaWRkZW5DbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWhpZGRlbicsXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25DbGlja2FibGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZScsIC8vIE5FV1xuICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi0nLCAvLyBORVdcbiAgICAgICAgICAgIGxhenlMb2FkaW5nQ2xhc3M6ICdzd2lwZXItbGF6eScsXG4gICAgICAgICAgICBsYXp5U3RhdHVzTG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenktbG9hZGluZycsXG4gICAgICAgICAgICBsYXp5U3RhdHVzTG9hZGVkQ2xhc3M6ICdzd2lwZXItbGF6eS1sb2FkZWQnLFxuICAgICAgICAgICAgbGF6eVByZWxvYWRlckNsYXNzOiAnc3dpcGVyLWxhenktcHJlbG9hZGVyJyxcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICBwcmVsb2FkZXJDbGFzczogJ3ByZWxvYWRlcicsXG4gICAgICAgICAgICB6b29tQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItem9vbS1jb250YWluZXInLFxuICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ic2VydmVyXG4gICAgICAgICAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAvLyBBY2Nlc3NpYmlsaXR5XG4gICAgICAgICAgICBhMTF5OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICAgICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgICAgICAgIC8vIENhbGxiYWNrc1xuICAgICAgICAgICAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGJhY2tzOlxuICAgICAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25EZXN0cm95OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25CZWZvcmVSZXNpemU6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvbkFmdGVyUmVzaXplOiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVGFwOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25Eb3VibGVUYXA6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblNsaWRlck1vdmU6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlRW5kOiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvbkltYWdlc1JlYWR5OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24gKHN3aXBlciwgcHJvZ3Jlc3MpXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlT3Bwb3NpdGU6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25SZWFjaEJlZ2lubmluZzogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uUmVhY2hFbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChzd2lwZXIsIGR1cmF0aW9uKVxuICAgICAgICAgICAgb25TZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChzd2lwZXIsIHRyYW5zbGF0ZSlcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdGFydDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdG9wOiBmdW5jdGlvbiAoc3dpcGVyKSxcbiAgICAgICAgICAgIG9uTGF6eUltYWdlTG9hZDogZnVuY3Rpb24gKHN3aXBlciwgc2xpZGUsIGltYWdlKVxuICAgICAgICAgICAgb25MYXp5SW1hZ2VSZWFkeTogZnVuY3Rpb24gKHN3aXBlciwgc2xpZGUsIGltYWdlKVxuICAgICAgICAgICAgb25LZXlQcmVzczogZnVuY3Rpb24gKHN3aXBlciwga2V5Q29kZSlcbiAgICAgICAgICAgICovXG4gICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICB2YXIgaW5pdGlhbFZpcnR1YWxUcmFuc2xhdGUgPSBwYXJhbXMgJiYgcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGU7XG4gICAgICAgIFxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgICAgIHZhciBvcmlnaW5hbFBhcmFtcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW3BhcmFtXSA9PT0gJ29iamVjdCcgJiYgcGFyYW1zW3BhcmFtXSAhPT0gbnVsbCAmJiAhKHBhcmFtc1twYXJhbV0ubm9kZVR5cGUgfHwgcGFyYW1zW3BhcmFtXSA9PT0gd2luZG93IHx8IHBhcmFtc1twYXJhbV0gPT09IGRvY3VtZW50IHx8ICh0eXBlb2YgRG9tNyAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zW3BhcmFtXSBpbnN0YW5jZW9mIERvbTcpIHx8ICh0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNbcGFyYW1dIGluc3RhbmNlb2YgalF1ZXJ5KSkpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFBhcmFtc1twYXJhbV0gPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkZWVwUGFyYW0gaW4gcGFyYW1zW3BhcmFtXSkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFBhcmFtc1twYXJhbV1bZGVlcFBhcmFtXSA9IHBhcmFtc1twYXJhbV1bZGVlcFBhcmFtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGRlZiBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbZGVmXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbZGVmXSA9IGRlZmF1bHRzW2RlZl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2RlZl0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZGVlcERlZiBpbiBkZWZhdWx0c1tkZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2RlZl1bZGVlcERlZl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbZGVmXVtkZWVwRGVmXSA9IGRlZmF1bHRzW2RlZl1bZGVlcERlZl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFN3aXBlclxuICAgICAgICB2YXIgcyA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICAvLyBQYXJhbXNcbiAgICAgICAgcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHMub3JpZ2luYWxQYXJhbXMgPSBvcmlnaW5hbFBhcmFtcztcbiAgICAgICAgXG4gICAgICAgIC8vIENsYXNzbmFtZVxuICAgICAgICBzLmNsYXNzTmFtZXMgPSBbXTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgRG9tIExpYnJhcnkgYW5kIHBsdWdpbnNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBpZiAodHlwZW9mICQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBEb203ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAkID0gRG9tNztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIERvbTcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgJCA9IHdpbmRvdy5Eb203IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJCA9IERvbTc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISQpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHBvcnQgaXQgdG8gU3dpcGVyIGluc3RhbmNlXG4gICAgICAgIHMuJCA9ICQ7XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBCcmVha3BvaW50c1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuY3VycmVudEJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHMuZ2V0QWN0aXZlQnJlYWtwb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5icmVha3BvaW50cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwb2ludHMgPSBbXSwgcG9pbnQ7XG4gICAgICAgICAgICBmb3IgKCBwb2ludCBpbiBzLnBhcmFtcy5icmVha3BvaW50cyApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkocG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhLCAxMCkgPiBwYXJzZUludChiLCAxMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoICYmICFicmVha3BvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4JztcbiAgICAgICAgfTtcbiAgICAgICAgcy5zZXRCcmVha3BvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9TZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuICAgICAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSBzLmdldEFjdGl2ZUJyZWFrcG9pbnQoKTtcbiAgICAgICAgICAgIGlmIChicmVha3BvaW50ICYmIHMuY3VycmVudEJyZWFrcG9pbnQgIT09IGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtQb2ludHNQYXJhbXMgPSBicmVha3BvaW50IGluIHMucGFyYW1zLmJyZWFrcG9pbnRzID8gcy5wYXJhbXMuYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiBzLm9yaWdpbmFsUGFyYW1zO1xuICAgICAgICAgICAgICAgIHZhciBuZWVkc1JlTG9vcCA9IHMucGFyYW1zLmxvb3AgJiYgKGJyZWFrUG9pbnRzUGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHMucGFyYW1zLnNsaWRlc1BlclZpZXcpO1xuICAgICAgICAgICAgICAgIGZvciAoIHZhciBwYXJhbSBpbiBicmVha1BvaW50c1BhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXNbcGFyYW1dID0gYnJlYWtQb2ludHNQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICBpZihuZWVkc1JlTG9vcCAmJiBzLmRlc3Ryb3lMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucmVMb29wKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gU2V0IGJyZWFrcG9pbnQgb24gbG9hZFxuICAgICAgICBpZiAocy5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgIHMuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBQcmVwYXJhdGlvbiAtIERlZmluZSBDb250YWluZXIsIFdyYXBwZXIgYW5kIFBhZ2luYXRpb25cbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcbiAgICAgICAgaWYgKHMuY29udGFpbmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAocy5jb250YWluZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcnMgPSBbXTtcbiAgICAgICAgICAgIHMuY29udGFpbmVyLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKHRoaXMsIHBhcmFtcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc3dpcGVycztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSBpbnN0YW5jZSBpbiBjb250YWluZXIgSFRNTCBFbGVtZW50IGFuZCBpbiBkYXRhXG4gICAgICAgIHMuY29udGFpbmVyWzBdLnN3aXBlciA9IHM7XG4gICAgICAgIHMuY29udGFpbmVyLmRhdGEoJ3N3aXBlcicsIHMpO1xuICAgICAgICBcbiAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIHMucGFyYW1zLmRpcmVjdGlvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAnZnJlZS1tb2RlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzLnN1cHBvcnQuZmxleGJveCkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArICduby1mbGV4Ym94Jyk7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJ2F1dG9oZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmFibGUgc2xpZGVzIHByb2dyZXNzIHdoZW4gcmVxdWlyZWRcbiAgICAgICAgaWYgKHMucGFyYW1zLnBhcmFsbGF4IHx8IHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgcy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWF4IHJlc2lzdGFuY2Ugd2hlbiB0b3VjaFJlbGVhc2VPbkVkZ2VzXG4gICAgICAgIGlmIChzLnBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8gPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvdmVyZmxvdyAvIDNEXG4gICAgICAgIGlmIChbJ2N1YmUnLCAnY292ZXJmbG93JywgJ2ZsaXAnXS5pbmRleE9mKHMucGFyYW1zLmVmZmVjdCkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaChzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgJzNkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy5lZmZlY3QgPSAnc2xpZGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBzLnBhcmFtcy5lZmZlY3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgPT09ICdjdWJlJykge1xuICAgICAgICAgICAgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPSAxO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzID0gZmFsc2U7XG4gICAgICAgICAgICBzLnBhcmFtcy5zcGFjZUJldHdlZW4gPSAwO1xuICAgICAgICAgICAgcy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCA9PT0gJ2ZhZGUnIHx8IHMucGFyYW1zLmVmZmVjdCA9PT0gJ2ZsaXAnKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNwYWNlQmV0d2VlbiA9IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxWaXJ0dWFsVHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBHcmFiIEN1cnNvclxuICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvciAmJiBzLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmdyYWJDdXJzb3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gV3JhcHBlclxuICAgICAgICBzLndyYXBwZXIgPSBzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy53cmFwcGVyQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyID0gJChzLnBhcmFtcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMucGFnaW5hdGlvbiA9PT0gJ3N0cmluZycgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wYWdpbmF0aW9uKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIgPSBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2J1bGxldHMnICYmIHMucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuYWRkQ2xhc3Mocy5wYXJhbXMucGFnaW5hdGlvbk1vZGlmaWVyQ2xhc3MgKyAnY2xpY2thYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuYWRkQ2xhc3Mocy5wYXJhbXMucGFnaW5hdGlvbk1vZGlmaWVyQ2xhc3MgKyBzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTmV4dC9QcmV2IEJ1dHRvbnNcbiAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gfHwgcy5wYXJhbXMucHJldkJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBzLm5leHRCdXR0b24gPSAkKHMucGFyYW1zLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMubmV4dEJ1dHRvbiA9PT0gJ3N0cmluZycgJiYgcy5uZXh0QnV0dG9uLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5uZXh0QnV0dG9uKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvbiA9ICQocy5wYXJhbXMucHJldkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBzLnBhcmFtcy5wcmV2QnV0dG9uID09PSAnc3RyaW5nJyAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMSAmJiBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnByZXZCdXR0b24pLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24gPSBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSXMgSG9yaXpvbnRhbFxuICAgICAgICBzLmlzSG9yaXpvbnRhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcy5pc0ggPSBpc0g7XG4gICAgICAgIFxuICAgICAgICAvLyBSVExcbiAgICAgICAgcy5ydGwgPSBzLmlzSG9yaXpvbnRhbCgpICYmIChzLmNvbnRhaW5lclswXS5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgcy5jb250YWluZXIuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpO1xuICAgICAgICBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKHMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyAncnRsJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFdyb25nIFJUTCBzdXBwb3J0XG4gICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgcy53cm9uZ1JUTCA9IHMud3JhcHBlci5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94JztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ29sdW1uc1xuICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArICdtdWx0aXJvdycpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBmb3IgQW5kcm9pZFxuICAgICAgICBpZiAocy5kZXZpY2UuYW5kcm9pZCkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2gocy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArICdhbmRyb2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBjbGFzc2VzXG4gICAgICAgIHMuY29udGFpbmVyLmFkZENsYXNzKHMuY2xhc3NOYW1lcy5qb2luKCcgJykpO1xuICAgICAgICBcbiAgICAgICAgLy8gVHJhbnNsYXRlXG4gICAgICAgIHMudHJhbnNsYXRlID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIFByb2dyZXNzXG4gICAgICAgIHMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8gVmVsb2NpdHlcbiAgICAgICAgcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBMb2NrcywgdW5sb2Nrc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMubG9ja1N3aXBlVG9OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPT09IGZhbHNlICYmIHMucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBzLnVuc2V0R3JhYkN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLmxvY2tTd2lwZVRvUHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID09PSBmYWxzZSAmJiBzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgcy51bnNldEdyYWJDdXJzb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5sb2NrU3dpcGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yKSBzLnVuc2V0R3JhYkN1cnNvcigpO1xuICAgICAgICB9O1xuICAgICAgICBzLnVubG9ja1N3aXBlVG9OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9PT0gdHJ1ZSAmJiBzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgcy5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMudW5sb2NrU3dpcGVUb1ByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID09PSB0cnVlICYmIHMucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBzLnNldEdyYWJDdXJzb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51bmxvY2tTd2lwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvcikgcy5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBSb3VuZCBoZWxwZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiByb3VuZChhKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihhKTtcbiAgICAgICAgfVxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTZXQgZ3JhYiBjdXJzb3JcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnNldEdyYWJDdXJzb3IgPSBmdW5jdGlvbihtb3ZpbmcpIHtcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy1tb3otZ3JhYmJpbicgOiAnLW1vei1ncmFiJztcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICdncmFiYmluZyc6ICdncmFiJztcbiAgICAgICAgfTtcbiAgICAgICAgcy51bnNldEdyYWJDdXJzb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgICAgICAgIHMuc2V0R3JhYkN1cnNvcigpO1xuICAgICAgICB9XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFVwZGF0ZSBvbiBJbWFnZXMgUmVhZHlcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmltYWdlc1RvTG9hZCA9IFtdO1xuICAgICAgICBzLmltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIFxuICAgICAgICBzLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChpbWdFbGVtZW50LCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2U7XG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlYWR5ICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWltZ0VsZW1lbnQuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7Ly9pbWFnZSBhbHJlYWR5IGxvYWRlZC4uLlxuICAgICAgICAgICAgICAgIG9uUmVhZHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5wcmVsb2FkSW1hZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5pbWFnZXNUb0xvYWQgPSBzLmNvbnRhaW5lci5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9vblJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcyA9PT0gbnVsbCB8fCAhcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChzLmltYWdlc0xvYWRlZCAhPT0gdW5kZWZpbmVkKSBzLmltYWdlc0xvYWRlZCsrO1xuICAgICAgICAgICAgICAgIGlmIChzLmltYWdlc0xvYWRlZCA9PT0gcy5pbWFnZXNUb0xvYWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy51cGRhdGVPbkltYWdlc1JlYWR5KSBzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uSW1hZ2VzUmVhZHknLCBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuaW1hZ2VzVG9Mb2FkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy5sb2FkSW1hZ2Uocy5pbWFnZXNUb0xvYWRbaV0sIChzLmltYWdlc1RvTG9hZFtpXS5jdXJyZW50U3JjIHx8IHMuaW1hZ2VzVG9Mb2FkW2ldLmdldEF0dHJpYnV0ZSgnc3JjJykpLCAocy5pbWFnZXNUb0xvYWRbaV0uc3Jjc2V0IHx8IHMuaW1hZ2VzVG9Mb2FkW2ldLmdldEF0dHJpYnV0ZSgnc3Jjc2V0JykpLCBzLmltYWdlc1RvTG9hZFtpXS5zaXplcyB8fCBzLmltYWdlc1RvTG9hZFtpXS5nZXRBdHRyaWJ1dGUoJ3NpemVzJyksIHRydWUsIF9vblJlYWR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEF1dG9wbGF5XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5hdXRvcGxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcy5hdXRvcGxheWluZyA9IGZhbHNlO1xuICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIGF1dG9wbGF5KCkge1xuICAgICAgICAgICAgdmFyIGF1dG9wbGF5RGVsYXkgPSBzLnBhcmFtcy5hdXRvcGxheTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykpIHtcbiAgICAgICAgICAgICAgICBhdXRvcGxheURlbGF5ID0gYWN0aXZlU2xpZGUuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSB8fCBzLnBhcmFtcy5hdXRvcGxheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuYXV0b3BsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgcy5fc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25BdXRvcGxheScsIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLl9zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25BdXRvcGxheScsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJhbXMuYXV0b3BsYXlTdG9wT25MYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5fc2xpZGVUbygwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhdXRvcGxheURlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBzLnN0YXJ0QXV0b3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuYXV0b3BsYXlUaW1lb3V0SWQgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmF1dG9wbGF5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheWluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcy5hdXRvcGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXlTdGFydCcsIHMpO1xuICAgICAgICAgICAgYXV0b3BsYXkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5zdG9wQXV0b3BsYXkgPSBmdW5jdGlvbiAoaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGlmICghcy5hdXRvcGxheVRpbWVvdXRJZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHMuYXV0b3BsYXlUaW1lb3V0SWQpIGNsZWFyVGltZW91dChzLmF1dG9wbGF5VGltZW91dElkKTtcbiAgICAgICAgICAgIHMuYXV0b3BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHMuYXV0b3BsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXlTdG9wJywgcyk7XG4gICAgICAgIH07XG4gICAgICAgIHMucGF1c2VBdXRvcGxheSA9IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICAgICAgaWYgKHMuYXV0b3BsYXlQYXVzZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzLmF1dG9wbGF5VGltZW91dElkKSBjbGVhclRpbWVvdXQocy5hdXRvcGxheVRpbWVvdXRJZCk7XG4gICAgICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMuYXV0b3BsYXlQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhdXRvcGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcy5hdXRvcGxheVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuYXV0b3BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIE1pbi9NYXggVHJhbnNsYXRlXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5taW5UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKC1zLnNuYXBHcmlkWzBdKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5tYXhUcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKC1zLnNuYXBHcmlkW3Muc25hcEdyaWQubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTbGlkZXIvc2xpZGVzIHNpemVzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IDA7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBGaW5kIHNsaWRlcyBjdXJyZW50bHkgaW4gdmlld1xuICAgICAgICAgICAgaWYocy5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHMuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+IHMuc2xpZGVzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHMuc2xpZGVzLmVxKGluZGV4KVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGVpZ2hlc3Qgc2xpZGUgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID4gbmV3SGVpZ2h0ID8gaGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgSGVpZ2h0XG4gICAgICAgICAgICBpZiAobmV3SGVpZ2h0KSBzLndyYXBwZXIuY3NzKCdoZWlnaHQnLCBuZXdIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMucGFyYW1zLndpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gcy5wYXJhbXMud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHMuY29udGFpbmVyWzBdLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcy5wYXJhbXMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcy5jb250YWluZXJbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpZHRoID09PSAwICYmIHMuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmICFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vU3VidHJhY3QgcGFkZGluZ3NcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggLSBwYXJzZUludChzLmNvbnRhaW5lci5jc3MoJ3BhZGRpbmctbGVmdCcpLCAxMCkgLSBwYXJzZUludChzLmNvbnRhaW5lci5jc3MoJ3BhZGRpbmctcmlnaHQnKSwgMTApO1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLXRvcCcpLCAxMCkgLSBwYXJzZUludChzLmNvbnRhaW5lci5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXNcbiAgICAgICAgICAgIHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgcy5zaXplID0gcy5pc0hvcml6b250YWwoKSA/IHMud2lkdGggOiBzLmhlaWdodDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuc2xpZGVzID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgICAgICAgcy5zbmFwR3JpZCA9IFtdO1xuICAgICAgICAgICAgcy5zbGlkZXNHcmlkID0gW107XG4gICAgICAgICAgICBzLnNsaWRlc1NpemVzR3JpZCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBzcGFjZUJldHdlZW4gPSBzLnBhcmFtcy5zcGFjZUJldHdlZW4sXG4gICAgICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IC1zLnBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGVTaXplID0gMCxcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuc2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJyAmJiBzcGFjZUJldHdlZW4uaW5kZXhPZignJScpID49IDApIHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbi5yZXBsYWNlKCclJywgJycpKSAvIDEwMCAqIHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjtcbiAgICAgICAgICAgIC8vIHJlc2V0IG1hcmdpbnNcbiAgICAgICAgICAgIGlmIChzLnJ0bCkgcy5zbGlkZXMuY3NzKHttYXJnaW5MZWZ0OiAnJywgbWFyZ2luVG9wOiAnJ30pO1xuICAgICAgICAgICAgZWxzZSBzLnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OiAnJywgbWFyZ2luQm90dG9tOiAnJ30pO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLmNlaWwocy5zbGlkZXMubGVuZ3RoIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyAqIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIENhbGMgc2xpZGVzXG4gICAgICAgICAgICB2YXIgc2xpZGVTaXplO1xuICAgICAgICAgICAgdmFyIHNsaWRlc1BlckNvbHVtbiA9IHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgIHZhciBzbGlkZXNQZXJSb3cgPSBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgdmFyIG51bUZ1bGxDb2x1bW5zID0gc2xpZGVzUGVyUm93IC0gKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiAqIHNsaWRlc1BlclJvdyAtIHMuc2xpZGVzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NsaWRlT3JkZXJJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiwgcm93O1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSBpIC0gY29sdW1uICogc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbiA+IG51bUZ1bGxDb2x1bW5zIHx8IChjb2x1bW4gPT09IG51bUZ1bGxDb2x1bW5zICYmIHJvdyA9PT0gc2xpZGVzUGVyQ29sdW1uLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCsrcm93ID49IHNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyByb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctbW96LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLW1zLWZsZXgtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBpIC0gcm93ICogc2xpZGVzUGVyUm93O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3RvcCcgOiAnbGVmdCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3cgIT09IDAgJiYgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuKSAmJiAocy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXN3aXBlci1jb2x1bW4nLCBjb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zd2lwZXItcm93Jywgcm93KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5vdXRlcldpZHRoKHRydWUpIDogc2xpZGUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IHJvdW5kKHNsaWRlU2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSAocy5zaXplIC0gKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikgLyBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSByb3VuZChzbGlkZVNpemUpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2ldLnN0eWxlLndpZHRoID0gc2xpZGVTaXplICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2ldLnN0eWxlLmhlaWdodCA9IHNsaWRlU2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5zbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSAvIDIgKyBwcmV2U2xpZGVTaXplIC8gMiArIHNwYWNlQmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHMuc2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHMuc2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKSBzbGlkZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpbmRleCkgJSBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgcy5zbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXgpICUgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHMuc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSArPSBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHMudmlydHVhbFNpemUsIHMuc2l6ZSkgKyBzLnBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgICAgICAgICAgIHZhciBuZXdTbGlkZXNHcmlkO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzLnJ0bCAmJiBzLndyb25nUlRMICYmIChzLnBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcy5wYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIuY3NzKHt3aWR0aDogcy52aXJ0dWFsU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5zdXBwb3J0LmZsZXhib3ggfHwgcy5wYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkgcy53cmFwcGVyLmNzcyh7d2lkdGg6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzLndyYXBwZXIuY3NzKHtoZWlnaHQ6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbikgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgICAgICAgICAgIHMudmlydHVhbFNpemUgPSBNYXRoLmNlaWwocy52aXJ0dWFsU2l6ZSAvIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBzLnBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHMud3JhcHBlci5jc3Moe3dpZHRoOiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgIGVsc2Ugcy53cmFwcGVyLmNzcyh7aGVpZ2h0OiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbmFwR3JpZFtpXSA8IHMudmlydHVhbFNpemUgKyBzLnNuYXBHcmlkWzBdKSBuZXdTbGlkZXNHcmlkLnB1c2gocy5zbmFwR3JpZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsYXN0IGdyaWQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHdpZHRoXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2ldIDw9IHMudmlydHVhbFNpemUgLSBzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzLnNuYXBHcmlkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLnNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihzLnZpcnR1YWxTaXplIC0gcy5zaXplKSAtIE1hdGguZmxvb3Iocy5zbmFwR3JpZFtzLnNuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZC5wdXNoKHMudmlydHVhbFNpemUgLSBzLnNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgcy5zbmFwR3JpZCA9IFswXTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSBzLnNsaWRlcy5jc3Moe21hcmdpbkxlZnQ6IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OiBzcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5Cb3R0b206IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy5zbGlkZXNbaV0ub2Zmc2V0TGVmdCA6IHMuc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIER5bmFtaWMgU2xpZGVzIFBlciBWaWV3XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jdXJyZW50U2xpZGVzUGVyVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzcHYgPSAxLCBpLCBqO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBzLnNsaWRlc1tzLmFjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGJyZWFrTG9vcDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBzLmFjdGl2ZUluZGV4ICsgMTsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplICs9IHMuc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwdiArKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaXplID4gcy5zaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaiA9IHMuYWN0aXZlSW5kZXggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbal0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSArPSBzLnNsaWRlc1tqXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcHYgKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZSA+IHMuc2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXggKyAxOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzR3JpZFtpXSAtIHMuc2xpZGVzR3JpZFtzLmFjdGl2ZUluZGV4XSA8IHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3B2Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3B2O1xuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTbGlkZXIvc2xpZGVzIHByb2dyZXNzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVTbGlkZXNQcm9ncmVzcyA9IGZ1bmN0aW9uICh0cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IHMudHJhbnNsYXRlIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgcy51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgICAgICAgICAgIGlmIChzLnJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFZpc2libGUgU2xpZGVzXG4gICAgICAgICAgICBzLnNsaWRlcy5yZW1vdmVDbGFzcyhzLnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyICsgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gcy5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2Vlbik7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHMuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNWaXNpYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIChzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgcy5zaXplKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlQWZ0ZXIgPiAwICYmIHNsaWRlQWZ0ZXIgPD0gcy5zaXplKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy5lcShpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2xpZGUucHJvZ3Jlc3MgPSBzLnJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uICh0cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IHMudHJhbnNsYXRlIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIHZhciB3YXNCZWdpbm5pbmcgPSBzLmlzQmVnaW5uaW5nO1xuICAgICAgICAgICAgdmFyIHdhc0VuZCA9IHMuaXNFbmQ7XG4gICAgICAgICAgICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICBzLmlzQmVnaW5uaW5nID0gcy5pc0VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHMubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgICAgICAgICAgICBzLmlzQmVnaW5uaW5nID0gcy5wcm9ncmVzcyA8PSAwO1xuICAgICAgICAgICAgICAgIHMuaXNFbmQgPSBzLnByb2dyZXNzID49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5pc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSBzLmVtaXQoJ29uUmVhY2hCZWdpbm5pbmcnLCBzKTtcbiAgICAgICAgICAgIGlmIChzLmlzRW5kICYmICF3YXNFbmQpIHMuZW1pdCgnb25SZWFjaEVuZCcsIHMpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSBzLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICBzLmVtaXQoJ29uUHJvZ3Jlc3MnLCBzLCBzLnByb2dyZXNzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnJ0bCA/IHMudHJhbnNsYXRlIDogLXMudHJhbnNsYXRlO1xuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4LCBpLCBzbmFwSW5kZXg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzLnNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgcy5zbGlkZXNHcmlkW2kgKyAxXSAtIChzLnNsaWRlc0dyaWRbaSArIDFdIC0gcy5zbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHMuc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgICAgICAgICAgaWYocy5wYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCl7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgbmV3QWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBuZXdBY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKC0gdHJhbnNsYXRlID49IHMuc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdBY3RpdmVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgc25hcEluZGV4ID0gTWF0aC5mbG9vcihuZXdBY3RpdmVJbmRleCAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgIGlmIChzbmFwSW5kZXggPj0gcy5zbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHMuc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAobmV3QWN0aXZlSW5kZXggPT09IHMuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgICAgICAgIHMucHJldmlvdXNJbmRleCA9IHMuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBzLmFjdGl2ZUluZGV4ID0gbmV3QWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUmVhbEluZGV4KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMudXBkYXRlUmVhbEluZGV4ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHMucmVhbEluZGV4ID0gcGFyc2VJbnQocy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBzLmFjdGl2ZUluZGV4LCAxMCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBDbGFzc2VzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5zbGlkZXMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArICcgJyArIHMucGFyYW1zLnNsaWRlTmV4dENsYXNzICsgJyAnICsgcy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgJyAnICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIC8vIEFjdGl2ZSBjbGFzc2VzXG4gICAgICAgICAgICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICc6bm90KC4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHMucmVhbEluZGV4ICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzLnJlYWxJbmRleCArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOZXh0IFNsaWRlXG4gICAgICAgICAgICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dCgnLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcy5zbGlkZXMuZXEoMCk7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZXYgU2xpZGVcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUgPSBzLnNsaWRlcy5lcSgtMSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgICAgICAgICAgICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArICdcIl0nKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICcuJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICc6bm90KC4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgJ1wiXScpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyAnXCJdJykuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uXG4gICAgICAgICAgICBpZiAocy5wYWdpbmF0aW9uQ29udGFpbmVyICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudC9Ub3RhbFxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IHMucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICogMikgLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzLnNuYXBHcmlkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzLmFjdGl2ZUluZGV4IC0gcy5sb29wZWRTbGlkZXMpL3MucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBzLnNsaWRlcy5sZW5ndGggLSAxIC0gcy5sb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCAtIChzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID4gdG90YWwgLSAxKSBjdXJyZW50ID0gY3VycmVudCAtIHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA8IDAgJiYgcy5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdidWxsZXRzJykgY3VycmVudCA9IHRvdGFsICsgY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcy5zbmFwSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcy5hY3RpdmVJbmRleCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFR5cGVzXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnYnVsbGV0cycgJiYgcy5idWxsZXRzICYmIHMuYnVsbGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmluZGV4KCkgPT09IGN1cnJlbnQpICQodGhpcykuYWRkQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZXEoY3VycmVudCkuYWRkQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uQ3VycmVudENsYXNzKS50ZXh0KGN1cnJlbnQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMucGFnaW5hdGlvblRvdGFsQ2xhc3MpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdwcm9ncmVzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYID0gc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVkgPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcykudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKCcgKyBzY2FsZVggKyAnKSBzY2FsZVkoJyArIHNjYWxlWSArICcpJykudHJhbnNpdGlvbihzLnBhcmFtcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2N1c3RvbScgJiYgcy5wYXJhbXMucGFnaW5hdGlvbkN1c3RvbVJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChzLnBhcmFtcy5wYWdpbmF0aW9uQ3VzdG9tUmVuZGVyKHMsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uUGFnaW5hdGlvblJlbmRlcmVkJywgcywgcy5wYWdpbmF0aW9uQ29udGFpbmVyWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gTmV4dC9hY3RpdmUgYnV0dG9uc1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24uYWRkQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5kaXNhYmxlKHMucHJldkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24ucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5lbmFibGUocy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbi5hZGRDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRpc2FibGUocy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbi5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmVuYWJsZShzLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUGFnaW5hdGlvblxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMucGFnaW5hdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHMucGFnaW5hdGlvbkNvbnRhaW5lciAmJiBzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJPZkJ1bGxldHMgPSBzLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDIpIC8gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogcy5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uQnVsbGV0UmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcy5wYXJhbXMucGFnaW5hdGlvbkJ1bGxldFJlbmRlcihzLCBpLCBzLnBhcmFtcy5idWxsZXRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSAnPCcgKyBzLnBhcmFtcy5wYWdpbmF0aW9uRWxlbWVudCsnIGNsYXNzPVwiJyArIHMucGFyYW1zLmJ1bGxldENsYXNzICsgJ1wiPjwvJyArIHMucGFyYW1zLnBhZ2luYXRpb25FbGVtZW50ICsgJz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzID0gcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSAmJiBzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmluaXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID0gcy5wYXJhbXMucGFnaW5hdGlvbkZyYWN0aW9uUmVuZGVyKHMsIHMucGFyYW1zLnBhZ2luYXRpb25DdXJyZW50Q2xhc3MsIHMucGFyYW1zLnBhZ2luYXRpb25Ub3RhbENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgcy5wYXJhbXMucGFnaW5hdGlvbkN1cnJlbnRDbGFzcyArICdcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uVG90YWxDbGFzcysnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdwcm9ncmVzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXIocywgcy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSAnPHNwYW4gY2xhc3M9XCInICsgcy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25QYWdpbmF0aW9uUmVuZGVyZWQnLCBzLCBzLnBhZ2luYXRpb25Db250YWluZXJbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQ29tbW9uIHVwZGF0ZSBtZXRob2RcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnVwZGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3VHJhbnNsYXRlO1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9yY2VTZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHMucnRsID8gLXMudHJhbnNsYXRlIDogcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgocy50cmFuc2xhdGUsIHMubWF4VHJhbnNsYXRlKCkpLCBzLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXBkYXRlVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHMuY29udHJvbGxlciAmJiBzLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzLmlzRW5kICYmICFzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkID0gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBSZXNpemUgSGFuZGxlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMub25SZXNpemUgPSBmdW5jdGlvbiAoZm9yY2VVcGRhdGVQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMub25CZWZvcmVSZXNpemUpIHMucGFyYW1zLm9uQmVmb3JlUmVzaXplKHMpO1xuICAgICAgICAgICAgLy9CcmVha3BvaW50c1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9QcmV2ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldjtcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dDtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5mcmVlTW9kZSB8fCBmb3JjZVVwZGF0ZVBhZ2luYXRpb24pIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuY29udHJvbGxlciAmJiBzLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heChzLnRyYW5zbGF0ZSwgcy5tYXhUcmFuc2xhdGUoKSksIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHMuaXNFbmQgJiYgIXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyA9IHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiAhc2xpZGVDaGFuZ2VkQnlTbGlkZVRvICYmIHMubGF6eSkge1xuICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gYWxsb3dTd2lwZVRvUHJldjtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBhbGxvd1N3aXBlVG9OZXh0O1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9uQWZ0ZXJSZXNpemUpIHMucGFyYW1zLm9uQWZ0ZXJSZXNpemUocyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBFdmVudHNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBcbiAgICAgICAgLy9EZWZpbmUgVG91Y2ggRXZlbnRzXG4gICAgICAgIHMudG91Y2hFdmVudHNEZXNrdG9wID0ge3N0YXJ0OiAnbW91c2Vkb3duJywgbW92ZTogJ21vdXNlbW92ZScsIGVuZDogJ21vdXNldXAnfTtcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpIHMudG91Y2hFdmVudHNEZXNrdG9wID0ge3N0YXJ0OiAncG9pbnRlcmRvd24nLCBtb3ZlOiAncG9pbnRlcm1vdmUnLCBlbmQ6ICdwb2ludGVydXAnfTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSBzLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtzdGFydDogJ01TUG9pbnRlckRvd24nLCBtb3ZlOiAnTVNQb2ludGVyTW92ZScsIGVuZDogJ01TUG9pbnRlclVwJ307XG4gICAgICAgIHMudG91Y2hFdmVudHMgPSB7XG4gICAgICAgICAgICBzdGFydCA6IHMuc3VwcG9ydC50b3VjaCB8fCAhcy5wYXJhbXMuc2ltdWxhdGVUb3VjaCAgPyAndG91Y2hzdGFydCcgOiBzLnRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCxcbiAgICAgICAgICAgIG1vdmUgOiBzLnN1cHBvcnQudG91Y2ggfHwgIXMucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyAndG91Y2htb3ZlJyA6IHMudG91Y2hFdmVudHNEZXNrdG9wLm1vdmUsXG4gICAgICAgICAgICBlbmQgOiBzLnN1cHBvcnQudG91Y2ggfHwgIXMucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyAndG91Y2hlbmQnIDogcy50b3VjaEV2ZW50c0Rlc2t0b3AuZW5kXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gV1A4IFRvdWNoIEV2ZW50cyBGaXhcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICAocy5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gcy5jb250YWluZXIgOiBzLndyYXBwZXIpLmFkZENsYXNzKCdzd2lwZXItd3A4LScgKyBzLnBhcmFtcy5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBdHRhY2gvZGV0YWNoIGV2ZW50c1xuICAgICAgICBzLmluaXRFdmVudHMgPSBmdW5jdGlvbiAoZGV0YWNoKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uRG9tID0gZGV0YWNoID8gJ29mZicgOiAnb24nO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGRldGFjaCA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdhZGRFdmVudExpc3RlbmVyJztcbiAgICAgICAgICAgIHZhciB0b3VjaEV2ZW50c1RhcmdldCA9IHMucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHMuY29udGFpbmVyWzBdIDogcy53cmFwcGVyWzBdO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHMuc3VwcG9ydC50b3VjaCA/IHRvdWNoRXZlbnRzVGFyZ2V0IDogZG9jdW1lbnQ7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIG1vdmVDYXB0dXJlID0gcy5wYXJhbXMubmVzdGVkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vVG91Y2ggRXZlbnRzXG4gICAgICAgICAgICBpZiAocy5icm93c2VyLmllKSB7XG4gICAgICAgICAgICAgICAgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLnN0YXJ0LCBzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMubW92ZSwgcy5vblRvdWNoTW92ZSwgbW92ZUNhcHR1cmUpO1xuICAgICAgICAgICAgICAgIHRhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuZW5kLCBzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHMudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzLnN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHMucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2V9IDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5zdGFydCwgcy5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5lbmQsIHMub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhcy5kZXZpY2UuaW9zICYmICFzLmRldmljZS5hbmRyb2lkKSB8fCAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXMuc3VwcG9ydC50b3VjaCAmJiBzLmRldmljZS5pb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0oJ21vdXNlZG93bicsIHMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50W2FjdGlvbl0oJ21vdXNlbW92ZScsIHMub25Ub3VjaE1vdmUsIG1vdmVDYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRbYWN0aW9uXSgnbW91c2V1cCcsIHMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvd1thY3Rpb25dKCdyZXNpemUnLCBzLm9uUmVzaXplKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBOZXh0LCBQcmV2LCBJbmRleFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uW2FjdGlvbkRvbV0oJ2NsaWNrJywgcy5vbkNsaWNrTmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLm5leHRCdXR0b25bYWN0aW9uRG9tXSgna2V5ZG93bicsIHMuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvblthY3Rpb25Eb21dKCdjbGljaycsIHMub25DbGlja1ByZXYpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5wcmV2QnV0dG9uW2FjdGlvbkRvbV0oJ2tleWRvd24nLCBzLmExMXkub25FbnRlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbiAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyW2FjdGlvbkRvbV0oJ2NsaWNrJywgJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MsIHMub25DbGlja0luZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMucGFnaW5hdGlvbkNvbnRhaW5lclthY3Rpb25Eb21dKCdrZXlkb3duJywgJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MsIHMuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcy5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKCdjbGljaycsIHMucHJldmVudENsaWNrcywgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5pbml0RXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuZGV0YWNoRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5pbml0RXZlbnRzKHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSGFuZGxlIENsaWNrc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8vIFByZXZlbnQgQ2xpY2tzXG4gICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgIHMucHJldmVudENsaWNrcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIXMuYWxsb3dDbGljaykge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgIHMub25DbGlja05leHQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHMuaXNFbmQgJiYgIXMucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICAgICAgICAgIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMub25DbGlja1ByZXYgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcgJiYgIXMucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICAgICAgICAgIHMuc2xpZGVQcmV2KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMub25DbGlja0luZGV4ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSAqIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIGluZGV4ID0gaW5kZXggKyBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgIHMuc2xpZGVUbyhpbmRleCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBIYW5kbGUgVG91Y2hlc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRFbGVtZW50SW5FdmVudChlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIGVsID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoIWVsLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50cyhzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50cygpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBfZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZWwgPT09IHNlbGVjdG9yKSBmb3VuZCA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxbMF07XG4gICAgICAgIH1cbiAgICAgICAgcy51cGRhdGVDbGlja2VkU2xpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHNsaWRlID0gZmluZEVsZW1lbnRJbkV2ZW50KGUsICcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgICAgICAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2ldID09PSBzbGlkZSkgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRJbmRleCA9ICQoc2xpZGUpLmluZGV4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHMuY2xpY2tlZEluZGV4ICE9PSBzLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlVG9JbmRleCA9IHMuY2xpY2tlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRTbGlkZXMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXcgPSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzLmN1cnJlbnRTbGlkZXNQZXJWaWV3KCkgOiBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXggPSBwYXJzZUludCgkKHMuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzbGlkZVRvSW5kZXggPCBzLmxvb3BlZFNsaWRlcyAtIHNsaWRlc1BlclZpZXcvMikgfHwgKHNsaWRlVG9JbmRleCA+IHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICsgc2xpZGVzUGVyVmlldy8yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlVG9JbmRleCA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyByZWFsSW5kZXggKyAnXCJdOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKScpLmVxKDApLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVUb0luZGV4ID4gcy5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlVG9JbmRleCA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyByZWFsSW5kZXggKyAnXCJdOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKScpLmVxKDApLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpc1RvdWNoZWQsXG4gICAgICAgICAgICBpc01vdmVkLFxuICAgICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrcyxcbiAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lLFxuICAgICAgICAgICAgaXNTY3JvbGxpbmcsXG4gICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlLFxuICAgICAgICAgICAgc3RhcnRUcmFuc2xhdGUsXG4gICAgICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmUsXG4gICAgICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgICAgICBmb3JtRWxlbWVudHMgPSAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8nLFxuICAgICAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgICAgICBsYXN0Q2xpY2tUaW1lID0gRGF0ZS5ub3coKSwgY2xpY2tUaW1lb3V0LFxuICAgICAgICAgICAgLy9WZWxvY2l0aWVzXG4gICAgICAgICAgICB2ZWxvY2l0aWVzID0gW10sXG4gICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gQW5pbWF0aW5nIEZsYWdcbiAgICAgICAgcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRvdWNoZXMgaW5mb3JtYXRpb25cbiAgICAgICAgcy50b3VjaGVzID0ge1xuICAgICAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgICAgIGRpZmY6IDBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRvdWNoIGhhbmRsZXJzXG4gICAgICAgIHZhciBpc1RvdWNoRXZlbnQsIHN0YXJ0TW92aW5nO1xuICAgICAgICBzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgaXNUb3VjaEV2ZW50ID0gZS50eXBlID09PSAndG91Y2hzdGFydCc7XG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hFdmVudCAmJiAnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5vU3dpcGluZyAmJiBmaW5kRWxlbWVudEluRXZlbnQoZSwgJy4nICsgcy5wYXJhbXMubm9Td2lwaW5nQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaW5kRWxlbWVudEluRXZlbnQoZSwgcy5wYXJhbXMuc3dpcGVIYW5kbGVyKSkgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHZhciBzdGFydFggPSBzLnRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICB2YXIgc3RhcnRZID0gcy50b3VjaGVzLmN1cnJlbnRZID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgKFVJV2ViVmlldykgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuICAgICAgICAgICAgaWYocy5kZXZpY2UuaW9zICYmIHMucGFyYW1zLmlPU0VkZ2VTd2lwZURldGVjdGlvbiAmJiBzdGFydFggPD0gcy5wYXJhbXMuaU9TRWRnZVN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlzVG91Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3RhcnRNb3ZpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRYID0gc3RhcnRYO1xuICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcbiAgICAgICAgICAgIHMuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudGhyZXNob2xkID4gMCkgYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcyhmb3JtRWxlbWVudHMpKSBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXMoZm9ybUVsZW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hTdGFydCcsIHMsIGUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgaWYgKGlzVG91Y2hFdmVudCAmJiBlLnR5cGUgPT09ICdtb3VzZW1vdmUnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikge1xuICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRZID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9ubHlFeHRlcm5hbCkge1xuICAgICAgICAgICAgICAgIC8vIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChpc1RvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IHMudG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRZID0gcy50b3VjaGVzLmN1cnJlbnRZID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVG91Y2hFdmVudCAmJiBzLnBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLnRvdWNoZXMuY3VycmVudFkgPCBzLnRvdWNoZXMuc3RhcnRZICYmIHMudHJhbnNsYXRlIDw9IHMubWF4VHJhbnNsYXRlKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAocy50b3VjaGVzLmN1cnJlbnRZID4gcy50b3VjaGVzLnN0YXJ0WSAmJiBzLnRyYW5zbGF0ZSA+PSBzLm1pblRyYW5zbGF0ZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLnRvdWNoZXMuY3VycmVudFggPCBzLnRvdWNoZXMuc3RhcnRYICYmIHMudHJhbnNsYXRlIDw9IHMubWF4VHJhbnNsYXRlKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAocy50b3VjaGVzLmN1cnJlbnRYID4gcy50b3VjaGVzLnN0YXJ0WCAmJiBzLnRyYW5zbGF0ZSA+PSBzLm1pblRyYW5zbGF0ZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNUb3VjaEV2ZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZm9ybUVsZW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaE1vdmUnLCBzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICBzLnRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgIHMudG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoQW5nbGU7XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkgJiYgcy50b3VjaGVzLmN1cnJlbnRZID09PSBzLnRvdWNoZXMuc3RhcnRZIHx8ICFzLmlzSG9yaXpvbnRhbCgpICYmIHMudG91Y2hlcy5jdXJyZW50WCA9PT0gcy50b3VjaGVzLnN0YXJ0WCkge1xuICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMocy50b3VjaGVzLmN1cnJlbnRZIC0gcy50b3VjaGVzLnN0YXJ0WSksIE1hdGguYWJzKHMudG91Y2hlcy5jdXJyZW50WCAtIHMudG91Y2hlcy5zdGFydFgpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gcy5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBzLnBhcmFtcy50b3VjaEFuZ2xlIDogKDkwIC0gdG91Y2hBbmdsZSA+IHMucGFyYW1zLnRvdWNoQW5nbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Njcm9sbGluZykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaE1vdmVPcHBvc2l0ZScsIHMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocy50b3VjaGVzLmN1cnJlbnRYICE9PSBzLnRvdWNoZXMuc3RhcnRYIHx8IHMudG91Y2hlcy5jdXJyZW50WSAhPT0gcy50b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydE1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1RvdWNoZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChpc1Njcm9sbGluZykgIHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXJ0TW92aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVyTW92ZScsIHMsIGUpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcy5wYXJhbXMubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0VHJhbnNsYXRlID0gcy5nZXRXcmFwcGVyVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBpZiAocy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyaWdnZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvcGxheSAmJiBzLmF1dG9wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5wYXVzZUF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vR3JhYiBDdXJzb3JcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvciAmJiAocy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9PT0gdHJ1ZSB8fCBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNldEdyYWJDdXJzb3IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGRpZmYgPSBzLnRvdWNoZXMuZGlmZiA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnRvdWNoZXMuY3VycmVudFggLSBzLnRvdWNoZXMuc3RhcnRYIDogcy50b3VjaGVzLmN1cnJlbnRZIC0gcy50b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgXG4gICAgICAgICAgICBkaWZmID0gZGlmZiAqIHMucGFyYW1zLnRvdWNoUmF0aW87XG4gICAgICAgICAgICBpZiAocy5ydGwpIGRpZmYgPSAtZGlmZjtcbiAgICAgICAgXG4gICAgICAgICAgICBzLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gZGlmZiArIHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICgoZGlmZiA+IDAgJiYgY3VycmVudFRyYW5zbGF0ZSA+IHMubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5yZXNpc3RhbmNlKSBjdXJyZW50VHJhbnNsYXRlID0gcy5taW5UcmFuc2xhdGUoKSAtIDEgKyBNYXRoLnBvdygtcy5taW5UcmFuc2xhdGUoKSArIHN0YXJ0VHJhbnNsYXRlICsgZGlmZiwgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmYgPCAwICYmIGN1cnJlbnRUcmFuc2xhdGUgPCBzLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5yZXNpc3RhbmNlKSBjdXJyZW50VHJhbnNsYXRlID0gcy5tYXhUcmFuc2xhdGUoKSArIDEgLSBNYXRoLnBvdyhzLm1heFRyYW5zbGF0ZSgpIC0gc3RhcnRUcmFuc2xhdGUgLSBkaWZmLCBzLnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ICYmIHMuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBjdXJyZW50VHJhbnNsYXRlIDwgc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgJiYgcy5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIGN1cnJlbnRUcmFuc2xhdGUgPiBzdGFydFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGhyZXNob2xkXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHMucGFyYW1zLnRocmVzaG9sZCB8fCBhbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRYID0gcy50b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5kaWZmID0gcy5pc0hvcml6b250YWwoKSA/IHMudG91Y2hlcy5jdXJyZW50WCAtIHMudG91Y2hlcy5zdGFydFggOiBzLnRvdWNoZXMuY3VycmVudFkgLSBzLnRvdWNoZXMuc3RhcnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mb2xsb3dGaW5nZXIpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlIHx8IHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAvL1ZlbG9jaXR5XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcy50b3VjaGVzW3MuaXNIb3Jpem9udGFsKCkgPyAnc3RhcnRYJyA6ICdzdGFydFknXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHRvdWNoU3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcy50b3VjaGVzW3MuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IChuZXcgd2luZG93LkRhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoY3VycmVudFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdHJhbnNsYXRlXG4gICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUoY3VycmVudFRyYW5zbGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMub25Ub3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgaWYgKGFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hFbmQnLCBzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghaXNUb3VjaGVkKSByZXR1cm47XG4gICAgICAgICAgICAvL1JldHVybiBHcmFiIEN1cnNvclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgaXNNb3ZlZCAmJiBpc1RvdWNoZWQgICYmIChzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID09PSB0cnVlIHx8IHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcy5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBUaW1lIGRpZmZcbiAgICAgICAgICAgIHZhciB0b3VjaEVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdmFyIHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gdG91Y2hTdGFydFRpbWU7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG4gICAgICAgICAgICBpZiAocy5hbGxvd0NsaWNrKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGlja2VkU2xpZGUoZSk7XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblRhcCcsIHMsIGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiAodG91Y2hFbmRUaW1lIC0gbGFzdENsaWNrVGltZSkgPiAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrVGltZW91dCkgY2xlYXJUaW1lb3V0KGNsaWNrVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbkhpZGUgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDAgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKHMucGFyYW1zLmJ1bGxldENsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci50b2dnbGVDbGFzcyhzLnBhcmFtcy5wYWdpbmF0aW9uSGlkZGVuQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkNsaWNrJywgcywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgKHRvdWNoRW5kVGltZSAtIGxhc3RDbGlja1RpbWUpIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1RpbWVvdXQpIGNsZWFyVGltZW91dChjbGlja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uRG91YmxlVGFwJywgcywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGxhc3RDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMpIHMuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hlZCB8fCAhaXNNb3ZlZCB8fCAhcy5zd2lwZURpcmVjdGlvbiB8fCBzLnRvdWNoZXMuZGlmZiA9PT0gMCB8fCBjdXJyZW50VHJhbnNsYXRlID09PSBzdGFydFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgIGlzVG91Y2hlZCA9IGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1RvdWNoZWQgPSBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3M7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvcyA9IHMucnRsID8gcy50cmFuc2xhdGUgOiAtcy50cmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcyA8IC1zLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50UG9zID4gLXMubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzLmxlbmd0aCA8IHMuc25hcEdyaWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5zbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdE1vdmVFdmVudCA9IHZlbG9jaXRpZXMucG9wKCksIHZlbG9jaXR5RXZlbnQgPSB2ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGxhc3RNb3ZlRXZlbnQucG9zaXRpb24gLSB2ZWxvY2l0eUV2ZW50LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBsYXN0TW92ZUV2ZW50LnRpbWUgLSB2ZWxvY2l0eUV2ZW50LnRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IHMudmVsb2NpdHkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHMudmVsb2NpdHkpIDwgcy5wYXJhbXMuZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaW1wbGllcyB0aGF0IHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGEgZmluZ2VyIHRoZW4gcmVsZWFzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID4gMTUwIHx8IChuZXcgd2luZG93LkRhdGUoKS5nZXRUaW1lKCkgLSBsYXN0TW92ZUV2ZW50LnRpbWUpID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gcy52ZWxvY2l0eSAqIHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IDEwMDAgKiBzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtUmF0aW87XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gcy52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBzLnRyYW5zbGF0ZSArIG1vbWVudHVtRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgbmV3UG9zaXRpb24gPSAtIG5ld1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyQm91bmNlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzLnZlbG9jaXR5KSAqIDIwICogcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gPCBzLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiArIHMubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKSAtIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHMubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1Bvc2l0aW9uID4gcy5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gLSBzLm1pblRyYW5zbGF0ZSgpID4gYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKSArIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHMuc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbmFwR3JpZFtqXSA+IC1uZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHMuc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHMuc25hcEdyaWRbbmV4dFNsaWRlIC0gMV0gLSBuZXdQb3NpdGlvbikgfHwgcy5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLnNuYXBHcmlkW25leHRTbGlkZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5zbmFwR3JpZFtuZXh0U2xpZGUgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5ydGwpIG5ld1Bvc2l0aW9uID0gLSBuZXdQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL0ZpeCBkdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAocy52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzLnRyYW5zbGF0ZSkgLyBzLnZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygobmV3UG9zaXRpb24gLSBzLnRyYW5zbGF0ZSkgLyBzLnZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlICYmIGRvQm91bmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzIHx8ICFhbGxvd01vbWVudHVtQm91bmNlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbk1vbWVudHVtQm91bmNlJywgcyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24ocy5wYXJhbXMuc3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocy52ZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW0gfHwgdGltZURpZmYgPj0gcy5wYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRmluZCBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICB2YXIgaSwgc3RvcEluZGV4ID0gMCwgZ3JvdXBTaXplID0gcy5zbGlkZXNTaXplc0dyaWRbMF07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbGlkZXNHcmlkW2kgKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zID49IHMuc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgcy5zbGlkZXNHcmlkW2kgKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFNpemUgPSBzLnNsaWRlc0dyaWRbaSArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwXSAtIHMuc2xpZGVzR3JpZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTaXplID0gcy5zbGlkZXNHcmlkW3Muc2xpZGVzR3JpZC5sZW5ndGggLSAxXSAtIHMuc2xpZGVzR3JpZFtzLnNsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcbiAgICAgICAgICAgIHZhciByYXRpbyA9IChjdXJyZW50UG9zIC0gcy5zbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aW1lRGlmZiA+IHMucGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgICAgICAgICAgIC8vIExvbmcgdG91Y2hlc1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF0aW8gPj0gcy5wYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzLnNsaWRlVG8oc3RvcEluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF0aW8gPiAoMSAtIHMucGFyYW1zLmxvbmdTd2lwZXNSYXRpbykpIHMuc2xpZGVUbyhzdG9wSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugcy5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc3RvcEluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFRyYW5zaXRpb25zXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5fc2xpZGVUbyA9IGZ1bmN0aW9uIChzbGlkZUluZGV4LCBzcGVlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVUbyhzbGlkZUluZGV4LCBzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2xpZGVUbyA9IGZ1bmN0aW9uIChzbGlkZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZUluZGV4ID09PSAndW5kZWZpbmVkJykgc2xpZGVJbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICAgICAgICAgICAgcy5zbmFwSW5kZXggPSBNYXRoLmZsb29yKHNsaWRlSW5kZXggLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICBpZiAocy5zbmFwSW5kZXggPj0gcy5zbmFwR3JpZC5sZW5ndGgpIHMuc25hcEluZGV4ID0gcy5zbmFwR3JpZC5sZW5ndGggLSAxO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSAtIHMuc25hcEdyaWRbcy5zbmFwSW5kZXhdO1xuICAgICAgICAgICAgLy8gU3RvcCBhdXRvcGxheVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5ICYmIHMuYXV0b3BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWwgfHwgIXMucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wYXVzZUF1dG9wbGF5KHNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2dyZXNzXG4gICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcbiAgICAgICAgICAgIGlmKHMucGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpe1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXNHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgtIE1hdGguZmxvb3IodHJhbnNsYXRlICogMTAwKSA+PSBNYXRoLmZsb29yKHMuc2xpZGVzR3JpZFtpXSAqIDEwMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCAmJiB0cmFuc2xhdGUgPCBzLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPCBzLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIHRyYW5zbGF0ZSA+IHMudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHMubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHMuYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXggKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIEluZGV4XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykgc3BlZWQgPSBzLnBhcmFtcy5zcGVlZDtcbiAgICAgICAgICAgIHMucHJldmlvdXNJbmRleCA9IHMuYWN0aXZlSW5kZXggfHwgMDtcbiAgICAgICAgICAgIHMuYWN0aXZlSW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgICAgICAgcy51cGRhdGVSZWFsSW5kZXgoKTtcbiAgICAgICAgICAgIGlmICgocy5ydGwgJiYgLXRyYW5zbGF0ZSA9PT0gcy50cmFuc2xhdGUpIHx8ICghcy5ydGwgJiYgdHJhbnNsYXRlID09PSBzLnRyYW5zbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgSGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGVlZCA9PT0gMCB8fCBzLmJyb3dzZXIubHRlSUU5KSB7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihzcGVlZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHMub25UcmFuc2l0aW9uU3RhcnQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bkNhbGxiYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMubGF6eSkgcy5sYXp5Lm9uVHJhbnNpdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblRyYW5zaXRpb25TdGFydCcsIHMpO1xuICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ICE9PSBzLnByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlQ2hhbmdlU3RhcnQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggPiBzLnByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZU5leHRTdGFydCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlUHJldlN0YXJ0Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHMubGF6eSkgcy5sYXp5Lm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UcmFuc2l0aW9uRW5kJywgcyk7XG4gICAgICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggIT09IHMucHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVDaGFuZ2VFbmQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggPiBzLnByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZU5leHRFbmQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZVByZXZFbmQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oaXN0b3J5ICYmIHMuaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIHMuaGlzdG9yeS5zZXRIaXN0b3J5KHMucGFyYW1zLmhpc3RvcnksIHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXYgJiYgcy5oYXNobmF2KSB7XG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LnNldEhhc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHMuc2xpZGVOZXh0ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcywgc3BlZWQsIGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gcy5jb250YWluZXJbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgICB9O1xuICAgICAgICBzLl9zbGlkZU5leHQgPSBmdW5jdGlvbiAoc3BlZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlTmV4dCh0cnVlLCBzcGVlZCwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2xpZGVQcmV2ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcywgc3BlZWQsIGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gcy5jb250YWluZXJbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggLSAxLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCAtIDEsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5fc2xpZGVQcmV2ID0gZnVuY3Rpb24gKHNwZWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZVByZXYodHJ1ZSwgc3BlZWQsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLnNsaWRlUmVzZXQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzLCBzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLmRpc2FibGVUb3VjaENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5vbmx5RXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHMuZW5hYmxlVG91Y2hDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMub25seUV4dGVybmFsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFRyYW5zbGF0ZS90cmFuc2l0aW9uIGhlbHBlcnNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcbiAgICAgICAgICAgICAgICBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XS5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYXJhbGxheCAmJiBzLnBhcmFsbGF4KSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbGxheC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sICYmIHMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5lbWl0KCdvblNldFRyYW5zaXRpb24nLCBzLCBkdXJhdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh0cmFuc2xhdGUsIHVwZGF0ZUFjdGl2ZUluZGV4LCBieUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHogPSAwO1xuICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICB4ID0gcy5ydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgICAgICAgICAgeCA9IHJvdW5kKHgpO1xuICAgICAgICAgICAgICAgIHkgPSByb3VuZCh5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkgcy53cmFwcGVyLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAnICsgeiArICdweCknKTtcbiAgICAgICAgICAgICAgICBlbHNlIHMud3JhcHBlci50cmFuc2Zvcm0oJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIHkgKyAncHgpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcy50cmFuc2xhdGUgPSBzLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byB1cGRhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcztcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHMubWF4VHJhbnNsYXRlKCkgLSBzLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gcy5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBzLnByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICh1cGRhdGVBY3RpdmVJbmRleCkgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJyAmJiBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XSkge1xuICAgICAgICAgICAgICAgIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdLnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFyYWxsYXggJiYgcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgICAgIHMucGFyYWxsYXguc2V0VHJhbnNsYXRlKHMudHJhbnNsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvbnRyb2wgJiYgcy5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuZW1pdCgnb25TZXRUcmFuc2xhdGUnLCBzLCBzLnRyYW5zbGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLmdldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChlbCwgYXhpcykge1xuICAgICAgICAgICAgdmFyIG1hdHJpeCwgY3VyVHJhbnNmb3JtLCBjdXJTdHlsZSwgdHJhbnNmb3JtTWF0cml4O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGF1dG9tYXRpYyBheGlzIGRldGVjdGlvblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGF4aXMgPSAneCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5ydGwgPyAtcy50cmFuc2xhdGUgOiBzLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjdXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uKGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgnLCcsJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgICAgICAgICAgICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xuICAgICAgICAgICAgICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIC8vTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeClcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTtcbiAgICAgICAgICAgICAgICAvL0NyYXp5IElFMTAgTWF0cml4XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7XG4gICAgICAgICAgICAgICAgLy9Ob3JtYWwgQnJvd3NlcnNcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICAvL0xhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7XG4gICAgICAgICAgICAgICAgLy9DcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xuICAgICAgICAgICAgICAgIC8vTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5ydGwgJiYgY3VyVHJhbnNmb3JtKSBjdXJUcmFuc2Zvcm0gPSAtY3VyVHJhbnNmb3JtO1xuICAgICAgICAgICAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xuICAgICAgICB9O1xuICAgICAgICBzLmdldFdyYXBwZXJUcmFuc2xhdGUgPSBmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHMuZ2V0VHJhbnNsYXRlKHMud3JhcHBlclswXSwgYXhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBPYnNlcnZlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGluaXRPYnNlcnZlcih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlXG4gICAgICAgICAgICB2YXIgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vblJlc2l6ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbk9ic2VydmVyVXBkYXRlJywgcywgbXV0YXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgcy5pbml0T2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lclBhcmVudHMgPSBzLmNvbnRhaW5lci5wYXJlbnRzKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXJQYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRPYnNlcnZlcihjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gT2JzZXJ2ZSBjb250YWluZXJcbiAgICAgICAgICAgIGluaXRPYnNlcnZlcihzLmNvbnRhaW5lclswXSwge2NoaWxkTGlzdDogZmFsc2V9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBPYnNlcnZlIHdyYXBwZXJcbiAgICAgICAgICAgIGluaXRPYnNlcnZlcihzLndyYXBwZXJbMF0sIHthdHRyaWJ1dGVzOiBmYWxzZX0pO1xuICAgICAgICB9O1xuICAgICAgICBzLmRpc2Nvbm5lY3RPYnNlcnZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy5vYnNlcnZlcnNbaV0uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgTG9vcFxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8vIENyZWF0ZSBsb29wZWQgc2xpZGVzXG4gICAgICAgIHMuY3JlYXRlTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVkIHNsaWRlc1xuICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiAhcy5wYXJhbXMubG9vcGVkU2xpZGVzKSBzLnBhcmFtcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgICAgIHMubG9vcGVkU2xpZGVzID0gcGFyc2VJbnQocy5wYXJhbXMubG9vcGVkU2xpZGVzIHx8IHMucGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKTtcbiAgICAgICAgICAgIHMubG9vcGVkU2xpZGVzID0gcy5sb29wZWRTbGlkZXMgKyBzLnBhcmFtcy5sb29wQWRkaXRpb25hbFNsaWRlcztcbiAgICAgICAgICAgIGlmIChzLmxvb3BlZFNsaWRlcyA+IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHByZXBlbmRTbGlkZXMgPSBbXSwgYXBwZW5kU2xpZGVzID0gW10sIGk7XG4gICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBzLmxvb3BlZFNsaWRlcykgYXBwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IHNsaWRlcy5sZW5ndGggJiYgaW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzKSBwcmVwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXBwZW5kU2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IHByZXBlbmRTbGlkZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMuZGVzdHJveUxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICcuJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcy5zbGlkZXMucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5yZUxvb3AgPSBmdW5jdGlvbiAodXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBvbGRJbmRleCA9IHMuYWN0aXZlSW5kZXggLSBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNTaXplKCk7XG4gICAgICAgICAgICBpZiAodXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8ob2xkSW5kZXggKyBzLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5maXhMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld0luZGV4O1xuICAgICAgICAgICAgLy9GaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG4gICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCA8IHMubG9vcGVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDMgKyBzLmFjdGl2ZUluZGV4O1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRml4IEZvciBQb3NpdGl2ZSBPdmVyc2xpZGluZ1xuICAgICAgICAgICAgZWxzZSBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBzLmFjdGl2ZUluZGV4ID49IHMubG9vcGVkU2xpZGVzICogMikgfHwgKHMuYWN0aXZlSW5kZXggPiBzLnNsaWRlcy5sZW5ndGggLSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICogMikpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IC1zLnNsaWRlcy5sZW5ndGggKyBzLmFjdGl2ZUluZGV4ICsgcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIHMubG9vcGVkU2xpZGVzO1xuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBBcHBlbmQvUHJlcGVuZC9SZW1vdmUgU2xpZGVzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5hcHBlbmRTbGlkZSA9IGZ1bmN0aW9uIChzbGlkZXMpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5kZXN0cm95TG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzW2ldKSBzLndyYXBwZXIuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmFwcGVuZChzbGlkZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmNyZWF0ZUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHMucGFyYW1zLm9ic2VydmVyICYmIHMuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5wcmVwZW5kU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXggKyAxO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzW2ldKSBzLndyYXBwZXIucHJlcGVuZChzbGlkZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnByZXBlbmQoc2xpZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShzLnBhcmFtcy5vYnNlcnZlciAmJiBzLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5yZW1vdmVTbGlkZSA9IGZ1bmN0aW9uIChzbGlkZXNJbmRleGVzKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgICAgICBzLnNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICAgICAgaW5kZXhUb1JlbW92ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgc2xpZGVzSW5kZXhlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0luZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgcy5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXM7XG4gICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleC0tO1xuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCEocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBzLnJlbW92ZUFsbFNsaWRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZXNJbmRleGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgRWZmZWN0c1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuZWZmZWN0cyA9IHtcbiAgICAgICAgICAgIGZhZGU6IHtcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSAtb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB0eCA9IHR4IC0gcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVPcGFjaXR5ID0gcy5wYXJhbXMuZmFkZS5jcm9zc0ZhZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgxIC0gTWF0aC5hYnMoc2xpZGVbMF0ucHJvZ3Jlc3MpLCAwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgKyBNYXRoLm1pbihNYXRoLm1heChzbGlkZVswXS5wcm9ncmVzcywgLTEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHNsaWRlT3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHR4ICsgJ3B4LCAnICsgdHkgKyAncHgsIDBweCknKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJpZ2dlcih0cmlnZ2VyRXZlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gc2xpZGVbMF0ucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZmxpcC5saW1pdFJvdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbihzbGlkZVswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBzbGlkZVswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGUgPSAtMTgwICogcHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSA9IHJvdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWCA9IC1yb3RhdGVZO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZID0gLXJvdGF0ZVk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQocHJvZ3Jlc3MpKSArIHMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZmxpcC5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgdHggKyAncHgsICcgKyB0eSArICdweCwgMHB4KSByb3RhdGVYKCcgKyByb3RhdGVYICsgJ2RlZykgcm90YXRlWSgnICsgcm90YXRlWSArICdkZWcpJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudFRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCkudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1YmU6IHtcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXJSb3RhdGUgPSAwLCBjdWJlU2hhZG93O1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zaGFkb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9IHMud3JhcHBlci5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1YmVTaGFkb3cubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5hcHBlbmQoY3ViZVNoYWRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cuY3NzKHtoZWlnaHQ6IHMud2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gcy5jb250YWluZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdWJlU2hhZG93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNvbnRhaW5lci5hcHBlbmQoY3ViZVNoYWRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlQW5nbGUgPSBpICogOTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91bmQgPSBNYXRoLmZsb29yKHNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVBbmdsZSA9IC1zbGlkZUFuZ2xlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kID0gTWF0aC5mbG9vcigtc2xpZGVBbmdsZSAvIDM2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbihzbGlkZVswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eCA9IDAsIHR5ID0gMCwgdHogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSA0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtIHJvdW5kICogNCAqIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoaSAtIDEpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IC0gcm91bmQgKiA0ICogcy5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGkgLSAyKSAlIDQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IHMuc2l6ZSArIHJvdW5kICogNCAqIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMykgJSA0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IDMgKiBzLnNpemUgKyBzLnNpemUgKiA0ICogcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IC10eDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eSA9IHR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArIChzLmlzSG9yaXpvbnRhbCgpID8gMCA6IC1zbGlkZUFuZ2xlKSArICdkZWcpIHJvdGF0ZVkoJyArIChzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVBbmdsZSA6IDApICsgJ2RlZykgdHJhbnNsYXRlM2QoJyArIHR4ICsgJ3B4LCAnICsgdHkgKyAncHgsICcgKyB0eiArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDw9IDEgJiYgcHJvZ3Jlc3MgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJSb3RhdGUgPSBpICogOTAgKyBwcm9ncmVzcyAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgd3JhcHBlclJvdGF0ZSA9IC1pICogOTAgLSBwcm9ncmVzcyAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsICcgKyAocy53aWR0aCAvIDIgKyBzLnBhcmFtcy5jdWJlLnNoYWRvd09mZnNldCkgKyAncHgsICcgKyAoLXMud2lkdGggLyAyKSArICdweCkgcm90YXRlWCg5MGRlZykgcm90YXRlWigwZGVnKSBzY2FsZSgnICsgKHMucGFyYW1zLmN1YmUuc2hhZG93U2NhbGUpICsgJyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dBbmdsZSA9IE1hdGguYWJzKHdyYXBwZXJSb3RhdGUpIC0gTWF0aC5mbG9vcihNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAvIDkwKSAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gMS41IC0gKE1hdGguc2luKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkgLyAzNjApIC8gMiArIE1hdGguY29zKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkgLyAzNjApIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlMSA9IHMucGFyYW1zLmN1YmUuc2hhZG93U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlMiA9IHMucGFyYW1zLmN1YmUuc2hhZG93U2NhbGUgLyBtdWx0aXBsaWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd09mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LnRyYW5zZm9ybSgnc2NhbGUzZCgnICsgc2NhbGUxICsgJywgMSwgJyArIHNjYWxlMiArICcpIHRyYW5zbGF0ZTNkKDBweCwgJyArIChzLmhlaWdodCAvIDIgKyBvZmZzZXQpICsgJ3B4LCAnICsgKC1zLmhlaWdodCAvIDIgLyBzY2FsZTIpICsgJ3B4KSByb3RhdGVYKC05MGRlZyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgekZhY3RvciA9IChzLmlzU2FmYXJpIHx8IHMuaXNVaVdlYlZpZXcpID8gKC1zLnNpemUgLyAyKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDBweCwwLCcgKyB6RmFjdG9yICsgJ3B4KSByb3RhdGVYKCcgKyAocy5pc0hvcml6b250YWwoKSA/IDAgOiB3cmFwcGVyUm90YXRlKSArICdkZWcpIHJvdGF0ZVkoJyArIChzLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwKSArICdkZWcpJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jdWJlLnNoYWRvdyAmJiAhcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gLXRyYW5zZm9ybSArIHMud2lkdGggLyAyIDogLXRyYW5zZm9ybSArIHMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdGF0ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnBhcmFtcy5jb3ZlcmZsb3cucm90YXRlOiAtcy5wYXJhbXMuY292ZXJmbG93LnJvdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHMucGFyYW1zLmNvdmVyZmxvdy5kZXB0aDtcbiAgICAgICAgICAgICAgICAgICAgLy9FYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlU2l6ZSA9IHMuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlT2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TXVsdGlwbGllciA9IChjZW50ZXIgLSBzbGlkZU9mZnNldCAtIHNsaWRlU2l6ZSAvIDIpIC8gc2xpZGVTaXplICogcy5wYXJhbXMuY292ZXJmbG93Lm1vZGlmaWVyO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGVZID0gcy5pc0hvcml6b250YWwoKSA/IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdGF0ZVggPSBzLmlzSG9yaXpvbnRhbCgpID8gMCA6IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgcm90YXRlWiA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVaID0gLXRyYW5zbGF0ZSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVZID0gcy5pc0hvcml6b250YWwoKSA/IDAgOiBzLnBhcmFtcy5jb3ZlcmZsb3cuc3RyZXRjaCAqIChvZmZzZXRNdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVYID0gcy5pc0hvcml6b250YWwoKSA/IHMucGFyYW1zLmNvdmVyZmxvdy5zdHJldGNoICogKG9mZnNldE11bHRpcGxpZXIpIDogMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZpeCBmb3IgdWx0cmEgc21hbGwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWCkgPCAwLjAwMSkgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWSkgPCAwLjAwMSkgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWikgPCAwLjAwMSkgdHJhbnNsYXRlWiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWSkgPCAwLjAwMSkgcm90YXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWCkgPCAwLjAwMSkgcm90YXRlWCA9IDA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCcgKyB0cmFuc2xhdGVZICsgJ3B4LCcgKyB0cmFuc2xhdGVaICsgJ3B4KSAgcm90YXRlWCgnICsgcm90YXRlWCArICdkZWcpIHJvdGF0ZVkoJyArIHJvdGF0ZVkgKyAnZGVnKSc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtKHNsaWRlVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKG9mZnNldE11bHRpcGxpZXIpKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY292ZXJmbG93LnNsaWRlU2hhZG93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IHNoYWRvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QmVmb3JlID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dBZnRlciA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QmVmb3JlID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCcpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dBZnRlciA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdyaWdodCcgOiAnYm90dG9tJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dBZnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IG9mZnNldE11bHRpcGxpZXIgPiAwID8gb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCkgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9ICgtb2Zmc2V0TXVsdGlwbGllcikgPiAwID8gLW9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL1NldCBjb3JyZWN0IHBlcnNwZWN0aXZlIGZvciBJRTEwXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmJyb3dzZXIuaWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cyA9IHMud3JhcHBlclswXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzLnBlcnNwZWN0aXZlT3JpZ2luID0gY2VudGVyICsgJ3B4IDUwJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEltYWdlcyBMYXp5IExvYWRpbmdcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmxhenkgPSB7XG4gICAgICAgICAgICBpbml0aWFsSW1hZ2VMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZEltYWdlSW5TbGlkZTogZnVuY3Rpb24gKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZEluRHVwbGljYXRlID09PSAndW5kZWZpbmVkJykgbG9hZEluRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gc2xpZGUuZmluZCgnLicgKyBzLnBhcmFtcy5sYXp5TG9hZGluZ0NsYXNzICsgJzpub3QoLicgKyBzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGVkQ2xhc3MgKyAnKTpub3QoLicgKyBzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGluZ0NsYXNzICsgJyknKTtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMubGF6eUxvYWRpbmdDbGFzcykgJiYgIXNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLmxhenlTdGF0dXNMb2FkZWRDbGFzcykgJiYgIXNsaWRlLmhhc0NsYXNzKHMucGFyYW1zLmxhenlTdGF0dXNMb2FkaW5nQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGltZy5hZGQoc2xpZGVbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW1nLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfaW1nID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgX2ltZy5hZGRDbGFzcyhzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGluZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBfaW1nLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gX2ltZy5hdHRyKCdkYXRhLXNyYycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0ID0gX2ltZy5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXMgPSBfaW1nLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgcy5sb2FkSW1hZ2UoX2ltZ1swXSwgKHNyYyB8fCBiYWNrZ3JvdW5kKSwgc3Jjc2V0LCBzaXplcywgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcyA9PT0gbnVsbCB8fCAhcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoXCInICsgYmFja2dyb3VuZCArICdcIiknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmF0dHIoJ3NyY3NldCcsIHNyY3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYXR0cignc2l6ZXMnLCBzaXplcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5hZGRDbGFzcyhzLnBhcmFtcy5sYXp5U3RhdHVzTG9hZGVkQ2xhc3MpLnJlbW92ZUNsYXNzKHMucGFyYW1zLmxhenlTdGF0dXNMb2FkaW5nQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuZmluZCgnLicgKyBzLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3MgKyAnLCAuJyArIHMucGFyYW1zLnByZWxvYWRlckNsYXNzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wICYmIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZU9yaWdpbmFsSW5kZXggPSBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHNsaWRlT3JpZ2luYWxJbmRleCArICdcIl06bm90KC4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKG9yaWdpbmFsU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1cGxpY2F0ZWRTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyAnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGR1cGxpY2F0ZWRTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkxhenlJbWFnZVJlYWR5Jywgcywgc2xpZGVbMF0sIF9pbWdbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25MYXp5SW1hZ2VMb2FkJywgcywgc2xpZGVbMF0sIF9pbWdbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlc1BlclZpZXcgPSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcy5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkgcy5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoJCh0aGlzKS5pbmRleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXg7IGkgPCBzLmFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldyA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZXNQZXJWaWV3ID4gMSB8fCAocy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0QW1vdW50ICYmIHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudCA+IDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1vdW50ID0gcy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwdiA9IHNsaWRlc1BlclZpZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4SW5kZXggPSBNYXRoLm1pbihzLmFjdGl2ZUluZGV4ICsgc3B2ICsgTWF0aC5tYXgoYW1vdW50LCBzcHYpLCBzLnNsaWRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbkluZGV4ID0gTWF0aC5tYXgocy5hY3RpdmVJbmRleCAtIE1hdGgubWF4KHNwdiwgYW1vdW50KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcy5hY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IGkgPCBtYXhJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2ldKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXYgU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBtaW5JbmRleDsgaSA8IHMuYWN0aXZlSW5kZXggOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaV0pIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCA+IDApIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKG5leHRTbGlkZS5pbmRleCgpKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUubGVuZ3RoID4gMCkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUocHJldlNsaWRlLmluZGV4KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0IHx8ICghcy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCAmJiAhcy5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nICYmICFzLnBhcmFtcy5sYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTY3JvbGxiYXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnNjcm9sbGJhciA9IHtcbiAgICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICBzZXREcmFnUG9zaXRpb246IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIHZhciBwb2ludGVyUG9zaXRpb24gPSBzLmlzSG9yaXpvbnRhbCgpID9cbiAgICAgICAgICAgICAgICAgICAgKChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVggfHwgZS5jbGllbnRYKSA6XG4gICAgICAgICAgICAgICAgICAgICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZIHx8IGUuY2xpZW50WSkgO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IChwb2ludGVyUG9zaXRpb24pIC0gc2IudHJhY2sub2Zmc2V0KClbcy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSAtIHNiLmRyYWdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25NaW4gPSAtcy5taW5UcmFuc2xhdGUoKSAqIHNiLm1vdmVEaXZpZGVyO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbk1heCA9IC1zLm1heFRyYW5zbGF0ZSgpICogc2IubW92ZURpdmlkZXI7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgcG9zaXRpb25NaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbk1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zaXRpb24gPiBwb3NpdGlvbk1heCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uTWF4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbiAvIHNiLm1vdmVEaXZpZGVyO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHNiLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHNiLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2IuZHJhZ1RpbWVvdXQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbigxMDApO1xuICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNpdGlvbigxMDApO1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnU3RhcnQnLCBzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmFnTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICBpZiAoIXNiLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2Iuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHNiLnRyYWNrLnRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnTW92ZScsIHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWdFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFzYi5pc1RvdWNoZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzYi5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2IuZHJhZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDQwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblNjcm9sbGJhckRyYWdFbmQnLCBzKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyU25hcE9uUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlUmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhZ2dhYmxlRXZlbnRzOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgocy5wYXJhbXMuc2ltdWxhdGVUb3VjaCA9PT0gZmFsc2UgJiYgIXMuc3VwcG9ydC50b3VjaCkpIHJldHVybiBzLnRvdWNoRXZlbnRzRGVza3RvcDtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBzLnRvdWNoRXZlbnRzO1xuICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgIGVuYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnN1cHBvcnQudG91Y2ggPyBzYi50cmFjayA6IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICQoc2IudHJhY2spLm9uKHNiLmRyYWdnYWJsZUV2ZW50cy5zdGFydCwgc2IuZHJhZ1N0YXJ0KTtcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub24oc2IuZHJhZ2dhYmxlRXZlbnRzLm1vdmUsIHNiLmRyYWdNb3ZlKTtcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub24oc2IuZHJhZ2dhYmxlRXZlbnRzLmVuZCwgc2IuZHJhZ0VuZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnN1cHBvcnQudG91Y2ggPyBzYi50cmFjayA6IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICQoc2IudHJhY2spLm9mZihzYi5kcmFnZ2FibGVFdmVudHMuc3RhcnQsIHNiLmRyYWdTdGFydCk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9mZihzYi5kcmFnZ2FibGVFdmVudHMubW92ZSwgc2IuZHJhZ01vdmUpO1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5vZmYoc2IuZHJhZ2dhYmxlRXZlbnRzLmVuZCwgc2IuZHJhZ0VuZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5zY3JvbGxiYXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICBzYi50cmFjayA9ICQocy5wYXJhbXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLnNjcm9sbGJhciA9PT0gJ3N0cmluZycgJiYgc2IudHJhY2subGVuZ3RoID4gMSAmJiBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnNjcm9sbGJhcikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5zY3JvbGxiYXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzYi5kcmFnID0gc2IudHJhY2suZmluZCgnLnN3aXBlci1zY3JvbGxiYXItZHJhZycpO1xuICAgICAgICAgICAgICAgIGlmIChzYi5kcmFnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zY3JvbGxiYXItZHJhZ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFjay5hcHBlbmQoc2IuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgIHNiLnRyYWNrU2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzYi50cmFja1swXS5vZmZzZXRXaWR0aCA6IHNiLnRyYWNrWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc2IuZGl2aWRlciA9IHMuc2l6ZSAvIHMudmlydHVhbFNpemU7XG4gICAgICAgICAgICAgICAgc2IubW92ZURpdmlkZXIgPSBzYi5kaXZpZGVyICogKHNiLnRyYWNrU2l6ZSAvIHMuc2l6ZSk7XG4gICAgICAgICAgICAgICAgc2IuZHJhZ1NpemUgPSBzYi50cmFja1NpemUgKiBzYi5kaXZpZGVyO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLndpZHRoID0gc2IuZHJhZ1NpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS5oZWlnaHQgPSBzYi5kcmFnU2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2IuZGl2aWRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNjcm9sbGJhcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBkaWZmO1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnRyYW5zbGF0ZSB8fCAwO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3M7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBuZXdTaXplID0gc2IuZHJhZ1NpemU7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gKHNiLnRyYWNrU2l6ZSAtIHNiLmRyYWdTaXplKSAqIHMucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaWYgKHMucnRsICYmIHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gLW5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1BvcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzYi5kcmFnU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoLW5ld1BvcyArIHNiLmRyYWdTaXplID4gc2IudHJhY2tTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IudHJhY2tTaXplICsgbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLmRyYWdTaXplICsgbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdQb3MgKyBzYi5kcmFnU2l6ZSA+IHNiLnRyYWNrU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLnRyYWNrU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyAobmV3UG9zKSArICdweCwgMCwgMCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGVYKCcgKyAobmV3UG9zKSArICdweCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLndpZHRoID0gbmV3U2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDBweCwgJyArIChuZXdQb3MpICsgJ3B4LCAwKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZVkoJyArIChuZXdQb3MpICsgJ3B4KScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUuaGVpZ2h0ID0gbmV3U2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzYi50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbig0MDApO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5zY3JvbGxiYXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5kcmFnLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBDb250cm9sbGVyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jb250cm9sbGVyID0ge1xuICAgICAgICAgICAgTGluZWFyU3BsaW5lOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgICAgIHZhciBiaW5hcnlTZWFyY2ggPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhJbmRleCwgbWluSW5kZXgsIGd1ZXNzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1heEluZGV4IC0gbWluSW5kZXggPiAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtndWVzcyA9IG1heEluZGV4ICsgbWluSW5kZXggPj4gMV0gPD0gdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkluZGV4ID0gZ3Vlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5kZXggPSBndWVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgLy8gR2l2ZW4gYW4geCB2YWx1ZSAoeDIpLCByZXR1cm4gdGhlIGV4cGVjdGVkIHkyIHZhbHVlOlxuICAgICAgICAgICAgICAgIC8vICh4MSx5MSkgaXMgdGhlIGtub3duIHBvaW50IGJlZm9yZSBnaXZlbiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cbiAgICAgICAgICAgICAgICB2YXIgaTEsIGkzO1xuICAgICAgICAgICAgICAgIHZhciBsID0gdGhpcy54Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uICh4Mikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXgyKSByZXR1cm4gMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgaW5kZXhlcyBvZiB4MSBhbmQgeDMgKHRoZSBhcnJheSBpbmRleGVzIGJlZm9yZSBhbmQgYWZ0ZXIgZ2l2ZW4geDIpOlxuICAgICAgICAgICAgICAgICAgICBpMyA9IGJpbmFyeVNlYXJjaCh0aGlzLngsIHgyKTtcbiAgICAgICAgICAgICAgICAgICAgaTEgPSBpMyAtIDE7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIG91ciBpbmRleGVzIGkxICYgaTMsIHNvIHdlIGNhbiBjYWxjdWxhdGUgYWxyZWFkeTpcbiAgICAgICAgICAgICAgICAgICAgLy8geTIgOj0gKCh4MuKIkngxKSDDlyAoeTPiiJJ5MSkpIMO3ICh4M+KIkngxKSArIHkxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHgyIC0gdGhpcy54W2kxXSkgKiAodGhpcy55W2kzXSAtIHRoaXMueVtpMV0pKSAvICh0aGlzLnhbaTNdIC0gdGhpcy54W2kxXSkgKyB0aGlzLnlbaTFdO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy94eHg6IGZvciBub3cgaSB3aWxsIGp1c3Qgc2F2ZSBvbmUgc3BsaW5lIGZ1bmN0aW9uIHRvIHRvXG4gICAgICAgICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbihjKXtcbiAgICAgICAgICAgICAgICBpZighcy5jb250cm9sbGVyLnNwbGluZSkgcy5jb250cm9sbGVyLnNwbGluZSA9IHMucGFyYW1zLmxvb3AgP1xuICAgICAgICAgICAgICAgICAgICBuZXcgcy5jb250cm9sbGVyLkxpbmVhclNwbGluZShzLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZCkgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgcy5jb250cm9sbGVyLkxpbmVhclNwbGluZShzLnNuYXBHcmlkLCBjLnNuYXBHcmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZWQgPSBzLnBhcmFtcy5jb250cm9sO1xuICAgICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIsIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGNyZWF0ZSBhbiBJbnRlcnBvbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgc25hcEdyaWRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHggaXMgdGhlIEdyaWQgb2YgdGhlIHNjcm9sbGVkIHNjcm9sbGVyIGFuZCB5IHdpbGwgYmUgdGhlIGNvbnRyb2xsZWQgc2Nyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgbWFrZXMgc2Vuc2UgdG8gY3JlYXRlIHRoaXMgb25seSBvbmNlIGFuZCByZWNhbGwgaXQgZm9yIHRoZSBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBkb2VzIGEgbG90IG9mIHZhbHVlIGNhY2hpbmcgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IGMucnRsICYmIGMucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gLXMudHJhbnNsYXRlIDogcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sQnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5nZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaSBhbSBub3Qgc3VyZSB3aHkgdGhlIHZhbHVlcyBoYXZlIHRvIGJlIG11bHRpcGxpY2F0ZWQgdGhpcyB3YXksIHRyaWVkIHRvIGludmVydCB0aGUgc25hcEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBkaWQgbm90IHdvcmsgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gLXMuY29udHJvbGxlci5zcGxpbmUuaW50ZXJwb2xhdGUoLXRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHMucGFyYW1zLmNvbnRyb2xCeSA9PT0gJ2NvbnRhaW5lcicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IChjLm1heFRyYW5zbGF0ZSgpIC0gYy5taW5UcmFuc2xhdGUoKSkgLyAocy5tYXhUcmFuc2xhdGUoKSAtIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9ICh0cmFuc2xhdGUgLSBzLm1pblRyYW5zbGF0ZSgpKSAqIG11bHRpcGxpZXIgKyBjLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY29udHJvbEludmVyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSBjLm1heFRyYW5zbGF0ZSgpIC0gY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjLnVwZGF0ZVByb2dyZXNzKGNvbnRyb2xsZWRUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjLnNldFdyYXBwZXJUcmFuc2xhdGUoY29udHJvbGxlZFRyYW5zbGF0ZSwgZmFsc2UsIHMpO1xuICAgICAgICAgICAgICAgICAgICBjLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWQpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZWQgPSBzLnBhcmFtcy5jb250cm9sO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5zZXRXcmFwcGVyVHJhbnNpdGlvbihkdXJhdGlvbiwgcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2xsZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy5wYXJhbXMubG9vcCAmJiBzLnBhcmFtcy5jb250cm9sQnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSGFzaCBOYXZpZ2F0aW9uXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5oYXNobmF2ID0ge1xuICAgICAgICAgICAgb25IYXNoQ2FuZ2U6IGZ1bmN0aW9uIChlLCBhKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0hhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlSGFzaCA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdIYXNoICE9PSBhY3RpdmVTbGlkZUhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJ1tkYXRhLWhhc2g9XCInICsgKG5ld0hhc2gpICsgJ1wiXScpLmluZGV4KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRhY2hFdmVudHM6IGZ1bmN0aW9uIChkZXRhY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gZGV0YWNoID8gJ29mZicgOiAnb24nO1xuICAgICAgICAgICAgICAgICQod2luZG93KVthY3Rpb25dKCdoYXNoY2hhbmdlJywgcy5oYXNobmF2Lm9uSGFzaENhbmdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRIYXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLmhhc2huYXYuaW5pdGlhbGl6ZWQgfHwgIXMucGFyYW1zLmhhc2huYXYpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucmVwbGFjZVN0YXRlICYmIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgKCcjJyArIHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpIHx8ICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSBoYXNoIHx8ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5oYXNobmF2IHx8IHMucGFyYW1zLmhpc3RvcnkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzLmhhc2huYXYuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVIYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVIYXNoID09PSBoYXNoICYmICFzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuaGFzaG5hdldhdGNoU3RhdGUpIHMuaGFzaG5hdi5hdHRhY2hFdmVudHMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXZXYXRjaFN0YXRlKSBzLmhhc2huYXYuYXR0YWNoRXZlbnRzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBIaXN0b3J5IEFwaSB3aXRoIGZhbGxiYWNrIHRvIEhhc2huYXZcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmhpc3RvcnkgPSB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5oaXN0b3J5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuaGlzdG9yeSB8fCAhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLmhpc3RvcnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuaGFzaG5hdiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5oaXN0b3J5LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhzID0gdGhpcy5nZXRQYXRoVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhdGhzLmtleSAmJiAhdGhpcy5wYXRocy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TbGlkZSgwLCB0aGlzLnBhdGhzLnZhbHVlLCBzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SGlzdG9yeVBvcFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzLmhpc3RvcnkucGF0aHMgPSBzLmhpc3RvcnkuZ2V0UGF0aFZhbHVlcygpO1xuICAgICAgICAgICAgICAgIHMuaGlzdG9yeS5zY3JvbGxUb1NsaWRlKHMucGFyYW1zLnNwZWVkLCBzLmhpc3RvcnkucGF0aHMudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQYXRoVmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsID0gcGF0aEFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGF0aEFycmF5W3RvdGFsIC0gMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLmhpc3RvcnkuaW5pdGlhbGl6ZWQgfHwgIXMucGFyYW1zLmhpc3RvcnkpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ga2V5ICsgJy8nICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbHVnaWZ5OiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC1cXC0rL2csICctJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14tKy8sICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvLSskLywgJycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvU2xpZGU6IGZ1bmN0aW9uKHNwZWVkLCB2YWx1ZSwgcnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVIaXN0b3J5ID0gdGhpcy5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUhpc3RvcnkgPT09IHZhbHVlICYmICFzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbygwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEtleWJvYXJkIENvbnRyb2xcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVLZXlib2FyZChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvL2pxdWVyeSBmaXhcbiAgICAgICAgICAgIHZhciBrYyA9IGUua2V5Q29kZSB8fCBlLmNoYXJDb2RlO1xuICAgICAgICAgICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ICYmIChzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzOSB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gNDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIChzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzNyB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gMzgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkgfHwga2MgPT09IDM4IHx8IGtjID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHZhciBpblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL0NoZWNrIHRoYXQgc3dpcGVyIHNob3VsZCBiZSBpbnNpZGUgb2YgdmlzaWJsZSBhcmVhIG9mIHdpbmRvd1xuICAgICAgICAgICAgICAgIGlmIChzLmNvbnRhaW5lci5wYXJlbnRzKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpLmxlbmd0aCA+IDAgJiYgcy5jb250YWluZXIucGFyZW50cygnLicgKyBzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZXJPZmZzZXQgPSBzLmNvbnRhaW5lci5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHN3aXBlck9mZnNldC5sZWZ0ID0gc3dpcGVyT2Zmc2V0LmxlZnQgLSBzLmNvbnRhaW5lclswXS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZXJDb29yZCA9IFtcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSxcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgcy53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcF0sXG4gICAgICAgICAgICAgICAgICAgIFtzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcCArIHMuaGVpZ2h0XSxcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgcy53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHMuaGVpZ2h0XVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBzd2lwZXJDb29yZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRbMF0gPj0gd2luZG93U2Nyb2xsLmxlZnQgJiYgcG9pbnRbMF0gPD0gd2luZG93U2Nyb2xsLmxlZnQgKyB3aW5kb3dXaWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRbMV0gPj0gd2luZG93U2Nyb2xsLnRvcCAmJiBwb2ludFsxXSA8PSB3aW5kb3dTY3JvbGwudG9wICsgd2luZG93SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpblZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoa2MgPT09IDM5ICYmICFzLnJ0bCkgfHwgKGtjID09PSAzNyAmJiBzLnJ0bCkpIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKChrYyA9PT0gMzcgJiYgIXMucnRsKSB8fCAoa2MgPT09IDM5ICYmIHMucnRsKSkgcy5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChrYyA9PT0gMzggfHwga2MgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2MgPT09IDQwKSBzLnNsaWRlTmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChrYyA9PT0gMzgpIHMuc2xpZGVQcmV2KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmVtaXQoJ29uS2V5UHJlc3MnLCBzLCBrYyk7XG4gICAgICAgIH1cbiAgICAgICAgcy5kaXNhYmxlS2V5Ym9hcmRDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMua2V5Ym9hcmRDb250cm9sID0gZmFsc2U7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMua2V5Ym9hcmRDb250cm9sID0gdHJ1ZTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgaGFuZGxlS2V5Ym9hcmQpO1xuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBNb3VzZXdoZWVsIENvbnRyb2xcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm1vdXNld2hlZWwgPSB7XG4gICAgICAgICAgICBldmVudDogZmFsc2UsXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVGltZTogKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCgpIHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSAnb253aGVlbCc7XG4gICAgICAgICAgICB2YXIgaXNTdXBwb3J0ZWQgPSBldmVudE5hbWUgaW4gZG9jdW1lbnQ7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAncmV0dXJuOycpO1xuICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkICYmXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24gJiZcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlICYmXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyByZXR1cm5zIHRydWUgaW4gbmV3ZXIgYnJvd3NlcnMgYXMgcGVyIHRoZSBzdGFuZGFyZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWhhc2ZlYXR1cmVcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCcnLCAnJykgIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gdGVzdCBzdXBwb3J0IGZvciB0aGUgYHdoZWVsYCBldmVudCBpbiBJRTkrLlxuICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnRXZlbnRzLndoZWVsJywgJzMuMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTW91c2Ugd2hlZWwgKGFuZCAyLWZpbmdlciB0cmFja3BhZCkgc3VwcG9ydCBvbiB0aGUgd2ViIHN1Y2tzLiAgSXQgaXNcbiAgICAgICAgICogY29tcGxpY2F0ZWQsIHRodXMgdGhpcyBkb2MgaXMgbG9uZyBhbmQgKGhvcGVmdWxseSkgZGV0YWlsZWQgZW5vdWdoIHRvIGFuc3dlclxuICAgICAgICAgKiB5b3VyIHF1ZXN0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IG5lZWQgdG8gcmVhY3QgdG8gdGhlIG1vdXNlIHdoZWVsIGluIGEgcHJlZGljdGFibGUgd2F5LCB0aGlzIGNvZGUgaXNcbiAgICAgICAgICogbGlrZSB5b3VyIGJlc3Rlc3QgZnJpZW5kLiAqIGh1Z3MgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBBcyBvZiB0b2RheSwgdGhlcmUgYXJlIDQgRE9NIGV2ZW50IHR5cGVzIHlvdSBjYW4gbGlzdGVuIHRvOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICd3aGVlbCcgICAgICAgICAgICAgICAgLS0gQ2hyb21lKDMxKyksIEZGKDE3KyksIElFKDkrKVxuICAgICAgICAgKiAgICdtb3VzZXdoZWVsJyAgICAgICAgICAgLS0gQ2hyb21lLCBJRSg2KyksIE9wZXJhLCBTYWZhcmlcbiAgICAgICAgICogICAnTW96TW91c2VQaXhlbFNjcm9sbCcgIC0tIEZGKDMuNSBvbmx5ISkgKDIwMTAtMjAxMykgLS0gZG9uJ3QgYm90aGVyIVxuICAgICAgICAgKiAgICdET01Nb3VzZVNjcm9sbCcgICAgICAgLS0gRkYoMC45LjcrKSBzaW5jZSAyMDAzXG4gICAgICAgICAqXG4gICAgICAgICAqIFNvIHdoYXQgdG8gZG8/ICBUaGUgaXMgdGhlIGJlc3Q6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgbm9ybWFsaXplV2hlZWwuZ2V0RXZlbnRUeXBlKCk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEluIHlvdXIgZXZlbnQgY2FsbGJhY2ssIHVzZSB0aGlzIGNvZGUgdG8gZ2V0IHNhbmUgaW50ZXJwcmV0YXRpb24gb2YgdGhlXG4gICAgICAgICAqIGRlbHRhcy4gIFRoaXMgY29kZSB3aWxsIHJldHVybiBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIHNwaW5YICAgLS0gbm9ybWFsaXplZCBzcGluIHNwZWVkICh1c2UgZm9yIHpvb20pIC0geCBwbGFuZVxuICAgICAgICAgKiAgIHNwaW5ZICAgLS0gXCIgLSB5IHBsYW5lXG4gICAgICAgICAqICAgcGl4ZWxYICAtLSBub3JtYWxpemVkIGRpc3RhbmNlICh0byBwaXhlbHMpIC0geCBwbGFuZVxuICAgICAgICAgKiAgIHBpeGVsWSAgLS0gXCIgLSB5IHBsYW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZWVsIHZhbHVlcyBhcmUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgYXNzdW1pbmcgeW91IGFyZSB1c2luZyB0aGUgd2hlZWwgdG9cbiAgICAgICAgICogc2Nyb2xsIGEgd2ViIHBhZ2UgYnkgYSBudW1iZXIgb2YgbGluZXMgb3IgcGl4ZWxzIChvciBwYWdlcykuICBWYWx1ZXMgY2FuIHZhcnlcbiAgICAgICAgICogc2lnbmlmaWNhbnRseSBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zIGFuZCBicm93c2VycywgZm9yZ2V0dGluZyB0aGF0IHlvdSBjYW5cbiAgICAgICAgICogc2Nyb2xsIGF0IGRpZmZlcmVudCBzcGVlZHMuICBTb21lIGRldmljZXMgKGxpa2UgdHJhY2twYWRzKSBlbWl0IG1vcmUgZXZlbnRzXG4gICAgICAgICAqIGF0IHNtYWxsZXIgaW5jcmVtZW50cyB3aXRoIGZpbmUgZ3JhbnVsYXJpdHksIGFuZCBzb21lIGVtaXQgbWFzc2l2ZSBqdW1wcyB3aXRoXG4gICAgICAgICAqIGxpbmVhciBzcGVlZCBvciBhY2NlbGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgY29kZSBkb2VzIGl0cyBiZXN0IHRvIG5vcm1hbGl6ZSB0aGUgZGVsdGFzIGZvciB5b3U6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgLSBzcGluIGlzIHRyeWluZyB0byBub3JtYWxpemUgaG93IGZhciB0aGUgd2hlZWwgd2FzIHNwdW4gKG9yIHRyYWNrcGFkXG4gICAgICAgICAqICAgICBkcmFnZ2VkKS4gIFRoaXMgaXMgc3VwZXIgdXNlZnVsIGZvciB6b29tIHN1cHBvcnQgd2hlcmUgeW91IHdhbnQgdG9cbiAgICAgICAgICogICAgIHRocm93IGF3YXkgdGhlIGNodW5reSBzY3JvbGwgc3RlcHMgb24gdGhlIFBDIGFuZCBtYWtlIHRob3NlIGVxdWFsIHRvXG4gICAgICAgICAqICAgICB0aGUgc2xvdyBhbmQgc21vb3RoIHRpbnkgc3RlcHMgb24gdGhlIE1hYy4gS2V5IGRhdGE6IFRoaXMgY29kZSB0cmllcyB0b1xuICAgICAgICAgKiAgICAgcmVzb2x2ZSBhIHNpbmdsZSBzbG93IHN0ZXAgb24gYSB3aGVlbCB0byAxLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIC0gcGl4ZWwgaXMgbm9ybWFsaXppbmcgdGhlIGRlc2lyZWQgc2Nyb2xsIGRlbHRhIGluIHBpeGVsIHVuaXRzLiAgWW91J2xsXG4gICAgICAgICAqICAgICBnZXQgdGhlIGNyYXp5IGRpZmZlcmVuY2VzIGJldHdlZW4gYnJvd3NlcnMsIGJ1dCBhdCBsZWFzdCBpdCdsbCBiZSBpblxuICAgICAgICAgKiAgICAgcGl4ZWxzIVxuICAgICAgICAgKlxuICAgICAgICAgKiAgIC0gcG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIHNjcm9sbGluZyBET1dOL1JJR0hULCBuZWdhdGl2ZSBVUC9MRUZULiAgVGhpc1xuICAgICAgICAgKiAgICAgc2hvdWxkIHRyYW5zbGF0ZSB0byBwb3NpdGl2ZSB2YWx1ZSB6b29taW5nIElOLCBuZWdhdGl2ZSB6b29taW5nIE9VVC5cbiAgICAgICAgICogICAgIFRoaXMgbWF0Y2hlcyB0aGUgbmV3ZXIgJ3doZWVsJyBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogV2h5IGFyZSB0aGVyZSBzcGluWCwgc3BpblkgKG9yIHBpeGVscyk/XG4gICAgICAgICAqXG4gICAgICAgICAqICAgLSBzcGluWCBpcyBhIDItZmluZ2VyIHNpZGUgZHJhZyBvbiB0aGUgdHJhY2twYWQsIGFuZCBhIHNoaWZ0ICsgd2hlZWwgdHVyblxuICAgICAgICAgKiAgICAgd2l0aCBhIG1vdXNlLiAgSXQgcmVzdWx0cyBpbiBzaWRlLXNjcm9sbGluZyBpbiB0aGUgYnJvd3NlciBieSBkZWZhdWx0LlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIC0gc3BpblkgaXMgd2hhdCB5b3UgZXhwZWN0IC0tIGl0J3MgdGhlIGNsYXNzaWMgYXhpcyBvZiBhIG1vdXNlIHdoZWVsLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIC0gSSBkcm9wcGVkIHNwaW5aL3BpeGVsWi4gIEl0IGlzIHN1cHBvcnRlZCBieSB0aGUgRE9NIDMgJ3doZWVsJyBldmVudCBhbmRcbiAgICAgICAgICogICAgIHByb2JhYmx5IGlzIGJ5IGJyb3dzZXJzIGluIGNvbmp1bmN0aW9uIHdpdGggZmFuY3kgM0QgY29udHJvbGxlcnMgLi4gYnV0XG4gICAgICAgICAqICAgICB5b3Uga25vdy5cbiAgICAgICAgICpcbiAgICAgICAgICogSW1wbGVtZW50YXRpb24gaW5mbzpcbiAgICAgICAgICpcbiAgICAgICAgICogRXhhbXBsZXMgb2YgJ3doZWVsJyBldmVudCBpZiB5b3Ugc2Nyb2xsIHNsb3dseSAoZG93bikgYnkgb25lIHN0ZXAgd2l0aCBhblxuICAgICAgICAgKiBhdmVyYWdlIG1vdXNlOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIE9TIFggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gICAgNCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICAgICAgICAgKiAgIE9TIFggKyBTYWZhcmkgIChtb3VzZSkgICAgIC0gIE4vQSAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgLTEyKVxuICAgICAgICAgKiAgIE9TIFggKyBGaXJlZm94IChtb3VzZSkgICAgIC0gICAgMC4xIGxpbmUgIGRlbHRhICAod2hlZWxEZWx0YSAgTi9BKVxuICAgICAgICAgKiAgIFdpbjggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gIDEwMCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICAgICAgICAgKiAgIFdpbjggKyBGaXJlZm94IChtb3VzZSkgICAgIC0gICAgMyAgIGxpbmUgIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICAgICAgICAgKlxuICAgICAgICAgKiBPbiB0aGUgdHJhY2twYWQ6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgT1MgWCArIENocm9tZSAgKHRyYWNrcGFkKSAgLSAgICAyICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICAgLTYpXG4gICAgICAgICAqICAgT1MgWCArIEZpcmVmb3ggKHRyYWNrcGFkKSAgLSAgICAxICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gICAgICAgICAqXG4gICAgICAgICAqIE9uIG90aGVyL29sZGVyIGJyb3dzZXJzLi4gaXQncyBtb3JlIGNvbXBsaWNhdGVkIGFzIHRoZXJlIGNhbiBiZSBtdWx0aXBsZSBhbmRcbiAgICAgICAgICogYWxzbyBtaXNzaW5nIGRlbHRhIHZhbHVlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlICd3aGVlbCcgZXZlbnQgaXMgbW9yZSBzdGFuZGFyZDpcbiAgICAgICAgICpcbiAgICAgICAgICogaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtd2hlZWxldmVudHNcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGJhc2ljcyBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdW5pdCwgZGVsdGFNb2RlIChwaXhlbHMsIGxpbmVzLCBwYWdlcyksIGFuZFxuICAgICAgICAgKiBkZWx0YVgsIGRlbHRhWSBhbmQgZGVsdGFaLiAgU29tZSBicm93c2VycyBwcm92aWRlIG90aGVyIHZhbHVlcyB0byBtYWludGFpblxuICAgICAgICAgKiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgZXZlbnRzLiAgVGhvc2Ugb3RoZXIgdmFsdWVzIGhlbHAgdXNcbiAgICAgICAgICogYmV0dGVyIG5vcm1hbGl6ZSBzcGluIHNwZWVkLiAgRXhhbXBsZSBvZiB3aGF0IHRoZSBicm93c2VycyBwcm92aWRlOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBldmVudC53aGVlbERlbHRhIHwgZXZlbnQuZGV0YWlsXG4gICAgICAgICAqICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqICAgICAgICAgIFNhZmFyaSB2NS9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gICAgICAgICAqICAgICAgICAgIFNhZmFyaSB2NS9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gICAgICAgICAqICAgICAgICAgQ2hyb21lIHYxNy9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gICAgICAgICAqICAgICAgICAgQ2hyb21lIHYxNy9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gICAgICAgICAqICAgICAgICAgICAgICAgIElFOS9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgIHVuZGVmaW5lZFxuICAgICAgICAgKiAgICAgICAgIEZpcmVmb3ggdjQvT1MgWCAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgMVxuICAgICAgICAgKiAgICAgICAgIEZpcmVmb3ggdjQvV2luNyAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgM1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbm9ybWFsaXplV2hlZWwoIC8qb2JqZWN0Ki8gZXZlbnQgKSAvKm9iamVjdCovIHtcbiAgICAgICAgICAgIC8vIFJlYXNvbmFibGUgZGVmYXVsdHNcbiAgICAgICAgICAgIHZhciBQSVhFTF9TVEVQID0gMTA7XG4gICAgICAgICAgICB2YXIgTElORV9IRUlHSFQgPSA0MDtcbiAgICAgICAgICAgIHZhciBQQUdFX0hFSUdIVCA9IDgwMDtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc1ggPSAwLCBzWSA9IDAsICAgICAgIC8vIHNwaW5YLCBzcGluWVxuICAgICAgICAgICAgICAgIHBYID0gMCwgcFkgPSAwOyAgICAgICAvLyBwaXhlbFgsIHBpeGVsWVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIExlZ2FjeVxuICAgICAgICAgICAgaWYoICdkZXRhaWwnIGluIGV2ZW50ICkge1xuICAgICAgICAgICAgICAgIHNZID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoICd3aGVlbERlbHRhJyBpbiBldmVudCApIHtcbiAgICAgICAgICAgICAgICBzWSA9IC1ldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoICd3aGVlbERlbHRhWScgaW4gZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgc1kgPSAtZXZlbnQud2hlZWxEZWx0YVkgLyAxMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggJ3doZWVsRGVsdGFYJyBpbiBldmVudCApIHtcbiAgICAgICAgICAgICAgICBzWCA9IC1ldmVudC53aGVlbERlbHRhWCAvIDEyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG4gICAgICAgICAgICBpZiggJ2F4aXMnIGluIGV2ZW50ICYmIGV2ZW50LmF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUyApIHtcbiAgICAgICAgICAgICAgICBzWCA9IHNZO1xuICAgICAgICAgICAgICAgIHNZID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBwWCA9IHNYICogUElYRUxfU1RFUDtcbiAgICAgICAgICAgIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKCAnZGVsdGFZJyBpbiBldmVudCApIHtcbiAgICAgICAgICAgICAgICBwWSA9IGV2ZW50LmRlbHRhWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCAnZGVsdGFYJyBpbiBldmVudCApIHtcbiAgICAgICAgICAgICAgICBwWCA9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiggKHBYIHx8IHBZKSAmJiBldmVudC5kZWx0YU1vZGUgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGV2ZW50LmRlbHRhTW9kZSA9PT0gMSApIHsgICAgICAgICAgLy8gZGVsdGEgaW4gTElORSB1bml0c1xuICAgICAgICAgICAgICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgICAgICAgICAgICAgcFkgKj0gTElORV9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbHRhIGluIFBBR0UgdW5pdHNcbiAgICAgICAgICAgICAgICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgICAgIHBZICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBGYWxsLWJhY2sgaWYgc3BpbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZFxuICAgICAgICAgICAgaWYoIHBYICYmICFzWCApIHtcbiAgICAgICAgICAgICAgICBzWCA9IChwWCA8IDEpID8gLTEgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHBZICYmICFzWSApIHtcbiAgICAgICAgICAgICAgICBzWSA9IChwWSA8IDEpID8gLTEgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3Bpblg6IHNYLFxuICAgICAgICAgICAgICAgIHNwaW5ZOiBzWSxcbiAgICAgICAgICAgICAgICBwaXhlbFg6IHBYLFxuICAgICAgICAgICAgICAgIHBpeGVsWTogcFlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxDb250cm9sKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBiZXN0IGNvbWJpbmF0aW9uIGlmIHlvdSBwcmVmZXIgc3BpblggKyBzcGluWSBub3JtYWxpemF0aW9uLiAgSXQgZmF2b3JzXG4gICAgICAgICAgICAgKiB0aGUgb2xkZXIgRE9NTW91c2VTY3JvbGwgZm9yIEZpcmVmb3gsIGFzIEZGIGRvZXMgbm90IGluY2x1ZGUgd2hlZWxEZWx0YSB3aXRoXG4gICAgICAgICAgICAgKiAnd2hlZWwnIGV2ZW50LCBtYWtpbmcgc3BpbiBzcGVlZCBkZXRlcm1pbmF0aW9uIGltcG9zc2libGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHMubW91c2V3aGVlbC5ldmVudCA9IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSA/XG4gICAgICAgICAgICAgICAgJ0RPTU1vdXNlU2Nyb2xsJyA6XG4gICAgICAgICAgICAgICAgaXNFdmVudFN1cHBvcnRlZCgpID9cbiAgICAgICAgICAgICAgICAgICAgJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZXdoZWVsKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7IC8vanF1ZXJ5IGZpeFxuICAgICAgICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgICAgICAgIHZhciBydGxGYWN0b3IgPSBzLnJ0bCA/IC0xIDogMTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5vcm1hbGl6ZVdoZWVsKCBlICk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxGb3JjZVRvQXhpcykge1xuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkpIGRlbHRhID0gZGF0YS5waXhlbFggKiBydGxGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxZKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxYKSkgZGVsdGEgPSBkYXRhLnBpeGVsWTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsdGEgPSBNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkgPyAtIGRhdGEucGl4ZWxYICogcnRsRmFjdG9yIDogLSBkYXRhLnBpeGVsWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGVsdGEgPT09IDApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEludmVydCkgZGVsdGEgPSAtZGVsdGE7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmICgobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKSAtIHMubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA+IDYwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoIXMuaXNFbmQgfHwgcy5wYXJhbXMubG9vcCkgJiYgIXMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsJywgcywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCghcy5pc0JlZ2lubmluZyB8fCBzLnBhcmFtcy5sb29wKSAmJiAhcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGwnLCBzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxSZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9GcmVlbW9kZSBvciBzY3JvbGxDb250YWluZXI6XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcy5nZXRXcmFwcGVyVHJhbnNsYXRlKCkgKyBkZWx0YSAqIHMucGFyYW1zLm1vdXNld2hlZWxTZW5zaXRpdml0eTtcbiAgICAgICAgICAgICAgICB2YXIgd2FzQmVnaW5uaW5nID0gcy5pc0JlZ2lubmluZyxcbiAgICAgICAgICAgICAgICAgICAgd2FzRW5kID0gcy5pc0VuZDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IHMubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gcy5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCF3YXNCZWdpbm5pbmcgJiYgcy5pc0JlZ2lubmluZyB8fCAhd2FzRW5kICYmIHMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHMubW91c2V3aGVlbC50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVSZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nICYmIHMubGF6eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblNjcm9sbCcsIHMsIGUpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5ICYmIHMucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gcy5tYXhUcmFuc2xhdGUoKSkgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzLmRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKHMucGFyYW1zLm1vdXNld2hlZWxFdmVudHNUYXJnZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0Lm9mZihzLm1vdXNld2hlZWwuZXZlbnQsIGhhbmRsZU1vdXNld2hlZWwpO1xuICAgICAgICAgICAgcy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkKHMucGFyYW1zLm1vdXNld2hlZWxFdmVudHNUYXJnZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0Lm9uKHMubW91c2V3aGVlbC5ldmVudCwgaGFuZGxlTW91c2V3aGVlbCk7XG4gICAgICAgICAgICBzLnBhcmFtcy5tb3VzZXdoZWVsQ29udHJvbCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUGFyYWxsYXhcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBzZXRQYXJhbGxheFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgcCwgcFgsIHBZO1xuICAgICAgICAgICAgdmFyIHJ0bEZhY3RvciA9IHMucnRsID8gLTEgOiAxO1xuICAgICAgICBcbiAgICAgICAgICAgIHAgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcbiAgICAgICAgICAgIHBYID0gZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgICAgICAgICAgcFkgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC15Jyk7XG4gICAgICAgICAgICBpZiAocFggfHwgcFkpIHtcbiAgICAgICAgICAgICAgICBwWCA9IHBYIHx8ICcwJztcbiAgICAgICAgICAgICAgICBwWSA9IHBZIHx8ICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBYID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHBYID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoKHBYKS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBYID0gcGFyc2VJbnQocFgsIDEwKSAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFggPSBwWCAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgJ3B4JyA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHBZKS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBZID0gcGFyc2VJbnQocFksIDEwKSAqIHByb2dyZXNzICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFkgPSBwWSAqIHByb2dyZXNzICsgJ3B4JyA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgZWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgcFggKyAnLCAnICsgcFkgKyAnLDBweCknKTtcbiAgICAgICAgfVxuICAgICAgICBzLnBhcmFsbGF4ID0ge1xuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXIuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbGxheFRyYW5zZm9ybSh0aGlzLCBzLnByb2dyZXNzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChzbGlkZVswXS5wcm9ncmVzcywgLTEpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcmFsbGF4VHJhbnNmb3JtKHRoaXMsIHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIGR1cmF0aW9uID0gcy5wYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXIuZmluZCgnW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHBhcmFsbGF4RHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBab29tXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy56b29tID0ge1xuICAgICAgICAgICAgLy8gXCJHbG9iYWxcIiBQcm9wc1xuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICBjdXJyZW50U2NhbGU6IDEsXG4gICAgICAgICAgICBpc1NjYWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZ2VzdHVyZToge1xuICAgICAgICAgICAgICAgIHNsaWRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHNsaWRlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB6b29tTWF4OiBzLnBhcmFtcy56b29tTWF4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY3VycmVudFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50WTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1pblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBtaW5ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbWF4WDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1heFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRvdWNoZXNTdGFydDoge30sXG4gICAgICAgICAgICAgICAgdG91Y2hlc0N1cnJlbnQ6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHByZXZQb3NpdGlvblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBwcmV2UG9zaXRpb25ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcHJldlRpbWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIENhbGMgU2NhbGUgRnJvbSBNdWx0aS10b3VjaGVzXG4gICAgICAgICAgICBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgdmFyIHgxID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSxcbiAgICAgICAgICAgICAgICAgICAgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHkyID0gZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzdGFuY2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRXZlbnRzXG4gICAgICAgICAgICBvbkdlc3R1cmVTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcbiAgICAgICAgICAgICAgICBpZiAoIXMuc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2NhbGVTdGFydCA9IHouZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuc2xpZGUgfHwgIXouZ2VzdHVyZS5zbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHouZ2VzdHVyZS5zbGlkZS5sZW5ndGggPT09IDApIHouZ2VzdHVyZS5zbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UgPSB6Lmdlc3R1cmUuc2xpZGUuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwID0gei5nZXN0dXJlLmltYWdlLnBhcmVudCgnLicgKyBzLnBhcmFtcy56b29tQ29udGFpbmVyQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuem9vbU1heCA9IHouZ2VzdHVyZS5pbWFnZVdyYXAuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHMucGFyYW1zLnpvb21NYXggO1xuICAgICAgICAgICAgICAgICAgICBpZiAoei5nZXN0dXJlLmltYWdlV3JhcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICB6LmlzU2NhbGluZyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25HZXN0dXJlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xuICAgICAgICAgICAgICAgIGlmICghcy5zdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2NhbGVNb3ZlID0gei5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICB6LnNjYWxlID0gZS5zY2FsZSAqIHouY3VycmVudFNjYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9ICh6Lmdlc3R1cmUuc2NhbGVNb3ZlIC8gei5nZXN0dXJlLnNjYWxlU3RhcnQpICogei5jdXJyZW50U2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh6LnNjYWxlID4gei5nZXN0dXJlLnpvb21NYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9IHouZ2VzdHVyZS56b29tTWF4IC0gMSArIE1hdGgucG93KCh6LnNjYWxlIC0gei5nZXN0dXJlLnpvb21NYXggKyAxKSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHouc2NhbGUgPCBzLnBhcmFtcy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSAgcy5wYXJhbXMuem9vbU1pbiArIDEgLSBNYXRoLnBvdygocy5wYXJhbXMuem9vbU1pbiAtIHouc2NhbGUgKyAxKSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCcgKyB6LnNjYWxlICsgJyknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkdlc3R1cmVFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XG4gICAgICAgICAgICAgICAgaWYgKCFzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHouc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih6LnNjYWxlLCB6Lmdlc3R1cmUuem9vbU1heCksIHMucGFyYW1zLnpvb21NaW4pO1xuICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZS50cmFuc2l0aW9uKHMucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgnICsgei5zY2FsZSArICcpJyk7XG4gICAgICAgICAgICAgICAgei5jdXJyZW50U2NhbGUgPSB6LnNjYWxlO1xuICAgICAgICAgICAgICAgIHouaXNTY2FsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHouc2NhbGUgPT09IDEpIHouZ2VzdHVyZS5zbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBzLnpvb207XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChzLmRldmljZS5vcyA9PT0gJ2FuZHJvaWQnKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5pc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc1N0YXJ0LnggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgei5pbWFnZS50b3VjaGVzU3RhcnQueSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF6LmltYWdlLmlzVG91Y2hlZCB8fCAhei5nZXN0dXJlLnNsaWRlKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghei5pbWFnZS5pc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2Uud2lkdGggPSB6Lmdlc3R1cmUuaW1hZ2VbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaGVpZ2h0ID0gei5nZXN0dXJlLmltYWdlWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5zdGFydFggPSBzLmdldFRyYW5zbGF0ZSh6Lmdlc3R1cmUuaW1hZ2VXcmFwWzBdLCAneCcpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2Uuc3RhcnRZID0gcy5nZXRUcmFuc2xhdGUoei5nZXN0dXJlLmltYWdlV3JhcFswXSwgJ3knKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2xpZGVXaWR0aCA9IHouZ2VzdHVyZS5zbGlkZVswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLnNsaWRlSGVpZ2h0ID0gei5nZXN0dXJlLnNsaWRlWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHouaW1hZ2Uuc3RhcnRYID0gLXouaW1hZ2Uuc3RhcnRYO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHouaW1hZ2Uuc3RhcnRZID0gLXouaW1hZ2Uuc3RhcnRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgaWYgd2UgbmVlZCBpbWFnZSBkcmFnXG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZFdpZHRoID0gei5pbWFnZS53aWR0aCAqIHouc2NhbGU7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlZEhlaWdodCA9IHouaW1hZ2UuaGVpZ2h0ICogei5zY2FsZTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlZFdpZHRoIDwgei5nZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgei5nZXN0dXJlLnNsaWRlSGVpZ2h0KSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHouaW1hZ2UubWluWCA9IE1hdGgubWluKCh6Lmdlc3R1cmUuc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIpLCAwKTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLm1heFggPSAtei5pbWFnZS5taW5YO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UubWluWSA9IE1hdGgubWluKCh6Lmdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiksIDApO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UubWF4WSA9IC16LmltYWdlLm1pblk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIXouaW1hZ2UuaXNNb3ZlZCAmJiAhei5pc1NjYWxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKHouaW1hZ2UubWluWCkgPT09IE1hdGguZmxvb3Ioei5pbWFnZS5zdGFydFgpICYmIHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IHouaW1hZ2UudG91Y2hlc1N0YXJ0LngpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoTWF0aC5mbG9vcih6LmltYWdlLm1heFgpID09PSBNYXRoLmZsb29yKHouaW1hZ2Uuc3RhcnRYKSAmJiB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnggPiB6LmltYWdlLnRvdWNoZXNTdGFydC54KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LmltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzLmlzSG9yaXpvbnRhbCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoTWF0aC5mbG9vcih6LmltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKHouaW1hZ2Uuc3RhcnRZKSAmJiB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgPCB6LmltYWdlLnRvdWNoZXNTdGFydC55KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKE1hdGguZmxvb3Ioei5pbWFnZS5tYXhZKSA9PT0gTWF0aC5mbG9vcih6LmltYWdlLnN0YXJ0WSkgJiYgei5pbWFnZS50b3VjaGVzQ3VycmVudC55ID4gei5pbWFnZS50b3VjaGVzU3RhcnQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgei5pbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgei5pbWFnZS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC54IC0gei5pbWFnZS50b3VjaGVzU3RhcnQueCArIHouaW1hZ2Uuc3RhcnRYO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSB6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LmltYWdlLnRvdWNoZXNTdGFydC55ICsgei5pbWFnZS5zdGFydFk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRYIDwgei5pbWFnZS5taW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFggPSAgei5pbWFnZS5taW5YICsgMSAtIE1hdGgucG93KCh6LmltYWdlLm1pblggLSB6LmltYWdlLmN1cnJlbnRYICsgMSksIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRYID4gei5pbWFnZS5tYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFggPSB6LmltYWdlLm1heFggLSAxICsgTWF0aC5wb3coKHouaW1hZ2UuY3VycmVudFggLSB6LmltYWdlLm1heFggKyAxKSwgMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRZIDwgei5pbWFnZS5taW5ZKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSAgei5pbWFnZS5taW5ZICsgMSAtIE1hdGgucG93KCh6LmltYWdlLm1pblkgLSB6LmltYWdlLmN1cnJlbnRZICsgMSksIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh6LmltYWdlLmN1cnJlbnRZID4gei5pbWFnZS5tYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFkgPSB6LmltYWdlLm1heFkgLSAxICsgTWF0aC5wb3coKHouaW1hZ2UuY3VycmVudFkgLSB6LmltYWdlLm1heFkgKyAxKSwgMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vVmVsb2NpdHlcbiAgICAgICAgICAgICAgICBpZiAoIXoudmVsb2NpdHkucHJldlBvc2l0aW9uWCkgei52ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgICAgICAgICAgICAgIGlmICghei52ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkgPSB6LmltYWdlLnRvdWNoZXNDdXJyZW50Lnk7XG4gICAgICAgICAgICAgICAgaWYgKCF6LnZlbG9jaXR5LnByZXZUaW1lKSB6LnZlbG9jaXR5LnByZXZUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB6LnZlbG9jaXR5LnggPSAoei5pbWFnZS50b3VjaGVzQ3VycmVudC54IC0gei52ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSAvIChEYXRlLm5vdygpIC0gei52ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkueSA9ICh6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkpIC8gKERhdGUubm93KCkgLSB6LnZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHouaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHoudmVsb2NpdHkucHJldlBvc2l0aW9uWCkgPCAyKSB6LnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh6LmltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblkpIDwgMikgei52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB6LnZlbG9jaXR5LnByZXZQb3NpdGlvblggPSB6LmltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgICAgICAgICAgICAgei52ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gei5pbWFnZS50b3VjaGVzQ3VycmVudC55O1xuICAgICAgICAgICAgICAgIHoudmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHouaW1hZ2UuY3VycmVudFggKyAncHgsICcgKyB6LmltYWdlLmN1cnJlbnRZICsgJ3B4LDApJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gKHMsIGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IHMuem9vbTtcbiAgICAgICAgICAgICAgICBpZiAoIXouZ2VzdHVyZS5pbWFnZSB8fCB6Lmdlc3R1cmUuaW1hZ2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCF6LmltYWdlLmlzVG91Y2hlZCB8fCAhei5pbWFnZS5pc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHouaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb25YID0gMzAwO1xuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uWSA9IDMwMDtcbiAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVggPSB6LnZlbG9jaXR5LnggKiBtb21lbnR1bUR1cmF0aW9uWDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zaXRpb25YID0gei5pbWFnZS5jdXJyZW50WCArIG1vbWVudHVtRGlzdGFuY2VYO1xuICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlWSA9IHoudmVsb2NpdHkueSAqIG1vbWVudHVtRHVyYXRpb25ZO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvblkgPSB6LmltYWdlLmN1cnJlbnRZICsgbW9tZW50dW1EaXN0YW5jZVk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vRml4IGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHoudmVsb2NpdHkueCAhPT0gMCkgbW9tZW50dW1EdXJhdGlvblggPSBNYXRoLmFicygobmV3UG9zaXRpb25YIC0gei5pbWFnZS5jdXJyZW50WCkgLyB6LnZlbG9jaXR5LngpO1xuICAgICAgICAgICAgICAgIGlmICh6LnZlbG9jaXR5LnkgIT09IDApIG1vbWVudHVtRHVyYXRpb25ZID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWSAtIHouaW1hZ2UuY3VycmVudFkpIC8gei52ZWxvY2l0eS55KTtcbiAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGgubWF4KG1vbWVudHVtRHVyYXRpb25YLCBtb21lbnR1bUR1cmF0aW9uWSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHouaW1hZ2UuY3VycmVudFggPSBuZXdQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZWRXaWR0aCA9IHouaW1hZ2Uud2lkdGggKiB6LnNjYWxlO1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZWRIZWlnaHQgPSB6LmltYWdlLmhlaWdodCAqIHouc2NhbGU7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5taW5YID0gTWF0aC5taW4oKHouZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiksIDApO1xuICAgICAgICAgICAgICAgIHouaW1hZ2UubWF4WCA9IC16LmltYWdlLm1pblg7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5taW5ZID0gTWF0aC5taW4oKHouZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIgLSBzY2FsZWRIZWlnaHQgLyAyKSwgMCk7XG4gICAgICAgICAgICAgICAgei5pbWFnZS5tYXhZID0gLXouaW1hZ2UubWluWTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oei5pbWFnZS5jdXJyZW50WCwgei5pbWFnZS5tYXhYKSwgei5pbWFnZS5taW5YKTtcbiAgICAgICAgICAgICAgICB6LmltYWdlLmN1cnJlbnRZID0gTWF0aC5tYXgoTWF0aC5taW4oei5pbWFnZS5jdXJyZW50WSwgei5pbWFnZS5tYXhZKSwgei5pbWFnZS5taW5ZKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHouaW1hZ2UuY3VycmVudFggKyAncHgsICcgKyB6LmltYWdlLmN1cnJlbnRZICsgJ3B4LDApJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xuICAgICAgICAgICAgICAgIGlmICh6Lmdlc3R1cmUuc2xpZGUgJiYgcy5wcmV2aW91c0luZGV4ICE9PSBzLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5pbWFnZS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zbGlkZSA9IHouZ2VzdHVyZS5pbWFnZSA9IHouZ2VzdHVyZS5pbWFnZVdyYXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSB6LmN1cnJlbnRTY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBab29tXG4gICAgICAgICAgICB0b2dnbGVab29tOiBmdW5jdGlvbiAocywgZSkge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gcy56b29tO1xuICAgICAgICAgICAgICAgIGlmICghei5nZXN0dXJlLnNsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHouZ2VzdHVyZS5zbGlkZSA9IHMuY2xpY2tlZFNsaWRlID8gJChzLmNsaWNrZWRTbGlkZSkgOiBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlID0gei5nZXN0dXJlLnNsaWRlLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMnKTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcCA9IHouZ2VzdHVyZS5pbWFnZS5wYXJlbnQoJy4nICsgcy5wYXJhbXMuem9vbUNvbnRhaW5lckNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6Lmdlc3R1cmUuaW1hZ2UgfHwgei5nZXN0dXJlLmltYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hYLCB0b3VjaFksIG9mZnNldFgsIG9mZnNldFksIGRpZmZYLCBkaWZmWSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQsIHRyYW5zbGF0ZU1pblgsIHRyYW5zbGF0ZU1pblksIHRyYW5zbGF0ZU1heFgsIHRyYW5zbGF0ZU1heFksIHNsaWRlV2lkdGgsIHNsaWRlSGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHouaW1hZ2UudG91Y2hlc1N0YXJ0LnggPT09ICd1bmRlZmluZWQnICYmIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hYID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoWSA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hYID0gei5pbWFnZS50b3VjaGVzU3RhcnQueDtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hZID0gei5pbWFnZS50b3VjaGVzU3RhcnQueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh6LnNjYWxlICYmIHouc2NhbGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWm9vbSBPdXRcbiAgICAgICAgICAgICAgICAgICAgei5zY2FsZSA9IHouY3VycmVudFNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlV3JhcC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgICAgICAgICAgICAgei5nZXN0dXJlLmltYWdlLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuc2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBab29tIEluXG4gICAgICAgICAgICAgICAgICAgIHouc2NhbGUgPSB6LmN1cnJlbnRTY2FsZSA9IHouZ2VzdHVyZS5pbWFnZVdyYXAuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHMucGFyYW1zLnpvb21NYXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVdpZHRoID0gei5nZXN0dXJlLnNsaWRlWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVIZWlnaHQgPSB6Lmdlc3R1cmUuc2xpZGVbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA9IHouZ2VzdHVyZS5zbGlkZS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WSA9IHouZ2VzdHVyZS5zbGlkZS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmWCA9IG9mZnNldFggKyBzbGlkZVdpZHRoLzIgLSB0b3VjaFg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmWSA9IG9mZnNldFkgKyBzbGlkZUhlaWdodC8yIC0gdG91Y2hZO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGggPSB6Lmdlc3R1cmUuaW1hZ2VbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCA9IHouZ2VzdHVyZS5pbWFnZVswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZWRXaWR0aCA9IGltYWdlV2lkdGggKiB6LnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVkSGVpZ2h0ID0gaW1hZ2VIZWlnaHQgKiB6LnNjYWxlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZU1pblggPSBNYXRoLm1pbigoc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZU1pblkgPSBNYXRoLm1pbigoc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlTWF4WCA9IC10cmFuc2xhdGVNaW5YO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlTWF4WSA9IC10cmFuc2xhdGVNaW5ZO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSBkaWZmWCAqIHouc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gZGlmZlkgKiB6LnNjYWxlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYIDwgdHJhbnNsYXRlTWluWCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAgdHJhbnNsYXRlTWluWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlTWF4WCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVZIDwgdHJhbnNsYXRlTWluWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAgdHJhbnNsYXRlTWluWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlTWF4WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2VXcmFwLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCAnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICAgICAgICAgICAgICB6Lmdlc3R1cmUuaW1hZ2UudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCcgKyB6LnNjYWxlICsgJyknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQXR0YWNoL0RldGFjaCBFdmVudHNcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50czogZnVuY3Rpb24gKGRldGFjaCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBkZXRhY2ggPyAnb2ZmJyA6ICdvbic7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy56b29tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnNsaWRlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHMudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzLnN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHMucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2V9IDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0oJ2dlc3R1cmVzdGFydCcsIHMuem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0oJ2dlc3R1cmVjaGFuZ2UnLCBzLnpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXSgnZ2VzdHVyZWVuZCcsIHMuem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1thY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMuem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzW2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLnpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbYWN0aW9uXShzLnRvdWNoRXZlbnRzLmVuZCwgcy56b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBpbWFnZVxuICAgICAgICAgICAgICAgICAgICBzW2FjdGlvbl0oJ3RvdWNoU3RhcnQnLCBzLnpvb20ub25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHNsaWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHNsaWRlKS5maW5kKCcuJyArIHMucGFyYW1zLnpvb21Db250YWluZXJDbGFzcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2xpZGUpW2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLnpvb20ub25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc1thY3Rpb25dKCd0b3VjaEVuZCcsIHMuem9vbS5vblRvdWNoRW5kKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjYWxlIE91dFxuICAgICAgICAgICAgICAgICAgICBzW2FjdGlvbl0oJ3RyYW5zaXRpb25FbmQnLCBzLnpvb20ub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnpvb21Ub2dnbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub24oJ2RvdWJsZVRhcCcsIHMuem9vbS50b2dnbGVab29tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcy56b29tLmF0dGFjaEV2ZW50cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzLnpvb20uYXR0YWNoRXZlbnRzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBQbHVnaW5zIEFQSS4gQ29sbGVjdCBhbGwgYW5kIGluaXQgYWxsIHBsdWdpbnNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLl9wbHVnaW5zID0gW107XG4gICAgICAgIGZvciAodmFyIHBsdWdpbiBpbiBzLnBsdWdpbnMpIHtcbiAgICAgICAgICAgIHZhciBwID0gcy5wbHVnaW5zW3BsdWdpbl0ocywgcy5wYXJhbXNbcGx1Z2luXSk7XG4gICAgICAgICAgICBpZiAocCkgcy5fcGx1Z2lucy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ldGhvZCB0byBjYWxsIGFsbCBwbHVnaW5zIGV2ZW50L21ldGhvZFxuICAgICAgICBzLmNhbGxQbHVnaW5zID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLl9wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSBpbiBzLl9wbHVnaW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuX3BsdWdpbnNbaV1bZXZlbnROYW1lXShhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBFdmVudHMvQ2FsbGJhY2tzL1BsdWdpbnMgRW1pdHRlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50TmFtZSAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ29uJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lWzBdICE9PSBldmVudE5hbWVbMF0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBldmVudE5hbWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xuICAgICAgICB9XG4gICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzID0ge1xuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBjYWxsYmFja3NcbiAgICAgICAgICAgIGlmIChzLnBhcmFtc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbXNbZXZlbnROYW1lXShhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZXZlbnRzXG4gICAgICAgICAgICBpZiAocy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV0oYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgcGx1Z2luc1xuICAgICAgICAgICAgaWYgKHMuY2FsbFBsdWdpbnMpIHMuY2FsbFBsdWdpbnMoZXZlbnROYW1lLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgIH07XG4gICAgICAgIHMub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH07XG4gICAgICAgIHMub2ZmID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGhhbmRsZXJzIGZvciBzdWNoIGV2ZW50XG4gICAgICAgICAgICAgICAgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdIHx8IHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV0gPT09IGhhbmRsZXIpIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH07XG4gICAgICAgIHMub25jZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IG5vcm1hbGl6ZUV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgdmFyIF9oYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgICAgICAgICAgICAgIHMub2ZmKGV2ZW50TmFtZSwgX2hhbmRsZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHMub24oZXZlbnROYW1lLCBfaGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gQWNjZXNzaWJpbGl0eSB0b29sc1xuICAgICAgICBzLmExMXkgPSB7XG4gICAgICAgICAgICBtYWtlRm9jdXNhYmxlOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ3RhYkluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFJvbGU6IGZ1bmN0aW9uICgkZWwsIHJvbGUpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigncm9sZScsIHJvbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGFkZExhYmVsOiBmdW5jdGlvbiAoJGVsLCBsYWJlbCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIG9uRW50ZXJLZXk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMocy5wYXJhbXMubmV4dEJ1dHRvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vbkNsaWNrTmV4dChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLmxhc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm5vdGlmeShzLnBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkKGV2ZW50LnRhcmdldCkuaXMocy5wYXJhbXMucHJldkJ1dHRvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vbkNsaWNrUHJldihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcygnLicgKyBzLnBhcmFtcy5idWxsZXRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBsaXZlUmVnaW9uOiAkKCc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5ub3RpZmljYXRpb25DbGFzcyArICdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj48L3NwYW4+JyksXG4gICAgICAgIFxuICAgICAgICAgICAgbm90aWZ5OiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhciBub3RpZmljYXRpb24gPSBzLmExMXkubGl2ZVJlZ2lvbjtcbiAgICAgICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0dXAgYWNjZXNzaWJpbGl0eVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkubWFrZUZvY3VzYWJsZShzLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShzLm5leHRCdXR0b24sICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZExhYmVsKHMubmV4dEJ1dHRvbiwgcy5wYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkubWFrZUZvY3VzYWJsZShzLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShzLnByZXZCdXR0b24sICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZExhYmVsKHMucHJldkJ1dHRvbiwgcy5wYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAkKHMuY29udGFpbmVyKS5hcHBlbmQocy5hMTF5LmxpdmVSZWdpb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRQYWdpbmF0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24gJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSAmJiBzLmJ1bGxldHMgJiYgcy5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVsbGV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5tYWtlRm9jdXNhYmxlKGJ1bGxldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkUm9sZShidWxsZXQsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRMYWJlbChidWxsZXQsIHMucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL3t7aW5kZXh9fS8sIGJ1bGxldC5pbmRleCgpICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmExMXkubGl2ZVJlZ2lvbiAmJiBzLmExMXkubGl2ZVJlZ2lvbi5sZW5ndGggPiAwKSBzLmExMXkubGl2ZVJlZ2lvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSW5pdC9EZXN0cm95XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLnNldCgpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuZW5hYmxlRHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJyAmJiBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XSkge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMubG9vcCkgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdLnNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5wYXJhbXMuaW5pdGlhbFNsaWRlICsgcy5sb29wZWRTbGlkZXMsIDAsIHMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5wYXJhbXMuaW5pdGlhbFNsaWRlLCAwLCBzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5pbml0aWFsU2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYWxsYXggJiYgcy5wYXJhbXMucGFyYWxsYXgpIHMucGFyYWxsYXguc2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxhenkgJiYgcy5wYXJhbXMubGF6eUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuYXR0YWNoRXZlbnRzKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJlbG9hZEltYWdlcyAmJiAhcy5wYXJhbXMubGF6eUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICBzLnByZWxvYWRJbWFnZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy56b29tICYmIHMuem9vbSkge1xuICAgICAgICAgICAgICAgIHMuem9vbS5pbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICBzLnN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVLZXlib2FyZENvbnRyb2wpIHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCkgcy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVwcmVjYXRlZCBoYXNobmF2UmVwbGFjZVN0YXRlIGNoYW5nZWQgdG8gcmVwbGFjZVN0YXRlIGZvciB1c2UgaW4gaGFzaG5hdiBhbmQgaGlzdG9yeVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXZSZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy5yZXBsYWNlU3RhdGUgPSBzLnBhcmFtcy5oYXNobmF2UmVwbGFjZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5oaXN0b3J5KSBzLmhpc3RvcnkuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXYpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5oYXNobmF2KSBzLmhhc2huYXYuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuaW5pdCgpO1xuICAgICAgICAgICAgcy5lbWl0KCdvbkluaXQnLCBzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIENsZWFudXAgZHluYW1pYyBzdHlsZXNcbiAgICAgICAgcy5jbGVhbnVwU3R5bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ29udGFpbmVyXG4gICAgICAgICAgICBzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhzLmNsYXNzTmFtZXMuam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFdyYXBwZXJcbiAgICAgICAgICAgIHMud3JhcHBlci5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNsaWRlc1xuICAgICAgICAgICAgaWYgKHMuc2xpZGVzICYmIHMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhbXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZVByZXZDbGFzc1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLWNvbHVtbicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1yb3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uL0J1bGxldHNcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5yZW1vdmVDbGFzcyhzLnBhcmFtcy5wYWdpbmF0aW9uSGlkZGVuQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuYnVsbGV0cyAmJiBzLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcy5idWxsZXRzLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBCdXR0b25zXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbikgJChzLnBhcmFtcy5wcmV2QnV0dG9uKS5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSAkKHMucGFyYW1zLm5leHRCdXR0b24pLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNjcm9sbGJhclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIGlmIChzLnNjcm9sbGJhci50cmFjayAmJiBzLnNjcm9sbGJhci50cmFjay5sZW5ndGgpIHMuc2Nyb2xsYmFyLnRyYWNrLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHMuc2Nyb2xsYmFyLmRyYWcgJiYgcy5zY3JvbGxiYXIuZHJhZy5sZW5ndGgpIHMuc2Nyb2xsYmFyLmRyYWcucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIERlc3Ryb3lcbiAgICAgICAgcy5kZXN0cm95ID0gZnVuY3Rpb24gKGRlbGV0ZUluc3RhbmNlLCBjbGVhbnVwU3R5bGVzKSB7XG4gICAgICAgICAgICAvLyBEZXRhY2ggZXZlYnRzXG4gICAgICAgICAgICBzLmRldGFjaEV2ZW50cygpO1xuICAgICAgICAgICAgLy8gU3RvcCBhdXRvcGxheVxuICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIC8vIERpc2FibGUgZHJhZ2dhYmxlXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVzdHJveSBsb29wXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgICAgICAgICBpZiAoY2xlYW51cFN0eWxlcykge1xuICAgICAgICAgICAgICAgIHMuY2xlYW51cFN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGlzY29ubmVjdCBvYnNlcnZlclxuICAgICAgICAgICAgcy5kaXNjb25uZWN0T2JzZXJ2ZXJzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRGVzdHJveSB6b29tXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuem9vbSAmJiBzLnpvb20pIHtcbiAgICAgICAgICAgICAgICBzLnpvb20uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGlzYWJsZSBrZXlib2FyZC9tb3VzZXdoZWVsXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMua2V5Ym9hcmRDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuZGlzYWJsZUtleWJvYXJkQ29udHJvbCkgcy5kaXNhYmxlS2V5Ym9hcmRDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2wpIHMuZGlzYWJsZU1vdXNld2hlZWxDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXNhYmxlIGExMXlcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBoaXN0b3J5IHBvcHN0YXRlXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGlzdG9yeSAmJiAhcy5wYXJhbXMucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcy5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGFzaG5hdiAmJiBzLmhhc2huYXYpICB7XG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlc3Ryb3kgY2FsbGJhY2tcbiAgICAgICAgICAgIHMuZW1pdCgnb25EZXN0cm95Jyk7XG4gICAgICAgICAgICAvLyBEZWxldGUgaW5zdGFuY2VcbiAgICAgICAgICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHMgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5pbml0KCk7XG4gICAgICAgIFxuXG4gICAgXG4gICAgICAgIC8vIFJldHVybiBzd2lwZXIgaW5zdGFuY2VcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgUHJvdG90eXBlXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgU3dpcGVyLnByb3RvdHlwZSA9IHtcbiAgICAgICAgaXNTYWZhcmk6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuICh1YS5pbmRleE9mKCdzYWZhcmknKSA+PSAwICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpIDwgMCAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPCAwKTtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgaXNVaVdlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgQnJvd3NlclxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgYnJvd3Nlcjoge1xuICAgICAgICAgICAgaWU6IHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICAgICAgaWVUb3VjaDogKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKSB8fCAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSksXG4gICAgICAgICAgICBsdGVJRTk6IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGVtcG9yYXJ5IERJVlxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAvLyBhZGQgY29udGVudCB0byB0bXAgRElWIHdoaWNoIGlzIHdyYXBwZWQgaW50byB0aGUgSUUgSFRNTCBjb25kaXRpb25hbCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgbHRlIElFIDldPjxpPjwvaT48IVtlbmRpZl0tLT4nO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlIC8gZmFsc2UgdmFsdWUgYmFzZWQgb24gd2hhdCB3aWxsIGJyb3dzZXIgcmVuZGVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgIH0pKClcbiAgICAgICAgfSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBEZXZpY2VzXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBkZXZpY2U6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pO1xuICAgICAgICAgICAgdmFyIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICAgICAgICAgICAgdmFyIGlwb2QgPSB1YS5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pO1xuICAgICAgICAgICAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpb3M6IGlwYWQgfHwgaXBob25lIHx8IGlwb2QsXG4gICAgICAgICAgICAgICAgYW5kcm9pZDogYW5kcm9pZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBGZWF0dXJlIERldGVjdGlvblxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgc3VwcG9ydDoge1xuICAgICAgICAgICAgdG91Y2ggOiAod2luZG93Lk1vZGVybml6ciAmJiBNb2Rlcm5penIudG91Y2ggPT09IHRydWUpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCk7XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgdHJhbnNmb3JtczNkIDogKHdpbmRvdy5Nb2Rlcm5penIgJiYgTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMzZCA9PT0gdHJ1ZSkgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgnd2Via2l0UGVyc3BlY3RpdmUnIGluIGRpdiB8fCAnTW96UGVyc3BlY3RpdmUnIGluIGRpdiB8fCAnT1BlcnNwZWN0aXZlJyBpbiBkaXYgfHwgJ01zUGVyc3BlY3RpdmUnIGluIGRpdiB8fCAncGVyc3BlY3RpdmUnIGluIGRpdik7XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgZmxleGJveDogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlcyA9ICgnYWxpZ25JdGVtcyB3ZWJraXRBbGlnbkl0ZW1zIHdlYmtpdEJveEFsaWduIG1zRmxleEFsaWduIG1vekJveEFsaWduIHdlYmtpdEZsZXhEaXJlY3Rpb24gbXNGbGV4RGlyZWN0aW9uIG1vekJveERpcmVjdGlvbiBtb3pCb3hPcmllbnQgd2Via2l0Qm94RGlyZWN0aW9uIHdlYmtpdEJveE9yaWVudCcpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlc1tpXSBpbiBkaXYpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCksXG4gICAgXG4gICAgICAgICAgICBvYnNlcnZlcjogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgfHwgJ1dlYmtpdE11dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyk7XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgcGFzc2l2ZUxpc3RlbmVyOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICAgICAgICAgIH0pKCksXG4gICAgXG4gICAgICAgICAgICBnZXN0dXJlczogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgICAgICAgICB9KSgpXG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgUGx1Z2luc1xuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcGx1Z2luczoge31cbiAgICB9O1xuICAgIFxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBEb203IExpYnJhcnlcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHZhciBEb203ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIERvbTcgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzLCBpID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhcnJheS1saWtlIG9iamVjdFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIF90aGlzW2ldID0gYXJyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIFJldHVybiBjb2xsZWN0aW9uIHdpdGggbWV0aG9kc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHZhciAkID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW10sIGkgPSAwO1xuICAgICAgICAgICAgaWYgKHNlbGVjdG9yICYmICFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVscywgdGVtcFBhcmVudCwgaHRtbCA9IHNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b0NyZWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wUGFyZW50LmlubmVySFRNTCA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHRlbXBQYXJlbnQuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgc2VsZWN0b3JbMF0gPT09ICcjJyAmJiAhc2VsZWN0b3IubWF0Y2goL1sgLjw+On5dLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQdXJlIElEIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNwbGl0KCcjJylbMV0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyIHNlbGVjdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVscyA9IChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxzW2ldKSBhcnIucHVzaChlbHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vZGUvZWxlbWVudFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW5kb3cgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9BcnJheSBvZiBlbGVtZW50cyBvciBpbnN0YW5jZSBvZiBEb21cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3Rvci5sZW5ndGggPiAwICYmIHNlbGVjdG9yWzBdLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc2VsZWN0b3JbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gICAgICAgIH07XG4gICAgICAgIERvbTcucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBhbmQgYXR0cml1dGVzXG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1swXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0uY2xhc3NMaXN0LnRvZ2dsZShjbGFzc2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyOiBmdW5jdGlvbiAoYXR0cnMsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYXR0clxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGF0dHJzXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRycywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXNbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXkpIHJldHVybiBkYXRhS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlICYmIChrZXkgaW4gdGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlKSkgcmV0dXJuIHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm1zXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiBmdW5jdGlvbiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBlbFN0eWxlLk1zVHJhbnNmb3JtID0gZWxTdHlsZS5tc1RyYW5zZm9ybSA9IGVsU3R5bGUuTW96VHJhbnNmb3JtID0gZWxTdHlsZS5PVHJhbnNmb3JtID0gZWxTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLm1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nb3pUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk9UcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL0V2ZW50c1xuICAgICAgICAgICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmNhbGwodGFyZ2V0LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHBhcmVudHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChwYXJlbnRzW2tdKS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmNhbGwocGFyZW50c1trXSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgfHwgdGFyZ2V0U2VsZWN0b3IgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc3VhbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbal0sIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTGl2ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbaV0uZG9tN0xpdmVMaXN0ZW5lcnMpIHRoaXNbaV0uZG9tN0xpdmVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzLnB1c2goe2xpc3RlbmVyOiBsaXN0ZW5lciwgbGl2ZUxpc3RlbmVyOiBoYW5kbGVMaXZlRXZlbnR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2pdLCBoYW5kbGVMaXZlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyB8fCB0YXJnZXRTZWxlY3RvciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc3VhbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaXZlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tqXS5kb203TGl2ZUxpc3RlbmVyc1trXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCB0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzW2tdLmxpdmVMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJveHkoZSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihlKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBwcm94eSwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBwcm94eSwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbDogZXZlbnREYXRhLCBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmRldGFpbCA9IGV2ZW50RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXSxcbiAgICAgICAgICAgICAgICAgICAgaSwgaiwgZG9tID0gdGhpcztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgICAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5vbihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gU2l6aW5nL1N0eWxlc1xuICAgICAgICAgICAgd2lkdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGVyV2lkdGg6IGZ1bmN0aW9uIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tbGVmdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiBmdW5jdGlvbiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQodGhpcy5jc3MoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tYm90dG9tJykpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWVudFRvcCAgPSBlbC5jbGllbnRUb3AgIHx8IGJvZHkuY2xpZW50VG9wICB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYm94LnRvcCAgKyBzY3JvbGxUb3AgIC0gY2xpZW50VG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNzczogZnVuY3Rpb24gKHByb3BzLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICAvL0RvbSBtYW5pcHVsYXRpb25cbiAgICAgICAgICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNbaV0sIGksIHRoaXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBodG1sOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1swXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjb21wYXJlV2l0aCwgaTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT09IGRvY3VtZW50KSByZXR1cm4gc2VsZWN0b3IgPT09IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT09IHdpbmRvdykgcmV0dXJuIHNlbGVjdG9yID09PSB3aW5kb3c7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKSByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLm1vek1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IHRoaXNbMF0pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkgcmV0dXJuIHRoaXNbMF0gPT09IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSB3aW5kb3cpIHJldHVybiB0aGlzWzBdID09PSB3aW5kb3c7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IHRoaXNbMF0pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVxOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5JbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuSW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1tpbmRleF1dKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcHBlbmQ6IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXBlbmQ6IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IHRlbXBEaXYuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJlZm9yZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGFmdGVyWzBdLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhZnRlci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFmdGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGFmdGVyW2pdLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRBbGw6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0RWxzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJChuZXh0KS5pcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBuZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcobmV4dEVscyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgJCh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZBbGw6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2RWxzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgICAgICAgICBlbCA9IHByZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhwcmV2RWxzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpc1tpXS5wYXJlbnROb2RlKS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJC51bmlxdWUocGFyZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmVudHM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHBhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJC51bmlxdWUocGFyZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbmQgOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhmb3VuZEVsZW1lbnRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZE5vZGVzO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxICYmICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNygkLnVuaXF1ZShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkb20gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQWRkID0gJChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVtkb20ubGVuZ3RoXSA9IHRvQWRkW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLmxlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICQuZm4gPSBEb203LnByb3RvdHlwZTtcbiAgICAgICAgJC51bmlxdWUgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICB2YXIgdW5pcXVlID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh1bmlxdWUuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmlxdWU7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiAkO1xuICAgIH0pKCk7XG4gICAgXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBHZXQgRG9tIGxpYnJhcmllc1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHZhciBzd2lwZXJEb21QbHVnaW5zID0gWydqUXVlcnknLCAnWmVwdG8nLCAnRG9tNyddO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyRG9tUGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgIFx0aWYgKHdpbmRvd1tzd2lwZXJEb21QbHVnaW5zW2ldXSkge1xuICAgIFx0XHRhZGRMaWJyYXJ5UGx1Z2luKHdpbmRvd1tzd2lwZXJEb21QbHVnaW5zW2ldXSk7XG4gICAgXHR9XG4gICAgfVxuICAgIC8vIFJlcXVpcmVkIERPTSBQbHVnaW5zXG4gICAgdmFyIGRvbUxpYjtcbiAgICBpZiAodHlwZW9mIERvbTcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgXHRkb21MaWIgPSB3aW5kb3cuRG9tNyB8fCB3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgXHRkb21MaWIgPSBEb203O1xuICAgIH1cbiAgICBcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgQWRkIC5zd2lwZXIgcGx1Z2luIGZyb20gRG9tIGxpYnJhcmllc1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgZnVuY3Rpb24gYWRkTGlicmFyeVBsdWdpbihsaWIpIHtcbiAgICAgICAgbGliLmZuLnN3aXBlciA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdEluc3RhbmNlO1xuICAgICAgICAgICAgbGliKHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IFN3aXBlcih0aGlzLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3RJbnN0YW5jZSkgZmlyc3RJbnN0YW5jZSA9IHM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEluc3RhbmNlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBpZiAoZG9tTGliKSB7XG4gICAgICAgIGlmICghKCd0cmFuc2l0aW9uRW5kJyBpbiBkb21MaWIuZm4pKSB7XG4gICAgICAgICAgICBkb21MaWIuZm4udHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ10sXG4gICAgICAgICAgICAgICAgICAgIGksIGosIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5vZmYoZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISgndHJhbnNmb3JtJyBpbiBkb21MaWIuZm4pKSB7XG4gICAgICAgICAgICBkb21MaWIuZm4udHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNmb3JtID0gZWxTdHlsZS5Nc1RyYW5zZm9ybSA9IGVsU3R5bGUubXNUcmFuc2Zvcm0gPSBlbFN0eWxlLk1velRyYW5zZm9ybSA9IGVsU3R5bGUuT1RyYW5zZm9ybSA9IGVsU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ3RyYW5zaXRpb24nIGluIGRvbUxpYi5mbikpIHtcbiAgICAgICAgICAgIGRvbUxpYi5mbi50cmFuc2l0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUubXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1velRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuT1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISgnb3V0ZXJXaWR0aCcgaW4gZG9tTGliLmZuKSkge1xuICAgICAgICAgICAgZG9tTGliLmZuLm91dGVyV2lkdGggPSBmdW5jdGlvbiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLWxlZnQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHdpbmRvdy5Td2lwZXIgPSBTd2lwZXI7XG59KSgpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuU3dpcGVyIEFNRCBFeHBvcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5pZiAodHlwZW9mKG1vZHVsZSkgIT09ICd1bmRlZmluZWQnKVxue1xuICAgIG1vZHVsZS5leHBvcnRzID0gd2luZG93LlN3aXBlcjtcbn1cbmVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB3aW5kb3cuU3dpcGVyO1xuICAgIH0pO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXBzL3N3aXBlci5qcy5tYXBcbiIsIiJdfQ==
