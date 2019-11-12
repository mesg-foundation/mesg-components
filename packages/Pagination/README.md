# @MESG-COMPONENTS/PAGINATION

## Install

`npm install @mesg-components/pagination` or `yarn add @mesg-components/pagination`

## Properties

- **total**: `Number`, **Required**. -> _length number of items_
- **pageSize**: `Number`, **Optional**. _The default is `10`_ , -> _Size display items on page_
- **currentPage**: `Number`, **Optional**. _The default is `1`_, -> _Number of current pagination_
- **hideSelect**: `Number`, **Optional**. _The default is `false`_, -> _Don't display page-size select_

## Event

- `render-change` _this event return a current-page value and page-size value as object type_

## Example

**Default:**

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

    <pagination :total="items.length" :current-page="currentPage" :page-size="pageSize" @render-change="renderChange" />
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
      renderChange(value) {
        // values will be object {currentPage: xxx , pageSize: xxx }
        ...
      }
    }
  }
</script>
```

**Hide selection:**

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

    <pagination :total="items.length" @render-change="renderChange" hide-select />
  </div>
</template>
```
