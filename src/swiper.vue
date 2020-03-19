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
  import { SWIPER_COMPONENT_NAME, DEFAULT_CLASSES, SWIPER_INSTANCE_NAME, ComponentPropNames, ComponentEvents } from './constants'
  import { handleClickSlideEvent, bindSwiperEvents } from './event'

  export default Vue.extend({
    name: SWIPER_COMPONENT_NAME,
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
      // https://github.com/surmon-china/vue-awesome-swiper/commit/2924a9d4d3d1cf51c0d46076410b1f804b2b8a43#diff-7f4e0261ac562c0f354cb91a1ca8864f
      this.$nextTick(() => {
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
      })
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
      autoReLoop() {
        if (this.swiperInstance && this.swiperOptions.loop) {
          // https://github.com/surmon-china/vue-awesome-swiper/issues/593
          // https://github.com/surmon-china/vue-awesome-swiper/issues/544
          // https://github.com/surmon-china/vue-awesome-swiper/pull/545/files
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
      initSwiper() {
        this.swiperInstance = new Swiper(
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
    }
  })
</script>
