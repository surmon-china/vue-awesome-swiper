<template>
  <div class="swiper-container">
    <slot name="parallax-bg"></slot>
    <div :class="defaultSwiperClasses.wrapperClass">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="button-prev"></slot>
    <slot name="button-next"></slot>
    <slot name="scrollbar"></slot>
  </div>
</template>

<script>
  var browser = typeof window !== 'undefined'
  if (browser) {
    window.Swiper = require('carousel-view')
    require('swiper/dist/css/swiper.css')
  }
  export default {
    name: 'carousel-view',
    props: {
      options: {
        type: Object,
        default() {
          return {
            autoplay: 3500
          }
        }
      }
    },
    data() {
      return {
        defaultSwiperClasses: {
          wrapperClass: 'swiper-wrapper'
        }
      }
    },
    ready() {
      if (!this.swiper && browser) {
        this.swiper = new Swiper(this.$el, this.options)
      }
    },
    mounted() {
      var self = this
      var mount = function () {
        if (!self.swiper && browser) {
          delete self.options.notNextTick
          var setClassName = false
          for(var className in self.defaultSwiperClasses){
            if (self.defaultSwiperClasses.hasOwnProperty(className)) {
              if (self.options[className]) {
                setClassName = true
                self.defaultSwiperClasses[className] = self.options[className]
              }
            }
          }
          var mountInstance = function () {
            self.swiper = new Swiper(self.$el, self.options)
          }
          setClassName ? self.$nextTick(mountInstance) : mountInstance()
        }
      }
      this.options.notNextTick ? mount() : this.$nextTick(mount)
    },
    updated(){
      if (this.swiper) {
        this.swiper.update()
      }
    },
    beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy()
        delete this.swiper
      }
    }
  }
</script>
