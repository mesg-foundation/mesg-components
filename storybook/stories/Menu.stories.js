import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu'

import logo from '../assets/img/MESG-logo-horizontal-purple.svg'

const items = [
  {
    text: 'Technology',
    to: '#',
    subMenu: [
      { text: 'Orchestrator', to: '/mesg-orchestrator' },
      { text: 'SDK', to: '/mesg-sdk' },
      { text: 'Marketplace', to: '/mesg-marketplace' },
      { text: 'Enterprise', to: '/enterprise' }
    ]
  },
  {
    text: 'Developers',
    to: '#',
    subMenu: [
      { text: 'Get started', to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
      { text: 'Marketplace', to: 'https://marketplace.mesg.com/' },
      { text: 'Documentation', to: 'https://docs.mesg.com' },
      { text: 'Tutorials', to: 'https://docs.mesg.com/tutorials/' },
      { text: 'Github', to: 'https://www.github.com' }
    ]
  },
  { text: 'Showcase', to: '/showcase' },
  { text: 'Contributions', to: '/contributions' },
  { text: 'Token', to: '/token' },
  { text: 'Get Started', to: '/get-started', type: 'button' }
]

storiesOf('Menu', module)
  .add('default', () => ({
    components: { Menu },
    template: `
  <Menu :logo="logo" :items="items"/>`,
    data: () => ({ logo, items })
  }))
  .add('use NuxtJS framework', () => ({
    components: { Menu },
    template: `
  <Menu :logo="logo" :items="items" is-nuxt/>`,
    data: () => ({ logo, items })
  }))
