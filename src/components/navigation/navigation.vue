<template lang='pug' src='./navigation.pug'></template>

<script>
import Icon from 'components/icon/icon'
import ComplimentaryExamForm from 'components/modal/modal-complimentary-exam/modal-complimentary-exam'

export default {
  computed: {
    props () {
      return this.$router.options.routes
    }
  },
  data () {
    return {
      menu: false,
      showComplimentaryModal: false
    }
  },
  components: {
    Icon,
    ComplimentaryExamForm
  },
  methods: {
    displayComplimentaryModal () {
      this.showComplimentaryModal === true
      console.log('hello')
    }
  }
}

</script>
