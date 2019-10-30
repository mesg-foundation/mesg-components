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
  beforeMount() {
    const twitterElement = document.getElementById('twitter')
    if (twitterElement) {
      document.head.removeChild(twitterElement)
    }
  },
  mounted() {
    if (!document.getElementById('twitter')) {
      let script = document.createElement('script')
      script.setAttribute('async', true)
      script.setAttribute('id', 'twitter')
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      script.setAttribute('charset', 'utf-8')
      document.head.appendChild(script)
    }
  }
}
</script>