<template>
  <form :data-token="dataToken" @submit.prevent="submit" flex row tablet-column wrap>
    <div flex column class="email">
      <input type="email" :placeholder="inputPlaceholder" v-model="email" required />
    </div>
    <div flex column third class="btn">
      <Button submit primary>{{buttonLabel}}</Button>
    </div>
  </form>
</template>

<script>
import Button from '@mesg-components/button'
export default {
  name: 'NewsLetter',
  components: { Button },
  props: {
    buttonLabel: { type: String, default: 'Sign up' },
    inputPlaceholder: { type: String, default: 'Your email address' },
    dataToken: { type: String },
    apiUrl: { type: String }
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async submit() {
      const email = this.email
      const token = this.dataToken
      const apiUrl = this.apiUrl || undefined
      if (apiUrl) {
        const data = new FormData()
        if (token) {
          data.append('token', token)
        }
        data.append('email', this.email)
        const req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
        req.open('POST', this.apiUrl, false)
        req.onload = () => {
          const res = JSON.parse(req.responseText)
          if (req.status === 200) {
            alert(res.message)
            this.email = ''
          } else {
            alert(res.email[0])
          }
        }
        req.send(data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

form {
  position: relative;
}

input {
  max-height: 50px;
  font-size: 15px;
  padding: 13px var(--margin);
  border: solid 1px var(--primary-very-light);
  border-radius: 3px;
  background-color: var(--White);
  color: var(--primary-very-dark);
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 1px var(--primary-very-light) inset;
}

.email {
  margin-right: var(--margin);
}

@media only screen and (max-width: $tablet-breakpoint) {
  .email {
    margin-right: 0;
  }
  .btn {
    width: 100%;
    max-width: 100%;
    margin-top: var(--margin);
  }
}
</style>