[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)


# Vue-Awesome-Swiper
Swiper(slides) component for Vue.js(1.X ~ 2.X)，本组件基于 [Swiper3](http://www.swiper.com.cn) 支持Vue全版本


# Example

[Demos Page](https://surmon-china.github.io/vue-awesome-swiper)


# Use Setup

``` bash
# install vue-awesome-swiper
npm install vue-awesome-swiper --save
```

### Vue use

``` javascript
// import with ES6
import Vue from 'vue'
// ...
import awesomeSwiper from 'vue-awesome-swiper'


// require with Webpack/Node.js
var Vue = require('vue')
// ...
var awesomeSwiper = require('vue-awesome-swiper')


// use
Vue.use(awesomeSwiper)


// --------------------------------------


// or use with component(ES6)
import Vue from 'vue'
// ...
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// use
export default {
  components: {
    swiper,
    swiperSlide
  }
}
```

### Use in components

``` html
<swiper :options="swiperOption">
  <!-- 幻灯内容 -->
  <swiper-slide>
    <div>我是Swiper实例slide1</div>
  </swiper-slide>
  <swiper-slid>
    <div>我是Swiper实例slide2</div>
  </swiper-slide>
  <swiper-slid>
    <div>我是Swiper实例slide3</div>
  </swiper-slide>
  <!-- ... -->
  <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
  <div class="swiper-pagination"  slot="pagination"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-scrollbar"   slot="scrollbar"></div>
</swiper>
```


``` javascript
// swiperOption example:
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        autoplay: 3000,
        // direction : 'vertical',
        // grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        // prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
        // scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        // more callbacks
        onTransitionStart: function(swiper){
          console.log(swiper)
        },
        // more Swiper config ...
        // ...
      }
    }
  },
  // example (if you need to get the swiper object)
  mounted() {
    console.log(this)
    this.getSwiper()
  },
  // example (this swiperOption is the swiper object on component mounted)
  methods: {
    getSwiper() {
      console.log(this.swiperOption)
    }
  }
}
```

# API
Swiper官网中的API及配置均可使用
[Swiper3 apis](http://www.swiper.com.cn/api/index.html)



# Author Blog
[Surmon](http://surmon.me)
