<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>nested</span>
        <span>（</span>
        <span>Swipers嵌套</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/11-nested.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <mt-swiper :options="swiperOptionh">
        <mt-swiper-slide>Horizontal Slide 1</mt-swiper-slide>
        <mt-swiper-slide>
          <mt-swiper :options="swiperOptionv">
            <mt-swiper-slide>Vertical Slide 1</mt-swiper-slide>
            <mt-swiper-slide>Vertical Slide 2</mt-swiper-slide>
            <mt-swiper-slide>Vertical Slide 3</mt-swiper-slide>
            <mt-swiper-slide>Vertical Slide 4</mt-swiper-slide>
            <mt-swiper-slide>Vertical Slide 5</mt-swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </mt-swiper>
        </mt-swiper-slide>
        <mt-swiper-slide>Horizontal Slide 3</mt-swiper-slide>
        <mt-swiper-slide>Horizontal Slide 4</mt-swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
      </mt-swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionh: {
          pagination: '.swiper-pagination-h',
          paginationClickable: true,
          spaceBetween: 50
        },
        swiperOptionv: {
          pagination: '.swiper-pagination-v',
          paginationClickable: true,
          direction: 'vertical',
          spaceBetween: 50
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-container-v {
    background: #eee;
  }
</style>
