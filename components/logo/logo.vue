<template>
  <img :src="src" :srcset="srcset" class="mesg" />
</template>

<script>
export default {
  props: {
    src: String,
    srcset: String
  }
};
</script>

<style scoped>
@import "/style.css";
.mesg {
  object-fit: contain;
}
</style>
