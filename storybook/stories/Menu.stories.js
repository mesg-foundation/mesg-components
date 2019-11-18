import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu'
import Button from '@mesg-components/button'

import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const categories = ['technology', 'developers', 'showcase', 'contributions', 'token', 'get-started']
const items = [
  {
    key: 'technology',
    text: 'Technology',
    to: '',
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  {
    key: 'developers',
    text: 'Developers',
    to: '',
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  { key: 'showcase', text: 'Showcase' },
  { key: 'contributions', text: 'Contributions' },
  { key: 'token', text: 'Token' },
  { key: 'get-started', text: 'Get Started', type: 'button' }
]

storiesOf('Menu', module).add('default', () => ({
  components: { Menu, Button },
  template: `
  <Menu :logo="logo" :items="items"/>`,
  data: () => ({ logo, items })
}))
