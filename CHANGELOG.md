
# Changelog
All notable changes to this project will be documented in this file.

## [4.0.0-rc.1](https://github.com/surmon-china/vue-awesome-swiper/compare/v4.0.0-rc.0...v4.0.0-rc.1) (2020-03-20)

**Fixed**
- `@clicks-lide` get event path from `event.composedPath()` ~~`event.path`~~

**Update**
- Rename `update` to `updateSwiper`
- Rename `destroy` to `destroySwiper`
- Rename `autoReLoop` to `autoReLoopSwiper`

## [4.0.0-rc.0](https://github.com/surmon-china/vue-awesome-swiper/compare/v3.1.3...v4.0.0-rc.0) (2020-03-19)

**Breaking change**
- Remove vue1 support
- Remove bower support
- Upgrade to Swiper5
- Move Swiper dependencie to `peerDependencies`
- Replace Swiper instance name to `$swiper`
- Merge SSR (Directive) file to the lib core
- Update the component name
  - `swiper` to `Swiper`
  - `swiperSlide` to `SwiperSlide`
- Does not merge options object

**Removed**
- Move examples to [github.surmon.me](https://github.surmon.me/vue-awesome-swiper/)

**Features**
- Add `@click-slide` event (For `loop` mode)
- Add `directive`
- Add prop `autoUpdate`
- Add prop `autoDestroy`
- Add prop `deleteInstanceOnDestroy`
- Add prop `cleanupStylesOnDestroy` [PR #388](https://github.com/surmon-china/vue-awesome-swiper/pull/388)

**Fixed**

Loop mode:
- [#593](https://github.com/surmon-china/vue-awesome-swiper/issues/593)
- [#544](https://github.com/surmon-china/vue-awesome-swiper/issues/544)
- [PR #545](https://github.com/surmon-china/vue-awesome-swiper/pull/545)

Destory:
- [PR #593](https://github.com/surmon-china/vue-awesome-swiper/pull/550)
- [PR #341](https://github.com/surmon-china/vue-awesome-swiper/pull/341)
- [PR #388](https://github.com/surmon-china/vue-awesome-swiper/pull/388)
- [#340](https://github.com/surmon-china/vue-awesome-swiper/issues/340)

Event:
- [PR #377](https://github.com/surmon-china/vue-awesome-swiper/pull/377)

### v3.1.3
- fixed bug with swiper inside transition. #276

### v3.1.2
- update webpack config and rebuild.

### v3.1.1
- fix emit event in browser

### v3.1.0
- fix loop bug
- [bind swiper events to vuejs events](https://github.com/surmon-china/vue-awesome-swiper/pull/238)

### v3.0.7
- remove reloop function
- update ssr example

### v3.0.5
- update swiper version to v4.0.7

### v3.0.4
- fix object assign in spa

### v3.0.3
- fix reLoop method [#205](https://github.com/surmon-china/vue-awesome-swiper/issues/205)

### v3.0.2
- fix ssr build bug

### v3.0.1
- fix the es module export issue

### v3.0.0

#### use
- add global default options
- update the options assign logic
- Update to [Swiper4](http://www.swiper.com.cn)

#### project
- add brower support
- add test scripts
- update babel and webpack configs
