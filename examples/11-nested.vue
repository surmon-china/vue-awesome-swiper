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
        <swiper-slide>Horizontal Slide 3</swiper-slide>
        <swiper-slide>Horizontal Slide 4</swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
      </swiper>
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
