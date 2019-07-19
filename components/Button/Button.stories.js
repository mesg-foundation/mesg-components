import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'

storiesOf('Button', module)
  .add('Default', () => ({
    components: { Button },
    template: `<Button>TEST</Button>`
  }))
  .add('Primary type submit', () => ({
    components: { Button },
    template: `<Button primary submit>TEST</Button>`
  }))
  .add('Secondary with href with externalLink', () => ({
    components: { Button },
    template: `<Button secondary href="http://www.google.com" target="_blank">www.google.com</Button>`
  }))
  .add('Secondary with href with internalLink', () => ({
    components: { Button },
    template: `<Button secondary href="/" >internalLink</Button>`
  }))
  .add('White', () => ({
    components: { Button },
    template: `<Button white>TEST</Button>`
  }))
  .add('Outline', () => ({
    components: { Button },
    template: `<Button outline>TEST</Button>`
  }))
  .add('Tag a with icon', () => ({
    components: { Button },
    template: `<a href='https://github.com/mesg-foundation' target="_blank" ><i class="fab fa-github"></i> Github MESG Foundation</a>`
  }))