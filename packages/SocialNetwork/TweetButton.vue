<template>
  <a
    href="https://twitter.com/intent/tweet?button_hashtag=MESGRewards&ref_src=twsrc%5Etfw"
    class="twitter-hashtag-button"
    :data-text="text"
    data-url="https://mesg.com/community"
    :data-related="recommandedAccount"
    :data-show-count="counter"
  >Tweet #MESGRewards</a>
</template>

<script>
export default {
  name: 'TweetButton',
  props: {
    text: { type: String, required: true },
    recommandedAccount: { type: String, default: 'mesgfoundation' },
    counter: { type: Boolean, default: false }
  },
  created() {
    let ckeditor = document.createElement('script')
    ckeditor.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    ckeditor.setAttribute('charset', 'utf-8')
    document.head.appendChild(ckeditor)
  }
}
</script>

<style lang="scss" scoped>
</style>