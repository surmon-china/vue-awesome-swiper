/**
 * @file vue-awesome-swiper
 * @module SwiperSlideComponent
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue, { VNode, CreateElement } from 'vue'
import { CoreNames, DEFAULT_CLASSES } from './constants'

export default Vue.extend({
  name: CoreNames.SwiperSlideComponent,
  computed: {
    slideClass(): string {
      return (this.$parent as any)?.swiperOptions?.slideClass || DEFAULT_CLASSES.slideClass
    }
  },
  methods: {
    update() {
      (this.$parent as any)?.swiperInstance?.update()
    }
  },
  mounted() {
    this.update()
  },
  updated() {
    this.update()
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      'div',
      {
        class: this.slideClass
      },
      this.$slots.default
    )
  }
})
