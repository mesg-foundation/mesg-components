import { storiesOf } from '@storybook/vue'
import Table from '@mesg-components/table/Table'

import '../style.css'


storiesOf('Table', module).add('default', () => ({
  components: { Table },
  template: `<Table
      :headers="headers"
      :items="items"
    ></Table>`,
  data: () => ({
    headers: [
      {
        text: 'Date',
        align: 'left',
        value: 'date'
      },
      { text: 'Traded Volume', align:'center', value: 'tradeVolume' },
      { text: 'Token Release', align:'center', value: 'tokenRelease' },
      { text: 'Percentage', align:'center', value: 'percentage' },
      { text: 'Link', align:'center', value: 'link' }
    ],
    items: [
      {
        id: 1,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 2,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 3,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 4,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 5,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 6,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 7,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 8,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 9,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      },
      {
        id: 10,
        date: 'Fri, 05 Jul 2019 07:00:12 GMT',
        tradeVolume:'3,598,919.08',
        tokenRelease: '251,924.34',
        percentage: 6.0,
        link: 24
      }
    ]
  })
}))
