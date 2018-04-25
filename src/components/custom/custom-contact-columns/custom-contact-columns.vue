<template lang="pug" src="./custom-contact-columns.pug"></template>

<script>
import Icon from 'components/icon/icon'
import ContactForm from 'components/form/form-contact/form-contact'
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  components: {
    Icon,
    ContactForm
  },
  mixins: [elFadeUp]
}
</script>
