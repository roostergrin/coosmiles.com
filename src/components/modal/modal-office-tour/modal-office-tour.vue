<template lang="pug" src="./modal-office-tour.pug"></template>

<script>
import Icon from 'components/icon/icon'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: ['props', 'index'],
  data () {
    return {
      swiperOptionTour: {
        init: true,
        slidesPerView: 1,
        loop: true,
        initialSlide: this.index,
        pagination: {
          el: '.modal-office-tour__pagination',
          clickable: true,
          bulletClass: 'modal-office-tour__bullet',
          bulletActiveClass: 'modal-office-tour__bullet-active',
          renderBullet: function (index, bulletClass) {
            return '<div class="' + bulletClass + '"></div>'
          }
        },
        navigation: {
          nextEl: '.modal-office-tour__next-arrow',
          prevEl: '.modal-office-tour__prev-arrow'
        }
      }
    }
  },
  computed: {
    mySwiper () {
      return this.$refs.swiper
    }
  },
  components: {
    Icon,
    swiper,
    swiperSlide
  }
}
</script>
