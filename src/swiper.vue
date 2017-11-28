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
  import _Swiper from 'quill'
  const Swiper = window.Swiper || _Swiper
  export default {
    name: 'swiper',
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      notNextTick: {
        type: Boolean,
        default() {
          return false
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
      if (!this.swiper) {
        this.swiper = new Swiper(this.$el, this.options)
      }
    },
    mounted() {
      const mount = () => {
        if (!this.swiper) {
          delete this.options.notNextTick
          let setClassName = false
          for(const className in this.defaultSwiperClasses){
            if (this.defaultSwiperClasses.hasOwnProperty(className)) {
              if (this.options[className]) {
                setClassName = true
                this.defaultSwiperClasses[className] = this.options[className]
              }
            }
          }
          const mountInstance = () => {
            this.swiper = new Swiper(this.$el, this.options)
          }
          setClassName ? this.$nextTick(mountInstance) : mountInstance()
        }
      }
      (this.options.notNextTick || this.notNextTick) ? mount() : this.$nextTick(mount)
    },
    updated() {
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
