<template>
  <div class="swiper-container">
    <slot name="parallax-bg"></slot>
    <div :class="classes.wrapperClass">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="button-prev"></slot>
    <slot name="button-next"></slot>
    <slot name="scrollbar"></slot>
  </div>
</template>

<script>
  import _Swiper from 'swiper'
  import objectAssign from 'object-assign'
  const Swiper = window.Swiper || _Swiper
  export default {
    name: 'swiper',
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      globalOptions: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    methods: {
      update() {
        if (this.swiper) {
          this.swiper.update && this.swiper.update()
        }
      },
      mountInstance() {
        const swiperOptions = objectAssign({}, this.globalOptions, this.options)
        this.swiper = new Swiper(this.$el, swiperOptions)
      }
    },
    data() {
      return {
        classes: {
          wrapperClass: 'swiper-wrapper'
        }
      }
    },
    ready() {
      if (!this.swiper) {
        this.mountInstance()
      }
    },
    mounted() {
      if (!this.swiper) {
        let setClassName = false
        for(const className in this.classes) {
          if (this.classes.hasOwnProperty(className)) {
            if (this.options[className]) {
              setClassName = true
              this.classes[className] = this.options[className]
            }
          }
        }
        setClassName ? this.$nextTick(this.mountInstance) : this.mountInstance()
      }
    },
    activated() {
      this.update()
    },
    updated() {
      this.update()
    },
    beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy && this.swiper.destroy()
        delete this.swiper
      }
    }
  }
</script>
