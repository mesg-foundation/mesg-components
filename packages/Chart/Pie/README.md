# @MESG-COMPONENTS/CHART/PIE

## Install

`npm install @mesg-components/chart` or `yarn add @mesg-components/chart`

#### To use:

```js
import PieChart from '@mesg-components/chart/Pie'
```

## Properties

- **innerSize**: `[String | Number]`, _the default is `70`_, **Optional**, ->
- **animation**: `Boolean`, _the default is `false`_, **Optional**, -> _Enable animation draw chart_
- **tooltipDescription**: `String`, **Optional**, -> _Tooltip display text description_
- **optionsTooltip**: `Object`, **Optional**, -> _Custom tooltip option_

## Example

```js
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
