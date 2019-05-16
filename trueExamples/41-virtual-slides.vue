<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="button">
      <div @click="toSlide(0)">To Slide 1</div>
      <div @click="toSlide(249)">To Slide 250</div>
      <div @click="toSlide(499)">To Slide 500</div>
    </div>
  </div>
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
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        virtual: {
          slides: (function() {
            const slides = [];
            for (let i = 0; i < 600; i += 1) {
              slides.push("Slide " + (i + 1));
            }
            return slides;
          })()
        }
      }
    };
  },
  methods: {
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 0);
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
