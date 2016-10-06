<style>
 .swiper-pagination-bullet-custom {
    width: 20px!important;
    height: 20px!important;
    text-align: center!important;
    line-height: 20px!important;
    font-size: 12px!important;
    color: #000!important;
    opacity: 1!important;
    background: rgba(0,0,0,0.2)!important;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color:#fff!important;
    background: #007aff!important;
  }
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">custom-pagination</button>
      <button class="btn btn-default btn-xs btn-title">自定义导航样式</button>
      <a href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/29-custom-pagination.vue" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
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
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
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
          paginationBulletRender: (index, className) => {
            return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
          }
        }
      }
    }
  }
</script>
