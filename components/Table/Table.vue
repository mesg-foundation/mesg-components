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
        <template v-for="row in items">
          <tr :key="row.link" @click="expandDetail(row.id)">
            <td v-for="(header,i) in headers" :key="i">
              <div :style="align(header.align)">
                <a v-if="header.link" :href="row[header.value]" target="_blank">
                  <img :src="link(header.icon)" />
                </a>
                <div v-else-if="header.collapse" class="collapse">
                  <img :src="src(row.id)" />
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
          <tr v-if="toggle.includes(row.id)" :key="row.id">
            <td :colspan="headers.length">
              <TableRow
                :distributions="row.distributions"
                :title="`Distribution of the MESG Token released`"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "@mesg-components/tableRow/TableRow";
export default {
  name: "mesgTable",
  components: {
    TableRow
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
  data() {
    return {
      expanded: [],
      isExpand: false,
      decimalDigit: 4,
      toggle: []
    };
  },
  filters: {
    number(value, decimalDigit) {
      return value.toLocaleString(undefined, {
        maximumFractionDigits: decimalDigit
      });
    }
  },
  methods: {
    src(id) {
      let expanded = this.expanded.find(e => e.id === id && e.isExpand);

      if (expanded) {
        return require(`../../assets/images/angle-up-purple.png`);
      } else {
        return require(`../../assets/images/angle-down-purple.png`);
      }
    },
    link(name) {
      return require(`../../assets/images/${name}.png`);
    },
    align(style) {
      return `text-align: ${style}`;
    },
    expandDetail(id) {
      const index = this.toggle.indexOf(id);
      if (index > -1) {
        this.toggle.splice(index, 1);
      } else {
        this.toggle.push(id);
      }

      const expanded = this.expanded.find(e => e.id === id);
      if (expanded) {
        expanded.isExpand = !expanded.isExpand;
      } else {
        this.expanded.push({ id, isExpand: true });
      }
    }
  }
};
</script>

<style scoped>
img {
  margin-top: 10px;
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

tbody {
  border: 1px solid #ddd;
}

th {
  padding: 10px 0px 10px 20px;
}
td {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
}

tbody > tr:hover {
  cursor: pointer;
}
</style>
