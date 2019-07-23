<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(head,i) in headers" :key="i">
            <div :style="align(head.align)">{{ head.text}}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items" :key="rowIndex">
          <td v-for="(header,i) in headers" :key="i">
            <div :style="align(header.align)">
              <a v-if="header.link" :href="row[header.value]" target="_blank">
                <img :src="src(header.icon)" :srcset="srcset(header.icon)" />
              </a>
              <div v-else-if="header.collapse" class="collapse">
                <img :src="src(header.icon)" :srcset="srcset(header.icon)" />
              </div>
              <div
                v-else-if="header.type=='number'"
              >{{ row[header.value] | number(header.decimalDigit) }}</div>
              <div
                v-else-if="header.type=='percentage'"
              >{{ row[header.value] | number(header.decimalDigit) }}%</div>
              <div v-else>{{ row[header.value] }}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "mesgTable",
  data() {
    return {
      expand: false,
      decimalDigit: 4
    };
  },
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
  filters: {
    number(value, decimalDigit) {
      return value.toLocaleString(undefined, {
        maximumFractionDigits: decimalDigit
      })      
    }
  },
  methods: {
    src(name) {
      return require(`../../assets/images/${name}.png`);
    },
    srcset(name) {
      const img2x = require(`../../assets/images/${name}@2x.png`);
      const img3x = require(`../../assets/images/${name}@3x.png`);
      return `${img2x}, ${img3x}`;
    },
    align(style) {
      return `text-align: ${style}`;
    }
  }
};
</script>

<style scoped>
img {
  margin-top: 20px;
  margin-bottom: 20px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

tbody {
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tbody > tr:hover {
  cursor: pointer;
  background-color: lavender;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
