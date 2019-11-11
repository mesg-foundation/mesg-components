# @MESG-COMPONENTS/CARD

## Install

`npm install @mesg-components/card` or `yarn add @mesg-components/card`

## Properties

- **bordered**: `Boolean`, **Optional**, The default is `false`
- **thin**: `Boolean`, **Optional**, The default is `false`
- **noShadow**: `Boolean`, **Optional**, The default is `false`
- **borderBottomColor**: `String`, **Optional**, The default is `undefined`
- **background**: `String`, **Optional**. The default is `white`

## Slot

- `default`

## Example

**Default card:**

```html
<template>
  <Card>Default Card</Card>
</template>
```

**Bordered card:**

```html
<template>
  <Card bordered> Card with bordered</Card>
</template>
```

**Thin card:**

```html
<template>
  <Card thin>Thin card</Card>
</template>
```

**Card without shadow:**

```html
<template>
  <Card no-shadow>Card without shadow</Card>
</template>
```

**Border bottom color card:**

```html
<template>
  <Card border-bottom-color="red">Border bottom color custom card</Card>
</template>
```

**Background card:**

```html
<template background="red">
  <Card>Card background custom </Card>
</template>
```
