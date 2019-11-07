<template>
  <select :value="value" @input="$emit('input', $event.target.value)">
    <option v-for="option in options" :value="option.value" :key="option.key">{{option.value}}</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: ['value', 'options']
}
</script>

<style lang="scss" scoped>
</style>