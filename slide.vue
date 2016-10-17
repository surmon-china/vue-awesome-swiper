<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'swiper-slide',
    ready: function() {
      this.$parent && this.$parent.swiper && this.$parent.swiper.update(true)
    },
    mounted: function() {
      this.$parent && this.$parent.swiper && this.$parent.swiper.update(true)
    }
  }
</script>
