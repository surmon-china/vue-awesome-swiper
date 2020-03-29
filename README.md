<p align="center">
  <a href="https://swiperjs.com" target="_blank">
    <img width="77px" src="https://github.surmon.me/images/common/swiper-logo.svg" />
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://vuejs.org" target="_blank">
    <img width="77px" src="https://github.surmon.me/images/common/vue-logo.png" />
  </a>
</p>

# vue-awesome-swiper
![vue](https://img.shields.io/badge/MADE%20WITH-VUE-42a97a?style=for-the-badge&labelColor=35495d)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![npm](https://img.shields.io/npm/v/vue-awesome-swiper?color=c7343a&label=npm&style=for-the-badge)](https://www.npmjs.com/package/vue-awesome-swiper)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/surmon-china/vue-awesome-swiper/Publish?label=publish&style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/actions?query=workflow%3APublish)
[![GitHub issues](https://img.shields.io/github/issues-raw/surmon-china/vue-awesome-swiper.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-awesome-swiper)

**[Swiper](https://swiperjs.com)** component for Vue.

Old versions:
- Swiper 4: [v3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3)
- Swiper 3: [v2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7) 


### Example
- [Online examples](https://github.surmon.me/vue-awesome-swiper)
- [CDN example](https://jsfiddle.net/surmon/kLtj6h3p/)
- [SSR example code](https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-awesome-swiper/nuxt)
- [TypeScript & composition-api example code](https://github.com/surmon-china/surmon-china.github.io/blob/source/projects/vue-awesome-swiper/examples/00-typescript-composition-api.vue)

---

### Install

``` bash
npm install swiper vue-awesome-swiper --save

# or
yarn add swiper vue-awesome-swiper
```

### Global Registration

``` javascript
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```

### Local Registration

```javascript
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
```

### CDN

``` html
<link rel="stylesheet" href="path/to/swiper.css"/>
<script type="text/javascript" src="path/to/swiper.js"></script>
<script type="text/javascript" src="path/to/vue.min.js"></script>
<script type="text/javascript" src="path/to/dist/vue-awesome-swiper.js"></script>
<script type="text/javascript">
  Vue.use(window.VueAwesomeSwiper)
</script>
```

---

### Difference with usage

**Directive and the only difference in the use of the Component:**
- `component` find Swiper instance by [`ref attribute`](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements).
- `directive` find Swiper instance by [`directive arg`](https://vuejs.org/v2/guide/custom-directive.html#Dynamic-Directive-Arguments).

Other configurations, events are the same. 

The effect of the two ways and the difference in the applicable environment [is here](https://github.com/surmon-china/surmon-china.github.io/blob/source/projects/vue-awesome-swiper/nuxt/).


### Component

```html
<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
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

```html
<template>
  <div v-swiper:mySwiper="swiperOption">
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
          // ...
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>
```

---

### Swiper component API

```html
<!-- All events/props support camelCase or kebab-case. -->
<swiper
  :options="swiperOptionsObject"
  :auto-update="true"
  :auto-destroy="true"
  :delete-instance-on-destroy="true"
  :cleanup-styles-on-destroy="true"
  @ready="handleSwiperReadied"
  @click-slide="handleClickSlide"
/>

<!-- vue-awesome-swiper converts all Swiper events into component/directive events, e.g.: -->
<swiper
  @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
  @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
  @slideChangeTransitionEnd="..."
  @transitionStart="..."
  ...
/>
```
```ts
interface IProps {
  // Auto update swiper when vue component `updated`
  autoUpdate?: boolean // default: true
  // Auto destroy swiper when vue component 'beforeDestroy'
  autoDestroy?: boolean // default: true

  // swiper.destroy's params
  // swiper.destroy(deleteInstanceOnDestroy, cleanupStylesOnDestroy)
  deleteInstanceOnDestroy?: boolean // default: true
  cleanupStylesOnDestroy?: boolean // default: true
}

// `@ready` event will emit when the Swiper instance mounted
function handleSwiperReadied(swiper: Swiper) {
  console.log('Swiper was munted!', swiper)
}

// `@click-slide` event has special treatment for Swiper's loop mode, which is still available in loop mode
function handleClickSlide(index: number, reallyIndex: number | null) {
  console.log('Click slide!', index, reallyIndex)
}
```

### Swiper directive API

Based on the exact same as the component API.

In the `directive` mode, the Swiper instance will be mounted in the parent's component context use the default name`$swiper`. In order to implement multiple swipers in a context, the `directive` has an additional name called `instanceName` API, through this API, you can easily control the name of each swiper mount context.

```html
<div v-swiper="swiperOptionsObject" />
<div v-swiper:secondSwiper="swiperOptionsObject" />
<div v-swiper:[dynamicSwiperName]="swiperOptionsObject" />
<div v-swiper="swiperOptionsObject" instance-name="fourthSwiper" />
```
```ts
export dafault {
  data() {
    return {
      dynamicSwiperName: 'thirdSwiper'
    }
  },
  mounted() {
    console.log('Swiper instances:', this.$swiper, this.secondSwiper, this.thirdSwiper, this.fourthSwiper)
  }
}
```

### Swiper API
Swiper's API and configuration can be used.

- [EN Swiper events](https://swiperjs.com/api/#events)
- [EN Swiper documentation](https://swiperjs.com/api/)
- [ZH Swiper documentation](https://www.swiper.com.cn/api/index.html)

---

### [Custom Build with Swiper](https://swiperjs.com/api/#custom-build)

```ts
import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

// -------------------------------------------------

// Or local component
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
```

---

### Custom Swiper plugin

```javascript
import SwiperClass from 'swiper'

SwiperClass.use({
  name: 'pluginName',
  params: {
    pluginSwitch: false,
  },
  on: {
    init() {
      if (!this.params.pluginSwitch) return
      console.log('init')
    },
    // ...
  }
})

// Your Swiper or App bussiness component...
```
---

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/surmon-china/vue-awesome-swiper/blob/master/CHANGELOG.md).

### License

[MIT](https://github.com/surmon-china/vue-awesome-swiper/blob/master/LICENSE)
