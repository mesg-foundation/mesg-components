<template>
  <label>
    {{label}}
    <input :type="type" :placeholder="placeholder" :value="value" @input="$emit(`input`, $event.target.value)" />
  </label>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    type: { type: String, default: 'text' },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    value: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

label {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

input {
  color: $dark-grey;
  font-size: 15px;
  padding: 15px $margin;
  border-radius: 3px;
  border: solid 1px $primary-very-light;
  background-color: $white;
  width: 100%;
  margin-top: calc(#{$margin}/ 2);
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 1px $primary-very-light inset;
}
</style>