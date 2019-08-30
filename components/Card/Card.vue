<template>
  <div class="card" :class="{ bordered, thin, shadow: !noShadow }" :style="{borderBottomColor: borderColor}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    bordered: { type: Boolean, default: false },
    thin: { type: Boolean, default: false },
    noShadow: { type: Boolean, default: false },
    borderColor: { type: String, default: undefined }
  }
}
</script>


<style scoped>
.card {
  border-radius: 6px;
  background-color: var(--white);
  overflow: hidden;
}
.card.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}
.card.bordered {
  border: solid 1px var(--very-light-purple);
  border-bottom-width: 6px;
  border-bottom-color: var(--primary);
  box-shadow: none;
}
.card.bordered:hover {
  transition: 0.2s ease;
  border: solid 1px var(--primary);
  border-bottom-width: 6px;
  border-bottom-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary) inset;
}
.card.bordered.thin {
  border: solid 2px transparent;
  box-shadow: 0 0 0 1px var(--very-light-purple) inset;
}
.card.bordered.thin:hover {
  transition: 0.2s ease;
  border-color: var(--primary);
  box-shadow: none;
}
</style>