# @MESG-COMPONENTS/TAB

## Install

`npm install @mesg-components/tab` or `yarn add @mesg-components/tab`

## Properties

- **items**: `Array of object`, **Required**

## Slot

- **Tab name** is using `tab-<ITEMS_KEY_VALUE>` to display each tab name
- **Tab section name** is using `section-<ITEMS_KEY_VALUE>` to attach each section on tab

## Example

**Default:**

```js
const items = [
  { key: 'github', text: 'Github' },
  { key: 'gitlab', text: 'Gitlab' },
  { key: 'bitbuckget', text: 'Bitbucket' },
  { key: 'mesg', text: 'MESG' }
]
```

```html
<template>
  <Tab :items="items" />
</template>
```

**Custom:**

```js
const customItems = [
  { key: 'github', text: 'Github' },
  { key: 'gitlab', text: 'Gitlab' },
  { key: 'bitbuckget', text: 'Bitbucket' },
  {
    key: 'mesg',
    text: 'MESG',
    description:
      'MESG SDK A suite of tools to connect together services with other devices and applications. Control the flow of data and level of security between your whole stack of technologies.'
  }
]
```

```html
<template>
  <Tab :items="customItems">
    <template v-slot:tab-github="{item}">
      <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg"></img>
    </template>

    <template v-slot:section-github="{ item }">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </template>

    <template v-slot:tab-mesg="{item}">
      <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg"></img>
    </template>

    <template v-slot:section-mesg="{ item }">
      <h3>{{item.text}}</h3>
      <p>{{item.description}}</p>
    </template>


    </Tab>`
</template>
```
