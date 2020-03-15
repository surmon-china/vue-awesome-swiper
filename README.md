[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![Build Status](https://travis-ci.org/surmon-china/vue-awesome-swiper.svg?branch=master)](https://travis-ci.org/surmon-china/vue-awesome-swiper)
[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-awesome-swiper.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/surmon-china/vue-awesome-swiper)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-awesome-swiper/)
[![NPM](https://nodei.co/npm-dl/vue-awesome-swiper.png?months=9&height=3)](https://nodei.co/npm/vue-awesome-swiper/)


# vue-awesome-swiper
**[Swiper](https://swiperjs.com)** component for Vue (SSR).

基于 **[Swiper](https://www.swiper.com.cn)**、适用于 Vue 的轮播组件，支持服务端渲染和单页应用。

If you need roll back to old Swiper, use target version:
- Swiper4: [v3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3)
- Swiper3: [v2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7) 


### Example
- [Demo Page](https://github.surmon.me/vue-awesome-swiper)
- TODO: [CDN Example](https://jsfiddle.net/bL983fjt/)
- [Nuxt.js example code](https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-awesome-swiper/nuxt)


#### Install

**npm**

``` bash
npm install swiper vue-awesome-swiper --save
```

**yarn**
``` bash
yarn add swiper vue-awesome-swiper
```

**CDN**

``` html
<link rel="stylesheet" href="path/to/swiper.css"/>
<script type="text/javascript" src="path/to/swiper.js"></script>
<script type="text/javascript" src="path/to/vue.min.js"></script>
<script type="text/javascript" src="path/to/dist/vue-awesome-swiper.js"></script>
<script type="text/javascript">
  Vue.use(window.VueAwesomeSwiper)
</script>
```

### Mount

**Mount with global**

``` javascript
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

// you can custom the global component options and it's default options is global components
Vue.use(VueAwesomeSwiper, /* { default global options } */)
```

**Mount with component**

```javascript
// import styles
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
```

### Difference with use

**SSR and the only difference in the use of the SPA:**
- SPA worked by the `component`, find swiper instance by `ref attribute`.
- SSR worked by the `directive`, find swiper instance by `directive arg`.
- Other configurations, events are the same.
- The effect difference between the two way [is here](https://github.com/surmon-china/surmon-china.github.io/blob/source/projects/vue-awesome-swiper/nuxt/README.md).

### Component

```vue
<template>
  <swiper
    ref="mySwiper"
    :options="swiperOption"
    @someSwiperEvent="callback"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper options/callbacks...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
```


### Directive

```vue
<template>
  <div v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // some swiper options...
        }
      }
    },
    mounted() {
      console.log(
        'This is current Swiper instance object',
        this.mySwiper,
        'It will slideTo banners 3'
      )
      this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>
```


### Custom Swiper plugin

```javascript
import Swiper from 'swiper'

Swiper.use({
  name: 'pluginName',
  params: {
    pluginSwitch: false,
  },
  on: {
    init() {
      if (!this.params.pluginSwitch) return
      console.log('init')
    },
    // Swiper callbacks...
  }
})
```

### Swiper Component API

`
TODO
`

### Swiper API
Swiper's API and configuration can be used.
- [EN Swiper documents](https://swiperjs.com/api/)
- [CN Swiper documents](https://www.swiper.com.cn/api/index.html)
