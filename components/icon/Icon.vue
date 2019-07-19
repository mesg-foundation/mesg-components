<template>
  <img :src="src" name="name" :srcset="srcset" />
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    src() {
      return require(`../../assets/logos/${this.name}.png`)
    }, 
    srcset(){
      const img2x = require(`../../assets/logos/${this.name}@2x.png`)
      const img3x = require(`../../assets/logos/${this.name}@3x.png`)
      return `${img2x}, ${img3x}`
    }
  }
};
</script>
