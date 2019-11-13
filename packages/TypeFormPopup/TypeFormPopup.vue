<template>
  <span @click="createTypeFormButton">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'TypeFormPopup',
  props: {
    id: { type: String, required: true },
    url: { type: String, default: 'https://mesgfoundation.typeform.com/to' }
  },
  methods: {
    async getTypeForm() {
      if (!!window.typeformEmbed) {
        return window.typeformEmbed
      }
      return new Promise(resolve => {
        const self = this
        window.typeformEmbed = (function(d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return window.typeformEmbed
          js = d.createElement(s)
          js.id = id
          js.src = 'https://embed.typeform.com/embed.js'
          js.onload = () => {
            resolve(window.typeformEmbed)
          }
          fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'typef_orm_share')
      })
    },
    async createTypeFormButton() {
      const typeForm = await this.getTypeForm()
      typeForm
        .makePopup(`${this.url}/${this.id}`, {
          mode: 'popup',
          autoClose: 0
        })
        .open()
    }
  }
}
</script>
