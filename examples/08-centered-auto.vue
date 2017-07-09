<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>centered-auto</span>
        <span>（</span>
        <span>居中/自动分组</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/08-centered-auto.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <mt-swiper :options="swiperOption">
        <mt-swiper-slide>Slide 1</mt-swiper-slide>
        <mt-swiper-slide>Slide 2</mt-swiper-slide>
        <mt-swiper-slide>Slide 3</mt-swiper-slide>
        <mt-swiper-slide>Slide 4</mt-swiper-slide>
        <mt-swiper-slide>Slide 5</mt-swiper-slide>
        <mt-swiper-slide>Slide 6</mt-swiper-slide>
        <mt-swiper-slide>Slide 7</mt-swiper-slide>
        <mt-swiper-slide>Slide 8</mt-swiper-slide>
        <mt-swiper-slide>Slide 9</mt-swiper-slide>
        <mt-swiper-slide>Slide 10</mt-swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </mt-swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-slide {
    width: 60%;
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }
</style>
