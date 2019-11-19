# @MESG-COMPONENTS/MENU

## Install

`npm install @mesg-components/menu` or `yarn add @mesg-components/menu`

## Properties

- **logo**: `String`, **Required**, -> _banner to display on the footer_.
- **isNuxt**: `Boolean`, **Optional**, -> _isNuxt declare for nuxtjs framework to using nuxt-link_.
- **items**: `Array of object`, **Optional**, -> _items to display on the footer_.
  - **`Object` inside `items`:**
    - **text**: `String` , **Required**, _to display menu title_
    - **to**: `String`, **Required**, _link path_
    - **type**: `String`, **Optional**, _to display title at type button_
    - **subMenu**: `Array of object`, **Optional**, Example `[{ text: '',to: '' }, { text: '',to: '' },...]`, _to display dropdown sub-menu_

## Example

```js
import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const items = [
  {
    text: 'Technology',
    to: '#',
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  {
    text: 'Developers',
    to: '#',
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  { text: 'Showcase', to: '/' },
  { text: 'Contributions', to: '/' },
  { text: 'Token' },
  { text: 'Get Started', to: '/', type: 'button' }
]
```

**Default:**

```html
<template>
  <menu :banner="banner" :items="items" />
</template>
```

**Nuxt Framework:**

```html
<template>
  <menu :banner="banner" :items="items" is-nuxt />
</template>
```
