# @MESG-COMPONENTS/PAGINATION

## Install

`npm install @mesg-components/pagination` or `yarn add @mesg-components/pagination`

## Properties

- **hideSelect**: `Number`, **Optional**. _The default is `false`_
- **totalOfItems**: `Number`, **Required**.
- **v-model**: `Object`, **Required**.

## Slot

- none

## Example

```html
<template>
  <div>
    <table :items="itemsPerPage(items,paginationConfig.itemPerPage)" :headers="headers">
      ...
      <template v-slot:item_id="{ item }">
        {{ item.id }}
      </template>
      ...
    </table>

    <!-- Padgination Component -->
    <pagination :total-of-items="items.length" v-model="paginationConfig" />
  </div>
</template>

<script>
  import Pagination from '@mesg-components/pagination'
  import Table from '@mesg-components/table'
  export default {
    components: { Pagination, Table },
    data() {
      return {
        items: [{ id: 1 }, { id: 2 }, { id: 3 }, ...{ id: n }],
        paginationConfig: { currentPage: 1, itemPerPage: 20 },
        headers: [{ key: 'id', value: 'id' }]
      }
    },
    methods: {
      itemsPerPage(array, perPageNumber) {
        let current = this.currentPage * perPageNumber - perPageNumber
        const ranges = array.length
        let end = current + perPageNumber
        const part = array.slice(current, end)
        return part
      }
    }
  }
</script>
```
