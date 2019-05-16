<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">Slide 1</swiper-slide>
    <swiper-slide class="swiper-item">Slide 2</swiper-slide>
    <swiper-slide class="swiper-item">Slide 3</swiper-slide>
    <swiper-slide class="swiper-item">Slide 4</swiper-slide>
    <swiper-slide class="swiper-item">Slide 5</swiper-slide>
    <swiper-slide class="swiper-item">Slide 6</swiper-slide>
    <swiper-slide class="swiper-item">Slide 7</swiper-slide>
    <swiper-slide class="swiper-item">Slide 8</swiper-slide>
    <swiper-slide class="swiper-item">Slide 9</swiper-slide>
    <swiper-slide class="swiper-item">Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
html,
body {
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
  font-size: 18px;
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
