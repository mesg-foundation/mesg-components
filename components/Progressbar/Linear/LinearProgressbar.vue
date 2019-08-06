<template>
  <div class="progress" :class="{absolute , top}">
    <div class="progress-bar" :class="{indeterminate}" :style="{width: `${value}%`,height: `${height}`, background: `${color}`}"></div>
  </div>
</template>

<script>
export default {
  name: 'LinearProgressbar',
  props: {
    value: { type: Number },
    height: { type: String },
    color: { type: String },
    top: { type: Boolean, default: false },
    absolute: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.progress {
  padding: 1px;
  background: rgba(0, 0, 0, 0.1);
}

.absolute {
  position: absolute;
  z-index: 9999999;
}

.progress-bar {
  height: 10px;
  background: var(--Lavender-1);
  transition: 1s linear;
  -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}

.top {
  top: 0;
}

.indeterminate {
  background-image: repeating-linear-gradient(-45deg, var(--Purple-Shadow));
  animation: move 2s linear infinite;
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