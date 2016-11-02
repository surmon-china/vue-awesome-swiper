<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'swiper-slide',
    ready: function() {
      this.update()
    },
    mounted: function() {
      this.update()
    },
    updated: function(){
      this.update()
    },
    attached: function(){
      this.update()
    },
    methods: {
      update: function() {
        this.$parent && this.$parent.swiper && this.$parent.swiper.update(true)
      }
    }
  }
</script>
