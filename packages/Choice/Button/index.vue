<template>
  <div class="btn-group">
    <button
      v-for="option in options"
      :class="option.value === value ? 'btn--actived' : ''"
      :key="option.key"
      :value="option.value"
      @click="onClickedValue($event.target.value)"
    >
      <i v-if="option.preIcon" :class="option.preIcon" class="pre-icon"></i>
      {{ option.value }}
      <i v-if="option.postIcon" :class="option.postIcon" class="post-icon"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: ['value', 'options'],
  methods: {
    onClickedValue(value) {
      this.$emit('input', value)
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.btn-group {
  button {
    border: solid 2px $primary;
    padding: calc(#{$margin} / 2) $margin;
    cursor: pointer;
    float: left;
  }
  i {
    font-size: 17px;
  }
}

.pre-icon {
  padding-right: calc(#{$margin} / 4);
}

.post-icon {
  padding-left: calc(#{$margin} / 4);
}

button {
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $primary;
  outline: none;
  max-height: 45px;
}

.btn-group button:not(:last-child) {
  border-right: none;
}

.btn-group button:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.btn-group button:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.btn-group:after {
  content: '';
  clear: both;
  display: table;
}

.btn-group button:hover,
.btn-group button:active,
.btn-group button:focus {
  background-color: $primary;
  color: $white;
}

.btn--actived {
  background-color: $primary;
  color: $white !important;
}

@media only screen and (max-width: $mobile-breakpoint) {
  button {
    width: 100%;
  }

  .btn-group button:not(:last-child) {
    border-right: solid 2px $primary;
    border-top: none;
  }

  .btn-group button:first-child {
    border-top: solid 2px $primary;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 0;
  }
  .btn-group button:last-child {
    border-top: none;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-right-radius: 0px;
  }
}
</style>
