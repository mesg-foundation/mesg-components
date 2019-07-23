import { storiesOf } from '@storybook/vue'
import Table from './Table.vue'
import '../../plugin/vuetify'
import '../../plugin/filter.number'
import '../../plugin/filter.date'

storiesOf('Table', module)
  .add('default', () => ({
    components: { Table },
    template: `
  <v-app>
    <v-content>
      <Table
        :headers="headers"
        :items="items"
      ></Table>
    </v-content>
  </v-app>`,
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
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    })
  }))
  .add('distribution', () => ({
    components: { Table },
    template: `
  <v-app>
    <v-content>
      <Table
        :headers="headers"
        :items="items"
      ></Table>
    </v-content>
  </v-app>`,
    data: () => ({
      headers: [
        { text: 'Date', align: 'left', value: 'date',type:'date' },
        { text: 'Trade Volume', align: 'left', value: 'tradeVolume', type:'number' },
        { text: 'Token Release', align: 'left', value: 'tokenRelease' , type:'number'},
        { text: 'Percentage', align: 'left', value: 'percentage', type:'percentage' },
        { text: 'Link', align: 'left', value: 'link', link: true, icon: 'etherscan' },
        { text: 'Collapse', align: 'center', sortable: false, value: 'collapse', collapse: true, icon: 'down-purple' }
      ],
      items: [
        {
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: 3598919.08,
          tokenRelease: 251924.34,
          percentage: '7',
          link: 'https://etherscan.io/tx/0xa079c2ef2286e3e8b68745e0a35a17aa22b392e30189c2e5a506bbfdb26babd6',
          collapse: '',
          count: 1
        },
        {
          date: 'Sat, 06 Jul 2019 07:00:12 GMT',
          tradeVolume: 4598920.08,
          tokenRelease: 351924.34,
          percentage: '6',
          link: 'https://etherscan.io/tx/0x31de0dfd21be29496eacc026e001b6dede73c4a31254afc837fe7693a2158ab1',
          collapse: '',
          count:2
        }
      ]
    })
  }))
