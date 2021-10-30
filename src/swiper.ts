/**
 * @file vue-awesome-swiper
 * @module SwiperComponent
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue, { PropType, VNode, CreateElement } from 'vue'
import Swiper, { SwiperOptions } from 'swiper'
import { DEFAULT_CLASSES, CoreNames, ComponentPropNames, ComponentEvents } from './constants'
import { handleClickSlideEvent, bindSwiperEvents } from './event'

enum SlotNames {
  ParallaxBg = 'parallax-bg',
  Pagination = 'pagination',
  Scrollbar = 'scrollbar',
  PrevButton = 'button-prev',
  NextButton = 'button-next'
}

export default function getSwiperComponent(SwiperClass: typeof Swiper) {
  return Vue.extend({
    name: CoreNames.SwiperComponent,
    props: {
      defaultOptions: {
        type: Object as PropType<SwiperOptions>,
        required: false,
        default: () => ({} as SwiperOptions)
      },
      // eslint-disable-next-line vue/require-default-prop
      options: {
        type: Object as PropType<SwiperOptions>,
        required: false
      },
      [ComponentPropNames.AutoUpdate]: {
        type: Boolean,
        default: true
      },
      // https://github.com/surmon-china/vue-awesome-swiper/pull/550/files
      [ComponentPropNames.AutoDestroy]: {
        type: Boolean,
        default: true
      },
      // https://github.com/surmon-china/vue-awesome-swiper/pull/388
      [ComponentPropNames.DeleteInstanceOnDestroy]: {
        type: Boolean,
        required: false,
        default: true
      },
      [ComponentPropNames.CleanupStylesOnDestroy]: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    data() {
      return {
        [CoreNames.SwiperInstance as const]: null as Swiper | null
      }
    },
    computed: {
      swiperInstance: {
        cache: false,
        set(swiper: Swiper) {
          this[CoreNames.SwiperInstance] = swiper
        },
        get(): Swiper | null {
          return this[CoreNames.SwiperInstance]
        }
      },
      swiperOptions(): SwiperOptions {
        return this.options || this.defaultOptions
      },
      wrapperClass(): string {
        return this.swiperOptions.wrapperClass || DEFAULT_CLASSES.wrapperClass
      }
    },
    methods: {
      // Feature: click event
      handleSwiperClick(event: MouseEvent) {
        handleClickSlideEvent(
          this.swiperInstance,
          event,
          this.$emit.bind(this)
        )
      },
      autoReLoopSwiper() {
        if (this.swiperInstance && this.swiperOptions.loop) {
          // https://github.com/surmon-china/vue-awesome-swiper/issues/593
          // https://github.com/surmon-china/vue-awesome-swiper/issues/544
          // https://github.com/surmon-china/vue-awesome-swiper/pull/545/files
          const swiper = this.swiperInstance as any
          swiper?.loopDestroy?.()
          swiper?.loopCreate?.()
        }
      },
      updateSwiper() {
        if (this[ComponentPropNames.AutoUpdate] && this.swiperInstance) {
          this.autoReLoopSwiper()
          this.swiperInstance?.update?.()
          this.swiperInstance.navigation?.update?.()
          this.swiperInstance.pagination?.render?.()
          this.swiperInstance.pagination?.update?.()
        }
      },
      destroySwiper() {
        if (this[ComponentPropNames.AutoDestroy] && this.swiperInstance) {
          // https://github.com/surmon-china/vue-awesome-swiper/pull/341
          // https://github.com/surmon-china/vue-awesome-swiper/issues/340
          if ((this.swiperInstance as any).initialized) {
            this.swiperInstance?.destroy?.(
              this[ComponentPropNames.DeleteInstanceOnDestroy],
              this[ComponentPropNames.CleanupStylesOnDestroy]
            )
          }
        }
      },
      initSwiper() {
        this.swiperInstance = new SwiperClass(
          this.$el as HTMLElement,
          this.swiperOptions
        )
        bindSwiperEvents(
          this.swiperInstance,
          this.$emit.bind(this)
        )
        this.$emit(
          ComponentEvents.Ready,
          this.swiperInstance
        )
      }
    },
    mounted() {
      if (!this.swiperInstance) {
        this.initSwiper()
      }
    },
    // Update swiper when the parent component activated with `keep-alive`.
    activated() {
      this.updateSwiper()
    },
    updated() {
      this.updateSwiper()
      this.$nextTick(this.initSwiper)
    },
    beforeDestroy() {
      // https://github.com/surmon-china/vue-awesome-swiper/commit/2924a9d4d3d1cf51c0d46076410b1f804b2b8a43#diff-7f4e0261ac562c0f354cb91a1ca8864f
      this.$nextTick(this.destroySwiper)
    },
    render(createElement: CreateElement): VNode {
      return createElement('div',
        {
          staticClass: DEFAULT_CLASSES.containerClass,
          on: {
            click: this.handleSwiperClick
          }
        },
        [
          this.$slots[SlotNames.ParallaxBg],
          createElement('div', {
            class: this.wrapperClass
          }, this.$slots.default),
          this.$slots[SlotNames.Pagination],
          this.$slots[SlotNames.PrevButton],
          this.$slots[SlotNames.NextButton],
          this.$slots[SlotNames.Scrollbar]
        ]
      )
    }
  })
}
