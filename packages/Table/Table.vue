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
          <td v-for="header in headers" :key="header.key" :style="textAlign(header.align)" :data-column="header.key">
            <slot :name="`item_${header.key}`" :item="item">{{ item[header.value] }}</slot>
          </td>
        </tr>
        <tr v-if="expandable && toggle.includes(j)" :key="`expand${j}`">
          <td :colspan="headers.length" class="setTextExpand">
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
        if (this.toggle.length > 0) {
          this.toggle.splice(index, 1)
        }
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
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
}

th {
  padding: var(--margin);
}

td {
  padding: var(--margin);
  text-align: left;
}

thead tr {
  color: var(--primary-dark);
}

tbody {
  border-radius: 6px;
  box-shadow: 0 0 0 1px var(--primary-very-light);
}

tbody tr {
  border-bottom: solid 1px var(--primary-very-light);
}

td.setTextExpand {
  background-color: var(--light-grey);
}

.expandable {
  cursor: pointer;
}

.expandable:hover,
.expandable:active,
.expandable:focus {
  background-color: var(--light-grey);
}

@media only screen and (max-width: $mobile-breakpoint), (min-device-width: $mobile-breakpoint + 1) and (max-device-width: $tablet-breakpoint) {
  table {
    width: 100%;
  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid var(--primary-very-light);
  }

  td {
    border: none;
    position: relative;
    padding-left: 30%;
    text-align: right !important;
  }

  td:before {
    position: absolute;
    text-align: left !important;
    top: 20px;
    left: 20px;
    width: 45%;
    white-space: nowrap;
    content: attr(data-column);
    color: var(--primary-dark);
    font-weight: bold;
  }

  td.setTextExpand {
    background-color: var(--light-grey);
    padding: var(--margin);
    text-align: left !important;
  }
}
</style>
