<template>
  <div>TextField</div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    type: { type: String, default: 'text' },
    label: { type: String, required: true },
    placeholder: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';
</style>