<template>
  <div
    class="card"
    :class="{ bordered, thin, shadow: !noShadow }"
    :style="{borderBottomColor: borderBottomColor,backgroundColor: background }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    bordered: { type: Boolean, default: false },
    thin: { type: Boolean, default: false },
    noShadow: { type: Boolean, default: false },
    borderBottomColor: { type: String, default: undefined },
    background: { type: String, default: "#fffff" }
  }
};
</script>


<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

.card {
  border-radius: 6px;
  background-color: $white;
  overflow: hidden;
  padding: $margin;
}
.card.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}
.card.bordered {
  border: solid 1px $lavender-light;
  border-bottom-width: 6px;
  border-bottom-color: $primary;
  box-shadow: none;
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
}
.card.bordered.thin {
  border: solid 1px $lavender-light;
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>