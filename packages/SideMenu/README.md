# @MESG-COMPONENTS/SIDE-MENU

## Install

`npm install @mesg-components/side-menu` or `yarn add @mesg-components/side-menu`

## Properties

- **items**: `Array`, **Required**.

## Slot

- using `key` from item

## Example

**Default:**

```javascript
const items = [{ key: 'general', text: 'General', href: '#general' },{ key: 'gettingst', text: 'Getting Start', href: '#getting-started' },...]
```

```html
<template>
  <side-menu :items="items">Outline Button</side-menu>
</template>
```

**Custom:**

```html
<template>
  <side-menu :items="items">
    <template v-slot:general="{ item }">
      <a :href="item.href" class="link-secondary">
        <i class="chevron right"></i>
        <span>Custome-general</span>
      </a>
    </template>

    <template v-slot:businesss="{ item }">
      <a :href="item.href" class="link-secondary">
        <i class="chevron right"></i>
        <span>Custom Business</span>
      </a>
    </template>
  </side-menu>
</template>
```
