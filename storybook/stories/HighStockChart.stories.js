import { storiesOf } from '@storybook/vue'
import HighStock from '@mesg-components/chart/HighStock'

const items = [
  {
    name: 'Sale',
    data: new Array(100).fill(null).map((_, i) => {
      return [new Date() - i * 24 * 60 * 60 * 1000, Math.random() * 5000000]
    })
  }
]

console.log(items)

storiesOf('HighStock', module).add('default', () => ({
  components: { HighStock },
  template: `<HighStock :items="items" />`,
  data: () => ({ items })
}))
