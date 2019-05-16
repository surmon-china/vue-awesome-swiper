<template>
  <!-- swiper -->
  <swiper :options="swiperOptionh">
    <swiper-slide>Horizontal Slide 1</swiper-slide>
    <swiper-slide>
      <swiper :options="swiperOptionv">
        <swiper-slide>Vertical Slide 1</swiper-slide>
        <swiper-slide>Vertical Slide 2</swiper-slide>
        <swiper-slide>Vertical Slide 3</swiper-slide>
        <swiper-slide>Vertical Slide 4</swiper-slide>
        <swiper-slide>Vertical Slide 5</swiper-slide>
        <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
      </swiper>
    </swiper-slide>
    <swiper-slide>Horizontal Slide 1</swiper-slide>
    <swiper-slide>Horizontal Slide 2</swiper-slide>
    <swiper-slide>Horizontal Slide 3</swiper-slide>
    <swiper-slide>Horizontal Slide 4</swiper-slide>
    <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOptionh: {
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination-h",
          clickable: true
        }
      },
      swiperOptionv: {
        direction: "vertical",
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination-v",
          clickable: true
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-container-v {
  background: #eee;
}
</style>
