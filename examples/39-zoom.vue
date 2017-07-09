<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>zoom</span>
        <span>（</span>
        <span>变焦、点击放大</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/39-zoom.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <mt-swiper :options="swiperOption">
        <mt-swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg">
          </div>
        </mt-swiper-slide>
        <mt-swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/yosemite_national_park_0.jpg">
          </div>
        </mt-swiper-slide>
        <mt-swiper-slide>
          <div class="swiper-zoom-container">
            <img src="http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/mount_rainier.jpg">
          </div>
        </mt-swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </mt-swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          zoom: true,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        }
      }
    }
  }
</script>
