import { storiesOf } from '@storybook/vue'
import Table from '@mesg-components/table/Table'

import '../style.css'

const headers = [
  { key: 'date', text: 'Date', align: 'left', value: 'date' },
  { key: 'volume', text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
  { key: 'token', text: 'Token Release', align: 'center', value: 'tokenRelease' },
  { key: 'percentage', text: 'Percentage', align: 'center', value: 'percentage' },
  { key: 'link', text: 'Link', align: 'center', value: 'link' }
]

const items = new Array(10).fill(null).map((x, i) => {
  const percentage = Math.random() * 10
  const volume = Math.random() * 5000000
  return {
    id: i + 1,
    date: new Date() - (i * 24 * 60 * 60 * 1000),
    tradeVolume: volume,
    tokenRelease: volume * percentage,
    percentage: percentage,
    txhash: '0x'
  }
})

storiesOf('Table', module).add('default', () => ({
  components: { Table },
  template: `<Table :items="items" :headers="headers">
    <template v-slot:date="{ item }">{{ new Date(item.date).toString() }}</template>
    <template v-slot:volume="{ item }">{{ parseInt(item.tradeVolume, 10) }}</template>
    <template v-slot:token="{ item }">{{ parseInt(item.tokenRelease, 10) }}</template>
    <template v-slot:percentage="{ item }">{{ parseInt(item.percentage, 10) }}%</template>
    <template v-slot:link="{ item }">
      <a :href="'https://etherscan.com/tx/'+item.txhash">{{ item.txhash }}</a>
    </template>
  </Table>`,
  data: () => ({
    headers,
    items
  })
}))
