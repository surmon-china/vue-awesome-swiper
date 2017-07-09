<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>effect-cube</span>
        <span>（</span>
        <span>3D方块效果</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/17-effect-cube.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media class="swiper-inner">
      <!-- swiper -->
      <mt-swiper :options="swiperOption">
        <mt-swiper-slide>Slide 1</mt-swiper-slide>
        <mt-swiper-slide>Slide 2</mt-swiper-slide>
        <mt-swiper-slide>Slide 3</mt-swiper-slide>
        <mt-swiper-slide>Slide 4</mt-swiper-slide>
        <mt-swiper-slide>Slide 5</mt-swiper-slide>
        <mt-swiper-slide>Slide 6</mt-swiper-slide>
        <mt-swiper-slide>Slide 7</mt-swiper-slide>
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
          effect: 'cube',
          grabCursor: true,
          cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-inner {
    position: relative;
    overflow: hidden;
    height: 330px;
    padding: 15px;
  }
  .swiper-container {
    width: 300px!important;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
</style>
