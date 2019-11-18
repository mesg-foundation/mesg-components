# @MESG-COMPONENTS/MENU

## Install

`npm install @mesg-components/menu` or `yarn add @mesg-components/menu`

## Properties

- **banner**: `String`, **Required**, -> _banner to display on the footer_
- **items**: `Array of object`, **Optional**, -> _items to display on the footer_

## Example

```js
import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const categories = ['technology', 'developers', 'showcase', 'contributions', 'token', 'get-started']
const items = [
  {
    key: 'technology',
    text: 'Technology',
    to:'#'
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  {
    key: 'developers',
    text: 'Developers',
    to:'#'
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  { key: 'showcase', text: 'Showcase', to: "/" },
  { key: 'contributions', text: 'Contributions', to: '/' },
  { key: 'token', text: 'Token' },
  { key: 'get-started', text: 'Get Started', to: '/',type: 'button'}
]
```

**Default:**

```html
<template>
  <menu :banner="banner" :items="items" />
</template>
```
