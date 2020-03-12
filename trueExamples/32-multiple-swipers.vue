<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption" v-for="i in 2" :key="i" style="margin-bottom: 1rem;">
      <swiper-slide v-for="i in 9" :key="i">Slide {{ i + 1 }}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
