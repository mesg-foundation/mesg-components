import { storiesOf } from '@storybook/vue'
import TextField from '@mesg-components/textfield'

storiesOf('TextField', module).add('default', () => ({
  components: { TextField },
  template: `
  <div class="container" mt1>
    <TextField label="Link to your contribution" placeholder="https:// ..." v-model="value"/>
  </div>`,
  data: () => ({ value: 'test' })
}))
