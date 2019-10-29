<template>
  <span :class="[`type--${type}`, `size--${size}`]">
    <slot />
  </span>
</template>

<script>
export default {
  name: "TagLabel",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "small"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

span {
  display: inline-block;
}

// Size

.size--small {
  border-radius: 3px;
  padding: 6px calc(#{$margin} / 2);
  font-size: 12px;
  line-height: 12px;

  > * {
    font-size: 12px;
    line-height: 12px;
  }
}

// Type
.type--default {
  color: $blue-default;
  background-color: rgba($blue-default, 0.1);
}

.type--partner {
  color: $primary-dark;
  background-color: $light-orange;
}

.type--community {
  color: $primary-dark;
  background-color: $light-grey;
}
</style>