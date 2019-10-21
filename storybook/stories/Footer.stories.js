import { storiesOf } from '@storybook/vue'
import Footer from '@mesg-components/footer'

import imageBanner from '../assets/img/base-logo-mesg.svg'

const links = [
  [
    { id: 'products', title: 'Products', category: true, to: '#' },
    { id: 'orchestrator', title: 'MESG Orchestrator', to: '/mesg-orchestrator' },
    { id: 'engine', title: 'MESG SDK', to: '/mesg-sdk' },
    { id: 'marketplace', title: 'MESG Marketplace', to: '/mesg-marketplace' },
    { id: 'showcase', title: 'Showcase', to: '/showcase' }
  ],
  [
    { id: 'develop', title: 'Developers', category: true, to: '#' },
    { id: 'getStarted', title: 'Get started', to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
    { id: 'marketplace', title: 'Marketplace', to: 'https://marketplace.mesg.com/' },
    { id: 'documentation', title: 'Documentation', to: 'https://docs.mesg.com/' },
    { id: 'forum', title: 'Forum', to: 'https://forum.mesg.com/' }
  ],
  [
    { id: 'foundation', title: 'Foundation', category: true, to: '#' },
    { id: 'overview', title: 'Overview', to: '/foundation' },
    { id: 'roadmap', title: 'Roadmap', to: '/roadmap' },
    { id: 'faq', title: 'FAQ', to: '/faq' },
    { id: 'blog', title: 'Blog', to: 'https://medium.com/mesg' }
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
const policyText = { title: 'Privacy & Cookie Policy', link: 'https://mesg.com/privacy-cookie-policy' }

storiesOf('Footer', module)
  .add('default with image banner', () => ({
    components: { Footer },
    template: `<Footer :banner="banner" :copy-right="copyRightText" :links="links" :policy="policyText" :icons="icons" />`,
    data: () => ({ banner: imageBanner, copyRightText, policyText, links, icons })
  }))
  .add('default with text banner', () => ({
    components: { Footer },
    template: `<Footer :banner="banner" :copy-right="copyRightText" :links="links" :policy="policyText" :icons="icons" />`,
    data: () => ({ banner, copyRightText, policyText, links, icons })
  }))
