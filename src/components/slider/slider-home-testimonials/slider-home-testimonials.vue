<template lang="pug" src="./slider-home-testimonials.pug"></template>

<script>
import Icon from 'components/icon/icon'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.slider-home-testimonials__next-arrow',
          prevEl: '.slider-home-testimonials__prev-arrow'
        }
      }
    }
  },
  props: ['props'],
  components: {
    Icon,
    swiper,
    swiperSlide
  }
}
</script>
