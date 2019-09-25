<template>
  <progress :value="getValue" max="100" :class="{indeterminate, success, danger, warning, info}"></progress>
</template>

<script>
export default {
  name: 'LinearProgressbar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    info: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    indeterminate: { type: Boolean, default: false }
  },
  computed: {
    getValue() {
      return this.indeterminate ? 100 : this.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/index.scss';

progress {
  width: 100%;
  border: 0;
  background-color: $White;
  border: 1px solid $light-grey;
  text-align: center;
  overflow: hidden;
}

progress::-webkit-progress-bar {
  background: $White;
}
progress::-webkit-progress-value {
  background: #28a745;
}

.info::-webkit-progress-value {
  background-color: #007bff;
}
.success::-webkit-progress-value {
  background-color: #28a745;
}
.warning::-webkit-progress-value {
  background-color: #ffc107;
}
.danger::-webkit-progress-value {
  background-color: #dc3545;
}

.indeterminate {
  background-image: repeating-linear-gradient(-45deg, $secondary);
  animation: move 2s linear infinite;
}

.indeterminate:after {
  color: transparent;
}

@keyframes move {
  0% {
    width: 0;
  }
  15% {
    width: 15%;
  }
  50% {
    width: 50%;
  }
  75% {
    width: 75%;
  }
  100% {
    width: 100%;
  }
}
</style>