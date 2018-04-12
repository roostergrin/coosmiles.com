<template lang="pug" src="./slider-home-smiles.pug"></template>

<script>
import Icon from 'components/icon/icon'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.slider-home-smiles__pagination',
          clickable: true,
          bulletClass: 'slider-home-smiles__bullet',
          bulletActiveClass: 'slider-home-smiles__bullet-active',
          renderBullet: function (index, bulletClass) {
            return '<div class="' + bulletClass + '"></div>'
          }
        },
        navigation: {
          nextEl: '.slider-home-smiles__next-arrow',
          prevEl: '.slider-home-smiles__prev-arrow'
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
