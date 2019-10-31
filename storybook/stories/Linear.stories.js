import { storiesOf } from '@storybook/vue'
import LinearProgressbar from '@mesg-components/progressbar/Linear'

storiesOf('Linear Progressbar', module)
  .add('default value 50', () => ({
    components: { LinearProgressbar },
    template: `
    <div class="container" mt1>
      <LinearProgressbar :value="value" />
    </div>`,
    data: () => ({ value: 50 })
  }))
  .add('custom color 25', () => ({
    components: { LinearProgressbar },
    template: `
    <div class="container" mt1>
      <LinearProgressbar :value="value" :color="color" />
    </div>`,
    data: () => ({ value: 25, color: `#7e61ae` })
  }))
  .add('indeterminate', () => ({
    components: { LinearProgressbar },
    template: `
    <div class="container" mt1>
      <LinearProgressbar :value="value" indeterminate/>
    </div>`,
    data: () => ({ value: 30 })
  }))
