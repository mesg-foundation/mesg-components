import { storiesOf } from '@storybook/vue'
import Pagination from '@mesg-components/pagination'

const headers = [
  { key: 'date', text: 'Date', align: 'left', value: 'date' },
  { key: 'volume', text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
  { key: 'token', text: 'Token Release', align: 'center', value: 'tokenRelease' },
  { key: 'percentage', text: 'Percentage', align: 'center', value: 'percentage' },
  { key: 'link', text: 'Link', align: 'center', value: 'link' }
]

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
      <Pagination v-model="pagination" :total-of-items="items.length" />
      <div pt1>{{pagination}}</div>
    </div>
  `,
    data: () => ({ headers, items, itemLength: items.length, pagination: { currentPage: 1, itemPerPage: 20 } })
  }))
  .add('Hide Selection', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination v-model="pagination" :total-of-items="items.length" hide-selection/>
      <div pt1>{{pagination}}</div>
    </div>
  `,
    data: () => ({ headers, items, itemLength: items.length, pagination: { currentPage: 1, itemPerPage: 20 } })
  }))
  .add('Hide pagination items page', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination v-model="pagination" :total-of-items="items.length" hide-items/>
      <div pt1>{{pagination}}</div>
    </div>
  `,
    data: () => ({ headers, items, itemLength: items.length, pagination: { currentPage: 1, itemPerPage: 20 } })
  }))
