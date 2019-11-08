<template>
  <div>
    <ul>
      <li v-for="option in options" :key="option.key">
        <input
          type="radio"
          :id="option.key"
          :value="option.value"
          :checked="checkValue(option.value)"
          @input="$emit('input', option.value)"
          @change="$emit('change', $event.target.checked)"
        />
        <label>{{option.value}}</label>
      </li>
    </ul>
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