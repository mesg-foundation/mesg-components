<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, i) in headers" :key="i" :style="textAlign(header.align)">
          <slot :name="`header_${header.key}`" :header="header">{{header.text}}</slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item,j) in items">
        <tr :key="item.date" @click="toggleItem(j)" @mouseover="mouseOver(j)" @mouseleave="mouseLeave(j)" :ref='"item-"+j'>
          <td v-for="header in headers" :key="header.key" :style="textAlign(header.align)">
            <slot :name="`item_${header.key}`" :item="item">{{ item[header.value] }}</slot>
          </td>
        </tr>
        <tr v-if="expandable && toggle.includes(j)" :key="j">
          <td :colspan="headers.length">
            <slot name="expand" :item="item" />
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
    expandable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: []      
    };
  },
  methods: {    
    mouseOver(rowIndex){
      if(!this.expandable) return

      let ref = this.$refs[`item-${rowIndex}`][0]      
      ref.style.background="var(--Grey-2)"
      ref.style.cursor = "pointer"
    },
    mouseLeave(rowIndex){
      if(!this.expandable) return
      
      let ref = this.$refs[`item-${rowIndex}`][0]      
      ref.style.backgroundColor=""      
    },
    textAlign(align) {
      return {
        "text-align": align || "left"
      };
    },
    toggleItem(id) {
      const index = this.toggle.indexOf(id);
      if (index > -1) {
        this.toggle.splice(index, 1);
      } else {
        this.toggle.push(id);
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
</style>
