<template>
  <div class="circular" :style="{width,height}"></div>
</template>

<script>
export default {
  name: 'CircularProgressbar',
  props: {
    width: { type: String, default: '50px' },
    height: { type: String, default: '50px' }
  }
}
</script>

<style scoped>
.circular {
  border: 0.5rem solid var(--Purple-3);
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