<template>
  <div>
    <choice-select v-if="type==='select'" v-model="selectedValue" :options="options" />
    <choice-button v-if="type=== 'button-group'" v-model="selectedValue" :options="options" />
    <choice-radio v-if="type==='radio'" v-model="selectedValue" :options="options" />
    <choice-tab v-if="type==='tab'" />
  </div>
</template>

<script>
import choiceButton from './Button'
import choiceRadio from './Radio'
import choiceSelect from './Select'
import choiceTab from './Tab'

export default {
  name: 'Choice',
  components: { choiceButton, choiceSelect, choiceRadio, choiceTab },
  props: ['type', 'value', 'options'],
  computed: {
    selectedValue: {
      get() {
        return this.value
      },
      set(value) {
        return this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>