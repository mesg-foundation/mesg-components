import { storiesOf } from '@storybook/vue'
import Pagination from '@mesg-components/pagination'

const items = new Array(90).fill(null).map((x, i) => {
  const percentage = Math.random() * 10
  const volume = Math.random() * 5000000
  return {
    id: i + 1,
    date: new Date() - i * 24 * 60 * 60 * 1000,
    tradeVolume: volume,
    tokenRelease: volume * percentage,
    percentage: percentage,
    txhash: '0x'
  }
})

storiesOf('Pagination', module)
  .add('default', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination v-model="pagination" :total-of-items="itemLength" />
      <div pt1>{{pagination}}</div>
    </div>
  `,
    data: () => ({ itemLength: 90, pagination: { currentPage: 1, itemPerPage: 20 } })
  }))
  .add('Hide Selection', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination v-model="pagination" :total-of-items="itemLength" hide-select/>
      <div pt1>{{pagination}}</div>
    </div>
  `,
    data: () => ({ itemLength: items.length, pagination: { currentPage: 1, itemPerPage: 50 } })
  }))
