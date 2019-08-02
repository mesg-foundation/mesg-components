import { storiesOf } from '@storybook/vue'
import Dialog from '@mesg-components/dialog/Dialog'

storiesOf('Dialog', module).add('default', () => ({
  components: { Dialog },
  template: `<Dialog />`
}))
