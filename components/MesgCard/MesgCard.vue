<template>
  <div class="card" :style="cardStyle" :class="{colored,bordered,shadow: !noShadow}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MesgCard',
  props: {
    width: { type: String, default: '490px' },
    height: { type: String, default: '348px' },
    noShadow: { type: Boolean, default: false },
    bordered: { type: Boolean, default: false },
    colored: { type: Boolean, default: false }
  },
  computed: {
    cardStyle() {
      return { width: `${this.width}`, height: `${this.height}` }
    }
  }
}
</script>

<style >
@import '../../assets/style.css';
.card {
  border-radius: 6px;
  background-color: var(--White);
}
.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}
.bordered {
  border: solid 1px var(--lavender-2);
}
.colored {
  border-bottom: solid 6px var(--Purple-3);
}
</style>