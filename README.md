<p></p>
<p align="center">
  <a href="https://swiperjs.com" target="_blank">
    <img width="77px" src="/presses/swiper-logo.svg" />
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://vuejs.org" target="_blank">
    <img width="77px" src="/presses/vue-logo.png" />
  </a>
</p>

# vue-awesome-swiper
[![vue](https://img.shields.io/badge/MADE%20WITH-VUE-42a97a?style=for-the-badge&labelColor=35495d)](https://vuejs.org)
&nbsp;
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
&nbsp;
[![npm](https://img.shields.io/npm/v/vue-awesome-swiper?color=c7343a&label=npm&style=for-the-badge)](https://www.npmjs.com/package/vue-awesome-swiper)
&nbsp;
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/surmon-china/vue-awesome-swiper/Publish?label=publish&style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/actions?query=workflow%3APublish)
&nbsp;
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](/LICENSE)


**[Swiper](https://swiperjs.com)** component for Vue.

### ⚠️ DEPRECATED

[Swiper](https://swiperjs.com/) has released a mature and available [Vue component](https://swiperjs.com/vue) (TypeScript friendly), so the vue-awesome-swiper project will be discontinued and please gradually migrate to the official Vue plugin provided by Swiper.

vue-awesome-swiper has released the last bridge version v5.0.0, which internally only passes through all the content of [`swiper/vue`](https://swiperjs.com/vue), which means that the following code is fully equivalent in vue-awesome-swiper@5.0.0

```ts
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// exactly equivalent to
import { Swiper, SwiperSlide } from 'swiper/vue'
```

If you need to use an older version of vue-awesome-swiper, you can find the corresponding version number below. feel free to fork our code and maintain your own copy.

### Documentation
- [Examples](https://github.surmon.me/vue-awesome-swiper)
- [Swiper API](https://swiperjs.com/swiper-api)
- [Swiper Vue](https://swiperjs.com/vue)

### Previous versions
- Swiper 5-6: [v4.1.1](https://github.com/surmon-china/vue-awesome-swiper/tree/v4.1.1)
- Swiper 4: [v3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3)
- Swiper 3: [v2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7)

---

### How to use

#### Install

``` bash
npm install swiper vue-awesome-swiper --save
```

```bash
yarn add swiper vue-awesome-swiper
```

#### local component

```vue
<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script>
  import SwiperClass, { Pagination } from 'Swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  // more module styles...

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    }
  }
</script>
```

#### global component

```javascript
import { createApp } from 'vue'
import SwiperClass, { /* swiper modules... */ } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
// more module styles...

// use swiper modules
SwiperClass.use([/* swiper modules... */])

const app = createApp()
app.use(VueAwesomeSwiper)
```

### Component API

```html
<!-- All options and events of the original Swiper are supported -->
<swiper
  :modules="..."
  :allow-touch-move="false"
  :slides-per-view="1"
  :autoplay="{ delay: 3500, disableOnInteraction: false }"
  @swiper="..."
  @transition-start="..."
  @slide-change="..."
  ...
>
  <swiper-slide v-slot="{ isActive }">Slide 1 {{ isActive }}<swiper-slide>
  <swiper-slide>Slide 2<swiper-slide>
  <swiper-slide>Slide 3<swiper-slide>
</swiper>
```

### Changelog

Detailed changes for each release are documented in the [release notes](/CHANGELOG.md).

### License

[MIT](/LICENSE)
