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
      code: String,
      options: {
        type: Object,
        default: function() {
          return {
            autoplay: 3500
          }
        }
      },
    },
    beforeCreate: function() {
      // console.log('beforeCreate', this.options)
    },
    created: function() {
      // console.log('beforeCreate', this.options)
    },
    beforeMount: function() {
      // console.log('beforeMount', this.$el)
    },
    mounted: function() {
      // console.log('mounted', this.$el)
      this.swiper = new Swiper(this.$el, this.options)
    },
    beforeUpdate: function() {
      // console.log('beforeUpdate', this.$el)
    },
    updated: function() {
      // console.log('updated', this.$el)
    },
    activated: function() {
      // console.log('activated', this.$el)
    },
    deactivated: function() {
      // console.log('deactivated', this.$el)
    },
    beforeDestroy: function() {
      this.swiper = null
      delete this.swiper
      // console.log('beforeDestroy', this.$el)
    },
    destroyed: function() {
      // console.log('destroyed', this.$el)
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
