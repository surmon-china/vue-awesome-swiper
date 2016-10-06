<style scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80%;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%;
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

<template>
  <div style="height: 500px">
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">默认设置</button>
      <a href="http://www.swiper.com.cn/demo/01-default.html" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOptionTop" class="gallery-top">
      <swiper-slide style="background-image:url(http://img.bizhi.sogou.com/images/2014/02/12/517391.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://www.bz55.com/uploads/allimg/160922/139-160922103434.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://photo.enterdesk.com/2008-8-15/200808150041385460.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://pic.pp3.cn/uploads//201509/2015100208.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://photo.enterdesk.com/2011-9-26/enterdesk.com-DD29A2D21361EF22A70B115EA52F1AE6.jpg)"></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs">
      <swiper-slide style="background-image:url(http://img.bizhi.sogou.com/images/2014/02/12/517391.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://www.bz55.com/uploads/allimg/160922/139-160922103434.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://photo.enterdesk.com/2008-8-15/200808150041385460.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://pic.pp3.cn/uploads//201509/2015100208.jpg)"></swiper-slide>
      <swiper-slide style="background-image:url(http://photo.enterdesk.com/2011-9-26/enterdesk.com-DD29A2D21361EF22A70B115EA52F1AE6.jpg)"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionTop: {
          name: 'swiperTop',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10
        },
        swiperOptionThumbs: {
          name: 'swiperThumbs',
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    ready() {
      const swiperTop = this.$children.find((children) => children.options.name == 'swiperTop').swiper
      const swiperThumbs = this.$children.find((children) => children.options.name == 'swiperThumbs').swiper
      swiperTop.params.control = swiperThumbs
      swiperThumbs.params.control = swiperTop
    }
  }
</script>
