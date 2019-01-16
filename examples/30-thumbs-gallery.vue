<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Thumbs Gallery With Two-way Control</span>
        <span>（</span>
        <span>缩略图控制</span>
        <span>）</span>
      </div>
      <md-button
        class="md-icon-button"
        target="_blank"
        href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/30-thumbs-gallery.vue"
      >
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media style="height: 500px">
      <!-- swiper1 -->
      <swiper
        :options="swiperOptionTop"
        class="gallery-top"
        ref="swiperTop"
      >
        <swiper-slide class="slide-1" />
        <swiper-slide class="slide-2" />
        <swiper-slide class="slide-3" />
        <swiper-slide class="slide-4" />
        <swiper-slide class="slide-5" />
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        />
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        />
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        :options="swiperOptionThumbs"
        class="gallery-thumbs"
        ref="swiperThumbs"
      >
        <swiper-slide class="slide-1" />
        <swiper-slide class="slide-2" />
        <swiper-slide class="slide-3" />
        <swiper-slide class="slide-4" />
        <swiper-slide class="slide-5" />
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;

    &.slide-1 {
      background-image:url('/static/images/surmon-1.jpg');
    }

    &.slide-2 {
      background-image:url('/static/images/surmon-6.jpg');
    }

    &.slide-3 {
      background-image:url('/static/images/surmon-8.jpg');
    }

    &.slide-4 {
      background-image:url('/static/images/surmon-9.jpg');
    }

    &.slide-5 {
      background-image:url('/static/images/surmon-10.jpg');
    }
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>
