# @MESG-COMPONENTS/PROGRESSBAR

## Install

`npm install @mesg-components/progressbar` or `yarn add @mesg-components/progressbar`

## Properties

### Circular

- **size**: `String`. _The default is `50px`_

### Linear

- **value**: `String`, **Optional** , _The default is `0`_.
- **color**: `String`, **Optional**.
- **indeterminate**: `Boolean`, **Optional**.

## Slot

- none

## Example

**Circular:**

```javascript
// es5
const Circular = require('@mesg-components/progressbar/Circular')

// es6
import Circular from '@mesg-components/progressbar/Circular'
```

```html
<template>
  <Circular size="90px" />
</template>
```

**Linear:**

```javascript
// es5
const Linear = require('@mesg-components/progressbar/Linear')

// es6
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
