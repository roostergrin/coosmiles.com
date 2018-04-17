<template lang='pug' src='./form-home.pug'></template>

<script>
export default {
  data: () => {
    return {
      message: '',
      fullname: '',
      email: '',
      phone: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.formSubmitted = true
        } else {
          alert('Correct them errors!')
        }
      })
      .catch(() => {
        alert('Correct them errors!')
      })
    }
  }
}
</script>
