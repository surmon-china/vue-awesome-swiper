<template>
  <mt-swiper :options="swiperOption" class="swiper-box">
    <mt-swiper-slide class="swiper-item">Slide 1</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 2</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 3</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 4</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 5</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 6</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 7</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 8</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 9</mt-swiper-slide>
    <mt-swiper-slide class="swiper-item">Slide 10</mt-swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </mt-swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true
        }
      }
    }
  }
</script>

<style lang="scss">

  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
