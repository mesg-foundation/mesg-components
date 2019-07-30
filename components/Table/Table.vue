<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.text" :style="textAlign(header.align)">{{header.text}}</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in items">
        <tr :key="item.length" @click="expandDetail(item.id)">
          <td
            v-for="header in headers"
            :key="header.text"
            :style="textAlign(header.align)"
          >{{ item[header.value]}}</td>
        </tr>
        <tr v-show="showExpand" v-if="toggle.includes(item.id)" :key="item.id" class="expand">
          <td :colspan="columnSpan" class="padding-20">
            <slot>{{ item }}</slot>
          </td>
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

/* Table row style */
.item-background {  
  padding-left: 0px;
  padding-right: 0px;  
  background-color: var(--Grey-2);
}

.container-header {
  margin-bottom: 20px;
}

.container {
  list-style: none;
  margin: 0;
  padding: 0;
}

.flex {
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-between;
}

.item {
  width: 281px;
}

.float-item {
  float: left;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.margin-20 {
  margin: 10px 20px 20px 0px;
}

.padding-20 {
  padding: 20px;
}

.margin-10 {
  margin-top: 10px;
}

.margin-40 {
  margin-right: 40px;
}

.bold {
  font-weight: 600;
  color: var(--Purple-1);
}

.sale {
  background-color: var(--Wallets-Sale);
}

.partner {
  background-color: var(--Wallets-Partners);
}

.founder {
  background-color: var(--Wallets-Founders);
}

.reserve {
  background-color: var(--Wallets-Reserve);
}

.value {
  color: var(--Grey-1);
  float: right;
}

.label {
  width: 102px;
  display: inline-block;
}
</style>
