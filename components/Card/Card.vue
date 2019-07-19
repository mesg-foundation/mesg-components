<template>
  <div class="card" :class="{ bordered, thin, shadow: !noShadow }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    thin: {
      type: Boolean,
      default: false
    },
    noShadow: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>
@import '../../assets/style.css';

.card {
  border-radius: 6px;
  background-color: var(--white);
  overflow: hidden;
}
.card.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}
.card.bordered {
  border: solid 1px var(--lavender-2);
  border-bottom-width: 6px;
  border-bottom-color: var(--Purple-3);
  box-shadow: none;
}
.card.bordered:hover {
  transition: 0.2s ease;
  border: solid 1px var(--Purple-3);
  border-bottom-width: 6px;
  border-bottom-color: var(--Purple-3);
  box-shadow: 0 0 0 1px var(--Purple-3) inset;
}
.card.bordered.thin {
  border: solid 2px transparent;
  box-shadow: 0 0 0 1px var(--lavender-2) inset;
}
.card.bordered.thin:hover {
  transition: 0.2s ease;
  border-color: var(--Purple-3);
  box-shadow: none;
}
</style>