<p></p>
<p align="center">
  <a href="https://swiperjs.com" target="_blank">
    <img width="77px" src="/presses/swiper-logo.svg" />
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://vuejs.org" target="_blank">
    <img width="79px" src="/presses/vue-logo.png" />
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

---

### DEPRECATED ⚠️

The **vue-awesome-swiper** project has been **deprecated** and superseded by [Swiper Vue component](https://swiperjs.com/vue), a TypeScript friendly project which is a recent official release provided by [Swiper](https://swiperjs.com/). For better stability, please migrate as soon as possible.

**vue-awesome-swiper** released its last version **v5** for (bridge) transition. It's worth noting that APIs in this version are completely **NOT compatible** with that of previous version, it only [re-exports](/index.js) [`swiper/vue`](https://swiperjs.com/vue) and **only supports Vue3**, which means only functions of `swiper/vue` are available. For example, the following code is fully equivalent in `vue-awesome-swiper@5`. And if you want to check update catelog of Swiper API, please refer to [Swiper Changelog](https://swiperjs.com/changelog).

```ts
import { Swiper, SwiperSlide, /* rest swiper/vue API... */ } from 'vue-awesome-swiper'
// exactly equivalent to
import { Swiper, SwiperSlide, /* rest swiper/vue API... */ } from 'swiper/vue'
```

If you need to use older versions of vue-awesome-swiper, you can find the corresponding version number below. Feel free to fork our code and maintain your own copy.

### Legacy versions
- Swiper 5-6 [vue-awesome-swiper@4.1.1](https://github.com/surmon-china/vue-awesome-swiper/tree/v4.1.1) (Vue2)
- Swiper 4.x [vue-awesome-swiper@3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3) (Vue2)
- Swiper 3.x [vue-awesome-swiper@2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7) (Vue2)

---

### Documentation
- [Examples (Vue3)](https://github.surmon.me/vue-awesome-swiper)
- [Examples (Vue2)](https://v1.github.surmon.me/vue-awesome-swiper)
- [Swiper API](https://swiperjs.com/swiper-api)
- [Swiper Vue (3)](https://swiperjs.com/vue)
- [Swiper issues](https://github.com/nolimits4web/swiper/issues?q=is%3Aissue+is%3Aopen+label%3AVue)
- [Swiper discussions](https://github.com/nolimits4web/swiper/discussions)

### How to use

#### Install

``` bash
npm install swiper vue-awesome-swiper --save
```

```bash
yarn add swiper vue-awesome-swiper
```

#### Local component

```vue
<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script>
  import SwiperClass, { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  // more module style...

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

#### Global component

```javascript
import { createApp } from 'vue'
import SwiperClass, { /* swiper modules... */ } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
// more module style...

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
  @slide-change="..."
  @transition-start="..."
  ...
>
  <template #container-start><span>Container start</span></template>
  <template #wrapper-start><span>Wrapper start</span></template>
  <swiper-slide>Slide 1<swiper-slide>
  <swiper-slide v-slot="{ isActive }">Slide 2 {{ isActive }}<swiper-slide>
  <swiper-slide>Slide 3<swiper-slide>
  <template #wrapper-end><span>Wrapper end</span></template>
  <template #container-end><span>Container end</span></template>
</swiper>
```

### Changelog

Detailed changes for each release are documented in the [release notes](/CHANGELOG.md).

### License

Licensed under the [MIT](/LICENSE) License.

