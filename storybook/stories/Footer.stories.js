import { storiesOf } from '@storybook/vue'
import Footer from '@mesg-components/footer'

import imageBanner from '../assets/img/base-logo-mesg.svg'

import '../assets/style.scss'

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

const mesgCategories = ['technology', 'develop', 'about', 'community']

const mesgItems = [
  {
    key: 'technology',
    text: 'Technology',
    to: '',
    child: [
      { title: 'MESG Orchestrator', to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
      { title: 'MESG SDK', to: 'https://marketplace.mesg.com/' },
      { title: 'MESG Marketplace', to: 'https://docs.mesg.com/' },
      { title: 'Enterprise', to: 'https://forum.mesg.com/' },
      { title: 'Showcase', to: 'https://forum.mesg.com/' }
    ]
  },
  {
    key: 'develop',
    text: 'Developers',
    to: '',
    child: [
      { title: 'MESG Orchestrator', to: 'https://docs.mesg.com/guide/quick-start-guide.html' },
      { title: 'MESG SDK', to: 'https://marketplace.mesg.com/' },
      { title: 'MESG Marketplace', to: 'https://docs.mesg.com/' },
      { title: 'Enterprise', to: 'https://forum.mesg.com/' },
      { title: 'Showcase', to: 'https://forum.mesg.com/' }
    ]
  },
  {
    key: 'about',
    text: 'About us',
    to: '',
    child: [
      { title: 'Foundation', to: '/foundation' },
      { title: 'Token', to: '/roadmap' },
      { title: 'Roadmap', to: '/faq' },
      { title: 'Help Center', to: '/faq' },
      { title: 'Blog', to: '/faq' },
      { title: 'Press & Media', to: 'https://medium.com/mesg' }
    ]
  },
  {
    key: 'community',
    text: 'Community',
    child: [
      { title: 'Contributions Hub', to: '/token' },
      { title: 'Forum', to: '/token' },
      { title: 'Discord', to: '/enterprise' }
    ]
  }
]

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

const copyRightText = '© 2019 MESG Foundation'
const policyText = { text: 'Privacy & Cookie Policy', link: 'https://mesg.com/privacy-cookie-policy' }

storiesOf('Footer', module)
  .add('default', () => ({
    components: { Footer },
    template: `
  <Footer :banner="banner" :copyright="copyRightText" :items="items" :policy="policyText" :categories="categories" :icons="icons">
    <template v-slot:products="{ item }">
      <a class="category">{{item.text}}</a>
      <ul class="default-child">
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:develop="{ item }">
      <a class="category">{{item.text}}</a>
      <ul class="default-child">
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:foundation="{ item }">
      <a class="category">{{item.text}}</a>
      <ul class="default-child">
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
  .add('mesg.com', () => ({
    components: { Footer },
    template: `
  <Footer :banner="banner" :copyright="copyRightText" :items="mesgItems" :policy="policyText" :categories="mesgCategories" :icons="icons">
    <template v-slot:technology="{ item }">
      <a class="category" mb1>{{item.text}}</a>
      <ul class="display-child">
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:develop="{ item }">
    <a class="category" >{{item.text}}</a>
      <ul class="display-child">
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:about="{ item }">
    <a class="category" >{{item.text}}</a>
      <ul class="display-child">
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:community="{ item }">
    <a class="category" >{{item.text}}</a>
      <ul class="display-child">
        <li v-for="(child, i) in item.child" :key="i">
          <a :href="child.to">{{child.title}}</a>
        </li>
      </ul>
    </template>
  </Footer>`,
    data: () => ({ banner: imageBanner, copyRightText, policyText, mesgCategories, mesgItems, icons })
  }))
