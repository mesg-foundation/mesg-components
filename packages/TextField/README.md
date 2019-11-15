# @MESG-COMPONENTS/TEXTFIELD

## Install

`npm install @mesg-components/textfield` or `yarn add @mesg-components/textfield`

## Properties

- **type**: `String`, **Optional**, _The default type is `text`_
- **label**: `String`, **Required**.
- **placeholder**: `String`, **Required**.
- **v-model**: `String`, **Required**.

## Example

```html
<template>
  <div class="container">
    <TextField type="text" label="Link to your contribution" placeholder="Example ..." v-model="value" />
  </div>
</template>
```
