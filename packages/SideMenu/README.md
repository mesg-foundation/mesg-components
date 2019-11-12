# @MESG-COMPONENTS/SIDE-MENU

## Install

`npm install @mesg-components/side-menu` or `yarn add @mesg-components/side-menu`

## Properties

- **items**: `Array of Object`, **Required**. -> _values to display_

## Slot

- using `key` value from items to custom elements to display.

## Example

**Default:**

```javascript
const items = [
  { key: 'general', text: 'General', href: '#general' },
  { key: 'transaction', text: 'Transactions', href: '#transactions' },
  { key: 'compatibility', text: 'Compatibility', href: '#compatibility' },...]
```

```html
<template>
  <side-menu :items="items" />
</template>
```

**Custom:**

```javascript
const customItems = [
  { key: 'general', text: 'General', href: '#general' },
  { key: 'transaction', text: 'Transactions', href: '#transactions' },
  { key: 'compatibility',
    listItem: [
      {text: 'xxx',icon: 'xxx', href: '/xxx'},
      {text: 'xxx',icon: 'xxx', href: '/xxx'}
    ]
  },
  ...
]
```

```html
<template>
  <side-menu :items="customItems">
    <template v-slot:general="{ item }">
      <a :href="item.href" class="link-secondary">
        <i class="chevron right"></i>
        <span>{{item.text}}</span>
      </a>
    </template>

    <template v-slot:transaction="{ item }">
      <a :href="item.href" class="link-secondary">
        <i class="chevron right"></i>
        <span>{{item.text}}</span>
      </a>
    </template>

    <template v-slot:compatibility="{ item }">
      <ul>
        <li v-for="(value,i) in item" :key="i">
          <a :href="value.href">
            <i :class="value.icon"></i>
            {{value.name}}
          </a>
        </li>
      </ul>
    </template>
    ...
  </side-menu>
</template>
```
