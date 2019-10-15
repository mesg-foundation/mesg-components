import { storiesOf } from '@storybook/vue'
import LinearProgressbar from '@mesg-components/progressbar/Linear'

storiesOf('Linear Progressbar', module)
  .add('default 35%', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar :value="value" /></div>`,
    data: () => ({ value: 35 })
  }))
  .add('info 35%', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar :value="value" info /></div>`,
    data: () => ({ value: 35 })
  }))
  .add('success 50%', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar :value="value" success/></div>`,
    data: () => ({ value: 50 })
  }))
  .add('danger 55%', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar :value="value" danger /></div>`,
    data: () => ({ value: 55 })
  }))
  .add('warning 75%', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar :value="value" warning/></div>`,
    data: () => ({ value: 75 })
  }))
  .add('custom background color 25%', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar :value="value" :background-color="progressBackgroundColor" /></div>`,
    data: () => ({ value: 25, progressBackgroundColor: `rgba(0, 0, 0, 0.1)` })
  }))
  .add('with animation', () => ({
    components: { LinearProgressbar },
    template: `<div class="container"><LinearProgressbar animate /></div>`
  }))
