<style scoped>
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">默认设置</button>
      <a href="http://www.swiper.com.cn/demo/01-default.html" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide style="background-image:url(http://lorempixel.com/1000/1000/nightlife/1)">Slide 1</swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/1000/1000/nightlife/2)">Slide 2</swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/1000/1000/nightlife/3)">Slide 3</swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/1000/1000/nightlife/4)">Slide 4</swiper-slide>
      <swiper-slide style="background-image:url(http://lorempixel.com/1000/1000/nightlife/5)">Slide 5</swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 30,
          effect: 'fade'
        }
      }
    }
  }
</script>
