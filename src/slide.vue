<template>
  <div :class="slideClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'swiper-slide',
    data: function() {
      return {
        slideClass: 'swiper-slide'
      }
    },
    ready: function() {
      this.update()
    },
    mounted: function() {
      this.update()
      if (this.$parent.options.slideClass) {
        this.slideClass = this.$parent.options.slideClass
      }
    },
    updated: function() {
      this.update()
    },
    attached: function() {
      this.update()
    },
    methods: {
      update: function() {
        if (this.$parent && this.$parent.swiper && this.$parent.swiper.update) {
          this.$parent.swiper.update(true)
          if (this.$parent.options.loop) {
            this.$parent.swiper.reLoop()
          }
        }
      }
    }
  }
</script>
