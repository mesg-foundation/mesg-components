<template>
  <div class="pagination">
    <PaginationItems v-model="value.currentPage" :total-of-items="totalOfItems" :per-page="value.itemPerPage" />
    <PaginationRowDisplay v-if="!hideSelect" v-model="value.itemPerPage" />
  </div>
</template>

<script>
import PaginationRowDisplay from './PaginationRowDisplay'
import PaginationItems from './PaginationItems'

export default {
  name: 'Pagination',
  components: { PaginationRowDisplay, PaginationItems },
  props: {
    hideSelect: { type: Boolean, default: false },
    value: { type: Object, required: true },
    totalOfItems: { type: Number, default: 0 }
  },
  watch: {
    'value.itemPerPage': function(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.value.currentPage = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>