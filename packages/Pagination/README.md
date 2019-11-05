# @MESG-COMPONENTS/PAGINATION

## Install

`npm install @mesg-components/pagination` or `yarn add @mesg-components/pagination`

## Properties

- **perPage**: `Number`, **Optional**, The default is `10`.
- **totalOfItems**: `Number`, **Required**.
- **v-model**: `Number`, **Required**,The default is `1`.

## Example

```html
<template>
  <div>
    <table :items="itemsPerPage(items,perPage)" :headers="headers">
      ...
      <template v-slot:item_id="{ item }">
        {{ item.id }}
      </template>
      ...
    </table>

    <!-- Padgination Component -->
    <pagination :per-page="perPage" :total-of-items="items.length" v-model="currentPage" />
  </div>
</template>

<script>
  import Pagination from '@mesg-components/pagination'
  import Table from '@mesg-components/table'
  export default {
    components: { Pagination, Table },
    data() {
      return {
        items: [{id: 1}, {id: 2},{id: 3},...{id: n}]
        currentPage: 1
        perPage: 20,
        headers: [{key: 'id', value:'id'}]
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
