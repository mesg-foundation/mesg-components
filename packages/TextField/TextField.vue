<template>
  <div>
    <p class="paragraph">{{label}}</p>
    <input class="input-text" :type="type" :placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    type: { type: String, default: 'text' },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    value: { type: [String, Number], required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.paragraph {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $primary-dark;
  margin-bottom: 10px;
}

.input-text {
  border-radius: 3px;
  height: 50px;
  border: solid 1px $primary-very-light;
  background-color: $white;
  width: 100%;
  min-width: 100%;
}

input {
  padding: 15px $margin;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $dark-grey;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 1px $primary-very-light inset;
}
</style>