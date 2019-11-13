# @MESG-COMPONENTS/SNACKBAR

## Install

`npm install @mesg-components/snackbar` or `yarn add @mesg-components/snackbar`

## Properties

- **top**: `Boolean`, **Optional**. _The default is `false`_
- **bottom**: `Boolean`, **Optional**. _The default is `false`_
- **left**: `Boolean`, **Optional**. _The default is `false`_
- **right**: `Boolean`, **Optional**. _The default is `false`_
- **timeout**: `Number`, **Optional**. _The default is `6000`_
- **text**: `String`, **Optional**.
- **success**: `Boolean`, **Optional**. _The default is `false`_
- **info**: `Boolean`, **Optional**. _The default is `false`_
- **error**: `Boolean`, **Optional**. _The default is `false`_
- **v-model**: `Boolean`, **Required**.

## Slot

- `default`

## Example

```js
const openSnackbar = true
```

**Default:**

```html
<template>
  <snack-bar :text="items" v-model="openSnackbar">Outline Button</snack-bar>
</template>
```

**Custom position:**

```html
<template>
  <Snackbar left bottom text="Hello, I'm a snackbar" v-model="openSnackbar" />
</template>
```

**Custom timeout:**

```html
<template>
  <Snackbar timeout="2000" text="Hello, I'm a snackbar" v-model="openSnackbar" />
</template>
```

**Custom slot:**

```html
<template>
  <Snackbar v-model="openSnackbar">
    ... value or html elements ...
  </Snackbar>
</template>
```
