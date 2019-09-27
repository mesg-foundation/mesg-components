import { storiesOf } from '@storybook/vue'
import Footer from '@mesg-components/footer'

storiesOf('Footer', module)
  .add('default', () => ({
    components: { Footer },
    template: `<Footer/>`
  }))
  .add('990', () => ({
    components: { Footer },
    template: `<div style="width: 893px;"><Footer banner='~/assets/img/base-logo-mesg.svg'/></div>`
  }))
