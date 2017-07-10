<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>inner-scroll</span>
        <span>（</span>
        <span>在里面滚动</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/38-inner-scroll.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="parentSwiperOption" class="parent-swiper" ref="pSwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>
          <swiper :options="childSwiperOption" class="child-swiper">
            <swiper-slide>Slide 2</swiper-slide>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      let self = this
      return {
        parentSwiperOption: {
          direction : 'vertical',
          mousewheelControl: true,
          onSetTransition: function(swiper){
            if (swiper.activeIndex == 1) {
              swiper.params.onlyExternal = true;
              swiper.disableMousewheelControl();
            } else {
              swiper.params.onlyExternal = false;
              swiper.enableMousewheelControl();
            }
          }
        },
        childSwiperOption: {
          scrollbar: '.swiper-scrollbar',
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          freeModeMomentum: false,
          mousewheelControl: true,
          mousewheelSensitivity: 0.5,
          onSetTransition(swiper, translate){
            //translate 一直为0，不可直接用
            let oSwiper = self.swiper
            let nowTranslate = swiper.translate;
            let beforeTranslate = beforeTranslate || 0;
            let slideHeight = swiper.slides[0].scrollHeight;
            let swiperHeight = swiper.height

            if(nowTranslate > -2 && nowTranslate > beforeTranslate){ oSwiper.slideTo(0); }
            if(slideHeight - swiperHeight + nowTranslate < 2 && nowTranslate < beforeTranslate){ oSwiper.slideTo(2); }

            beforeTranslate = nowTranslate;
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.pSwiper.swiper
      }
    }
  }
</script>

<style scoped>
  .parent-swiper {
    height: 300px;
  }
  .child-swiper .swiper-slide{
    height: 600px;
  }
</style>
