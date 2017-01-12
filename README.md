[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)


# Vue-Awesome-Swiper
Swiper(slides) component for Vue.js(1.X ~ 2.X)，组件基于 [Swiper3](http://www.swiper.com.cn)构建， 支持目前Vue的所有版本，支持移动端 + PC端使用，欢迎加入前端大本营：288325802

> ### v2.3.0
> 并没有什么修复

> ### v2.2.9
> 修复低级bug

> ### v2.2.8
> 新增几个example，优化部分代码

> ### v2.2.6
> 修复Loop模式+动态数据模式，执行上翻操作时顺序/数据错误的Bug

> ### v2.2.5
> 优化生命周期的安装方法

> ### v2.2.4
> 重构Example页面，修改获取对象的方式，优化销毁方法

> ### v2.2.3
> 增加服务端渲染支持，然而我还没测试

> ### v2.2.0
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
import VueAwesomeSwiper from 'vue-awesome-swiper'


// or require in Webpack/Node.js
var Vue = require('vue')
var VueAwesomeSwiper = require('vue-awesome-swiper')


// custom swiper plugins(if you need to custom swiper plugins)
// 如果你要定制一些swiper插件的话，这段代码是个示例，否则不用care
VueAwesomeSwiper.swiperPlugins.debugger = (swiper, params) => {
  if (!params) return;
  // Need to return object with properties that names are the same as callbacks
  return {
    onInit(swiper) {
      console.log('onInit');
    },
    onClick(swiper, e) {
      console.log('onClick');
    },
    onTap(swiper, e) {
      console.log('onTap');
    },
    // to do something (callback)...
  }
}


// global use
Vue.use(VueAwesomeSwiper)


// --------------------------------------


// or use with component
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// use
export default {
  components: {
    swiper,
    swiperSlide
  }
}
```

### Use in component

``` html
<!-- 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个ref属性 -->
<swiper :options="swiperOption" ref="mySwiperA">
  <!-- 幻灯内容 -->
  <swiper-slide>I'm Slide 1</swiper-slide>
  <swiper-slide>I'm Slide 2</swiper-slide>
  <swiper-slide>I'm Slide 3</swiper-slide>
  <swiper-slide>I'm Slide 4</swiper-slide>
  <swiper-slide>I'm Slide 5</swiper-slide>
  <swiper-slide>I'm Slide 6</swiper-slide>
  <swiper-slide>I'm Slide 7</swiper-slide>
  <!-- ... -->
  <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
  <div class="swiper-pagination"  slot="pagination"></div>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
  <div class="swiper-scrollbar"   slot="scrollbar"></div>
</swiper>
```

``` javascript
// swiper options example:
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
        notNextTick: true,
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
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper){
          console.log(swiper)
        },
        // more Swiper config ...
        // ...
      }
    }
  },
  // example code (if you need to get the current swiper object, you can find the swiper object like this, the $ref object is a ref attribute corresponding to the dom redefined)
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象，同时配置中的notNextTick属性一定要设置为true
  computed: {
    swiper() {
      return this.$refs.mySwiperA.swiper
    }
  },
  mounted() {
    // you can use current swiper object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
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
    setInterval(() => {
      console.log('simulate async data')
      let swiperSlides = this.swiperSlides
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
