<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>
      <img
        data-src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg"
        class="swiper-lazy"
      >
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img
        data-src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-2.jpg"
        class="swiper-lazy"
      >
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img
        data-src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg"
        class="swiper-lazy"
      >
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img
        data-src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-4.jpg"
        class="swiper-lazy"
      >
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img
        data-src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-5.jpg"
        class="swiper-lazy"
      >
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img
        data-src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg"
        class="swiper-lazy"
      >
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // Enable lazy loading
        lazy: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
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
