<template>
  <div class="swiper-container" @click="handleSwiperClick($event)">
    <slot name="parallax-bg" />
    <div :class="wrapperClass">
      <slot />
    </div>
    <slot name="pagination" />
    <slot name="button-prev" />
    <slot name="button-next" />
    <slot name="scrollbar" />
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue'
  import Swiper, { SwiperOptions } from 'swiper'
  import { SWIPER_EVENTS, SWIPER_COMPONENT_NAME, DEFAULT_CLASSES, SWIPER_INSTANCE_NAME, ComponentPropNames, ComponentEvents } from './constants'
  import { kebabcase } from './utils'

  export default Vue.extend({
    name: SWIPER_COMPONENT_NAME,
    props: {
      defaultOptions: {
        type: Object as PropType<SwiperOptions>,
        required: false,
        default: () => ({} as SwiperOptions)
      },
      options: {
        type: Object as PropType<SwiperOptions>,
        required: false,
        default: () => ({} as SwiperOptions)
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
        [SWIPER_INSTANCE_NAME]: null as Swiper | null
      }
    },
    computed: {
      swiperInstance: {
        cache: false,
        set(swiper: Swiper) {
          this[SWIPER_INSTANCE_NAME] = swiper
        },
        get(): Swiper | null {
          return this[SWIPER_INSTANCE_NAME]
        }
      },
      swiperOptions(): SwiperOptions {
        return this.options || this.defaultOptions
      },
      wrapperClass(): string {
        return this.swiperOptions.wrapperClass || DEFAULT_CLASSES.wrapperClass
      }
    },
    mounted() {
      if (!this.swiperInstance) {
        this.initSwiper()
      }
    },
    activated() {
      this.update()
    },
    updated() {
      this.update()
    },
    beforeDestroy() {
      this.$nextTick(() => {
        if (this[ComponentPropNames.AutoDestroy] && this.swiperInstance) {
          this.swiperInstance?.destroy?.(
            this[ComponentPropNames.DeleteInstanceOnDestroy],
            this[ComponentPropNames.CleanupStylesOnDestroy]
          )
        }
      })
    },
    methods: {
      // Feature: click event
      handleSwiperClick(event: MouseEvent) {
        const swiper = this.swiperInstance
        if (swiper && Array.from(swiper.slides).includes(event.target)) {
          const reallyIndex = Number(swiper.clickedSlide?.dataset?.swiperSlideIndex)
          this.$emit(
            ComponentEvents.ClickSlide,
            swiper.clickedIndex,
            Number.isInteger(reallyIndex) ? reallyIndex : null
          )
        }
      },
      autoReLoop() {
        if (this.swiperInstance && this.swiperOptions.loop) {
          // https://github.com/surmon-china/vue-awesome-swiper/issues/544
          const swiper = this.swiperInstance as any
          swiper?.loopDestroy?.()
          swiper?.loopCreate?.()
        }
      },
      update() {
        if (this[ComponentPropNames.AutoUpdate] && this.swiperInstance) {
          this.autoReLoop()
          this.swiperInstance?.update?.()
          this.swiperInstance.navigation?.update?.()
          this.swiperInstance.pagination?.render?.()
          this.swiperInstance.pagination?.update?.()
        }
      },
      bindEvents(swiper: Swiper) {
        SWIPER_EVENTS.forEach(eventName => {
          swiper.on(eventName, (...args: any[]) => {
            this.$emit(eventName, ...args)
            const kebabcaseName = kebabcase(eventName)
            if (kebabcaseName) {
              this.$emit(kebabcaseName, ...args)
            }
          })
        })
      },
      initSwiper() {
        const swiper = new Swiper(
          this.$el as HTMLElement,
          this.swiperOptions
        )
        this.swiperInstance = swiper
        this.bindEvents(swiper)
        this.$emit(ComponentEvents.Ready, swiper)
      }
    }
  })
</script>
