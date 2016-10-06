<style scoped>
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #000;
  }
  .swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">默认设置</button>
      <a href="http://www.swiper.com.cn/demo/01-default.html" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img data-src="http://lorempixel.com/1600/1200/nature/1" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
          <img data-src="http://lorempixel.com/1600/1200/nature/2" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://lorempixel.com/1600/1200/nature/3" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://lorempixel.com/1600/1200/nature/4" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://lorempixel.com/1600/1200/nature/5" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <swiper-slide>
        <img data-src="http://lorempixel.com/1600/1200/nature/6" class="swiper-lazy">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          // Disable preloading of all images
          preloadImages: false,
          // Enable lazy loading
          lazyLoading: true
        }
      }
    }
  }
</script>
