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
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button > div {
  min-width: 88px;
  min-height: 36px;
  margin: 6px 8px;
  padding: 0 16px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: currentColor;
  font-family: inherit;
  font-size: 14px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: 500;
  letter-spacing: inherit;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
}
.button > div:hover {
  background-color: hsla(0, 0%, 60%, 0.2);
}
</style>
