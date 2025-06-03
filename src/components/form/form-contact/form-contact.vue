<template lang='pug' src='./form-contact.pug'></template>

<script>
export default {
  data: () => {
    return {
      message: '',
      fullname: '',
      LastName: '',
      email: '',
      phone: '',
      dob: '',
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
