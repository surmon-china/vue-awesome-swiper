
import Vue from 'vue'

if (process.BROWSER_BUILD) {
	const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
	Vue.use(VueAwesomeSwiper)
}