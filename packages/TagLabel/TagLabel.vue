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
}

.partner {
  background-color: $light-orange !important;
}

.community {
  background-color: $light-grey !important;
}
</style>