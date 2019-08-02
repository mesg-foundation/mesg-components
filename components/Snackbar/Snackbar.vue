<template>
  <div class="snackbar" :class="{top,center,right,bottom,left,error,info,success,disableDisplay}" :style="backgroundColor">
    <slot>
      <span>{{this.text}}</span>
      <button class="btnDefault" @click="disableDisplay = true">CLOSE</button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    top: { type: Boolean, default: false },
    center: { type: Boolean, default: true },
    bottom: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    timeout: { type: Number, default: 6000 },
    text: { type: String, default: undefined },
    color: { type: String },
    success: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    error: { type: Boolean, default: false }
  },
  data() {
    return {
      disableDisplay: false
    }
  },
  mounted() {
    this.disableDisplay = !this.$attrs.value
    if (this.$attrs.value) {
      setTimeout(() => {
        this.disableDisplay = this.$attrs.value
      }, this.timeout)
    }
  },
  computed: {
    backgroundColor() {
      return `background: ${this.color}`
    }
  }
}
</script>

<style scoped>
.snackbar {
  position: absolute;
  z-index: 9999999;
  color: #fff;
  padding: 10px 15px;
  border-radius: 3px;
  background: #000;
  font-size: 14px;
}
.disableDisplay {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s linear;
  /* display: none; */
  /* transition: all 0.75s ease; */
}
.top {
  top: 0px;
  margin-top: 10px;
}
.center {
  left: 50%;
  transform: translate(-50%);
}
.left {
  right: unset;
  left: 0px;
  transform: none;
  margin-left: 10px;
}
.right {
  left: unset;
  margin-right: 10px;
  right: 0px;
  transform: none;
}
.bottom {
  bottom: 0px;
  margin-bottom: 10px;
}
.error {
  background: #f44336 !important;
}
.success {
  background: #4bb543 !important;
}
.info {
  background: #1e88e5 !important;
}

.error button,
.info button,
.success button {
  color: #fff;
}

span {
  margin-right: 50px;
}

.btnDefault {
  color: rgb(228, 26, 26);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 7px 10px;
  font-weight: 500;
}
</style>