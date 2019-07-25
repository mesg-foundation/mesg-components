import { storiesOf } from '@storybook/vue'
import PieChart from '@mesg-components/chart/Pie/PieChart'

import '../style.css'

const items = [
  { name: 'Sale', y: 2.5, color: '#2e1359' },
  { name: 'Partners & Bounties', y: 1.5, color: '#7e44d8' },
  { name: 'Investors, Founders & Team', y: 2, color: '#c2a3ff' },
  { name: 'Reserve', y: 0, color: '#dfcdf7' }
]

storiesOf('PieChart', module)
  .add('With data', () => ({
    components: { PieChart },
    template: `<PieChart :items="items" :title="title" title-color="#491e8c" sub-color="#3c3940" :sub-title="subTitle" />`,
    data: () => ({ items, title: '6%', subTitle: 'MESG Tokens released from yesterday’s <br/> trading volume' })
  }))
  .add('Without credits', () => ({
    components: { PieChart },
    template: `<PieChart :items="items" :title="title" title-color="#491e8c" sub-color="#3c3940" :sub-title="subTitle" no-credit/>`,
    data: () => ({ items, title: '6%', subTitle: 'MESG Tokens released from yesterday’s <br/> trading volume' })
  }))
  .add('Without legend', () => ({
    components: { PieChart },
    template: `<PieChart :items="items" :title="title" title-color="#491e8c" sub-color="#3c3940" :sub-title="subTitle" no-legend/>`,
    data: () => ({ items, title: '6%', subTitle: 'MESG Tokens released from yesterday’s <br/> trading volume' })
  }))
  .add('Without tooltip', () => ({
    components: { PieChart },
    template: `<PieChart :items="items" :title="title" title-color="#491e8c" sub-color="#3c3940" :sub-title="subTitle" no-tooltip/>`,
    data: () => ({ items, title: '6%', subTitle: 'MESG Tokens released from yesterday’s <br/> trading volume' })
  }))
