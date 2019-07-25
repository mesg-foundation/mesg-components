import { storiesOf } from '@storybook/vue'
import Table from './Table.vue'
import '../../assets/style.css'

storiesOf('Table', module)
  .add('default-noExpand', () => ({
    components: { Table },
    template: `
      <Table
        :headers="headers"
        :items="items"
      ></Table>`,
    data: () => ({
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      items: [
        {
          id: 1,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Partner', amount: '7339366998.48', percentage: 1 },
            { name: 'Founder', amount: '146796.24', percentage: 4 },
            { name: 'Reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 2,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Partner', amount: '7339366998.48', percentage: 1 },
            { name: 'Founder', amount: '146796.24', percentage: 4 },
            { name: 'Reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 3,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 4,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 5,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 6,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 7,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 8,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 9,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 10,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          distributions: [
            { name: 'Sale', amount: '73398.48', percentage: 2 },
            { name: 'Sale', amount: '7339366998.48', percentage: 1 },
            { name: 'Sale', amount: '146796.24', percentage: 4 },
            { name: 'Sale', amount: '0.00', percentage: 0 }
          ]
        }
      ]
    })
  }))
  .add('default-showExpand', () => ({
    components: { Table },
    template: `
      <Table showExpand
        :headers="headers"
        :items="items"
        subTitle='Custom title name'        
      >    
      </Table>`,
    data: () => ({
      headers: [
        { text: 'Date', align: 'left', value: 'date', type: 'date' },
        { text: 'Trade Volume', align: 'left', value: 'tradeVolume', type: 'number', decimalDigit: 4 },
        { text: 'Token Release', align: 'left', value: 'tokenRelease', type: 'number', decimalDigit: 4 },
        { text: 'Percentage', align: 'left', value: 'percentage', type: 'percentage' },
        { text: 'Link', align: 'center', value: 'link', link: true, icon: 'etherscan' }
      ],
      items: [
        {
          id: 1,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: 1234.08989,
          tokenRelease: 251924.3499899889,
          percentage: '7',
          link: 'link1',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '1234.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 4 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 2,
          date: 'Sat, 06 Jul 2019 07:00:12 GMT',
          tradeVolume: 5678.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link2',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '5678.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 3,
          date: 'Sun, 07 Jul 2019 07:00:12 GMT',
          tradeVolume: 9012.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link3',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '9876.48', percentage: 2 },
            { name: 'partner', amount: '3333366998.48', percentage: 1 },
            { name: 'founder', amount: '111796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        }
      ]
    })
  }))
  .add('custom-header', () => ({
    components: { Table },
    template: `
      <Table :items="items" :headers="headers" showExpand>
        <template slot="columns">
          <th>Date(Custom)</th>
          <th>Trade Volume(Custom)</th>
          <th>Token Release(Custom)</th>
          <th>Percentage(Custom)</th>
          <th>Link(Custom)</th>        
        </template>        
        <template slot="expandItem" slot-scope="{ distributes }">
          <div class="item-background"> Hello world </div>
        </template>
      </Table>`,
    data: () => ({
      headers: [
        { text: 'Date', align: 'left', value: 'date', type: 'date' },
        { text: 'Trade Volume', align: 'left', value: 'tradeVolume', type: 'number', decimalDigit: 4 },
        { text: 'Token Release', align: 'left', value: 'tokenRelease', type: 'number', decimalDigit: 4 },
        { text: 'Percentage', align: 'left', value: 'percentage', type: 'percentage' },
        { text: 'Link', align: 'center', value: 'link', link: true, icon: 'etherscan' }
      ],
      items: [
        {
          id: 1,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: 1234.08989,
          tokenRelease: 251924.3499899889,
          percentage: '7',
          link: 'link1',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '1234.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 4 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 2,
          date: 'Sat, 06 Jul 2019 07:00:12 GMT',
          tradeVolume: 5678.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link2',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '5678.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 3,
          date: 'Sun, 07 Jul 2019 07:00:12 GMT',
          tradeVolume: 9012.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link3',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '9876.48', percentage: 2 },
            { name: 'partner', amount: '3333366998.48', percentage: 1 },
            { name: 'founder', amount: '111796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        }
      ]
    })
  }))
  .add('custom-header-row', () => ({
    components: { Table },
    template: `
      <Table :items="items" :headers="headers" showExpand>
        <template slot="columns">
          <th>Date</th>
          <th>Trade Volume</th>
          <th>Token Release</th>
          <th>Percentage</th>
          <th>Link</th>        
        </template>
        <template slot-scope="{ row }">
          <td>{{ row.date }}</td>
          <td>{{ row.tradeVolume }}</td>
          <td>{{ row.tokenRelease }}</td>
          <td>{{ row.percentage }}</td>
          <td>{{ row.link }}</td>
        </template>
        <template slot="expandItem" slot-scope="{ distributes }">
          <div class="item-background"> Hello world </div>
        </template>
      </Table>`,
    data: () => ({
      headers: [
        { text: 'Date', align: 'left', value: 'date', type: 'date' },
        { text: 'Trade Volume', align: 'left', value: 'tradeVolume', type: 'number', decimalDigit: 4 },
        { text: 'Token Release', align: 'left', value: 'tokenRelease', type: 'number', decimalDigit: 4 },
        { text: 'Percentage', align: 'left', value: 'percentage', type: 'percentage' },
        { text: 'Link', align: 'center', value: 'link', link: true, icon: 'etherscan' }
      ],
      items: [
        {
          id: 1,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: 1234.08989,
          tokenRelease: 251924.3499899889,
          percentage: '7',
          link: 'link1',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '1234.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 4 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 2,
          date: 'Sat, 06 Jul 2019 07:00:12 GMT',
          tradeVolume: 5678.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link2',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '5678.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 3,
          date: 'Sun, 07 Jul 2019 07:00:12 GMT',
          tradeVolume: 9012.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link3',
          collapse: '',
          distributions: [
            { name: 'sale', amount: '9876.48', percentage: 2 },
            { name: 'partner', amount: '3333366998.48', percentage: 1 },
            { name: 'founder', amount: '111796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        }
      ]
    })
  }))
  .add('custom-expand', () => ({
    components: { Table },
    template: `
      <Table :items="items" :headers="headers" showExpand subTitle="Distribution of the MESG Token released">   
        <template slot="expandItem" slot-scope="{ distributions,subTitle }" >
          <div class="item-background">
          <p class="container-header">Distribution of the MESG Token released</p>
          <ul class="container flex">
            <li class="item flex-item" v-for="(distribute,i) in distributions" :key="i">            
                <div class="circle margin-20" :class="distribute.name"></div>
                <div class="margin-20 bold">{{distribute.name}}</div>
                <div class="margin-20">
                  <label class="label">Amount:</label>
                  <label class="value">{{distribute.amount}}</label>
                </div>
                <div class="margin-20">
                  <label class="label">Percentage</label>
                  <label class="value">{{distribute.percentage}}</label>
                </div>              
            </li>
          </ul>
          </div>
        </template>
      </Table>`,
    data: () => ({
      headers: [
        { text: 'Date', align: 'left', value: 'date', type: 'date' },
        { text: 'Trade Volume', align: 'left', value: 'tradeVolume', type: 'number', decimalDigit: 4 },
        { text: 'Token Release', align: 'left', value: 'tokenRelease', type: 'number', decimalDigit: 4 },
        { text: 'Percentage', align: 'left', value: 'percentage', type: 'percentage' },
        { text: 'Link', align: 'center', value: 'link', link: true, icon: 'etherscan' }
      ],
      items: [
        {
          id: 1,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: 1234.08989,
          tokenRelease: 251924.3499899889,
          percentage: '7',
          link: 'link1',
          name: 'Distribution of the MESG Token released',
          distributions: [
            { name: 'sale', amount: '1234.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 4 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 2,
          date: 'Sat, 06 Jul 2019 07:00:12 GMT',
          tradeVolume: 5678.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link2',
          name: 'Distribution of the MESG Token released',
          distributions: [
            { name: 'sale', amount: '5678.48', percentage: 2 },
            { name: 'partner', amount: '7339366998.48', percentage: 1 },
            { name: 'founder', amount: '146796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        },
        {
          id: 3,
          date: 'Sun, 07 Jul 2019 07:00:12 GMT',
          tradeVolume: 9012.087655,
          tokenRelease: 351924.349876,
          percentage: '6',
          link: 'link3',
          name: 'Distribution of the MESG Token released',
          distributions: [
            { name: 'sale', amount: '9876.48', percentage: 2 },
            { name: 'partner', amount: '3333366998.48', percentage: 1 },
            { name: 'founder', amount: '111796.24', percentage: 2 },
            { name: 'reserve', amount: '0.00', percentage: 0 }
          ]
        }
      ]
    })
  }))
