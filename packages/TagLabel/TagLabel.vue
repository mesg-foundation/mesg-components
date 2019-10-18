<template>
  <div flex row space-between align-center class="label-icon">
    <div v-if="usecase" class="label default" :class="usecase.type" :style="{ backgroundColor: usecase.bgColor }" flex column align-center>
      <p :style="{ color: `${usecase.color}` }">{{ usecase.title }}</p>
    </div>
    <i v-if="usecase" :class="usecase.icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TagLabel',
  props: {
    usecase: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.label-icon {
  width: calc(100% - #{$margin} * 2);
  cursor: pointer;
}

.default {
  background-color: $primary-very-light;
}

.label {
  border-radius: 3px;
  padding: calc(#{$margin} / 2);
}
.partner {
  background-color: $light-orange;
}
.community {
  background-color: $light-grey;
}

i {
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}

.label-icon:hover {
  opacity: 0.8;
  transition: 0.5s;
}
</style>