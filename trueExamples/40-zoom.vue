<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg">
      </div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        zoom: true,
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
