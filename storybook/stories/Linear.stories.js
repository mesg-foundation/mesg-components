import { storiesOf } from '@storybook/vue'
import LinearProgressbar from '@mesg-components/progressbar/Linear'

storiesOf('Linear Progressbar', module)
  .add('info-35%', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar :value="value" info />`,
    data: () => ({ value: 35 })
  }))
  .add('danger-55%', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar :value="value" danger />`,
    data: () => ({ value: 55 })
  }))
  .add('warning-75%', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar :value="value" warning/>`,
    data: () => ({ value: 75 })
  }))
  .add('success-100%', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar :value="value" success/>`,
    data: () => ({ value: 100 })
  }))
  .add('with animation', () => ({
    components: { LinearProgressbar },
    template: `<LinearProgressbar indeterminate danger />`
  }))
