<template>
  <div class="grid-container" :class="{horizontal, vertical}">
    <aside>
      <slot name="left-side" />
    </aside>
    <aside>
      <slot name="right-side" />
    </aside>
    <aside v-if="visibleFooter">
      <slot name="footer" />
    </aside>
  </div>
</template>

<script>
export default {
  name: "Jumpotron",
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    visibleFooter: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
}

.grid-container.horizontal {
  grid-template-columns: 50% 50%;
}

.grid-container.vertical {
  grid-template-columns: 100%;  
}

.grid-container.vertical > aside,
.grid-container.vertical > aside{
  grid-column: 1/3;
}
</style>
