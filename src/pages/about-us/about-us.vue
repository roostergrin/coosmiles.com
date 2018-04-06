<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TabsAboutDoctor from 'components/tabs/tabs-about-doctor/tabs-about-doctor'
import TabsAboutTeam from 'components/tabs/tabs-about-team/tabs-about-team'
import TabsAboutOffice from 'components/tabs/tabs-about-office/tabs-about-office'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    HeroPages,
    TabsAboutDoctor,
    TabsAboutTeam,
    TabsAboutOffice
  }
}
</script>
