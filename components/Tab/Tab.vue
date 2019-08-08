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
  name: "Tab",
  props: {
    items: {
      type: Array,
      require: true
    }
  }
};
</script>

<style scoped>
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
  background: var(--lavender-2);
}

input:checked + label {
  color: var(--Purple-3);
  border: 1px solid #abc;
  border: 1px solid var(--Lavender-1);
  border-top: 2px solid var(--Purple-3);
  margin: 0 0 -1px;
  display: inline-block;
  border-bottom: 1px solid #fff;
  z-index: 1;
}

.tabs .tab {
  order: 99;
  width: 100%;
  display: none;
  padding: 1rem;
  border-top: 1px solid var(--Lavender-1);
}
.tabs input[type="radio"] {
  display: none;
}
.tabs input[type="radio"]:checked + label {
  background: #fff;
}
.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}
</style>
