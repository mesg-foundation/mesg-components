# @MESG-COMPONENTS/HEADER

## Install

`npm install @mesg-components/header` or `yarn add @mesg-components/header`

## Properties

- **title**: `String`.**Required** -> _title to display on the header_
- **description**: `String`.**Optional** -> _description to display on the header_
- **image**: `String`.**Optional** -> _image to render on the right side of the header, **if not present, the title and description should take 100% of the width.**_

## Slot

- default to display the description content. **Only rendered if description property is not set.**

## Example

**Default:**

```html
<template>
  <header title="The title" description="the description" image="https://..." />
</template>
```

**Header with a slot to describe:**

```html
<template>
  <header title="The title" image="https://...">
    <p>My description</p>
    <button>xxx</button>
  </header>
</template>
```

**No picture, header in full width:**

```html
<template>
  <header title="The title">
    <p>My description</p>
    <button>xxx</button>
  </header>
</template>
```
