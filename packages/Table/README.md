# @MESG-COMPONENTS/TABLE

## Install

`npm install @mesg-components/table` or `yarn add @mesg-components/table`

## Properties

- **headers**: `Array of object`, **Required**.
- **items**: `Array of object`, **Required**.
- **hideHeader**: `Boolean`, **Optional**, The default is `false`. _determine header is display_
- **expandable**: `Boolean`, **Optional**, The default is `false`. _determine it's a expandable table_
- **compact**: `Boolean`, **Optional**, The default is `false`. _set table width 100% without padding or margin_.

## Slot

- define slot name using `item_<HEADERS_VALUE>`

## Example

```js
const items = new Array(101).fill(null).map((x, i) => {
  const percentage = Math.random() * 10
  const volume = Math.random() * 5000000
  return {
    id: i + 1,
    date: new Date() - i * 24 * 60 * 60 * 1000,
    tradeVolume: volume,
    tokenRelease: volume * percentage,
    percentage: percentage,
    txhash: '0x'
  }
})

const headers = [
  { key: 'id', text: 'ID', align: 'left', value: 'id' },
  { key: 'date', text: 'Date', align: 'left', value: 'date' },
  { key: 'volume', text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
  { key: 'token', text: 'Token Release', align: 'center', value: 'tokenRelease' },
  { key: 'percentage', text: 'Percentage', align: 'center', value: 'percentage' },
  { key: 'link', text: 'Link', align: 'center', value: 'link' }
]
```

**Default:**

```html
<template>
  <div>
    <table :items="items" :headers="headers">
      <template v-slot:item_id="{ item }"
        >{{ item.id }}</template
      >
      <template v-slot:item_date="{ item }"
        >{{ item.date }}</template
      >
      <template v-slot:item_tradeVolume="{ item }"
        >{{ item.tradeVolume }}</template
      >
      <template v-slot:item_tokenRelease="{ item }"
        >{{ item.tokenRelease }}</template
      >
    </table>
  </div>
</template>
```

**Expandable table:**

```html
<template>
  <div>
    <table :items="items" :headers="headers" expandable>
      <template v-slot:item_id="{ item }"
        >{{ item.id }}</template
      >
      <template v-slot:item_date="{ item }"
        >{{ item.date }}</template
      >
      <template v-slot:expand="{ item }">
        <ul>
          <li>
            <div>
              <label>Traded Volume: {{ item.tradeVolume }}</label>
            </div>
          </li>
        </ul>
      </template>
    </table>
  </div>
</template>
```

**Disable header table:**

```html
<template>
  <table :items="items" :headers="headers" hide-header>
    ...
  </table>
</template>
```

**Compact table:**

```html
<template>
  <Card>
    <table :items="items" :headers="headers" compact>
      ...
    </table>
  </Card>
</template>
```
