# @MESG-COMPONENTS/MENU

## Install

`npm install @mesg-components/menu` or `yarn add @mesg-components/menu`

## Properties

- **banner**: `String`, **Required**, -> _banner to display on the footer_
- **categories**: `Array of string`, **Optional**. _**Example** `["xxx","xxx","xxx",...]`_, -> _Display items on each category values_
- **items**: `Array of object`, **Optional**, -> _items to display on the footer_

## Slot

- define each slot name using _`items_key`_ exists on `categories`

## Example

```js
import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const categories = ['technology', 'developers', 'showcase', 'contributions', 'token', 'get-started']
const items = [
  {
    key: 'technology',
    text: 'Technology',
    to:'#'
    child: [
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
    child: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  { key: 'showcase', text: 'Showcase', to: "/" },
  { key: 'contributions', text: 'Contributions', to: '/' },
  { key: 'token', text: 'Token' },
  { key: 'get-started', text: 'Get Started', to: '/'}
]
```

**Default:**

```html
<template>
  <menu :banner="banner" :categories="categories" :items="items">
    <template v-slot:technology="{ item }">
      <div class="drop-down">
        <a href="#" class="top-menu">
          {{ item.text }}
          <i class="far fa-angle-down"> </i>
        </a>
        <div flex column class="sub-menu">
          <a v-for="(link,i) in item.child" :key="i">
            {{link.text}}
          </a>
        </div>
      </div>
    </template>

    <template v-slot:developers="{ item }">
      <div class="drop-down">
        <a href="#" class="top-menu">
          {{ item.text }}
          <i class="far fa-angle-down" />
        </a>
        <div flex column class="sub-menu">
          <a v-for="(link,i) in item.child" :key="i">
            {{link.text}}
          </a>
        </div>
      </div>
    </template>

    <template v-slot:showcase="{ item }">
      <a href="#" class="top-menu">
        {{ item.text }}
      </a>
    </template>

    <template v-slot:contributions="{ item }">
      <a href="#" class="top-menu">
        {{ item.text }}
      </a>
    </template>

    <template v-slot:token="{ item }">
      <a href="#" class="top-menu">
        {{ item.text }}
      </a>
    </template>

    <template v-slot:get-started="{ item }">
      <button primary small>{{item.text}}</button>
    </template>
  </menu>
</template>
```
