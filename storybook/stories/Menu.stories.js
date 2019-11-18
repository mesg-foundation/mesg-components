import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu'
import Button from '@mesg-components/button'

import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

import '../assets/menu.scss'

const categories = ['technology', 'developers', 'showcase', 'contributions', 'token', 'get-started']
const items = [
  {
    key: 'technology',
    text: 'Technology',
    child: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  {
    key: 'developers',
    text: 'Developers',
    child: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
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
      <div class="drop-down">
        <a href="#" class="top-menu">
          {{ item.text }}
          <i class="far fa-angle-down">
          </i>
        </a>
        <div flex column class="sub-menu">
          <a v-for="(link,i) in item.child" :key="i">
            {{link.text}}
          </a>
        </div>
      </div>
    </template>

    <template v-slot:developers="{ item }">
      <div class="drop-down">
        <a href="#" class="top-menu">
          {{ item.text }}
          <i class="far fa-angle-down"/>
        </a>
        <div flex column class="sub-menu" >
          <a v-for="(link,i) in item.child" :key="i">
            {{link.text}}
          </a>
        </div>
      </div>
    </template>

    <template v-slot:showcase="{ item }">
      <a href="#" class="top-menu">
        {{ item.text }}
      </a>
    </template>

    <template v-slot:contributions="{ item }">
      <a href="#" class="top-menu">
        {{ item.text }}
      </a>  
    </template>

    <template v-slot:token="{ item }">
      <a href="#" class="top-menu">
        {{ item.text }}
      </a>  
    </template>
    
    <template v-slot:get-started="{ item }">
      <Button primary small>{{item.text}}</Button>
    </template>

  </Menu>`,
  data: () => ({ banner: logo, items, categories })
}))
