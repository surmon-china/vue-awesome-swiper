<template>
  <div>
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>
</template>


<script>
export default {
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-size: cover;
  background-position: center;

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
.gallery-top {
  width: 100%;
  margin-bottom: 0 !important;
}
.gallery-thumbs {
  margin-top: 0 !important;
  height: 100px !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>