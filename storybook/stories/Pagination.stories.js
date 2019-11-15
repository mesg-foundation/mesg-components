import { storiesOf } from '@storybook/vue'
import Pagination from '@mesg-components/pagination'

storiesOf('Pagination', module)
  .add('default', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination :total="itemLength" :page-size.sync="pageSize" :current-page.sync="currentPage"/>
      <span>Page size: {{pageSize}} | Current page: {{currentPage}}</span>
    </div>
  `,
    data: () => ({ itemLength: 90, pageSize: 10, currentPage: 1 })
  }))
  .add('Hide Selection', () => ({
    components: { Pagination },
    template: `
    <div class="container">
      <Pagination :total="itemLength" :page-size="pageSize" :current-page.sync="currentPage" hide-select/>
      <span>Page size: {{pageSize}} | Current page: {{currentPage}}</span>
    </div>
  `,
    data: () => ({ itemLength: 90, pageSize: 10, currentPage: 1 })
  }))
