<template>
  <div :class="slideClass">
    <slot />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { SWIPER_SLIDE_COMPONENT_NAME, DEFAULT_CLASSES } from './constants'

  export default Vue.extend({
    name: SWIPER_SLIDE_COMPONENT_NAME,
    computed: {
      slideClass(): string {
        return (this.$parent as any)?.swiperOptions?.slideClass || DEFAULT_CLASSES.slideClass
      }
    },
    mounted() {
      this.update()
    },
    updated() {
      this.update()
    },
    methods: {
      update() {
        (this.$parent as any)?.$swiper?.update()
      }
    }
  })
</script>
