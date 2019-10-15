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
        <tr :key="`item${j}`" @click="toggleItem(j)" :class="{expandable}">
          <td v-for="header in headers" :key="header.key" :style="textAlign(header.align)">
            <slot :name="`item_${header.key}`" :item="item">{{ item[header.value] }}</slot>
          </td>
        </tr>
        <tr v-if="expandable && toggle.includes(j)" :key="`expand${j}`">
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
  name: 'Table',
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
    }
  },
  methods: {
    textAlign(align) {
      return {
        'text-align': align || 'left'
      }
    },
    toggleItem(id) {
      const index = this.toggle.indexOf(id)
      if (index > -1) {
        this.toggle.splice(index, 1)
      } else {
        this.toggle.push(id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

table {
  width: 100%;
  font-family: $font;
  border-spacing: 0px;
  border-collapse: collapse;
  border-spacing: 0 1em;
}

td {
  padding: 10px 20px;
}

tr {
  height: auto;
}

th {
  padding: 20px 20px;
}

thead tr {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--primary-dark);
}

tbody {
  box-shadow: 0 0 0 1px var(--primary-very-light);
}

tbody tr {
  border-bottom: solid 1px var(--primary-very-light);
}

.expandable {
  cursor: pointer;
}

.expandable:hover {
  background-color: var(--light-grey);
}
</style>
