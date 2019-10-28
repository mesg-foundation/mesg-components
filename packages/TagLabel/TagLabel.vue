<template>
  <span class="tag" :class="type">
    <slot />
  </span>
</template>

<script>
export default {
  name: "TagLabel",
  props: {
    type: { type: String }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

.tag {
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  border-radius: 3px;
  align-items: center;
  padding: 6px calc(#{$margin} / 2);
  color: #0366d6;
  background-color: rgba(#0366d6, 0.1);
}

i {
  font-size: 12px;
  margin-right: calc(#{$margin} / 4);
}

.partner {
  color: $primary-dark;
  background-color: $light-orange;
}

.community {
  color: $primary-dark;
  background-color: $light-grey;
}
</style>