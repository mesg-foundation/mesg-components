<template>
  <a class="embedly-card" data-card-controls="0" :href="url">Card</a>
</template>

<script>
export default {
  name: 'EmbedCard',
  props: {
    url: { type: String, required: true }
  },
  mounted() {
    if (!document.getElementById('embed')) {
      let embed = document.createElement('script')
      embed.setAttribute('async', true)
      embed.setAttribute('id', 'embed')
      embed.setAttribute('src', '//cdn.embedly.com/widgets/platform.js ')
      embed.setAttribute('charset', 'UTF-8')
      document.head.appendChild(embed)
    }
  }
}
</script>
