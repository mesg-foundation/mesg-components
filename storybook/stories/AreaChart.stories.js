import { storiesOf } from '@storybook/vue'
import AreaChart from '@mesg-components/chart/Area/AreaChart'

const categories = new Array(20).fill(null).map((_, i) => new Date(new Date() - i * 24 * 60 * 60 * 1000).toDateString())

const items = [
  { name: 'Sale', color: '#2e1359', data: new Array(20).fill(null).map(() => Math.random() * 5000000) },
  { name: 'Partners & Bounties', color: '#7e44d8', data: new Array(20).fill(null).map(() => Math.random() * 1000000) },
  { name: 'Investors, Founders & Team', color: '#c2a3ff', data: new Array(20).fill(null).map(() => Math.random() * 2000000) },
  { name: 'Reserve', color: '#dfcdf7', data: new Array(20).fill(null).map(() => Math.random() * 0) }
]

const oneItem = [{ name: 'Partners & Bounties', color: '#7e44d8', data: new Array(20).fill(null).map(() => Math.random() * 1000000) }]

storiesOf('AreaChart', module)
  .add('Normal type', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="normal"/>`,
    data: () => ({ categories, items })
  }))
  .add('Percent type', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="percent"/>`,
    data: () => ({ categories, items })
  }))
  .add('With Title and Subtitle', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="percent" title="Distribution" sub-title="Subtitle description"/>`,
    data: () => ({ categories, items })
  }))
  .add('Without legend', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="percent" title="Distribution" sub-title="Subtitle description" no-legend/>`,
    data: () => ({ categories, items })
  }))
  .add('With X and Y title', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="percent" title="Distribution" sub-title="Subtitle description" x-title="Datetime" y-title='Percent Value'/>`,
    data: () => ({ categories, items })
  }))
  .add('Without X and Y label', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="percent" no-x-label no-y-label/>`,
    data: () => ({ categories, items })
  }))
  .add('Only Data', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="percent" no-x-label no-y-label no-legend/>`,
    data: () => ({ categories, items })
  }))
  .add('Without tooltip', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="normal" no-tooltip/>`,
    data: () => ({ categories, items })
  }))
  .add('Area Gradient color', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="oneItem" :fill-color-option="fillColorOption" area-type="normal" no-tooltip no-legend/>`,
    data: () => ({
      categories,
      oneItem,
      fillColorOption: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [[0, '#7e44d8'], [1, 'rgba(126,68,216, 0)']]
      }
    })
  }))
  .add('Area background transparent ', () => ({
    components: { AreaChart },
    template: `<AreaChart :categories="categories" :items="items" area-type="normal" :chart-style-option="chartStyleOption" />`,
    data: () => ({ categories, items, chartStyleOption: { backgroundColor: 'transparent' } })
  }))
