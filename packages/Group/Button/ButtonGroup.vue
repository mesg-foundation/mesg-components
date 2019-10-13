<template>
  <div class="btn-group">
    <button v-for="(item,i) in items" :key="i" v-on:click="handleClicked(item.method,i)" :class="{actived: actived === i}">
      <i v-if="item.prefix" :class="item.icon"></i>
      {{item.title}}
      <i v-if="item.suffix" :class="item.icon" class="suffix"></i>
    </button>
  </div>
</template>



<script>
export default {
  name: 'ButtonGroup',
  props: {
    items: { type: Array }
  },
  data() {
    return {
      actived: 0
    }
  },
  methods: {
    handleClicked(func, index) {
      this.actived = index
      if (func) {
        func()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.btn-group button {
  border: solid 2px var(--primary);
  padding: calc(var(--margin) / 2) var(--margin);
  cursor: pointer;
  float: left;
}

.prefix {
  padding-right: 10px;
}

.suffix {
  padding-left: 10px;
}

button {
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--primary);
  outline: none;
}

.btn-group button:not(:last-child) {
  border-right: none;
}

.btn-group button:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.btn-group button:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.btn-group:after {
  content: '';
  clear: both;
  display: table;
}

.btn-group button:hover,
.btn-group button:active,
.btn-group button:focus {
  background-color: var(--primary);
  color: var(--White);
}

.actived {
  background-color: var(--primary);
  color: var(--White) !important;
}
</style>


