<template>
  <ul>
    <li v-for="option in options" :key="option.key">
      <label class="checkbox">
        {{ option.value }}
        <input type="checkbox" :value="option.value" @input="onChange($event)" :checked="onCheckValue(option.value)" />
        <span class="check"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    value: { type: Array },
    options: { type: Array, required: true }
  },
  methods: {
    onChange(e) {
      if (e.target.checked) {
        this.$emit('input', [...this.value, e.target.value])
      }
      if (!e.target.checked) {
        var index = this.value.indexOf(e.target.value)
        if (index !== -1) this.value.splice(index, 1)
        this.$emit('input', [...this.value])
      }
    },
    onCheckValue(val) {
      const found = this.value.filter(v => v == val)
      return found.length >= 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.checkbox {
  font-family: $font;
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: calc(#{$margin}/ 2);
  cursor: pointer;
  font-size: 16px;
  color: $primary-very-dark;

  input {
    position: absolute;
    display: none;
    cursor: pointer;
    &:checked ~ .check {
      background-color: $white;
      &:after {
        display: block;
      }
    }
  }

  .check {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 24px;
    border: 2px solid $primary-very-light;
    border-radius: 3px;

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 7px;
      top: 1px;
      width: 6px;
      height: 15px;
      border: solid $primary-light;
      border-width: 0 1.5px 1.5px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>
