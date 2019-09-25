import { storiesOf } from '@storybook/vue'
import Table from '@mesg-components/table'

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
    date: new Date() - i * 24 * 60 * 60 * 1000,
    tradeVolume: volume,
    tokenRelease: volume * percentage,
    percentage: percentage,
    txhash: '0x'
  }
})

storiesOf('Table', module)
  .add('default', () => ({
    components: { Table },
    template: `<Table :items="items" :headers="headers">  
    <template v-slot:item_date="{ item }">{{ new Date(item.date).toString() }}</template>
    <template v-slot:item_trade="{ item }">{{ parseInt(item.tradeVolume, 10) }}</template>
    <template v-slot:item_token="{ item }">{{ parseInt(item.tokenRelease, 10) }}</template>
    <template v-slot:item_percentage="{ item }">{{ parseInt(item.percentage, 10) }}%</template>
    <template v-slot:item_link="{ item }">
      <a :href="'https://etherscan.com/tx/'+item.txhash">{{ item.txhash }}</a>
    </template>
  </Table>`,
    data: () => ({
      headers,
      items
    })
  }))
  .add('expand', () => ({
    components: { Table },
    template: `<Table :items="items" :headers="headers" expandable>

    <template v-slot:header_link="{ header }">
      <h4> {{header.text}}</h4>
    </template>

    <template v-slot:item_date="{ item }">{{ new Date(item.date).toString() }}</template>
    <template v-slot:item_volume="{ item }">{{ parseInt(item.tradeVolume, 10) }}</template>
    <template v-slot:item_token="{ item }">{{ parseInt(item.tokenRelease, 10) }}</template>
    <template v-slot:item_percentage="{ item }">{{ parseInt(item.percentage, 10) }}%</template>
    <template v-slot:item_link="{ item }">
      <a :href="'https://etherscan.com/tx/'+item.txhash">{{ item.txhash }}</a>
    </template>

    <template v-slot:expand="{ item }">                  
      <ul>
      <li>    
          <div>
            <label>Traded Volume:</label>
            <label>{{ item.tradeVolume }}</label>
          </div>    
        </li>
        <li>    
          <div>
            <label>Token Release:</label>
            <label>{{ item.tokenRelease }}</label>
          </div>
        </li>
        <li>
          <div>
            <label>Percentage:</label>
            <label>{{ item.percentage }}</label>
          </div>
        </li>
      </ul>      
    </template>
  </Table>`,
    data: () => ({
      headers,
      items
    })
  }))
