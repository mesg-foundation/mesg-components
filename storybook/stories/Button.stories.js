import { storiesOf } from '@storybook/vue'
import Button from '@mesg-components/button'

import '../style.css'

storiesOf('Button', module)
  .add('Default', () => ({
    components: { Button },
    template: `<Button>Test</Button>`
  }))
  .add('Primary type submit', () => ({
    components: { Button },
    template: `<Button primary submit>Test</Button>`
  }))
  .add('Small type submit', () => ({
    components: { Button },
    template: `<Button primary small submit>TEST</Button>`
  }))
  .add('Secondary with href with externalLink', () => ({
    components: { Button },
    template: `<Button secondary href="http://www.google.com" target="_blank">google.com</Button>`
  }))
  .add('Secondary with href with internalLink', () => ({
    components: { Button },
    template: `<Button secondary href="/" >Internal Link</Button>`
  }))
  .add('White', () => ({
    components: { Button },
    template: `<Button white>TEST</Button>`
  }))
  .add('Outline', () => ({
    components: { Button },
    template: `<Button outline>TEST</Button>`
  }))
  .add('With icon', () => ({
    components: { Button },
    template: `<Button secondary>TEST</Button>`
  }))
