s<template lang="pug" src="./custom-home-reviews.pug"></template>

<script>
import Icon from 'components/icon/icon'
import { elFadeUp } from 'components/mixins'
import SliderHomeTestimonials from 'components/slider/slider-home-testimonials/slider-home-testimonials'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: ['props'],
  data () {
    return {
      swiping: false,
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 50000
        },
        navigation: {
          nextEl: '.custom-home-reviews__next-arrow',
          prevEl: '.custom-home-reviews__prev-arrow'
        },
        on: {
          slideChangeTransitionStart: function () {
            this.$el[0].children[1].classList.add('custom-home-reviews__next-arrow--active')
            this.$el[0].children[2].classList.add('custom-home-reviews__prev-arrow--active')
            var addEffect = document.getElementsByClassName('custom-home-reviews__testimonial')
            for (var i = 0; i < addEffect.length; i++) {
              addEffect[i].classList.add('custom-home-reviews__testimonial--active')
            }
          },
          slideChangeTransitionEnd: function () {
            this.$el[0].children[1].classList.remove('custom-home-reviews__next-arrow--active')
            this.$el[0].children[2].classList.remove('custom-home-reviews__prev-arrow--active')
            var removeEffect = document.getElementsByClassName('custom-home-reviews__testimonial')
            for (var j = 0; j < removeEffect.length; j++) {
              removeEffect[j].classList.remove('custom-home-reviews__testimonial--active')
            }
          }
        }
      }
    }
  },
  methods: {
    changeSlide () {
      this.swiping ? this.swiping = false : this.swiping = true
    }
  },
  components: {
    Icon,
    SliderHomeTestimonials,
    swiper,
    swiperSlide
  },
  mixins: [elFadeUp]
}
</script>
