<template>
  <span class="tag" :class="type">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'TagLabel',
  props: {
    type: { type: String }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.tag {
  display: inline-block;
  padding: calc(#{$margin} / 2);
  border-radius: 3px;
  color: #0366d6;
  background-color: rgba(#0366d6, 0.1);
  min-height: 40px;
}

.partner {
  color: $primary-dark;
  background-color: $light-orange !important;
}

.community {
  color: $primary-dark;
  background-color: $light-grey !important;
}
</style>