<template>
  <div class="overlay">
    <div class="dialog">
      <slot v-if="header">
        <h2>Here i am</h2>
      </slot>
      <div>
        <slot>Thank to pop me out of that button, but now i'm done so you can close this window.</slot>
      </div>
      <div class="content">______________</div>
      <div class="content">tetetetet</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    header: { type: Boolean, default: true },
    headerText: { type: String, default: undefined },
    text: { type: Boolean, default: undefined }
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
  width: 300px;
  height: 150px;
  position: relative;
  transition: all 1s ease-in-out;
}

.dialog h2 {
  margin: 0;
  border-bottom: 1px solid #000;
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
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 500ms;
  visibility: visible;
  opacity: 1;
}
</style>