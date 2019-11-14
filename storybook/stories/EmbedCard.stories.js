import { storiesOf } from '@storybook/vue'
import EmbedCard from '@mesg-components/embed-card'

storiesOf('Embed Card', module).add('default', () => ({
  components: { EmbedCard },
  template: `
  <div class="container" mt1>
    <embed-card url="https://www.youtube.com" />
  </div>
  `
}))
