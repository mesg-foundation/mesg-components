import { storiesOf } from '@storybook/vue'
import Footer from '@mesg-components/footer'

import imageBanner from '../assets/img/base-logo-mesg.svg'

const items = [
  {
    key: 'products',
    text: 'Products',
    child: [
      { id: 'orchestrator', title: 'MESG Orchestrator', to: '/mesg-orchestrator' },
      { id: 'engine', title: 'MESG SDK', to: '/mesg-sdk' },
      { id: 'marketplace', title: 'MESG Marketplace', to: '/mesg-marketplace' },
      { id: 'showcase', title: 'Showcase', to: '/showcase' }
    ]
  },
  {
    key: 'develop',
    text: 'Developers',
    child: [
      { id: 'getStarted', title: 'Get started', to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
      { id: 'marketplace', title: 'Marketplace', to: 'https://marketplace.mesg.com/' },
      { id: 'documentation', title: 'Documentation', to: 'https://docs.mesg.com/' },
      { id: 'forum', title: 'Forum', to: 'https://forum.mesg.com/' }
    ]
  },
  {
    key: 'foundation',
    text: 'Foundation',
    child: [
      { id: 'overview', title: 'Overview', to: '/foundation' },
      { id: 'roadmap', title: 'Roadmap', to: '/roadmap' },
      { id: 'faq', title: 'FAQ', to: '/faq' },
      { id: 'blog', title: 'Blog', to: 'https://medium.com/mesg' }
    ]
  },
  {
    key: 'token',
    text: 'Token',
    child: [
      { id: 'toke', title: 'Token', to: '/token' },
      { id: 'enterprise', title: 'Enterprise', to: '/enterprise' }
    ]
  }
]

const categories = ['products', 'develop', 'foundation', 'token']

const icons = [
  { to: 'https://medium.com/mesg', classIcon: 'fab fa-medium' },
  { to: 'https://github.com/mesg-foundation', classIcon: 'fab fa-github' },
  { to: 'https://forum.mesg.com', classIcon: 'fas fa-comments' },
  { to: 'https://discordapp.com/invite/5tVTHJC', classIcon: 'fab fa-discord' },
  { to: 'https://twitter.com/mesgfoundation', classIcon: 'fab fa-twitter' },
  { to: 'https://t.me/mesg_community', classIcon: 'fab fa-telegram-plane' },
  { to: 'https://www.linkedin.com/company/mesg', classIcon: 'fab fa-linkedin-in' },
  { to: 'https://www.facebook.com/mesgfoundation', classIcon: 'fab fa-facebook' },
  { to: 'https://www.reddit.com/r/MESG/', classIcon: 'fab fa-reddit-alien' }
]

const banner = 'MESG Brand'
const copyRightText = '© 2019 MESG Foundation'
const policyText = { text: 'Privacy & Cookie Policy', link: 'https://mesg.com/privacy-cookie-policy' }

storiesOf('Footer', module).add('default', () => ({
  components: { Footer },
  template: `
  <Footer :banner="banner" :copyright="copyRightText" :items="items" :policy="policyText" :categories="categories" :icons="icons">
    <template v-slot:products="{ item }">
      <h1 style="margin: 0">{{item.text}}</h1>
      <ul>
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:develop="{ item }">
      <h1 style="margin: 0">{{item.text}}</h1>
      <ul>
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:foundation="{ item }">
      <h1 style="margin: 0">{{item.text}}</h1>
      <ul>
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:token="{ item }">
      <ul>
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
  </Footer>`,
  data: () => ({ banner: imageBanner, copyRightText, policyText, categories, items, icons })
}))
