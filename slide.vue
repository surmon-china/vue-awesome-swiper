<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'swiper-slide',
    ready() {
      this.update()
    },
    mounted() {
      this.update()
    },
    updated(){
      this.update()
    },
    attached(){
      this.update()
    },
    methods: {
      update() {
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
