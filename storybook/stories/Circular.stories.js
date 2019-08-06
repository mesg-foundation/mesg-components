import { storiesOf } from '@storybook/vue'
import CircularProgressbar from '@mesg-components/progressbar/Circular/CircularProgressbar'

let itemsValues = 0

storiesOf('CircularProgressbar', module).add('default', () => ({
  components: { CircularProgressbar },
  template: `<div><circular-progressbar :values="values"/></div>`,
  data: () => ({
    values: 10
  })
}))
