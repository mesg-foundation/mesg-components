import { storiesOf } from '@storybook/vue'
import Pagination from '@mesg-components/pagination'
import Table from '@mesg-components/table'

const headers = [
  { key: 'date', text: 'Date', align: 'left', value: 'date' },
  { key: 'volume', text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
  { key: 'token', text: 'Token Release', align: 'center', value: 'tokenRelease' },
  { key: 'percentage', text: 'Percentage', align: 'center', value: 'percentage' },
  { key: 'link', text: 'Link', align: 'center', value: 'link' }
]

const items = new Array(101).fill(null).map((x, i) => {
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
    <Pagination v-model="perPage" :totalOfItems="itemLength"/>
    {{perPage}}
  </div>
  `,
    data: () => ({ perPage: 20, itemLength: 201 })
  }))
  .add('TEST', () => ({
    components: { Pagination, Table },
    template: `
    <div class="container">
      <Table :items="items" :headers="headers">  
        <template v-slot:item_date="{ item }">{{ new Date(item.date).toString() }}</template>
        <template v-slot:item_trade="{ item }">{{ parseInt(item.tradeVolume, 10) }}</template>
        <template v-slot:item_token="{ item }">{{ parseInt(item.tokenRelease, 10) }}</template>
        <template v-slot:item_percentage="{ item }">{{ parseInt(item.percentage, 10) }}%</template>
        <template v-slot:item_link="{ item }">
          <a :href="'https://etherscan.com/tx/'+item.txhash">{{ item.txhash }}</a>
        </template>
      </Table>
      <Pagination :page="page" :per-page="perPage" :total-of-items="itemLength" @nextPage="()=>{}" @prevPage="()=> {}"/>
    </div>`,
    data: () => ({ headers, items, perPage: 20, itemLength: items.length, page: 1 })
  }))
