<template>
  <div class="progressbar" :style="{ backgroundColor: `${backgroundColor}`}">
    <div :style="{width: `${validateValue}%`, backgroundColor: `${color}`}" :class="{info,warning,danger,success,animate}" />
  </div>
</template>

<script>
export default {
  name: 'LinearProgressbar',
  props: {
    value: { type: Number, default: 0 },
    info: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    animate: { type: Boolean, default: false },
    color: { type: String },
    backgroundColor: { type: String }
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

.progressbar {
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  background-color: rgba(189, 175, 214, 0.5);
}
.progressbar div {
  border-radius: 5px;
  height: 6px;
  background-color: var(--secondary);
}

.info {
  background-color: var(--Info) !important;
}
.success {
  background-color: var(--Success) !important;
}
.warning {
  background-color: var(--Warning) !important;
}
.danger {
  background-color: var(--Error) !important;
}

.animate {
  background-image: repeating-linear-gradient(-45deg, var(--secondary));
  animation: move 2s linear infinite;
}

.animate:after {
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