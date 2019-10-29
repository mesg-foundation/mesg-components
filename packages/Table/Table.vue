<template>
  <div :class="{compact}">
    <table>
      <thead v-if="!hideHeader">
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
  </div>
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
    hideHeader: {
      type: Boolean,
      default: false
    },
    expandable: {
      type: Boolean,
      default: false
    },
    compact: {
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

div {
  width: calc(100% - #{2 * $margin});
  margin: $margin;
  &.compact {
    width: 100%;
    margin: 0;
  }
}

table {
  width: 100%;
  font-family: $font;
  border-spacing: 0px;
  border-collapse: collapse;
  border-spacing: 0 1em;
}

td {
  padding: $margin;
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
}

tr {
  height: auto;
}

th {
  padding: $margin;
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
}

thead tr {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $primary-dark;
}

tbody tr {
  font-size: 17px;
  color: $dark-grey;
  border-bottom: solid 1px $primary-very-light;

  &:last-of-type {
    border-bottom: none;
  }
}

.expandable {
  cursor: pointer;
  &:hover {
    background-color: $light-grey;
  }
}
</style>
