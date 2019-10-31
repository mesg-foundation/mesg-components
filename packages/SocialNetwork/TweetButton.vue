<template>
  <span />
</template>

<script>
export default {
  name: 'TweetButton',
  props: {
    url: { type: String, required: true },
    text: { type: String, required: true },
    recommandedAccount: { type: String, default: 'mesgfoundation' },
  },
  methods: {
    createTweetButton() {
      this.$nextTick(() => {
        window.twttr.widgets.createShareButton(this.url, this.$el, {
          text: this.text,
          related: this.recommandedAccount,
        })
      })
    }
  },
  mounted() {
    if (!!window.twttr) {
      this.createTweetButton()
    } else {
      const self = this
      window.twttr = (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        var t = window.twttr || {}
        if (d.getElementById(id)) return t
        js = d.createElement(s)
        js.id = id
        js.src = 'https://platform.twitter.com/widgets.js'
        js.onload = () => {
          self.createTweetButton()
        }
        fjs.parentNode.insertBefore(js, fjs)
        t._e = []
        t.ready = function(f) {
          t._e.push(f)
        }
        return t
      })(document, 'script', 'twitter-wjs')
    }
  }
}
</script>