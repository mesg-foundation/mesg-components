<template>
  <div>
    <div v-if="icon" :class="{icon}">
      <span :class="usecase.type" class="label default" :style="{ color: `${usecase.color}`,backgroundColor: usecase.bgColor  }">{{ usecase.title }}</span>
      <i :class="usecase.icon"></i>
    </div>
    <div v-else-if="usecase" class="label-tags">
      <span class="label default" :class="usecase.type" align-center :style="{ color: `${usecase.color}`,backgroundColor: usecase.bgColor }">{{ usecase.title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TagLabel',
  props: {
    icon: { type: Boolean, default: false },
    usecase: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.label-tags {
  display: flex;
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