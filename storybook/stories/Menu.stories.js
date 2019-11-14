import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu'
import Button from '@mesg-components/button'

import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const categories = ['technology', 'developers', 'showcase', 'contributions', 'token', 'get-started']
const items = [
  { key: 'technology', text: 'Technology' },
  { key: 'developers', text: 'Developers' },
  { key: 'showcase', text: 'Showcase' },
  { key: 'contributions', text: 'Contributions' },
  { key: 'token', text: 'Token' },
  { key: 'get-started', text: 'Get Started' }
]

storiesOf('Menu', module).add('default', () => ({
  components: { Menu, Button },
  template: `
  <Menu :banner="banner" :categories="categories" :items="items">

    <template v-slot:technology="{ item }">
      <p>{{item.text}}</p>
    </template>

    <template v-slot:developers="{ item }">
      <p>{{item.text}}</p>
    </template>

    <template v-slot:show="{ item }">
      <p>{{item.text}}</p>
    </template>

    <template v-slot:contributions="{ item }">
      <p>{{item.text}}</p>
    </template>

    <template v-slot:token="{ item }">
        <p>{{item.text}}</p>
    </template>

    <template v-slot:get-started="{ item }">
      <Button primary>{{item.text}}</Button>
    </template>
    
  </Menu>`,
  data: () => ({ banner: logo, items, categories })
}))
