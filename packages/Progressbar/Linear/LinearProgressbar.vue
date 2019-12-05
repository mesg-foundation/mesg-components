<template>
  <div class="progress-bar" :class="{indeterminate}">
    <div class="progress-block" :style="{width: `${validateValue}%`, backgroundColor: `${color}`}" />
  </div>
</template>

<script>
export default {
  name: "LinearProgressbar",
  props: {
    value: { type: Number, default: 0 },
    indeterminate: { type: Boolean, default: false },
    color: { type: String }
  },
  computed: {
    validateValue() {
      return this.value > 100 ? 100 : this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

.progress-bar {
  width: 100%;
  display: inline-block;
  border-radius: 5px;
  background-color: rgba(189, 175, 214, 0.5);
  > .progress-block {
    animation-name: none;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  &.indeterminate {
    > .progress-block {
      animation-name: bar-movement;
      animation-play-state: running;
    }

    @keyframes bar-movement {
      from {
        left: -1px;
      }
      to {
        left: calc(70% + 1px);
      }
    }
  }
}

.progress-block {
  position: relative;
  display: block;
  left: -1px;
  border-radius: 5px;
  height: 6px;
  background-color: $primary-dark;
  z-index: -1;
}
</style>