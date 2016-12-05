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
  const w = typeof global.window != 'undefined'
  if (w) {
    window.Swiper = window.Swiper || require('swiper')
    require('swiper/dist/css/swiper.css')
  }
  export default {
    name: 'swiper',
    props: {
      options: {
        type: Object,
        default: function() {
          return {
            autoplay: 3500
          }
        }
      },
    },
    ready: function() {
      if (!this.swiper && w) {
        this.swiper = new Swiper(this.$el, this.options)
      }
    },
    mounted: function() {
      var _this = this
      const mount = function () {
        if (!_this.swiper && w) {
          _this.swiper = new Swiper(_this.$el, _this.options)
        }
      }
      this.options.notNextTick ? mount() : this.$nextTick(mount)
    },
    updated: function(){
      this.swiper.update()
    },
    beforeDestroy: function() {
      if (!!this.swiper) {
        this.swiper.destroy()
        delete this.swiper
      }
    }
  }
</script>
