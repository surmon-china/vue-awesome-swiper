
import Vue from 'vue/dist/vue.js';
import Swiper from 'swiper/dist/js/swiper.js';
import VueAwesomeSwiperSSR from '../../../src/ssr.js';
import VueAwesomeSwiper, { swiper, swiperSlide, install } from '../../../src/index.js';

// console.log('--------VueAwesomeSwiper', VueAwesomeSwiper)
// console.log('--------VueAwesomeSwiperSSR', VueAwesomeSwiperSSR)

describe('vue-awesome-swiper', () => {

  Vue.use(VueAwesomeSwiper);
  Vue.use(VueAwesomeSwiperSSR);

  // 测试解构是否成功
  it('can get the object in es module', () => {
    expect(typeof install).to.deep.equal('function');
    expect(swiper.name).to.deep.equal('Swiper');
    expect(swiperSlide.name).to.deep.equal('SwiperSlide');
    expect(typeof swiperSlide.methods.update).to.deep.equal('function');
    expect(typeof swiper.methods.update).to.deep.equal('function');
    expect(typeof VueAwesomeSwiperSSR.swiper).to.deep.equal('object');
    expect(typeof VueAwesomeSwiperSSR.install).to.deep.equal('function');
  });

  // 全局安装
  describe('Global install spa:component', () => {
    it(' - should can get the swiper element', () => {
      const vm = new Vue({
        template: `<swiper>
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                  </swiper>`
      }).$mount();
      expect(vm.$el.innerText).to.deep.equal(' Slide 1 Slide 2 Slide 3 Slide 4 Slide 5 Slide 6 Slide 7 Slide 8 Slide 9 Slide 10    ');
      expect(vm.$el.className).to.deep.equal('swiper-container swiper-container-horizontal');
      expect(vm.$el.children[0].className).to.deep.equal('swiper-wrapper');
      expect(vm.$el.children[0].children.length).to.deep.equal(10);
    });
  });

  // 全局配置测试
  describe('Get instance by attr ref and set component options', () => {
    it(' - should get the swiper instance and component options', done => {
      const vm = new Vue({
        template: `<swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </swiper>`,
        data() {
          return {
            swiperOption: {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            }
          };
        },
        computed: {
          swiperComponent() {
            return this.$refs.mySwiper;
          },
          swiper() {
            return this.swiperComponent.swiper;
          }
        }
      }).$mount();
      Vue.nextTick(() => {
        expect(vm.swiper instanceof Swiper).to.equal(true);
        expect(vm.swiperComponent.options.navigation.nextEl).to.deep.equal('.swiper-button-next');
        expect(vm.swiper.el.children[1].className).to.equal('swiper-button-prev');
        expect(vm.swiper.el.children[1].outerHTML).to.equal('<div class="swiper-button-prev"></div>');
        expect(typeof vm.swiper.slideTo).to.equal('function');
        done();
      });
    });
  });

  // 广播事件
  describe('Component emit event and data binding by event', () => {
    it(' - should capture event after the swiper emit event', done => {
      const eventLogs = [];
      const vm = new Vue({
        template: `<div>
                      <swiper :options="swiperOption">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                      </swiper>
                  </div>
                  `,
        data() {
          return {
            swiperOption: {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
              on: {
                init() {
                  eventLogs.push('init');
                },
                slideChange() {
                  eventLogs.push('slideChange');
                },
              }
            }
          };
        },
        mounted() {
          eventLogs.push('mounted');
        }
      }).$mount();
      // console.log('----------', eventLogs)
      expect(eventLogs[0]).to.deep.equal('init');
      expect(eventLogs[1]).to.deep.equal('mounted');
      done();
    });
  });

  // 局部安装
  describe('Local install component', () => {
    it(' - should work', done => {
      const eventLogs = [];
      const vm = new Vue({
        template: `<div>
                      <local-swiper ref="localSwiper" :options="swiperOption">
                        <local-slide>Slide 1</local-slide>
                        <local-slide>Slide 2</local-slide>
                        <local-slide>Slide 3</local-slide>
                        <local-slide>Slide 4</local-slide>
                        <local-slide>Slide 5</local-slide>
                        <local-slide>Slide 6</local-slide>
                        <local-slide>Slide 7</local-slide>
                        <local-slide>Slide 8</local-slide>
                        <local-slide>Slide 9</local-slide>
                        <local-slide>Slide 10</local-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                      </local-swiper>
                  </div>
                  `,
        components: {
          'LocalSwiper': VueAwesomeSwiper.swiper,
          'LocalSlide': VueAwesomeSwiper.swiperSlide,
        },
        data: {
          swiperOption: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            on: {
              init() {
                eventLogs.push('init');
              }
            }
          }
        },
        computed: {
          swiperComponent() {
            return this.$refs.localSwiper;
          },
          swiper() {
            return this.swiperComponent.swiper;
          }
        },
        mounted() {
          eventLogs.push('mounted');
        }
      }).$mount();
      Vue.nextTick(() => {
        // console.log('----------', eventLogs)
        expect(eventLogs[0]).to.deep.equal('init');
        expect(eventLogs[1]).to.deep.equal('mounted');
        expect(vm.swiper instanceof Swiper).to.equal(true);
        expect(vm.swiperComponent.options.navigation.nextEl).to.deep.equal('.swiper-button-next');
        expect(vm.swiper.el.children[1].className).to.equal('swiper-button-prev');
        expect(vm.swiper.el.children[1].outerHTML).to.equal('<div class="swiper-button-prev"></div>');
        expect(typeof vm.swiper.slideTo).to.equal('function');
        done();
      });
    });
  });

  // SSR 全局安装测试
  describe('Global install ssr:directive', () => {
    it(' - should get swiper instance and capture event', done => {
      const eventLogs = [];
      const vm = new Vue({
        template: `<div>
                    <div v-swiper:mySwiper="swiperOption">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
                          <span>{{ slide }}</span>
                        </div>
                      </div>
                      <div class="swiper-pagination swiper-pagination-bullets"></div>
                    </div>
                  </div>
                  `,
        data: {
          slides: [1, 2, 3],
          swiperOption: {
            on: {
              init() {
                eventLogs.push('ssr/init');
              }
            }
          }
        },
        mounted() {
          eventLogs.push('ssr/mounted');
        }
      }).$mount();
      expect(eventLogs[0]).to.deep.equal('ssr/init');
      expect(eventLogs[1]).to.deep.equal('ssr/mounted');
      Vue.nextTick(() => {
        expect(vm.mySwiper instanceof Swiper).to.equal(true);
        expect(vm.mySwiper.el.children[0].className).to.equal('swiper-wrapper');
        expect(vm.mySwiper.el.children[1].className).to.equal('swiper-pagination swiper-pagination-bullets');
        expect(vm.mySwiper.el.children[1].outerHTML).to.equal('<div class="swiper-pagination swiper-pagination-bullets"></div>');
        expect(typeof vm.mySwiper.slideTo).to.equal('function');
        expect(vm.mySwiper.el.children[0].children.length).to.deep.equal(vm.slides.length);
        done();
      });
    });
  });

  // 多个 SSR 平铺测试 placeholder: 'ssr placeholder'
  describe('Multi editor directive instance', () => {
    it(' - should update value after any change text', done => {
      const eventLogs = [];
      const vm = new Vue({
        template: `<div>
                    <div :key="key"
                         :instance-name="'swiper-' + key"
                         v-swiper="buildOptions(key)"
                         v-for="(slides, key) in swipers">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" :key="index" v-for="(slide, index) in slides">
                          <span>{{ slide }}</span>
                        </div>
                      </div>
                      <div class="swiper-button-prev" v-if="key === 'b' || key === 'c'"></div>
                      <div class="swiper-button-next" v-if="key === 'a' || key === 'b'"></div>
                      <div class="swiper-pagination swiper-pagination-bullets" :class="'pagination-' + key"></div>
                    </div>
                  </div>
                  `,
        data: {
          swipers: {
            a: [1, 2, 3],
            b: [4, 5, 6],
            c: [7, 8, 9]
          }
        },
        methods: {
          buildOptions(key) {
            const options = {};
            if (key === 'a') {
              options.pagination = { el: '.pagination-a' };
            }
            if (key === 'b') {
              options.pagination = { el: '.pagination-b' };
              options.navigation = {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              };
            }
            if (key === 'c') {
              options.pagination = { el: '.pagination-c' };
            }
            options.on = {
              init() {
                eventLogs.push(`ssr/init/${key}`);
              }
            };
            return options;
          }
        },
        mounted() {
          eventLogs.push('ssr/mounted');
        }
      }).$mount();
      expect(eventLogs[0]).to.deep.equal('ssr/init/a');
      expect(eventLogs[1]).to.deep.equal('ssr/init/b');
      expect(eventLogs[2]).to.deep.equal('ssr/init/c');
      expect(eventLogs[3]).to.deep.equal('ssr/mounted');
      expect(vm['swiper-a'] instanceof Swiper).to.deep.equal(true);
      expect(vm['swiper-b'] instanceof Swiper).to.deep.equal(true);
      expect(vm['swiper-c'] instanceof Swiper).to.deep.equal(true);
      expect(vm['swiper-a'].el.children[1].className).to.deep.equal('swiper-button-next');
      expect(vm['swiper-a'].el.children[2].outerHTML).to.deep.equal('<div class="swiper-pagination swiper-pagination-bullets pagination-a"></div>');
      expect(vm['swiper-a'].el.children[3].className).to.deep.equal('swiper-notification');
      expect(vm['swiper-b'].el.children[1].className).to.deep.equal('swiper-button-prev');
      expect(vm['swiper-b'].el.children[2].className).to.deep.equal('swiper-button-next');
      expect(vm['swiper-b'].el.children[3].className).to.deep.equal('swiper-pagination swiper-pagination-bullets pagination-b');
      expect(vm['swiper-b'].el.children[4].className).to.deep.equal('swiper-notification');
      expect(vm['swiper-c'].el.children[1].className).to.deep.equal('swiper-button-prev');
      expect(vm['swiper-c'].el.children[2].className).to.deep.equal('swiper-pagination swiper-pagination-bullets pagination-c');
      expect(vm['swiper-c'].el.children[3].className).to.deep.equal('swiper-notification');
      expect(vm['swiper-a'].el.children.length).to.deep.equal(4);
      expect(vm['swiper-b'].el.children.length).to.deep.equal(5);
      expect(vm['swiper-c'].el.children.length).to.deep.equal(4);
      Vue.nextTick(() => {
        expect(typeof vm['swiper-c'].slideTo).to.equal('function');
        done();
      });
    });
  });
});
