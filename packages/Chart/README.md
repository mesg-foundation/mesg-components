# @MESG-COMPONENTS/CHART

## Install

`npm install @mesg-components/chart` or `yarn add @mesg-components/chart`

## Properties

### Chart Mixin

- **items**: `[Array | Object]`
- **noTooltip**: `Boolean`, _the default is `false`_
- **credit**: `Boolean`, _the default is `false`_
- **noLegend**: `Boolean`, _the default is `false`_
- **title**: `String`
- **titleColor**: `String`
- **titleSize**: `Number` _the default is `36`_
- **optionsTitle**: `Object`
- **subTitle**: `String`
- **subColor**: `String`
- **subSize**: `Number`
- **optionsSub**: `Object`

### Area

- **categories**: `Array`
- **areaType**: `String`, _Values of types are `normal | percent`_
- **yType**: `String`
- **yTitle**: `String`
- **noYLabel**: `Boolean`, _the default is `false`_
- **xTitle**: `String`
- **noXLabel**: `Boolean`, _the default is `false`_
- **optionLegend**: `Object`
- **optionsTooltip**: `Object`
- **chartStyleOption**: `Object`
- **fillColorOption**: `Object`
- **xAxisOptions**: `Object`
- **yAxisOptions**: `Object`
- **noMarker**: `Boolean`, _the default is `false`_
- **markerOption**: `Object`
- **areaPlotOptions**: `Object`

### HightStock

- **rangeSelectorOption**: `Object`
- **yAxisOption**: `[Object | Array]`
- **optionLegend**: `Object`
- **optionsTooltip**: `Object`
- **optionsPlot**: `Object`
- **chartOption**: `Object`
- **noNavigator**: `Boolean`, _the default is `false`_
- **rangeSelector**: `Boolean`, _the default is `false`_

### Pie

- **innerSize**: `[String | Number]`, _the default is `70`_
- **animation**: `Boolean`, _the default is `false`_
- **tooltipDescription**: `String`
- **optionsTooltip**: `Object`

## Slot

- `none`

## Example

**Area**

```js
const Area = require('@mesg-components/chart/Area') //es5
import AreaChart from '@mesg-components/chart/Area' //es6

const items = [
  { name: 'Sale', color: '#2e1359', data: new Array(20).fill(null).map(() => Math.random() * 5000000) },
  { name: 'Partners & Bounties', color: '#7e44d8', data: new Array(20).fill(null).map(() => Math.random() * 1000000) },
  { name: 'Investors, Founders & Team', color: '#c2a3ff', data: new Array(20).fill(null).map(() => Math.random() * 2000000) },
  { name: 'Reserve', color: '#dfcdf7', data: new Array(20).fill(null).map(() => Math.random() * 0) }
]
const categories = new Array(20).fill(null).map((_, i) => new Date(new Date() - i * 24 * 60 * 60 * 1000).toDateString())
```

##### default:

```html
<template>
  <AreaChart :items="items" />
</template>
```

##### area type: `normal | percent`

```html
<template>
  <AreaChart :categories="categories" :items="items" area-type="normal" />
</template>
```

##### display title and subtitle:

```html
<template>
  <AreaChart :categories="categories" :items="items" area-type="percent" title="Distribution" sub-title="Subtitle description" />
</template>
```

##### display X and Y title:

```html
<template>
  <AreaChart :categories="categories" :items="items" area-type="normal" x-title="Datetime" y-title="Percent Value" />
</template>
```

##### remove marker:

```html
<template>
  <AreaChart :items="items" area-type="normal" no-marker />
</template>
```

##### Set background transparent:

```html
<template>
  <AreaChart :categories="categories" :items="items" area-type="normal" :chart-style-option="{ backgroundColor: 'transparent' }" />
</template>
```

##### Area chart gradient color:

```html
<template>
  <AreaChart
    :categories="categories"
    :items="items"
    area-type="normal"
    :fill-color-option="{
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [[0, '#7e44d8'], [1, 'rgba(126,68,216, 0)']]
      }"
  />
</template>
```

##### only display data:

```html
<template>
  <AreaChart :categories="categories" :items="items" area-type="normal" no-x-label no-y-label no-legend no-tooltip />
</template>
```

**Pie**

```js
const PieChart = require('@mesg-components/chart/Pie') //es5
import PieChart from '@mesg-components/chart/Pie' //es6

const items = [
  { name: 'Sale', y: 2.5, color: '#2e1359' },
  { name: 'Partners & Bounties', y: 1.5, color: '#7e44d8' },
  { name: 'Investors, Founders & Team', y: 2, color: '#c2a3ff' },
  { name: 'Reserve', y: 0, color: '#dfcdf7' }
]
```

##### default:

```html
<template>
  <PieChart :items="items" />
</template>
```

##### Add title, subtitle and set position :

```html
<template>
  <PieChart
    :items="items"
    title="title"
    title-color="#491e8c"
    sub-color="#3c3940"
    sub-title="subTitle"
    :options-title="{ verticalAlign: 'middle', y: -10 }"
    :options-sub="{ verticalAlign: 'middle' }"
  />
</template>
```

##### No display tooltip and legend:

```html
<template>
  <PieChart :items="items" no-legend no-tooltip />
</template>
```

**HightStock**

```js
const HighStock = require('@mesg-components/chart/HighStock') //es5
import HighStock from '@mesg-components/chart/HighStock' //es6

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
