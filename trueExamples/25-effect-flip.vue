<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide class="slide-1"></swiper-slide>
    <swiper-slide class="slide-2"></swiper-slide>
    <swiper-slide class="slide-3"></swiper-slide>
    <swiper-slide class="slide-4"></swiper-slide>
    <swiper-slide class="slide-5"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination"
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

<style lang="scss" scoped>
.swiper-container {
  width: 300px !important;
  padding: 50px !important;
}
.swiper-slide {
  background-position: 50% !important;
  background-size: cover !important;
  width: 100% !important;

  &.slide-1 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg");
  }

  &.slide-2 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg");
  }

  &.slide-3 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-8.jpg");
  }

  &.slide-4 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-9.jpg");
  }

  &.slide-5 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-10.jpg");
  }
}
</style>
