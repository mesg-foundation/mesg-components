<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, i) in headers" :key="i" :style="textAlign(header.align)">{{header.text}}</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item,j) in items">
        <tr :key="j" @click="expandDetail(item.id)">
          <td
            v-for="(header,i) in headers"
            :key="i"
            :style="textAlign(header.align)"
          >{{ item[header.value]}}</td>
        </tr>
        <tr v-show="showExpand" v-if="toggle.includes(item.id)" :key="item.id" class="expand">
          <td :colspan="columnSpan">{{ item }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    showExpand: Boolean
  },
  data() {
    return {
      toggle: [],
      expanded: []
    };
  },
  computed: {
    columnSpan() {
      return this.showExpand ? this.headers.length + 1 : this.headers.length;
    }
  },
  methods: {
    textAlign(align) {
      return {
        "text-align": align || "left"
      };
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
table {
  width: 100%;
  font-family: "Open Sans", sans-serif;
  border-spacing: 0px;

  border-collapse: collapse;
  border-spacing: 0 1em;
}

td {
  padding: 29px 0px 29px 20px;
}

tr {
  height: 80px;
}

thead tr {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--Purple-1);
}

tbody {
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 0 0 1px var(--lavender-2);
  border-radius: 5px;
}

tbody tr {
  border-bottom: solid 1px var(--lavender-2);
}

tbody tr:not(.expand):hover {
  cursor: pointer;
}

.expand {
  background-color: var(--Grey-2);
}
</style>
