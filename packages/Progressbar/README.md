# @MESG-COMPONENTS/PROGRESSBAR

## Install

`npm install @mesg-components/progressbar` or `yarn add @mesg-components/progressbar`

## Properties

### Circular

- **size**: `String`. _The default is `50px`_, _the value of circular size_

### Linear

- **value**: `String`, **Optional** , _The default is `0`_, _Width value of linear progressbar_
- **color**: `String`, **Optional**, _Custom color of of linear progressbar_
- **indeterminate**: `Boolean`, **Optional**, _Display indeterminate linear progressbar_

## Slot

- none

## Example

**Circular:**

```javascript
import Circular from '@mesg-components/progressbar/Circular'
```

```html
<template>
  <Circular size="90px" />
</template>
```

**Linear:**

```javascript
import Linear from '@mesg-components/progressbar/Linear'
```

```html
<template>
  <Linear value="30">Outline Button</Linear>
</template>
```

```html
<template>
  <Linear value="30" color="red">Primary Button</Linear>
</template>
```

```html
<template>
  <Linear value="30" indeterminate>Secondary Button</Linear>
</template>
```
