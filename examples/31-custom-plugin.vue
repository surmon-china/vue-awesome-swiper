<style scoped>
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">默认设置</button>
      <a href="http://www.swiper.com.cn/demo/01-default.html" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
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
  </div>
</template>

<script>
  import { swiperPlugins } from 'vue-awesome-swiper'
  swiperPlugins.debugger = function(swiper, params) {
    if (!params) return;
    // Need to return object with properties that names are the same as callbacks
    return {
      onInit: function(swiper) {
        console.log('onInit');
      },
      onClick: function(swiper, e) {
        console.log('onClick');
      },
      onTap: function(swiper, e) {
        console.log('onTap');
      },
      onDoubleTap: function(swiper, e) {
        console.log('onDoubleTap');
      },
      onSliderMove: function(swiper, e) {
        console.log('onSliderMove');
      },
      onSlideChangeStart: function(swiper) {
        console.log('onSlideChangeStart');
      },
      onSlideChangeEnd: function(swiper) {
        console.log('onSlideChangeEnd');
      },
      onTransitionStart: function(swiper) {
        console.log('onTransitionStart');
      },
      onTransitionEnd: function(swiper) {
        console.log('onTransitionEnd');
      },
      onReachBeginning: function(swiper) {
        console.log('onReachBeginning');
      },
      onReachEnd: function(swiper) {
        console.log('onReachESnd');
      }
    }
  }
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          // Enable debugger
          debugger: true
        }
      }
    }
  }
</script>
