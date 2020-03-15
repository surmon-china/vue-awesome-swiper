
import Vue from 'vue'
import SwiperClass from 'swiper'
import VueAwesomeSwiper, { Swiper as SwiperComponent, SwiperSlide as SlideComponent, install, directive } from '../../../src'
import { SWIPER_COMPONENT_NAME, SWIPER_SLIDE_COMPONENT_NAME, ComponentPropNames, DEFAULT_CLASSES, SWIPER_INSTANCE_NAME } from '../../../src/constants'
import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'

const Swiper = SwiperComponent as any
const SwiperSlide = SlideComponent as any

describe('vue-awesome-swiper', () => {

  const testWithSwiper = (swiperWrapper: Wrapper<Vue>) => {
    const vm = swiperWrapper.vm as any
    expect(swiperWrapper.name()).toBe(SWIPER_COMPONENT_NAME)
    expect(swiperWrapper.classes()).toContain(DEFAULT_CLASSES.containerClass)
    expect(swiperWrapper.isVisible()).toBeTruthy()
    expect(swiperWrapper.isVueInstance()).toBeTruthy()
    expect(swiperWrapper.is('div')).toBeTruthy()
    expect(swiperWrapper.contains('div')).toBeTruthy()
    expect(vm.swiperInstance instanceof SwiperClass).toBeTruthy()
    expect(typeof vm.update).toBe('function')
    expect(Object.keys(swiperWrapper.props())).toContain(ComponentPropNames.AutoUpdate)
    expect(Object.keys(swiperWrapper.props())).toContain(ComponentPropNames.CleanupStylesOnDestroy)
    expect(swiperWrapper.props()[ComponentPropNames.AutoUpdate]).toBeTruthy()
  }

  // Deconstruction
  it('Can get the object with es module', () => {
    expect(typeof install).toBe('function')
    expect(Swiper.options.name).toBe(SWIPER_COMPONENT_NAME)
    expect(SwiperSlide.options.name).toBe(SWIPER_SLIDE_COMPONENT_NAME)
    expect(typeof Swiper).toBe('function')
    expect(typeof SwiperSlide).toBe('function')
    expect(typeof directive).toBe('object')
  })

  // Swiper instance
  it('Can mount swiper compnent', () => {
    const logs: string[] = []
    const initLog = 'inited'
    const wrapper = mount(Swiper, {
      listeners: {
        ready() {
          logs.push(initLog)
        }
      }
    })
    testWithSwiper(wrapper)
    expect(logs[0]).toBe(initLog)
  })

  // Complete operation
  it('Can complete operation with SwiperSlide', () => {
    const slots = [
      SwiperSlide,
      SwiperSlide,
      SwiperSlide
    ]
    const wrapper = shallowMount(Swiper, {
      slots: { default: slots }
    })

    testWithSwiper(wrapper)
    expect(wrapper.findAll('.swiper-slide').length).toBe(slots.length)
  })

  // Global use & options overwrite
  describe('Component', () => {

    // Forger global use
    const forgerGlobalOptions = {
      spaceBetween: 10
    }
    const localVue = createLocalVue()
    localVue.use(VueAwesomeSwiper, forgerGlobalOptions)

    it('should can mount the swiper with global options', () => {
      const wrapper = mount({
        template: `
          <swiper ref="swiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
          </swiper>
        `
      }, {
        localVue
      })
      const vm = wrapper.vm as any
      const swiperInstance = vm.$refs.swiper?.[SWIPER_INSTANCE_NAME]
      expect(wrapper.findAll('.swiper-slide').length).toBe(3)
      expect(swiperInstance instanceof SwiperClass).toBeTruthy()
      expect(swiperInstance?.params?.spaceBetween).toBe(forgerGlobalOptions.spaceBetween)
    })

    it('should can mount the swiper with local options', () => {
      const localOptionsSpaceBetween = 8
      const wrapper = mount({
        template: `
          <swiper ref="swiper" :options="{ spaceBetween: ${localOptionsSpaceBetween} }">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
          </swiper>
        `
      }, {
        localVue
      })
      const vm = wrapper.vm as any
      const swiperInstance = vm.$refs.swiper?.[SWIPER_INSTANCE_NAME]
      expect(wrapper.findAll(`.${DEFAULT_CLASSES.slideClass}`).length).toBe(2)
      expect(swiperInstance instanceof SwiperClass).toBeTruthy()
      expect(swiperInstance?.params?.spaceBetween).toBe(localOptionsSpaceBetween)
    })
  })

  // // SSR 全局安装测试
  // describe('Global install ssr:directive', () => {
  //   it('should get swiper instance and capture event', done => {
  //     const eventLogs = []
  //     const vm = new Vue({
  //       template: `<div>
  //                   <div v-swiper:mySwiper="swiperOption">
  //                     <div class="swiper-wrapper">
  //                       <div class="swiper-slide" v-for="slide in slides">
  //                         <span>{{ slide }}</span>
  //                       </div>
  //                     </div>
  //                     <div class="swiper-pagination swiper-pagination-bullets"></div>
  //                   </div>
  //                 </div>
  //                 `,
  //       data: {
  //         slides: [1, 2, 3],
  //         swiperOption: {
  //           on: {
  //             init() {
  //               eventLogs.push('ssr/init')
  //             }
  //           }
  //         }
  //       },
  //       mounted() {
  //         eventLogs.push('ssr/mounted')
  //       }
  //     }).$mount()
  //     expect(eventLogs[0]).toBe('ssr/init')
  //     expect(eventLogs[1]).toBe('ssr/mounted')
  //     Vue.nextTick(() => {
  //       expect(vm.mySwiper instanceof Swiper).to.equal(true)
  //       expect(vm.mySwiper.el.children[0].className).to.equal('swiper-wrapper')
  //       expect(vm.mySwiper.el.children[1].className).to.equal('swiper-pagination swiper-pagination-bullets')
  //       expect(vm.mySwiper.el.children[1].outerHTML).to.equal('<div class="swiper-pagination swiper-pagination-bullets"></div>')
  //       expect(typeof vm.mySwiper.slideTo).to.equal('function')
  //       expect(vm.mySwiper.el.children[0].children.length).toBe(vm.slides.length)
  //       done()
  //     })
  //   })
  // })

  // // 多个 SSR 平铺测试 placeholder: 'ssr placeholder'
  // describe('Multi edirot directive instance', () => {
  //   it('should update value after any change text', done => {
  //     const eventLogs = []
  //     const vm = new Vue({
  //       template: `<div>
  //                   <div :key="key"
  //                        :instance-name="'swiper-' + key"
  //                        v-swiper="buildOptions(key)"
  //                        v-for="(slides, key) in swipers">
  //                     <div class="swiper-wrapper">
  //                       <div class="swiper-slide" :key="key" v-for="slide in slides">
  //                         <span>{{ slide }}</span>
  //                       </div>
  //                     </div>
  //                     <div class="swiper-button-prev" v-if="key === 'b'"></div>
  //                     <div class="swiper-button-next" v-if="key === 'b'"></div>
  //                     <div class="swiper-pagination swiper-pagination-bullets" :class="'pagi-' + key"></div>
  //                   </div>
  //                 </div>
  //                 `,
  //       data: {
  //         swipers: {
  //           a: [1, 2, 3],
  //           b: [4, 5, 6],
  //           c: [7, 8, 9]
  //         }
  //       },
  //       methods: {
  //         buildOptions(key) {
  //           const options = {}
  //           if (key === 'a') {
  //             options.pagination = { el: '.pagi-a' }
  //           }
  //           if (key === 'b') {
  //             options.pagination = { el: '.pagi-b' }
  //             options.navigatio = {
  //               nextEl: '.swiper-button-next',
  //               prevEl: '.swiper-button-prev'
  //             }
  //           }
  //           if (key === 'c') {
  //             options.pagination = { el: '.pagi-c' }
  //           }
  //           options.on = {
  //             init() {
  //               eventLogs.push(`ssr/init/${key}`)
  //             }
  //           }
  //           return options
  //         }
  //       },
  //       mounted() {
  //         eventLogs.push('ssr/mounted')
  //       }
  //     }).$mount()
  //     expect(eventLogs[0]).toBe('ssr/init/a')
  //     expect(eventLogs[1]).toBe('ssr/init/b')
  //     expect(eventLogs[2]).toBe('ssr/init/c')
  //     expect(eventLogs[3]).toBe('ssr/mounted')
  //     expect(vm['swiper-a'] instanceof Swiper).toBe(true)
  //     expect(vm['swiper-b'] instanceof Swiper).toBe(true)
  //     expect(vm['swiper-c'] instanceof Swiper).toBe(true)
  //     expect(vm['swiper-a'].el.children[1].outerHTML).toBe('<div class="swiper-pagination swiper-pagination-bullets pagi-a"></div>')
  //     expect(vm['swiper-b'].el.children[1].className).toBe('swiper-button-prev')
  //     expect(vm['swiper-b'].el.children[2].className).toBe('swiper-button-next')
  //     expect(vm['swiper-b'].el.children[3].className).toBe('swiper-pagination swiper-pagination-bullets pagi-b')
  //     expect(vm['swiper-c'].el.children.length).toBe(2)
  //     Vue.nextTick(() => {
  //       expect(typeof vm['swiper-c'].slideTo).to.equal('function')
  //       done()
  //     })
  //   })
  // })
})
