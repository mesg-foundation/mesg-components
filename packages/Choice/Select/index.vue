<template>
  <select class="minimal" :value="value" @input="$emit('input', $event.target.value)">
    <option v-for="option in options" :value="option.value" :key="option.key">{{ option.value }}</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: ['value', 'options']
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

select {
  border: none;
  border-bottom: 1px solid $black;
  border-radius: 0 !important;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.1em 1em;
  background-color: transparent;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  &.minimal {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    outline: none;
    & :active {
      background-image: linear-gradient(45deg, gray 50%, transparent 50%), linear-gradient(135deg, transparent 50%, gray 50%);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      outline: none;
    }
  }
}
</style>
