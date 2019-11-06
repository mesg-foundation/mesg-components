<template>
  <div>
    <SelectItems v-model="value.itemPerPage" />
    <ItemPagination v-model="value.currentPage" :total-of-items="totalOfItems" :per-page="value.itemPerPage" />
  </div>
</template>

<script>
import SelectItems from './SelectItems'
import ItemPagination from './ItemPagination'

export default {
  name: 'Pagination',
  components: { SelectItems, ItemPagination },
  props: {
    value: { type: Object, required: true },
    totalOfItems: { type: Number, default: 0 }
  }
}
</script>

<style lang="scss" scoped>
</style>