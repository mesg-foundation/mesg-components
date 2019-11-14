# @MESG-COMPONENTS/CHOICE

## Install

`npm install @mesg-components/choice` or `yarn add @mesg-components/choice`

## Properties

- **v-model**: `[ String, Number ]`, **Required** -> _default selected value_
- **options**: `Array of object`, **Required** -> _Display value_
- **type**: `String`.**Required**, _Value of types `button-group | checkbox | radio | select`_ -> _Display choice component by type_.

## Example

**Type button-group:**

```js
const selected = 'Table'
const options = [
  { key: 1, value: 'Table', preIcon: 'fal fa-table' },
  { key: 2, value: 'Graph', preIcon: 'far fa-chart-area' },
  { key: 3, value: 'Button' },
  { key: 5, value: 'Pie', postIcon: 'far fa-chart-area' },
  { key: 6, value: 'Radio', postIcon: 'fal fa-table' }
]
```

```html
<template>
  <choice type="button-group" v-model="selectValue" />
</template>
```

**Type checkbox:**

```js
const selectValue = 30
const options = [
  { key: "10", value: 10 },
  { key: "20", value: 20 },
  { key: "30", value: 30 },
  ...
]
```

```html
<template>
  <choice type="checkbox" :options="options" />
</template>
```

**Type radio:**

```js
const selectValue = 30
const options = [
  { key: "10", value: 10 },
  { key: "20", value: 20 },
  { key: "30", value: 30 },
  ...
]
```

```html
<template>
  <choice type="radio" :options="options" />
</template>
```

**Type select:**

```js
const selectValue = 30
const options = [
  { key: "10", value: 10 },
  { key: "20", value: 20 },
  { key: "30", value: 30 },
  ...
]
```

```html
<template>
  <choice type="select" :options="options" />
</template>
```
