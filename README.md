[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)


# Vue-Awesome-Swiper
Swiper(slides) component for Vue.js(1.X ~ 2.X)，本组件基于 [Swiper3](http://www.swiper.com.cn)构建， 支持Vue全版本，支持移动端 + PC端使用，欢迎加入前端技术交流群：288325802


# Example

[Demo Page](https://surmon-china.github.io/vue-awesome-swiper)


# Use Setup


### npm install vue-awesome-swiper

``` bash
npm install vue-awesome-swiper --save
```

### Vue use

``` javascript
// import with ES6
import Vue from 'vue'
// ...
import AwesomeSwiper from 'vue-awesome-swiper'


// require with Webpack/Node.js
var Vue = require('vue')
// ...
var AwesomeSwiper = require('vue-awesome-swiper')


// use
Vue.use(AwesomeSwiper)


// --------------------------------------


// or use with component(ES6)
import Vue from 'vue'
// ...
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'

// use
export default {
  components: {
    swiper,
    swiperSlide
  }
}

// if you need to custom swiper plugins
swiperPlugins.debugger = function(swiper, params) {
  if (!params) return;
  // Need to return object with properties that names are the same as callbacks
  return {
    onInit: function(swiper) {
      console.log('onInit');
    },
    onClick: function(swiper, e) {
      console.log('onClick');
    },
    onTap: function(swiper, e) {
      console.log('onTap');
    },
    // something callback...
  }
}
```

### Use in component

``` html
<swiper :options="swiperOption">
  <!-- 幻灯内容 -->
  <swiper-slide>I'm Slide 1</swiper-slide>
  <swiper-slid3>I'm Slide 2</swiper-slide>
  <swiper-slid3>I'm Slide 3</swiper-slide>
  <!-- ... -->
  <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
  <div class="swiper-pagination"  slot="pagination"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-scrollbar"   slot="scrollbar"></div>
</swiper>
```

### Component options

``` javascript
// swiperOption example:
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        // 自定义配置别名
        name: 'currentSwiper',
        // 所有配置均为可选（同Swiper配置）
        autoplay: 3000,
        direction : 'vertical',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        // if you need use plugins in the swiper, you can config in this
        debugger: true,
        // more callbacks
        onTransitionStart: function(swiper){
          console.log(swiper)
        },
        // more Swiper config ...
        // ...
      }
    }
  },
  // example (if you need to get the current swiper object)
  mounted() {
    this.getSwiper()
  },
  // find the swiper object in current component(vm) childrens
  methods: {
    getSwiper() {
      let currentSwiper = this.$children.find(children => children.options.name == 'currentSwiper').swiper
      console.log(swiper)
      return currentSwiper
    }
  }
}
```

# API
Swiper官网中的API及配置均可使用
[Swiper3 apis](http://www.swiper.com.cn/api/index.html)



# Author Blog
[Surmon](http://surmon.me)
