<template>
  <div class="overlay" :class="{openDialog}">
    <div class="dialog" :style="{maxWidth,maxHeight,minWidth}">
      <Card>
        <div class="inside-card">
          <slot></slot>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@mesg-components/card/Card'

export default {
  name: 'Dialog',
  components: {
    Card
  },
  props: {
    maxHeight: { type: String, default: 'auto' },
    maxWidth: { type: String, default: 'auto' },
    minWidth: { type: String, default: undefined }
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
  background: #fff;
  border-radius: 5px;
  position: relative;
  transition: all 1s ease-in-out;
}

.inside-card {
  margin: 20px;
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