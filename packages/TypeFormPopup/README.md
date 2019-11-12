# @MESG-COMPONENTS/TypeFormPopup

## Install

`npm install @mesg-components/type-form-popup` or `yarn add @mesg-components/type-form-popup`

## Properties

- **id**: `String`, **Required**, _id of the form_
- **url**: `String`, **Optional**, _The default is `https://mesgfoundation.typeform.com/to`_

## Slot

- `default`

## Example

**Default Button:**

```html
<template>
  <TypeFormPopup id="bOJ0qz">
    <a>click to open</a>
  </TypeFormPopup>
</template>
```

**Primary and submit Button:**

```html
<template>
  <TypeFormPopup id="bOJ0qz">
    <button primary>click to open</button>
  </TypeFormPopup>
</template>
```
