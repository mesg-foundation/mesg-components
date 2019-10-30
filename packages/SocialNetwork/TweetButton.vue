<template>
  <a href="https://twitter.com/intent/tweet" class="twitter-hashtag-button" :data-text="text" :data-related="recommandedAccount" :data-show-count="counter" />
</template>

<script>
export default {
  name: 'TweetButton',
  props: {
    text: { type: String, required: true },
    recommandedAccount: { type: String, default: 'mesgfoundation' },
    counter: { type: Boolean, default: false }
  },
  mounted() {
    const twitterScript = document.getElementById('twitter-wjs')
    if (twitterScript) {
      console.log('object')
      document.head.removeChild(twitterScript)
    }
    window.twttr = (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      var t = window.twttr || {}
      if (d.getElementById(id)) return t
      js = d.createElement(s)
      js.id = id
      js.src = 'https://platform.twitter.com/widgets.js'
      js.async = true
      fjs.parentNode.insertBefore(js, fjs)

      t._e = []
      t.ready = function(f) {
        t._e.push(f)
      }

      return t
    })(document, 'script', 'twitter-wjs')
  }
}
</script>