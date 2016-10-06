<style scoped>
  .swiper-container {
    width: 300px;
    height: 300px;
    padding: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">默认设置</button>
      <a href="http://www.swiper.com.cn/demo/01-default.html" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide style="background-image:url(http://lorempixel.com/600/600/nature/1)"></swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/600/600/nature/2)"></swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/600/600/nature/3)"></swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/600/600/nature/4)"></swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/600/600/nature/5)"></swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/600/600/nature/6)"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          effect: 'flip',
          grabCursor: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        }
      }
    }
  }
</script>
