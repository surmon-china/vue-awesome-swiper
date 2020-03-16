# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1-rc.0](https://github.com/surmon-china/vue-awesome-swiper/compare/v3.1.3...v4.0.1-rc.0) (2020-03-16)


## CHANGELOG

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### v4.0.0.rc-0 (2020-03-16)

**Breaking change**
- Remove vue1 support
- Upgrade to Swiper5
- Move Swiper dependencie to `peerDependencies`
- Merge SSR (Directive) file to the lib core
- Update the component name
  - `swiper` to `Swiper`
  - `swiperSlide` to `SwiperSlide`
- Does not merge options object

**Features**
- Add `@click-slide` event
- Add `directive`
- Add prop ``

**Bug Fixes**
- 

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
