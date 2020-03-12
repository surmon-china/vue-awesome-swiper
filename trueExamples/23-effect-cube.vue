<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-inner {
  position: relative;
  overflow: hidden;
  height: 330px;
  padding: 15px;
}
.swiper-container {
  width: 300px !important;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
