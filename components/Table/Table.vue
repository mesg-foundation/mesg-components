<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, i) in headers" :key="i" :style="textAlign(header.align)">{{header.text}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, j) in items" :key="j">
        <td v-for="(header,i) in headers" :key="i" :style="textAlign(header.align)">
          <slot :name="header.key" :item="item">{{ item[header.value] }}</slot>
        </td>
      </tr>
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
    }
  },
  methods: {
    textAlign(align) {
      return {
        "text-align": align || "left"
      };
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
</style>
