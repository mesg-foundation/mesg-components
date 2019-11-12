# @MESG-COMPONENTS/CHART/HIGH-STOCK

## Install

`npm install @mesg-components/chart` or `yarn add @mesg-components/chart`

#### To use:

```js
import HighStock from '@mesg-components/chart/HighStock'
```

## Properties

- **rangeSelectorOption**: `Object`, **Optional**, -> _To custom rangeSelector_
- **yAxisOption**: `[Object | Array]`, **Optional**, -> _To custom yAxis_
- **optionLegend**: `Object`, **Optional**, -> _To custom legend_
- **optionsTooltip**: `Object`, **Optional**, -> _To custom tooltip_
- **optionsPlot**: `Object`, **Optional**, -> _To custom plot chart_
- **chartOption**: `Object`, **Optional**, -> _To custom chart style_
- **noNavigator**: `Boolean`, _the default is `false`_, **Optional**, -> _Don't display navigator_
- **rangeSelector**: `Boolean`, _the default is `false`_, **Optional**, -> _Don't display rangeSelector_

## Example

**HightStock**

```js
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

const yAxis = [{ opposite: false, labels: { align: 'center' }, resize: { enabled: true } }]

const yAxisOption = [
  { opposite: false, labels: { align: 'center' }, height: '60%', resize: { enabled: true } },
  { opposite: true, labels: { align: 'center' }, height: '60%', resize: { enabled: true } },
  { opposite: false, labels: { align: 'center' }, top: '60%', height: '40%', offset: 0, resize: { enabled: true } }
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
```

##### default:

```html
<template>
  <HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis" range-selector />
</template>
```

##### display 2 yAxis:

```html
<template>
  <HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis" range-selector />
</template>
```

##### display without Navigator :

```html
<template>
  <HighStock :items="items" :range-selector-option="rangeSelector" :y-axis-option="yAxis" range-selector noNavigator />
</template>
```

##### display without rangeSelector:

```html
<template>
  <HighStock :items="items" :y-axis-option="yAxis" />
</template>
```
