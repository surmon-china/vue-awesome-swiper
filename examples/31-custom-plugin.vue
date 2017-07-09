<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>custom-plugin</span>
        <span>（</span>
        <span>定制插件/打开控制台查看效果</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/31-custom-plugin.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <mt-swiper :options="swiperOption">
        <mt-swiper-slide>Slide 1</mt-swiper-slide>
        <mt-swiper-slide>Slide 2</mt-swiper-slide>
        <mt-swiper-slide>Slide 3</mt-swiper-slide>
        <mt-swiper-slide>Slide 4</mt-swiper-slide>
        <mt-swiper-slide>Slide 5</mt-swiper-slide>
        <mt-swiper-slide>Slide 6</mt-swiper-slide>
        <mt-swiper-slide>Slide 7</mt-swiper-slide>
        <mt-swiper-slide>Slide 8</mt-swiper-slide>
        <mt-swiper-slide>Slide 9</mt-swiper-slide>
        <mt-swiper-slide>Slide 10</mt-swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </mt-swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  import { swiperPlugins } from 'components/vue-awesome-swiper'
  swiperPlugins.debugger = (swiper, params) => {
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
