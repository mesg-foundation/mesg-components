import { storiesOf } from '@storybook/vue'
import LinearProgressbar from '@mesg-components/progressbar/Linear/LinearProgressbar'

storiesOf('Linear Progressbar', module)
  .add('default with  value 50', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar :value="value" />`,
    data: () => ({ value: 50 })
  }))
  .add('with animation', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar indeterminate />`
  }))
  .add('custom height with value 70', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar height="30px" :value="value"/>`,
    data: () => ({ value: 70 })
  }))
