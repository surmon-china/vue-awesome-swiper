
import SwiperClass from 'swiper'
import VueAwesomeSwiper, { Swiper as SwiperComponent, SwiperSlide as SlideComponent, install, directive } from '../src'
import { CoreNames, ComponentPropNames, DEFAULT_CLASSES } from '../src/constants'
import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'

const Swiper = SwiperComponent as any
const SwiperSlide = SlideComponent as any
const swiperSlideSelecter = `.${DEFAULT_CLASSES.slideClass}`

describe('vue-awesome-swiper', () => {

  const testWithSwiper = (swiperWrapper: Wrapper<Vue>) => {
    const vm = swiperWrapper.vm as any
    expect(swiperWrapper.name()).toBe(CoreNames.SwiperComponent)
    expect(swiperWrapper.classes()).toContain(DEFAULT_CLASSES.containerClass)
    expect(swiperWrapper.isVisible()).toBeTruthy()
    expect(swiperWrapper.isVueInstance()).toBeTruthy()
    expect(swiperWrapper.is('div')).toBeTruthy()
    expect(swiperWrapper.contains('div')).toBeTruthy()
    expect(vm.swiperInstance).toBeInstanceOf(SwiperClass)
    expect(typeof vm.updateSwiper).toBe('function')
    expect(Object.keys(swiperWrapper.props())).toContain(ComponentPropNames.AutoUpdate)
    expect(Object.keys(swiperWrapper.props())).toContain(ComponentPropNames.CleanupStylesOnDestroy)
    expect(swiperWrapper.props()[ComponentPropNames.AutoUpdate]).toBeTruthy()
  }

  // Deconstruction
  it('Can get the object with es module', () => {
    expect(typeof install).toBe('function')
    expect(Swiper.options.name).toBe(CoreNames.SwiperComponent)
    expect(SwiperSlide.options.name).toBe(CoreNames.SwiperSlideComponent)
    expect(typeof Swiper).toBe('function')
    expect(typeof SwiperSlide).toBe('function')
    expect(typeof directive).toBe('object')
  })

  // Swiper instance
  it('Can mount Swiper compnent', () => {
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
    expect(wrapper.findAll(swiperSlideSelecter).length).toBe(slots.length)
  })

  // Component
  describe('Component', () => {

    // Global options
    it('should can mount the swiper with global component/options', () => {
      const localVue = createLocalVue()
      const forgerGlobalOptions = {
        spaceBetween: 10
      }
      // Forger global use
      localVue.use(VueAwesomeSwiper, forgerGlobalOptions)

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
      const swiperInstance = vm.$refs.swiper?.[CoreNames.SwiperInstance]
      expect(wrapper.findAll(swiperSlideSelecter).length).toBe(3)
      expect(swiperInstance).toBeInstanceOf(SwiperClass)
      expect(swiperInstance?.params?.spaceBetween).toBe(forgerGlobalOptions.spaceBetween)
    })

    // Local options overwrite
    it('should can mount the swiper with local component/options', () => {
      const localOptionsSpaceBetween = 8
      const wrapper = mount({
        components: {
          LocalSwiper: Swiper,
          LocalSwiperSlide: SwiperSlide
        },
        template: `
          <local-swiper ref="swiper" :options="{ spaceBetween: ${localOptionsSpaceBetween} }">
            <local-swiper-slide>Slide 1</local-swiper-slide>
            <local-swiper-slide>Slide 2</local-swiper-slide>
          </local-swiper>
        `
      })
      const swiperInstance = (wrapper.vm.$refs.swiper as any)?.[CoreNames.SwiperInstance]
      expect(wrapper.findAll(swiperSlideSelecter).length).toBe(2)
      expect(swiperInstance).toBeInstanceOf(SwiperClass)
      expect(swiperInstance?.params?.spaceBetween).toBe(localOptionsSpaceBetween)
    })
  })

  // Directive
  describe('Directive', () => {

    // Global directive
    it('should get swiper instance with global directive/options', () => {
      const readyLog = 'readied'
      const logs: string[] = []
      const localVue = createLocalVue()
      const forgerGlobalOptions = {
        spaceBetween: 14
      }
      // Forger global use
      localVue.use(VueAwesomeSwiper, forgerGlobalOptions)

      const wrapper = mount({
        template: `
          <div v-swiper @ready="handleSwiperDirectiveReady">
            <div class="swiper-wrapper">
              <div class="swiper-slide">ABC TEST1</div>
              <div class="swiper-slide">ABC TEST2</div>
            </div>
          </div>
        `,
        methods: {
          handleSwiperDirectiveReady(swiper: SwiperClass) {
            expect(swiper).toBeInstanceOf(SwiperClass)
            expect(swiper.params.init).toBeTruthy()
            logs.push(readyLog)
          }
        }
      }, {
        localVue
      })
      const vm = wrapper.vm as any
      const swiperInstance = vm?.[CoreNames.SwiperInstance]
      expect(wrapper.classes()).toContain(DEFAULT_CLASSES.containerClass)
      expect(swiperInstance).toBeInstanceOf(SwiperClass)
      expect(swiperInstance?.params?.spaceBetween).toBe(forgerGlobalOptions.spaceBetween)
      expect(logs).toContain(readyLog)
    })

    // Local directive
    it('should get swiper instance with local multiple directive/options', () => {
      const swipers: SwiperClass[] = []
      const wrapper = mount({
        directives: {
          localSwiper: directive
        },
        template: `
          <div>
            <div
              :key="key"
              :instance-name="'swiper' + key"
              v-local-swiper
              v-for="key in 4"
              @ready="handleSwiperDirectiveReady($event, key)"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">swiper-{{ key }} TEST1</div>
                <div class="swiper-slide">swiper-{{ key }} TEST2</div>
              </div>
            </div>
          </div>
        `,
        methods: {
          handleSwiperDirectiveReady(swiper: SwiperClass) {
            expect(swiper).toBeInstanceOf(SwiperClass)
            expect(swiper.params.init).toBeTruthy()
            swipers.push(swiper)
          }
        }
      })
      const vm = wrapper.vm as any
      const swiperInstances = [
        vm?.swiper1,
        vm?.swiper2,
        vm?.swiper3,
        vm?.swiper4,
      ]
      swiperInstances.forEach(swiper => {
        expect(swiper).toBeInstanceOf(SwiperClass)
      })
      expect(swipers.length).toBe(4)
      expect(swipers).toContain(swiperInstances[1])
      expect(swipers).toContain(swiperInstances[3])
    })
  })
})
