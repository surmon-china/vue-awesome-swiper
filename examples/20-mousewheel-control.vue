<template>
  <div>
    <div class="btn-group btn-vue-example">
      <button class="btn btn-default btn-xs btn-title">mousewheel-control</button>
      <button class="btn btn-default btn-xs btn-title">鼠标控制/聚焦后滚轮</button>
      <a href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/20-mousewheel-control.vue" target="_blank" class="btn btn-primary btn-xs">&lt; &gt;</a>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true
        }
      }
    }
  }
</script>
