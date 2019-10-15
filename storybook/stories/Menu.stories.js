import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu'

const banner = {
  textOrLogo: 'MESG',
  image: false,
  external: true,
  to: '/'
}

const links = [
  {
    title: { name: 'Products', to: '#' },
    subtitle: [
      { id: 'orchestrator', title: 'MESG Orchestrator', to: '/mesg-orchestrator' },
      { id: 'engine', title: 'MESG SDK', to: '/mesg-sdk' },
      { id: 'marketplace', title: 'MESG Marketplace', to: '/mesg-marketplace' },
      { id: 'showcase', title: 'Showcase', to: '/showcase' }
    ]
  },
  {
    title: { name: 'Developers', to: '#' },
    subtitle: [
      { id: 'getStarted', title: 'Get started', external: true, to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
      { id: 'marketplace', title: 'Marketplace', external: true, to: 'https://marketplace.mesg.com/' },
      { id: 'documentation', title: 'Documentation', external: true, to: 'https://docs.mesg.com/' },
      { id: 'forum', title: 'Forum', external: true, to: 'https://forum.mesg.com/' }
    ]
  },
  {
    title: { name: 'Foundation', to: '#' },
    subtitle: [
      { id: 'overview', title: 'Overview', to: '/foundation' },
      { id: 'roadmap', title: 'Roadmap', to: '/roadmap' },
      { id: 'faq', title: 'FAQ', to: '/faq' },
      { id: 'blog', title: 'Blog', external: true, to: 'https://medium.com/mesg' }
    ]
  },
  { title: { name: 'Token', to: '/' } },
  { button: { name: 'Enterprise', to: '/' } }
]

storiesOf('Menu', module).add('default', () => ({
  components: { Menu },
  template: `<Menu :banner="banner" :links="links" />`,
  data: () => ({ banner, links })
}))
