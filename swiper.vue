<template>
  <div class="swiper-container">
    <slot name="parallax-bg"></slot>
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="button-prev"></slot>
    <slot name="button-next"></slot>
    <slot name="scrollbar"></slot>
  </div>
</template>

<script>
  const browser = typeof global.window != 'undefined'
  if (browser) {
    window.Swiper = require('swiper')
    require('swiper/dist/css/swiper.css')
  }
  export default {
    name: 'swiper',
    props: {
      options: {
        type: Object,
        default() {
          return {
            autoplay: 3500
          }
        }
      },
    },
    ready() {
      if (!this.swiper && browser) {
        this.swiper = new Swiper(this.$el, this.options)
      }
    },
    mounted() {
      let self = this
      const mount = function () {
        if (!self.swiper && browser) {
          delete self.options.notNextTick
          self.swiper = new Swiper(self.$el, self.options)
        }
      }
      this.options.notNextTick ? mount() : this.$nextTick(mount)
    },
    updated(){
      this.swiper.update()
    },
    beforeDestroy() {
      if (!!this.swiper) {
        this.swiper.destroy()
        delete this.swiper
      }
    }
  }
</script>
