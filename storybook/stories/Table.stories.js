import { storiesOf } from '@storybook/vue'
import Table from '@mesg-components/table/Table'

import '../style.css'

storiesOf('Table', module)
  .add('default', () => ({
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
        { text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
        { text: 'Token Release', align: 'center', value: 'tokenRelease' },
        { text: 'Percentage', align: 'center', value: 'percentage' },
        { text: 'Link', align: 'center', value: 'link' }
      ],
      items: [
        {
          id: 1,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 2,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 3,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 4,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 5,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 6,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 7,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 8,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 9,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 10,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        }
      ]
    })
  }))
  .add('expand', () => ({
    components: { Table },
    template: `<Table
      :headers="headers"
      :items="items"
      showExpand
    >
      <div class="item-background">
        <div class="container-header">Distribution of the MESG Token released</div>
        <ul class="container flex">
          <li class="item flex-item">
            <div class="circle sale"></div>
            <div class="margin-20 bold">Sale</div>
            <div class="margin-10 margin-40">
              <label class="label">Amount:</label>
              <label class="value">73,398.48</label>
            </div>
            <div class="margin-40">
              <label class="label">Percentage:</label>
              <label class="value">2%</label>
            </div>
          </li>

          <li class="item flex-item">
            <div class="circle founder"></div>
            <div class="margin-20 bold">Founders & Team</div>
            <div class="margin-10 margin-40">
              <label class="label">Amount:</label>
              <label class="value">146,796.95</label>
            </div>
            <div class="margin-40">
              <label class="label">Percentage:</label>
              <label class="value">4%</label>
            </div>
          </li>

          <li class="item flex-item">
            <div class="circle partner"></div>
            <div class="margin-20 bold">Partners & Bounties</div>
            <div class="margin-10 margin-40">
              <label class="label">Amount:</label>
              <label class="value">36,699.24</label>
            </div>
            <div class="margin-40">
              <label class="label">Percentage:</label>
              <label class="value">1%</label>
            </div>
          </li>

          <li class="item flex-item">
            <div class="circle reserve"></div>
            <div class="margin-20 bold">Reserve</div>
            <div>
              <label class="label">Amount:</label>
              <label class="value">0.00</label>
            </div>
            <div>
              <label class="label">Percentage:</label>
              <label class="value">0%</label>
            </div>
          </li>
        </ul>
      </div> 
    </Table>`,
    data: () => ({
      headers: [
        {
          text: 'Date',
          align: 'left',
          value: 'date'
        },
        { text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
        { text: 'Token Release', align: 'center', value: 'tokenRelease' },
        { text: 'Percentage', align: 'center', value: 'percentage' },
        { text: 'Link', align: 'center', value: 'link' }
      ],
      items: [
        {
          id: 1,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 2,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 3,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 4,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 5,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 6,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 7,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 8,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 9,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        },
        {
          id: 10,
          date: 'Fri, 05 Jul 2019 07:00:12 GMT',
          tradeVolume: '3,598,919.08',
          tokenRelease: '251,924.34',
          percentage: 6.0,
          link: 24
        }
      ]
    })
  }))
