import { storiesOf } from '@storybook/vue'
import Card from '@mesg-components/card'

storiesOf('Card', module)
  .add('default', () => ({
    components: { Card },
    template: `
    <div class="container">
      <Card>TEST</Card>
    </div>`
  }))
  .add('no-shadow', () => ({
    components: { Card },
    template: `
    <div class="container">
      <Card no-shadow >TEST</Card>
    </div>
    `
  }))
  .add('bordered', () => ({
    components: { Card },
    template: `
    <div class="container">
      <Card bordered>TEST</Card>
    </div>
    `
  }))
  .add('bordered and thin', () => ({
    components: { Card },
    template: `
    <div class="container">
      <Card bordered thin>TEST</Card>
    </div>
    `
  }))
  .add('border-custom-color', () => ({
    components: { Card },
    template: `
    <div class="container">
      <Card bordered border-bottom-color="#bdafd6" >TEST</Card>
    </div>
    `
  }))
  .add('background-color', () => ({
    components: { Card },
    template: `
    <div class="container">
      <Card background="#f2f0f7" no-shadow >TEST</Card>
    </div>`
  }))
