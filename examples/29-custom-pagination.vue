<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>custom-pagination</span>
        <span>（</span>
        <span>自定义翻页样式</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/29-custom-pagination.vue">
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
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
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
          paginationClickable: true,
          paginationBulletRender(swiper, index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            // return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
          }
        }
      }
    }
  }
</script>

<style>
 .swiper-pagination-bullet-custom {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color:#fff;
    background: #007aff;
  }
</style>
