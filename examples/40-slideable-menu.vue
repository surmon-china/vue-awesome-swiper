<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>slideable-menu</span>
        <span>（</span>
        <span>可滑动菜单</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/40-slideable-menu.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" ref="swiper">
        <swiper-slide class="menu">Menu slide</swiper-slide>
        <swiper-slide class="content">
          <div class="menu-button" :class="{ 'cross': menuCross }" @click="toggleMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          Content slide
        </swiper-slide>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      let self = this
      return {
        menuCross: false,
        swiperOption: {
          slidesPerView: 'auto',
          initialSlide: 1,
          resistanceRatio: .00000000000001,
          slideToClickedSlide: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.swiper.swiper
      }
    },
    methods: {
      toggleMenu() {
        if (this.swiper.previousIndex == 0) this.swiper.slidePrev()
      }
    }
  }
</script>

<style scoped>
  .menu {
    min-width: 100px;
    width: 70%;
    max-width: 320px;

    background-color: #2C8DFB!important;
    color: #fff;
  }

  .content {
    width: 100%;
  }

  .menu-button {
    position: absolute;
    top: 0px; left: 0px;

    padding: 15px;

    cursor: pointer;

    -webkit-transition: .3s;
    transition: .3s;

    background-color: #2C8DFB;

    /*margin: 14px;
    border-radius: 5px;*/
  }
  .menu-button .bar:nth-of-type(1) {
    margin-top: 0px;
  }
  .menu-button .bar:nth-of-type(3) {
    margin-bottom: 0px;
  }

  .bar {
    position: relative;
    display: block;

    width: 50px;
    height: 5px;

    margin: 10px auto;
    background-color: #fff;

    border-radius: 10px;

    -webkit-transition: .3s;
    transition: .3s;
  }

  .menu-button:hover .bar:nth-of-type(1) {
    -webkit-transform: translateY(1.5px) rotate(-4.5deg);
    -ms-transform: translateY(1.5px) rotate(-4.5deg);
    transform: translateY(1.5px) rotate(-4.5deg);
  }
  .menu-button:hover .bar:nth-of-type(2) {
    opacity: .9;
  }
  .menu-button:hover .bar:nth-of-type(3) {
    -webkit-transform: translateY(-1.5px) rotate(4.5deg);
    -ms-transform: translateY(-1.5px) rotate(4.5deg);
    transform: translateY(-1.5px) rotate(4.5deg);
  }

  .cross .bar:nth-of-type(1) {
    -webkit-transform: translateY(15px) rotate(-45deg);
    -ms-transform: translateY(15px) rotate(-45deg);
    transform: translateY(15px) rotate(-45deg);
  }
  .cross .bar:nth-of-type(2) {
    opacity: 0;
  }
  .cross .bar:nth-of-type(3) {
    -webkit-transform: translateY(-15px) rotate(45deg);
    -ms-transform: translateY(-15px) rotate(45deg);
    transform: translateY(-15px) rotate(45deg);
  }
  .cross:hover .bar:nth-of-type(1) {
    -webkit-transform: translateY(13.5px) rotate(-40.5deg);
    -ms-transform: translateY(13.5px) rotate(-40.5deg);
    transform: translateY(13.5px) rotate(-40.5deg);
  }
  .cross:hover .bar:nth-of-type(2) {
    opacity: .1;
  }
  .cross:hover .bar:nth-of-type(3) {
    -webkit-transform: translateY(-13.5px) rotate(40.5deg);
    -ms-transform: translateY(-13.5px) rotate(40.5deg);
    transform: translateY(-13.5px) rotate(40.5deg);
  }
</style>
