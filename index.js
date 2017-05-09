/**
 * Vue-awesome-swiper
 * @author Surmon.me
 * @changes by nigeltiany
 */

var Swiper = require('swiper');

import CarouselItem from './carousel-item.vue';
import CarouselView from './carousel-view.vue';


if (typeof window !== 'undefined') {
	window.Swiper = Swiper
}

const install = (Vue) => {
    Vue.component('carousel-view', CarouselView)
    Vue.component('carousel-item', CarouselItem)
}

export default{
    install
}

export {
    CarouselView,
    CarouselItem,
}

