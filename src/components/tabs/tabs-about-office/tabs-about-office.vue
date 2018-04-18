<template lang="pug" src="./tabs-about-office.pug"></template>

<script>
import OfficeTourModal from 'components/modal/modal-office-tour/modal-office-tour'

export default {
  props: ['props'],
  data () {
    return {
      showModal: false,
      modalData: false
    }
  },
  components: {
    OfficeTourModal
  },
  methods: {
    displayOfficeTourModal (i) {
      this.showModal = true
      this.modalData = this.props.gallery[i]
    }
  }
}
</script>
