import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu'
import Button from '@mesg-components/button'

import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const items = [
  {
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
    text: 'Developers',
    to: '',
    subMenu: [
      { text: 'Orchestrator', to: '' },
      { text: 'SDK', to: '' },
      { text: 'Marketplace', to: '' },
      { text: 'Enterprise', to: '' }
    ]
  },
  { text: 'Showcase', to: '' },
  { text: 'Contributions', to: '' },
  { text: 'Token', to: '' },
  { text: 'Get Started', to: '', type: 'button' }
]

storiesOf('Menu', module).add('default', () => ({
  components: { Menu, Button },
  template: `
  <Menu :logo="logo" :items="items"/>`,
  data: () => ({ logo, items })
}))
