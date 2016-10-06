<style scoped>
  .swiper-container-v {
    background: #eee;
  }
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">默认设置</button>
      <a href="http://www.swiper.com.cn/demo/01-default.html" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOptionh">
      <swiper-slide>Horizontal Slide 1</swiper-slide>
      <swiper-slide>
        <swiper :options="swiperOptionv">
          <swiper-slide>Vertical Slide 1</swiper-slide>
          <swiper-slide>Vertical Slide 2</swiper-slide>
          <swiper-slide>Vertical Slide 3</swiper-slide>
          <swiper-slide>Vertical Slide 4</swiper-slide>
          <swiper-slide>Vertical Slide 5</swiper-slide>
          <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <swiper-slide>Horizontal Slide 3</swiper-slide>
      <swiper-slide>Horizontal Slide 4</swiper-slide>
      <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionh: {
          pagination: '.swiper-pagination-h',
          paginationClickable: true,
          spaceBetween: 50
        },
        swiperOptionv: {
          pagination: '.swiper-pagination-v',
          paginationClickable: true,
          direction: 'vertical',
          spaceBetween: 50
        }
      }
    }
  }
</script>
