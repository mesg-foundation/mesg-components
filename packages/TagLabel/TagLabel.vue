<template>
  <span :class="[`color--${color}`, `size--${size}`]">
    <slot />
  </span>
</template>

<script>
export default {
  name: "TagLabel",
  props: {
    color: {
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
  font-weight: bold;
  line-height: 12px;

  > * {
    font-size: 12px;
    line-height: 12px;
  }
}

// Type
.color--default {
  color: $blue;
  background-color: $blue-light;
}

.color--orange {
  color: $orange;
  background-color: $orange-light;
}

.color--green {
  color: $green;
  background-color: $green-light;
}

.color--purple {
  color: $purple;
  background-color: $purple-light;
}
</style>