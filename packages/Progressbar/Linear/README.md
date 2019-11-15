# @MESG-COMPONENTS/PROGRESSBAR

## Install

`npm install @mesg-components/progressbar` or `yarn add @mesg-components/progressbar`

#### To use:

```javascript
import Linear from '@mesg-components/progressbar/Linear'
```

## Properties

- **value**: `String`, **Optional** , _The default is `0`_, _Width value of linear progressbar_
- **color**: `String`, **Optional**, _Custom color of of linear progressbar_
- **indeterminate**: `Boolean`, **Optional**, _Display indeterminate linear progressbar_

## Example

**Default:**

```html
<template>
  <Linear value="30" />
</template>
```

**Custom color:**

```html
<template>
  <Linear value="30" color="red" />
</template>
```

**Indeterminate:**

```html
<template>
  <Linear value="30" indeterminate>/
</template>
```
