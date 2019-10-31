import { storiesOf } from '@storybook/vue'
import TextField from '@mesg-components/textfield'

storiesOf('TextField', module)
  .add('default', () => ({
    components: { TextField },
    template: `
  <div class="container" mt1>
    <TextField label="Link to your contribution" placeholder="Example ..." v-model="value"/>
    <div mt1>
      <span >Value from input: <u>{{value}}</u></span>
    </div>
  </div>`,
    data: () => ({ value: '' })
  }))
  .add('type password', () => ({
    components: { TextField },
    template: `
  <div class="container" mt1>
    <TextField type="password" label="Password Input" placeholder="XXXXXXX" v-model="value"/>
    <div mt1>
      <span>Value from input: <u>{{value}}</u></span>
    </div>
  </div>`,
    data: () => ({ value: '' })
  }))
