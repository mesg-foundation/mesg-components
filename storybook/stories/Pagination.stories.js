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
      <Pagination :total="itemLength" :page-size="pageSize" :current-page="currentPage" @render-change="renderChange"/>
      <span>Page size: {{pageSize}} | Current page: {{currentPage}}</span>
    </div>
  `,
    data: () => ({ itemLength: 90, pageSize: 10, currentPage: 1 }),
    methods: {
      renderChange(value) {
        this.pageSize = value.pageSize
        this.currentPage = value.currentPage
      }
    }
  }))
  .add('Hide Selection', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination :total="itemLength" :page-size="pageSize" :current-page="currentPage" @render-change="renderChange" hide-select/>
      <span>Page size: {{pageSize}} | Current page: {{currentPage}}</span>
    </div>
  `,
    data: () => ({ itemLength: 90, pageSize: 10, currentPage: 1 }),
    methods: {
      renderChange(value) {
        this.pageSize = value.pageSize
        this.currentPage = value.currentPage
      }
    }
  }))
