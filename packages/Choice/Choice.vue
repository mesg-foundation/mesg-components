<template>
  <div>
    <choice-select v-if="type === 'select'" v-model="selectedValue" :options="options" />
    <choice-button v-if="type === 'button-group'" v-model="selectedValue" :options="options" />
    <choice-radio v-if="type === 'radio'" v-model="selectedValue" :options="options" />
    <choice-checkbox v-if="type === 'checkbox'" v-model="selectedValue" :options="options" />
  </div>
</template>

<script>
import choiceButton from './Button'
import choiceRadio from './Radio'
import choiceSelect from './Select'
import choiceCheckbox from './Checkbox'

export default {
  name: 'Choice',
  components: { choiceButton, choiceSelect, choiceRadio, choiceCheckbox },
  props: {
    type: { type: String, required: true },
    value: { type: [String, Number, Array] },
    options: { type: Array, required: true }
  },
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
