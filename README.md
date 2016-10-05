[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)


# Vue-Awesome-Swiper
Swiper(slides) components for Vue.js(1.X ~ 2.X)
10月7日前会完善对vue1.X版本的兼容支持


# Example

[Demos](https://surmon-china.github.io/vue-awesome-swiper)


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


--------------------------------------

// or use with component(ES6)
import Vue from 'vue'
// ...
import { swiper, slide } from 'vue-awesome-swiper'

// use
export default {
  components: {
    swiper,
    swiperSlide: slide
  }
}
```

### Use in components

``` html
<swiper :options="swiperOption">
  <swiper-slide class="item" v-for="slide in [1, 2, 3, 4, 5]">
    <!-- 每一个slide均可以是任何内容 -->
    <div>初始化后的Swiper实例{{ slide }}</div>
  </swiper-slide>
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
  data() {
    return {
      swiperOption: {
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
        // ...
      }
    }
  }
}
```

# More Config
Swiper官网中的API及配置均可使用
[Swiper apis](http://www.swiper.com.cn/api/index.html)



# Author Blog
[Surmon](http://surmon.me)
