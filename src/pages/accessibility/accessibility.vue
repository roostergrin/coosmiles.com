<template lang="pug" src="./accessibility.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TabsTreatmentOptions from 'components/tabs/tabs-treatment-options/tabs-treatment-options'

export default {
  computed: {
    props () {
      return this.$store.state.pages.accessibility
    }
  },
  components: {
    HeroPages,
    TabsTreatmentOptions
  },
  data () {
    return {
      companyName: 'Central Ohio Orthodontics', // Fill this in
      domain: "<a href='https://coosmiles.com'>coosmiles.com</a>", // Fill this in
      email: "<a href='mailto:schedule@coosmiles.com'>schedule@coosmiles.com</a>", // Fill this in
      phone: "<a href='tel:7406546006'>(740) 654-6006</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
