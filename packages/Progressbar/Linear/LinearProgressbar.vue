<template>
  <div class="progress-bar" :class="{indeterminate}">
    <div class="progress-block" :style="{width: `${validateValue}%`, backgroundColor: `${color}`}" />
  </div>
</template>

<script>
export default {
  name: 'LinearProgressbar',
  props: {
    value: { type: Number, default: 0 },
    indeterminate: { type: Boolean, default: false },
    color: { type: String }
  },
  mounted() {
    console.log(document.querySelector('.indeterminate').style.setProperty('--w', '300%'))
  },
  computed: {
    validateValue() {
      return this.value > 100 ? 100 : this.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.progress-bar {
  width: 100%;
  border-radius: 5px;
  background-color: rgba(189, 175, 214, 0.5);
  > .progress-block {
    -webkit-animation-name: none;
    -webkit-animation-duration: 1.5s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;

    animation-name: none;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  &.indeterminate {
    > .progress-block {
      -webkit-animation-name: bar-movement;
      -webkit-animation-play-state: running;

      animation-name: bar-movement;
      animation-play-state: running;
    }
  }
}

.progress-block {
  position: relative;
  top: -1px;
  left: -1px;
  border-radius: 5px;
  height: 6px;
  background-color: $secondary;
}

@-webkit-keyframes bar-movement {
  from {
    left: -1px;
  }
  to {
    left: calc(var(--width)-100% + 1px);
  }
}

@keyframes bar-movement {
  from {
    left: -1px;
  }
  to {
    left: calc(50% + 1px);
  }
}
</style>