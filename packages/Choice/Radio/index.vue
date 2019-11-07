<template>
  <div>
    <label v-for="option in options" :key="option.key">
      <input type="radio" :id="option.key" :value="value" :checked="checkValue(option.value)" @input="$emit('input', option.value)" @change="$emit('change', $event.target.checked)"  />
      {{option.value}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: ['value', 'options'],
  methods: {
    checkValue(value) {
      return this.value === value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>