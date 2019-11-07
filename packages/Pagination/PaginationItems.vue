<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button class="btn--events" type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
        <i class="fas fa-arrow-left"></i>
      </button>
    </li>
    <li v-for="page in paginationTriggers" :key="page" class="pagination-item">
      <button class="btn--items" type="button" @click="onClickPage(page)" :class="{active: value === page}">{{ page }}</button>
    </li>
    <li class="pagination-item">
      <button class="btn--events" type="button" @click="onClickNextPage" :disabled="isInLastPage">
        <i class="fas fa-arrow-right"></i>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    perPage: { type: Number, default: 10 },
    value: { type: Number, default: 1 },
    totalOfItems: { type: Number }
  },
  data() {
    return {
      btnPagination: null,
      maxVisibleButtons: 4
    }
  },
  computed: {
    totalPages() {
      const value = this.totalOfItems / this.perPage
      const validateValue = this.totalOfItems % this.perPage === 0
      const itemPage = validateValue ? value : value + 1
      return parseInt(itemPage)
    },
    isInFirstPage() {
      return this.value === 1
    },
    isInLastPage() {
      return this.value === this.totalPages
    },
    paginationTriggers() {
      const currentPage = this.value
      const pageCount = this.totalPages
      const visiblePagesCount = pageCount < this.maxVisibleButtons ? pageCount + 1 : this.maxVisibleButtons
      const visiblePagesThreshold = visiblePagesCount / 2

      const pagintationTriggersArray = Array(visiblePagesCount - 1).fill(0)

      if (currentPage <= visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
          return index + 1
        })
        return pagintationTriggers
      }

      if (currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
          return pageCount - index
        })
        return pagintationTriggers.reverse()
      }

      pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1
      const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
        return pagintationTriggersArray[0] + index
      })

      return pagintationTriggers
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit('input', 1)
    },
    onClickPreviousPage() {
      this.$emit('input', this.value - 1)
    },
    onClickPage(page) {
      this.$emit('input', page)
    },
    onClickNextPage() {
      this.$emit('input', this.value + 1)
    },
    onClickLastPage() {
      this.$emit('input', this.totalPages)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

ul li {
  display: inline;
}

.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

li:first-child {
  margin: 0;
}

li {
  margin-left: 5px;
}

li:last-child {
  margin-left: 5px;
}

button {
  cursor: pointer;
  font-size: 12px;
  outline: none;
  max-height: 35px;
  min-height: 35px;
  i {
    font-size: 12px;
  }
}

button:disabled,
button[disabled] {
  border: none;
  background-color: rgba(#cccccc, 0.8);
  color: $light-grey;
  cursor: not-allowed;
  &:hover {
    color: $light-grey;
    border: none;
  }
}

.active {
  color: $white !important;
  background-color: $primary-light;
  border: 1px solid $primary-light;
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
  max-width: 40px;
  min-width: 40px;
  border-radius: 6px;
  color: $primary-very-light;
  &:hover {
    color: $primary-light;
    border: 1px solid $primary-light;
  }
}
</style>