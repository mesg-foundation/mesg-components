# @MESG-COMPONENTS/TABLE

## Install

`npm install @mesg-components/table` or `yarn add @mesg-components/table`

## Properties

- **headers**: `Array`, **Required**.
- **items**: `Array`, **Required**.
- **hideHeader**: `Boolean`, **Optional**, The default is `false`.
- **expandable**: `Boolean`, **Optional**, The default is `false`.
- **compact**: `Boolean`, **Optional**, The default is `false`. _set table width 100% without padding or margin_.

## Example

```html
<!-- Default Table -->
<template>
  <div>
    <table :items="items" :headers="headers">
      <template v-slot:item_id="{ item }">{{ item.id }}</template>
      <template v-slot:item_date="{ item }">{{ item.date }}</template>
      <template v-slot:item_tradeVolume="{ item }">{{ item.tradeVolume }}</template>
      <template v-slot:item_tokenRelease="{ item }">{{ item.tokenRelease }}</template>
    </table>
  </div>
</template>

<!-- Expandable Table -->
<template>
  <div>
    <table :items="items" :headers="headers" expandable>
      <template v-slot:item_id="{ item }">{{ item.id }}</template>
      <template v-slot:item_date="{ item }">{{ item.date }}</template>
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

<!-- Hide Header Table -->
<template>
  <table :items="items" :headers="headers" hide-header>
    ...
  </table>
</template>

<!-- Compact Table -->
<template>
  <Card>
    <table :items="items" :headers="headers" compact>
      ...
    </table>
  </Card>
</template>

<script>
  import Table from '@mesg-components/table'
  export default {
    components: { Table },
    data() {
      return {
        headers: [
          { key: 'id', text: 'ID', align: 'left', value: 'id' },
          { key: 'date', text: 'Date', align: 'left', value: 'date' },
          { key: 'volume', text: 'Traded Volume', align: 'center', value: 'tradeVolume' },
          { key: 'token', text: 'Token Release', align: 'center', value: 'tokenRelease' },
          { key: 'percentage', text: 'Percentage', align: 'center', value: 'percentage' },
          { key: 'link', text: 'Link', align: 'center', value: 'link' }
        ]
      }
    },
    methods: {
      items() {
        // Example data items value
        return new Array(101).fill(null).map((x, i) => {
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
      }
    }
  }
</script>
```
