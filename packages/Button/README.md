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

```html
<!-- Default Button -->
<template>
  <Button>Default Button</Button>
</template>

<!-- Primary and submit Button -->
<template>
  <Button primary submit>Primary Button</Button>
</template>

<!-- Secondary Button with small  -->
<template>
  <Button secondary small>Secondary Button</Button>
</template>

<!-- White Button -->
<template>
  <Button white>White Button</Button>
</template>

<!-- Outline Button -->
<template>
  <Button outline>Outline Button</Button>
</template>

<!-- External link Button -->
<template>
  <Button :href="www.google.com" target="_blank">External Button</Button>
</template>

<!-- Internal link Button -->
<template>
  <Button :href="/" >Internal Button</Button>
  <!--  using nuxt-link -->
  <Button :to="/">Internal Button</Button>
</template>

<!-- Button with icon -->
<template>
  <Button primary :icon="fal fa-table">With icon Button</Button>
</template>

<script>
  import Button from '@mesg-components/button'
  export default {
    components: { Button }
  }
</script>
```
