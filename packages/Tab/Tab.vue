<template>
  <div class="tabs">
    <template v-for="(item,i) in items">
      <input type="radio" name="tabs" :id="`tab${i}`" :key="`chk${i}`" :checked="i===0" />
      <label :for="`tab${i}`" :key="`label${i}`">
        <slot :name="`tab-${item.key}`" :item="item">{{ item.text }}</slot>
      </label>
      <section class="tab" :key="`tab${i}`">
        <slot :name="`section-${item.key}`" :item="item" />
      </section>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    items: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.tabs {
  display: flex;
  flex-wrap: wrap;
}
.tabs label {
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: bold;
  transition: background ease 0.2s;
  min-width: 60px;
  text-align: center;
}

.tabs label:hover {
  background: $primary-very-light;
}

input:checked + label {
  color: $primary;
  border: 1px solid #abc;
  border: 1px solid $primary-light;
  border-top: 2px solid $primary;
  margin: 0 0 -1px;
  display: inline-block;
  border-bottom: 1px solid $White;
  z-index: 1;
}

.tabs .tab {
  order: 99;
  width: 100%;
  display: none;
  padding: 1rem;
  border-top: 1px solid $primary-light;
}
.tabs input[type='radio'] {
  display: none;
}
.tabs input[type='radio']:checked + label {
  background: $White;
}
.tabs input[type='radio']:checked + label + .tab {
  display: block;
}
</style>
