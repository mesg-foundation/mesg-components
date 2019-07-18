<template>
  <div :class="card"></div>
</template>

<script>
export default {
  name: 'AtdCard',
  props: {
    card: { type: String, default: 'card' }
  }
}
</script>

<style >
@import '../../assets/style.css';
.card {
  width: 490px;
  height: 348px;
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--White);
}
.card-base {
  width: 225px;
  height: 144px;
  border-radius: 6px;
  border: solid 1px var(--lavender-2);
  background-color: var(--White);
}
.card-base-bottom {
  width: 225px;
  height: 144px;
  border-radius: 6px;
  border: solid 1px var(--lavender-2);
  border-bottom: solid 6px var(--Purple-3);
  background-color: var(--White);
}
</style>