<template>
  <div>
    <ul>
      <li v-for="option in options" :key="option.key">
        <div class="radio">
          <input
            type="radio"
            :id="option.key"
            :value="option.value"
            :checked="checkValue(option.value)"
            @input="$emit('input', option.value)"
            @change="$emit('change', $event.target.checked)"
          />
          <label class="radio-label" :for="option.key">{{option.value}}</label>
        </div>
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
@import '@mesg-components/theme/_variables';

.radio {
  margin: 0.5rem;
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: $light-grey;
        border-radius: 100%;
        border: 1px solid darken($light-grey, 25%);
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: -0.2em;
        margin-right: 1em;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: $primary-very-light;
          box-shadow: inset 0 0 0 4px $light-grey;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: $primary-very-light;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          box-shadow: inset 0 0 0 4px $light-grey;
          border-color: darken($light-grey, 25%);
          background: darken($light-grey, 25%);
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}
</style>