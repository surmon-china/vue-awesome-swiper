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
  var Swiper
  if (typeof global.window != 'undefined') {
    Swiper = require('swiper')
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
      if (!this.swiper && typeof global.window != 'undefined') {
        this.swiper = new Swiper(this.$el, this.options)
      }
    },
    mounted: function() {
      this.$nextTick(() => {
        if (!this.swiper && typeof global.window != 'undefined') {
          this.swiper = new Swiper(this.$el, this.options)
        }
      })
    },
    updated: function(){
      this.swiper.update()
    },
    beforeDestroy: function() {
      if (!!this.swiper) {
        this.swiper = null
        delete this.swiper
      }
    }
  }
</script>
