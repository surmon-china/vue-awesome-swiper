<template>
  <!-- swiper -->
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
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import Swiper from "swiper";
const myPlugin = {
  name: "debugger",
  params: {
    debugger: false
  },
  on: {
    init: function() {
      if (!this.params.debugger) return;
      console.log("init");
    },
    click: function(e) {
      if (!this.params.debugger) return;
      console.log("click");
    },
    tap: function(e) {
      if (!this.params.debugger) return;
      console.log("tap");
    },
    doubleTap: function(e) {
      if (!this.params.debugger) return;
      console.log("doubleTap");
    },
    sliderMove: function(e) {
      if (!this.params.debugger) return;
      console.log("sliderMove");
    },
    slideChange: function() {
      if (!this.params.debugger) return;
      console.log("slideChange", this.previousIndex, "->", this.activeIndex);
    },
    slideChangeTransitionStart: function() {
      if (!this.params.debugger) return;
      console.log("slideChangeTransitionStart");
    },
    slideChangeTransitionEnd: function() {
      if (!this.params.debugger) return;
      console.log("slideChangeTransitionEnd");
    },
    transitionStart: function() {
      if (!this.params.debugger) return;
      console.log("transitionStart");
    },
    transitionEnd: function() {
      if (!this.params.debugger) return;
      console.log("transitionEnd");
    },
    fromEdge: function() {
      if (!this.params.debugger) return;
      console.log("fromEdge");
    },
    reachBeginning: function() {
      if (!this.params.debugger) return;
      console.log("reachBeginning");
    },
    reachEnd: function() {
      if (!this.params.debugger) return;
      console.log("reachEnd");
    }
  }
};
// Install Plugin To Swiper
Swiper.use(myPlugin);
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // Enable debugger
        debugger: true
      }
    };
  }
};
</script>
