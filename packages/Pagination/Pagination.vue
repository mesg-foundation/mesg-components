<template>
  <div class="pagination">
    <PaginationItems :current-page="isPageChange" :total="total" :per-page="isSizeChange" @current-change="pageChange" />
    <PaginationRowDisplay v-if="!hideSelect" :page-size="isSizeChange" @size-change="sizeChange" />
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
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    total: { type: Number, default: 0 }
  },
  data() {
    return {
      isSizeChange: 10,
      isPageChange: 1
    }
  },
  mounted() {
    this.isSizeChange = this.pageSize ? this.pageSize : this.isSizeChange
    this.isPageChange = this.currentPage ? this.currentPage : this.isPageChange
  },
  methods: {
    sizeChange(val) {
      this.isPageChange = 1
      this.isSizeChange = parseInt(val)
      this.$emit('render-change', { currentpage: 1, pageSize: parseInt(val) })
    },
    pageChange(val) {
      this.isPageChange = parseInt(val)
      this.$emit('render-change', { currentpage: parseInt(val), pageSize: this.isSizeChange })
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