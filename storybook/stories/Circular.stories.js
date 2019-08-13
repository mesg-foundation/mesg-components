import { storiesOf } from '@storybook/vue'
import CircularProgressbar from '@mesg-components/progressbar/Circular/CircularProgressbar'

storiesOf('CircularProgressbar', module)
  .add('default', () => ({
    components: { CircularProgressbar },
    template: `<div><circular-progressbar /></div>`
  }))
  .add('Custom size ', () => ({
    components: { CircularProgressbar },
    template: `<div><circular-progressbar size="100px"/></div>`
  }))
