<style scoped>
  .swiper-container {
    width: 300px;
    /*height: 300px;*/
    padding: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /*height: 300px;*/
  }
</style>

<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">effect-flip</button>
      <button class="btn btn-default btn-xs btn-title">反转效果</button>
      <a href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/35-effect-flip.vue" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/yosemite_national_park_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/mount_rainier.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/snoqualmie_pass_0.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg)"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          effect: 'flip',
          grabCursor: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        }
      }
    }
  }
</script>
