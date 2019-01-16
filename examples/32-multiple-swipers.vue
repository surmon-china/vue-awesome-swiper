<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Multiple Swipers</span>
        <span>（</span>
        <span>多个实例</span>
        <span>）</span>
      </div>
      <md-button
        class="md-icon-button"
        target="_blank"
        href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/32-multiple-swipers.vue"
      >
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper
        :options="swiperOption"
        v-for="i in 2"
        :key="i"
        style="margin-bottom: 1rem;"
      >
        <swiper-slide
          v-for="j in 9"
          :key="j"
        >
          Slide {{ j + 1 }}
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        />
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>
