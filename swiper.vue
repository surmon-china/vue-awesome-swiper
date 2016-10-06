<template>
  <div class="swiper-container">
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
  var Swiper = require('swiper')
  require('swiper/dist/css/swiper.css')
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
      if (!this.swiper) this.swiper = new Swiper(this.$el, this.options)
    },
    mounted: function() {
      if (!this.swiper) this.swiper = new Swiper(this.$el, this.options)
    },
    beforeDestroy: function() {
      if (!!this.swiper) {
        this.swiper = null
        delete this.swiper
      }
    }
  }
</script>

<style>
  .swiper-container, .swiper-container .swiper-wrapper {
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
</style>
