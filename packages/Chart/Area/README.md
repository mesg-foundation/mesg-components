# @MESG-COMPONENTS/CHART/AREA

## Install

`npm install @mesg-components/chart` or `yarn add @mesg-components/chart`

#### To use:

```js
import AreaChart from '@mesg-components/chart/Area'
```

## Properties

- **categories**: `Array`, **Optional** -> _categories are present for the xAxis_
- **areaType**: `String`, **Optional**, _Values of types are `normal | percent`_ -> _Area stacking by type_
- **yTitle**: `String`, **Optional**, -> _yAxis text title_
- **noYLabel**: `Boolean`, **Optional**, _the default is `false`_, -> _Don't display yAxis label_
- **xTitle**: `String`, **Optional**, -> _xAxis text title_
- **noXLabel**: `Boolean`, **Optional**, _the default is `false`_, -> _Don't display xAxis label_
- **optionLegend**: `Object`, **Optional**, -> _Custom chart legend_
- **optionsTooltip**: `Object`, **Optional**, -> _Custom chart tooltip_
- **chartStyleOption**: `Object`, **Optional**, -> _Custom chart style_
- **fillColorOption**: `Object`, **Optional**, -> _Fill color or gradient for the area_
- **xAxisOptions**: `Object`, **Optional**, -> _Custom chart xAxis_
- **yAxisOptions**: `Object`, **Optional**, -> _Custom chart yAxis_
- **noMarker**: `Boolean`, **Optional**, _the default is `false`_ -> _Don't display chart line marker_
- **markerOption**: `Object`, **Optional**, -> _Custom chart line marker_
- **areaPlotOptions**: `Object`, **Optional**, -> _Custom area chart plot options_

## Example

```js
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
