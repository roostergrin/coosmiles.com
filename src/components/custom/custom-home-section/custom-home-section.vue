<template lang="pug" src="./custom-home-section.pug"></template>

<script>
import HomeVideoModal from 'components/modal/modal-home-video/modal-home-video'

export default {
  props: ['props'],
  data () {
    return {
      showModal: false
    }
  },
  components: {
    HomeVideoModal
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
