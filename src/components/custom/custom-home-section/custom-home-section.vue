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
