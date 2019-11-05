<template>
  <button @click="onClickedPopup">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TypeFormPopup',
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      url: 'https://mesgfoundation.typeform.com/to/',
      openPopup: undefined
    }
  },
  mounted() {
    if (!!window.typeformEmbed) {
      this.createTypeFormButton()
    } else {
      const self = this
      window.typeformEmbed = (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        var t = window.typeformEmbed || {}
        if (d.getElementById(id)) return t
        js = d.createElement(s)
        js.id = id
        js.src = 'https://embed.typeform.com/embed.js'
        js.onload = () => {
          self.createTypeFormButton()
        }
        fjs.parentNode.insertBefore(js, fjs)
        return t
      })(document, 'script', 'typef_orm_share')
    }
  },
  methods: {
    createTypeFormButton() {
      this.$nextTick(() => {
        this.openPopup = window.typeformEmbed.makePopup(`${this.url}${this.id}`, {
          mode: 'popup'
        })
      })
    },
    onClickedPopup() {
      this.openPopup.open()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>