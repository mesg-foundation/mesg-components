<template>
  <div class="pagination">
    <button class="btn--events">prev</button>
    <button class="btn--items" v-for="(item) in btnPagination" :key="item">{{item}}</button>
    <button class="btn--events">next</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: { type: Number },
    perPage: { type: Number, default: 10 },
    value: { type: Number },
    totalOfItems: { type: Number, required: true }
  },
  data() {
    return {
      btnPagination: undefined
    }
  },
  mounted() {
    this.btnPagination = new Array(this.totalPages).fill(null).map((_, i) => i + 1)
  },
  computed: {
    totalPages() {
      const value = this.totalOfItems / this.perPage
      const validateValue = this.totalOfItems % this.perPage === 0
      const itemPage = validateValue ? value : value + 1
      return parseInt(itemPage)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.pagination {
  padding: $margin;
}

button {
  cursor: pointer;
  font-size: 12px;
  outline: none;
}

.btn--events {
  padding: calc(#{$margin}/ 3) $margin;
  border-radius: 6px;
  color: $primary-very-light;
  &:hover {
    color: $primary-light;
    border: 1px solid $primary-light;
  }
}

.btn--items {
  padding: calc(#{$margin}/ 3) calc(#{$margin}/ 2);
  margin: 5px;
  border-radius: 6px;
  color: $primary-very-light;
  &:hover {
    color: $primary-light;
    border: 1px solid $primary-light;
  }
  &:focus {
    color: $white;
    border: 1px solid $primary-light;
    background-color: $secondary;
  }
}
</style>