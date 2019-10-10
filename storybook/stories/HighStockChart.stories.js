import { storiesOf } from '@storybook/vue'
import HighStock from '@mesg-components/chart/HighStock'

const dateValue = new Array(100).fill(null).map((_, i) => new Date() - i * 24 * 60 * 60 * 1000)

const items = [
  {
    name: 'Traded Volume',
    color: '#2e1359',
    data: new Array(100).fill(null).map((_, i) => {
      return [dateValue[i], Math.random() * 50000]
    })
  },
  {
    name: 'Token Released',
    color: '#7e44d8',
    data: new Array(100).fill(null).map((_, i) => {
      return [dateValue[i], Math.random() * 90000]
    })
  },
  {
    name: 'Circulating Supply',
    color: '#c2a3ff',
    data: new Array(100).fill(null).map((_, i) => {
      return [dateValue[i], Math.random() * 300000]
    })
  }
]

const rangeSelector = {
  selected: 3,
  buttons: [
    { type: 'week', count: 1, text: '1w' },
    { type: 'month', count: 1, text: '1m' },
    { type: 'month', count: 3, text: '3m' },
    { type: 'month', count: 6, text: '6m' },
    { type: 'ytd', text: 'YTD' },
    { type: 'year', count: 1, text: '1y' },
    { type: 'all', text: 'All' }
  ]
}

const yAxis = [
  {
    opposite: false,
    labels: { align: 'center' },
    resize: { enabled: true }
  }
]

const yAxisOption = [
  {
    opposite: false,
    labels: { align: 'center' },
    height: '60%',
    resize: { enabled: true }
  },
  {
    opposite: true,
    labels: { align: 'center' },
    height: '60%',
    resize: { enabled: true }
  },
  {
    opposite: false,
    labels: { align: 'center' },
    top: '60%',
    height: '40%',
    offset: 0,
    resize: { enabled: true }
  }
]

const items2yAxis = [
  {
    type: 'column',
    name: 'Traded Volume',
    color: '#2e1359',
    data: new Array(100).fill(null).map((_, i) => {
      return [dateValue[i], Math.random() * 50000]
    }),
    yAxis: 2
  },
  {
    name: 'Token Released',
    color: '#7e44d8',
    data: new Array(100).fill(null).map((_, i) => {
      return [dateValue[i], Math.random() * 90000]
    }),
    yAxis: 1
  },
  {
    name: 'Circulating Supply',
    color: '#c2a3ff',
    data: new Array(100).fill(null).map((_, i) => {
      return [dateValue[i], Math.random() * 300000]
    })
  }
]

storiesOf('High Stock Chart', module)
  .add('default', () => ({
    components: { HighStock },
    template: `<HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis" range-selector/>`,
    data: () => ({ rangeSelector, yAxis, items })
  }))
  .add('2 yAxis', () => ({
    components: { HighStock },
    template: `<HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis" range-selector/>`,
    data: () => ({ rangeSelector, yAxis: yAxisOption, items: items2yAxis })
  }))
  .add('Without Navigator', () => ({
    components: { HighStock },
    template: `<HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis" range-selector noNavigator/>`,
    data: () => ({ rangeSelector, yAxis, items })
  }))
  .add('Without rangeSelector', () => ({
    components: { HighStock },
    template: `<HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis"/>`,
    data: () => ({ rangeSelector, yAxis: yAxisOption, items: items2yAxis })
  }))
