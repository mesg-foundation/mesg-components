import { storiesOf } from '@storybook/vue'
import Card from '@mesg-components/card'

storiesOf('Card', module)
  .add('default', () => ({
    components: { Card },
    template: `<Card>TEST</Card>`
  }))
  .add('without shadow ', () => ({
    components: { Card },
    template: `<Card noShadow >TEST</Card>`
  }))
  .add('with bordered ', () => ({
    components: { Card },
    template: `<Card bordered>TEST</Card>`
  }))
  .add('with bordered thin ', () => ({
    components: { Card },
    template: `<Card bordered thin>TEST</Card>`
  }))
  .add('with background ', () => ({
    components: { Card },
    template: `<div class="container"><Card background no-shadow >TEST</Card></div>`
  }))
