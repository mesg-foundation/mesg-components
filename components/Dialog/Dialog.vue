<template>
  <div class="overlay" :class="{openDialog}">
    <div class="dialog" :class="{fullscreen}" :style="{maxHeight ,maxWidth, minWidth}">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    maxHeight: { type: String, default: 'auto' },
    maxWidth: { type: String, default: 'auto' },
    minWidth: { type: String, default: undefined },
    fullscreen: { type: Boolean, default: false }
  },
  computed: {
    openDialog() {
      return this.$attrs.value
    }
  }
}
</script>

<style  scoped>
.dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  transition: all 1s ease-in-out;
}

.fullscreen {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding-top: 30px;
  justify-content: unset;
}

.dialog h1,
.dialog h2,
.dialog h3,
.dialog h4 {
  margin: 0;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  transition: opacity 500ms;
  visibility: visible;
  opacity: 0;
}

.openDialog {
  opacity: 1;
}
</style>