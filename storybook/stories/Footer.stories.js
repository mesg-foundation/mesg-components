import { storiesOf } from '@storybook/vue'
import Footer from '@mesg-components/footer'

const links = [
  [
    { id: 'products', title: 'Products', category: true, external: true, to: '#' },
    { id: 'orchestrator', title: 'MESG Orchestrator', to: '/mesg-orchestrator' },
    { id: 'engine', title: 'MESG SDK', to: '/mesg-sdk' },
    { id: 'marketplace', title: 'MESG Marketplace', to: '/mesg-marketplace' },
    { id: 'showcase', title: 'Showcase', to: '/showcase' }
  ],
  [
    { id: 'develop', title: 'Developers', category: true, external: true, to: '#' },
    { id: 'getStarted', title: 'Get started', external: true, to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
    { id: 'marketplace', title: 'Marketplace', external: true, to: 'https://marketplace.mesg.com/' },
    { id: 'documentation', title: 'Documentation', external: true, to: 'https://docs.mesg.com/' },
    { id: 'forum', title: 'Forum', external: true, to: 'https://forum.mesg.com/' }
  ],
  [
    { id: 'foundation', title: 'Foundation', category: true, external: true, to: '#' },
    { id: 'overview', title: 'Overview', to: '/foundation' },
    { id: 'roadmap', title: 'Roadmap', to: '/roadmap' },
    { id: 'faq', title: 'FAQ', to: '/faq' },
    { id: 'blog', title: 'Blog', external: true, to: 'https://medium.com/mesg' }
  ],
  [{ id: 'toke', title: 'Token', to: '/token' }, { id: 'enterprise', title: 'Enterprise', to: '/enterprise' }]
]

const icons = [
  { to: 'https://medium.com/mesg', icon: 'fab fa-medium' },
  { to: 'https://github.com/mesg-foundation', icon: 'fab fa-github' },
  { to: 'https://forum.mesg.com', icon: 'fas fa-comments' },
  { to: 'https://discordapp.com/invite/5tVTHJC', icon: 'fab fa-discord' },
  { to: 'https://twitter.com/mesgfoundation', icon: 'fab fa-twitter' },
  { to: 'https://t.me/mesg_community', icon: 'fab fa-telegram-plane' },
  { to: 'https://www.linkedin.com/company/mesg', icon: 'fab fa-linkedin-in' },
  { to: 'https://www.facebook.com/mesgfoundation', icon: 'fab fa-facebook' },
  { to: 'https://www.reddit.com/r/MESG/', icon: 'fab fa-reddit-alien' }
]

const banner = 'MESG Brand'
const copyRightText = '© 2019 MESG Foundation'
const policyText = { title: 'Privacy & Cookie Policy', link: '/' }

storiesOf('Footer', module)
  .add('default with data', () => ({
    components: { Footer },
    template: `<Footer :banner="banner" :copyRightText="copyRightText" :links="links" :policyText="policyText" :icons="icons" />`,
    data: () => ({ banner, copyRightText, policyText, links, icons })
  }))
  .add('Custom footer', () => ({
    components: { Footer },
    template: `<Footer>Custome footer</Footer>`
  }))
