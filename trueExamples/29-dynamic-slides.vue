<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide">Slide {{ slide }}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="button">
      <div @click="prependSlide">Prepend Slide</div>
      <div @click="appendSlide">Append Slide</div>
      <div @click="popSlide">Pop Slide</div>
      <div @click="shiftSlide">Shift Slide</div>
    </div>
  </div>
  <!-- swiper -->
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    appendSlide() {
      this.swiperSlides.push(this.swiperSlides.length + 1);
    },
    prependSlide() {
      this.swiperSlides.unshift(this.swiperSlides[0] - 1);
    },
    popSlide() {
      this.swiperSlides.pop();
    },
    shiftSlide() {
      this.swiperSlides.shift();
    }
  }
};
</script>

<style scoped>
.append-buttons {
  text-align: center;
  margin-top: 20px;
}
.append-buttons a {
  display: inline-block;
  margin: 0 10px;
}
</style>
