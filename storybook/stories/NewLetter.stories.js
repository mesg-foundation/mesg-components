import { storiesOf } from '@storybook/vue'
import NewsLetter from '@mesg-components/news-letter'

const buttonLabel = 'TEST'
const inputPlaceholder = 'TEST Placeholder custom'
const dataToken = ''
const apiUrl = ''

storiesOf('News Letter', module)
  .add('default', () => ({
    components: { NewsLetter },
    template: `
      <div class="container">
        <NewsLetter />
      </div>`
  }))
  .add('custom text', () => ({
    components: { NewsLetter },
    template: `
      <div class="container" style="width: 500px;">
        <NewsLetter :button-label="buttonLabel"  :inputPlaceholder="inputPlaceholder" />
      </div>`,
    data: () => ({ buttonLabel, inputPlaceholder })
  }))
