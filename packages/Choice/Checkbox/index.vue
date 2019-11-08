<template>
  <ul>
    <li v-for="option in options" :key="option.key">
      <input type="checkbox" :value="option.value" @input="onChange($event)" />
      <label>{{option.value}}</label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['value', 'options'],
  methods: {
    onChange(e) {
      const setValue = Array.isArray(this.value) ? [...this.value] : [this.value]
      if (e.target.checked) {
        this.$emit('input', [...setValue.filter(v => v !== null && v !== undefined && v !== ''), e.target.value])
      }
      if (!e.target.checked) {
        var index = setValue.indexOf(e.target.value)
        if (index !== -1) setValue.splice(index, 1)
        this.$emit('input', [...setValue])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>