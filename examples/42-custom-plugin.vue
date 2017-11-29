<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>custom-plugin</span>
        <span>（</span>
        <span>定制插件 / 打开控制台查看效果</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/42-custom-plugin.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  import Swiper from 'swiper'
  const myPlugin = {
    name: 'debugger',
    params: {
      debugger: false,
    },
    on: {
      init: function () {
        if (!this.params.debugger) return
        console.log('init')
      },
      click: function (e) {
        if (!this.params.debugger) return
        console.log('click')
      },
      tap: function (e) {
        if (!this.params.debugger) return
        console.log('tap')
      },
      doubleTap: function (e) {
        if (!this.params.debugger) return
        console.log('doubleTap')
      },
      sliderMove: function (e) {
        if (!this.params.debugger) return
        console.log('sliderMove')
      },
      slideChange: function () {
        if (!this.params.debugger) return
        console.log('slideChange', this.previousIndex, '->', this.activeIndex)
      },
      slideChangeTransitionStart: function () {
        if (!this.params.debugger) return
        console.log('slideChangeTransitionStart')
      },
      slideChangeTransitionEnd: function () {
        if (!this.params.debugger) return
        console.log('slideChangeTransitionEnd')
      },
      transitionStart: function () {
        if (!this.params.debugger) return
        console.log('transitionStart')
      },
      transitionEnd: function () {
        if (!this.params.debugger) return
        console.log('transitionEnd')
      },
      fromEdge: function () {
        if (!this.params.debugger) return
        console.log('fromEdge')
      },
      reachBeginning: function () {
        if (!this.params.debugger) return
        console.log('reachBeginning')
      },
      reachEnd: function () {
        if (!this.params.debugger) return
        console.log('reachEnd')
      },
    },
  }
  // Install Plugin To Swiper
  Swiper.use(myPlugin)
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // Enable debugger
          debugger: true
        }
      }
    }
  }
</script>
