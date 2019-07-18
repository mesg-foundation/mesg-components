import { storiesOf } from '@storybook/vue'
import Logo from './logo'

storiesOf('Logo', module).add('MESG Logo', () => ({
  components: { Logo },
  template: `
      <Logo/>
    `,
  data: () => ({})
}))
