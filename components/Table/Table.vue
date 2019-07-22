<template>
  <div>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:items="props">
        <td v-for="(header,i) in headers" :key="i">
          <a v-if="header.link" :href="props.item[header.value]" target="_blank">
            <img :src="src(header.icon)" :srcset="srcset(header.icon)" />
          </a>
          <div v-else-if="header.collapse" class="collapse">
            <img :src="src(header.icon)" />
          </div>
          <div v-else>{{ props.item[header.value] }}</div>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "mytable",
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  computed: {},
  methods: {
    src(name) {
      return require(`../../assets/images/${name}.png`);
    },
    srcset(name) {
      const img2x = require(`../../assets/images/${name}@2x.png`);
      const img3x = require(`../../assets/images/${name}@3x.png`);
      return `${img2x}, ${img3x}`;
    }
  }
};
</script>

<style scoped>
img {
  margin-top: 20px;
  margin-bottom: 20px;
}

.collapse {
  cursor: pointer;
  text-align: center;
  margin: 20px;
}
</style>
