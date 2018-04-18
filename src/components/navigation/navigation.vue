<template lang='pug' src='./navigation.pug'></template>

<script>
import Icon from 'components/icon/icon'
import ComplimentaryExamModal from 'components/modal/modal-complimentary-exam/modal-complimentary-exam'

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
    ComplimentaryExamModal
  },
  methods: {
    displayComplimentaryModal () {
      this.showComplimentaryModal === true
      console.log('hello')
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
