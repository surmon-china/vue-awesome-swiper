[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)


# Vue-Awesome-Swiper
Swiper(slides) component for Vue.js(1.X ~ 2.X)，本组件基于 [Swiper3](http://www.swiper.com.cn)构建， 支持Vue全版本，支持移动端 + PC端使用，欢迎加入前端大本营：288325802

> ### V2.2.0
> 新增了异步数据的支持


# Example

[Demo Page](https://surmon-china.github.io/vue-awesome-swiper)


# Use Setup


### Install vue-awesome-swiper

``` bash
npm install vue-awesome-swiper --save
```

### Vue use

``` javascript
// import in ES6
import Vue from 'vue'
// ...
import AwesomeSwiper from 'vue-awesome-swiper'


// or require in Webpack/Node.js
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
// 如果你要定制一些swiper插件的话，这段代码是个示例，否则不用care
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
  <swiper-slide>I'm Slide 2</swiper-slide>
  <swiper-slide>I'm Slide 3</swiper-slide>
  <swiper-slide>I'm Slide 4</swiper-slide>
  <swiper-slide>I'm Slide 5</swiper-slide>
  <swiper-slide>I'm Slide 6</swiper-slide>
  <swiper-slide>I'm Slide 7</swiper-slide>
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
        // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
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
        // if you need use plugins in the swiper, you can config in here like this
        debugger: true,
        // swiper callbacks
        onTransitionStart: function(swiper){
          console.log(swiper)
        },
        // more Swiper config ...
        // ...
      }
    }
  },
  // example code (if you need to get the current swiper object, find the swiper object in current component(vm) childrens)
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象
  computed: {
    swiper() {
      return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
    }
  },
  mounted() {
    // you can use current swiper object to do something(swiper methods)
    console.log('this is current swiper object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
```

### Async data example（异步数据调用的简单例子）

``` html
<swiper :options="swiperOption">
  <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
```

``` javascript
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize :true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  mounted() {
    let _this = this
    setInterval(function() {
      console.log('simulate async data')
      let swiperSlides = _this.swiperSlides
      if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
    }, 3000)
  }
}
```

# Mobile Example Code
[mobile-fullpage-example-code](https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/mobile-fullpage-example.vue)


# API
Swiper官网中的API及配置均可使用
[Swiper3 apis](http://www.swiper.com.cn/api/index.html)



# Author Blog
[Surmon](http://surmon.me)
