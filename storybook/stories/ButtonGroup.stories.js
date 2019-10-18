import { storiesOf } from '@storybook/vue'
import ButtonGroup from '@mesg-components/group/Button'

const items = [
  { title: 'Table', icon: 'fal fa-table', prefix: true },
  { title: 'Graph', icon: 'far fa-chart-area', prefix: true },
  { title: 'Table', icon: 'fal fa-table', suffix: true }
]

storiesOf('Button Group', module).add('default', () => ({
  components: { ButtonGroup },
  template: `
  <div class="container" >
    <ButtonGroup :items="items" />
  </div>`,
  data: () => ({ items })
}))
