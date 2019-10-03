<template>
  <div class="card" :class="{ bordered, thin, shadow: !noShadow,background }" :style="{borderBottomColor: borderColor, backgroundColor: bgColor,color: textColor}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    bordered: { type: Boolean, default: false },
    thin: { type: Boolean, default: false },
    background: { type: Boolean, default: false },
    noShadow: { type: Boolean, default: false },
    borderColor: { type: String, default: undefined },
    bgColor: { type: String, default: undefined },
    textColor: { type: String, default: undefined }
  }
}
</script>


<style lang="scss" scoped>
@import '@mesg-components/theme';

.card {
  border-radius: 6px;
  background-color: var(--White);
  overflow: hidden;
  padding: var(--margin);
}
.card.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}

.background {
  background-color: var(--light-grey);
}

.card.bordered {
  border: solid 1px var(--primary-very-light);
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
  box-shadow: 0 0 0 1px var(--primary-very-light) inset;
}
.card.bordered.thin:hover {
  transition: 0.2s ease;
  border-color: var(--primary);
  box-shadow: none;
}
</style>