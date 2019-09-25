<template>
  <div class="circular" :style="{width: size,height : size}"></div>
</template>

<script>
export default {
  name: 'CircularProgressbar',
  props: {
    size: { type: String, default: '50px' }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme';

.circular {
  border: 0.5rem solid $primary;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  animation: 1s rotate linear infinite;
  position: relative;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>