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

## Slot

- `default`

## Example

**Default Button:**

```html
<template>
  <button>Default Button</button>
</template>
```

**Primary and submit Button:**

```html
<template>
  <button primary submit>Primary Button</button>
</template>
```

**Secondary Button with small:**

```html
<template>
  <button secondary small>Secondary Button</button>
</template>
```

**White Button:**

```html
<template>
  <button white>White Button</button>
</template>
```

**Outline Button:**

```html
<template>
  <button outline>Outline Button</button>
</template>
```

**External link Button:**

```html
<template>
  <button :href="www.google.com" target="_blank">External Button</button>
</template>
```

**Internal link Button:**

```html
<template>
  <button :href="/">Internal Button</button>
  <!--  using nuxt-link -->
  <button :to="/">Internal Button</button>
</template>
```

**Button with icon:**

```html
<template>
  <button primary :icon="fal fa-table">With icon Button</button>
</template>
```
