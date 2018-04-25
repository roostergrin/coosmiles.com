<template lang="pug" src="./hero-home.pug"></template>

<script>
import ComplimentaryExamForm from 'components/modal/modal-complimentary-exam/modal-complimentary-exam'
import { elFadeUp } from 'components/mixins'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      showComplimentaryModal: false,
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 3000
        }
      }
    }
  },
  methods: {
    scrolled ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT) { this.$store.dispatch('VIEW_NAV', true) }
      if (going === this.$waypointMap.GOING_IN) { this.$store.dispatch('VIEW_NAV', false) }
    }
  },
  components: {
    ComplimentaryExamForm,
    swiper,
    swiperSlide
  },
  mixins: [elFadeUp],
  updated () {
    if (this.showComplimentaryModal === true) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }
}
</script>

<style lang="css">

.fade-in-modal-enter-active {
  transition: all .5s ease;
}
.fade-in-modal-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-in-modal-enter {
  transform: translateY(10px);
  opacity: 0;
}
.fade-in-modal-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

</style>
