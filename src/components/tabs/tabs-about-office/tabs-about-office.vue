<template lang="pug" src="./tabs-about-office.pug"></template>

<script>
import OfficeTourModal from 'components/modal/modal-office-tour/modal-office-tour'
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  data () {
    return {
      showModal: false,
      imageIndex: false
    }
  },
  components: {
    OfficeTourModal
  },
  methods: {
    displayOfficeTourModal (i) {
      this.showModal = true
      this.imageIndex = i
    }
  },
  mixins: [elFadeUp]
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
