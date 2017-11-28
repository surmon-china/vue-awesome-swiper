[![](https://badge.juejin.im/entry/57f6a5e7d2030900689c1e9c/likes.svg?style=flat-square)](https://juejin.im/entry/57f6a5e7d2030900689c1e9c/detail)
[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/surmon-china/vue-awesome-swiper)
[![Build Status](https://travis-ci.org/surmon-china/vue-awesome-swiper.svg?branch=master)](https://travis-ci.org/surmon-china/vue-awesome-swiper)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)
[![NPM](https://nodei.co/npm-dl/vue-awesome-swiper.png?months=9&height=3)](https://nodei.co/npm/vue-awesome-swiper/)


# Vue-Awesome-Swiper
Swiper([Swiper4](http://www.swiper.com.cn)) component for Vue, support pc and mobile, SPA and SSR.

基于 Swiper4、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。

如果需要回退到 Swiper3 请使用 [v2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7)。

# Example

[Demo Page](https://surmon-china.github.io/vue-awesome-swiper)

# Use Setup for Browser(UMD)

### Require script and style

``` html
<link rel="stylesheet" href=".../.../swiper.css"/>
<script type="text/javascript" src=".../vue.min.js"></script>
<script type="text/javascript" src=".../dist/vue-awesome-swiper.min.js"></script>
```

### Use

``` javascript
Vue.use(window.VueAwesomeSwiper)

// vue app code...
```

# Use Setup for Webpack

### Install vue-awesome-swiper

``` bash
npm install vue-awesome-swiper --save
```

### Vue mount

``` javascript
// starting with version 2.6.0, you need to manually introduce swiper's css
require('swiper/dist/css/swiper.css')

// import
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'


// or require
var Vue = require('vue')
var VueAwesomeSwiper = require('vue-awesome-swiper')


// mount with global
Vue.use(VueAwesomeSwiper)


// If used in Nuxt.js/SSR, you should keep it only in browser build environment
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}


// mount with component(can't work in Nuxt.js/SSR)
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}
```


### Use the difference（使用方法的区别）

**SSR and the only difference in the use of the SPA:**
- SPA worked by the `component`, find swiper instance by `ref attribute`.
- SSR worked by the `directive`, find swiper instance by `directive arg`.
- Other configurations, events are the same.


### Use in SSR

``` vue
<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    mounted() {
      console.log('app init')
      setTimeout(() => {
        this.banners.push('/5.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'It will slideTo banners 3')
      this.mySwiper.slideTo(3)
    }
  }
</script>
```


### Use in SPA

``` vue
<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
```

### Async data example

``` vue
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
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
      setInterval(() => {
        console.log('simulate async data')
        let swiperSlides = this.swiperSlides
        if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      }, 3000)
    }
  }
</script>
```

# Mobile Example Code
[mobile-fullpage-example-code](https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/41-mobile-fullpage-example.vue)

# Nuxt.js/SSR Example Code
[nuxt.js/ssr-example-code](https://github.com/surmon-china/vue-awesome-swiper/blob/master/nuxt-ssr-example)

# Issues
针对中文用户：如果你有未解决的问题请一定要在已关闭的 issues 里进行搜索，绝大多数问题能够得到答案；提问题之前一定要自行测试问题节点，测试出问题所在，若为自身业务问题或基础知识问题或 swiper 本身的问题，问题会被直接关闭。

# API
Swiper's API and configuration can be used.（Swiper官网中的API及配置均可使用）
- [cn Swiper3 apis](http://www.swiper.com.cn/api/index.html)
- [en Swiper3 apis](http://idangero.us/swiper/api/#.WMlhYxJ97mI)

# Author Blog
[Surmon](https://surmon.me)
