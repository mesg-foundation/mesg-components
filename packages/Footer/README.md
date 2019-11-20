# @MESG-COMPONENTS/FOOTER

## Install

`npm install @mesg-components/footer` or `yarn add @mesg-components/footer`

## Properties

- **banner**: `String`, **Required**, -> _banner to display on the footer_
- **categories**: `Array of string`, **Required**. _**Example** `["xxx","xxx","xxx",...]`_, -> _Display items on each category values_
- **items**: `Array of object`, **Required**, -> _items to display on the footer_
- **copyright**: `String`, **Optional**, -> _copyright to display on the footer_
- **policy**: `Object`, **Optional**, -> _policy to display on the footer_
- **icons**: `Array of object`, **Optional**, -> _icon class and link path_

## Slot

- define each slot name using _`items_key`_ exists on `categories`

## Example

```js
const image = '../image.svg'
const categories = ['1', '2', '3', '4']
const copyright = '© 2019 My Copyright'
const policy = { text: 'Privacy & Cookie Policy', link: 'https://.../...' }
const icons = [
  { to: 'https://medium.com/...', classIcon: 'fab fa-medium' },
  { to: 'https://github.com/...', classIcon: 'fab fa-github' },
  ...
]
const items = [
  {
    key: '1',
    text: 'Title 1',
    child: [{ id: '1', text: 'xxx', to: '/..' },{ id: '2', text: 'xxx', to: '/path' },]
  },
  { key: '2', text: 'Title 2', to: 'http://.../xxx' },
  {
    key: '3',
    text: 'Title 3',
    child: [{ id: '3', text: 'xxx', to: '/12' },{ id: '4', text: 'xxx', to: 'https://medium.com/...' }]
  }
]
```

**Default:**

```html
<template>
  <footer :banner="banner" :copyright="copyRightText" :items="items" :policy="policyText" :categories="categories" :icons="icons">

    <template v-slot:1="{ item }">
      <h1 style="margin: 0">{{item.text}}</h1>
      <ul>
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>

    <template v-slot:2="{ item }">
      <a :href="item.to">
        <h1 style="margin: 0">{{item.text}}</h1>
      </a>

    <template v-slot:3="{ item }">
      <h1 style="margin: 0">{{item.text}}</h1>
      <ul>
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.text}}</a>
        </li>
      </ul>
    </template>
  </footer>
</template>
```
