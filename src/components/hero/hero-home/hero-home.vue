<template lang="pug" src="./hero-home.pug"></template>

<script>
import ComplimentaryExamForm from 'components/modal/modal-complimentary-exam/modal-complimentary-exam'

export default {
  data () {
    return {
      showComplimentaryModal: false
    }
  },
  methods: {
    scrolled ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT) { this.$store.dispatch('VIEW_NAV', true) }
      if (going === this.$waypointMap.GOING_IN) { this.$store.dispatch('VIEW_NAV', false) }
    }
  },
  components: {
    ComplimentaryExamForm
  }
}
</script>
