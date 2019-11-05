# @MESG-COMPONENTS/BUTTON

## Install

`npm install @mesg-components/button` or `yarn add @mesg-components/button`

## Properties

- **href**: `String`.
- **to**: `[ Object, String ]`.
- **submit**: `Boolean`.
- **primary**: `Boolean`.
- **small**: `Boolean`.
- **secondary**: `Boolean`.
- **white**: `Boolean`.
- **outline**: `Boolean`.
- **icon**: `String`.

## Example

**Default Button:**
```html
<template>
  <Button>Default Button</Button>
</template>
```
**Primary and submit Button:**
```html
<template>
  <Button primary submit>Primary Button</Button>
</template>
```
**Secondary Button with small:**
```html
<template>
  <Button secondary small>Secondary Button</Button>
</template>
```
**White Button:**
```html
<template>
  <Button white>White Button</Button>
</template>
```
**Outline Button:**
```html
<template>
  <Button outline>Outline Button</Button>
</template>
```
**External link Button:**
```html
<template>
  <Button :href="www.google.com" target="_blank">External Button</Button>
</template>
```
**Internal link Button:**
```html
<template>
  <Button :href="/" >Internal Button</Button>
  <!--  using nuxt-link -->
  <Button :to="/">Internal Button</Button>
</template>
```
**Button with icon:**
```html
<template>
  <Button primary :icon="fal fa-table">With icon Button</Button>
</template>
```
