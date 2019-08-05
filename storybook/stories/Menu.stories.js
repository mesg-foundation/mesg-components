import { storiesOf } from '@storybook/vue'
import Menu from '@mesg-components/menu/Menu'

import '../style.css'

const items = [
  {
    banner: {
      key: 'banner',
      text: 'MESG',
      href: '/'
    },
    menus: [
      {
        key: 'products',
        text: 'Products',       
        childs: [
          {
            key: 'sdk',
            text: 'MESG SDK',
            href: '#'
          },
          {
            key: 'marketplace',
            text: 'MESG Marketplace',
            href: '#'
          },
          {
            key: 'showcase',
            text: 'Showcase',
            href: '#'
          },
          {
            key: 'faq',
            text: 'FAQ',
            href: '#'
          }
        ]
      },
      {
        key: 'developers',
        text: 'Developers',        
        childs: [
          {
            key: 'dev-sdk',
            text: 'MESG SDK',
            href: '#'
          },
          {
            key: 'dev-marketplace',
            text: 'MESG Marketplace',
            href: '#'
          },
          {
            key: 'dev-showcase',
            text: 'Showcase',
            href: '#'
          },
          {
            key: 'faq',
            text: 'FAQ',
            href: '#'
          }
        ]
      },
      {
        key: 'foundation',
        text: 'Foundation'
      },
      {
        key: 'enterprise',
        text: 'Enterprise'
      }
    ]
  }
]

storiesOf('Menu', module)
.add('default', () => ({
  components: { Menu },
  template: `
  <Menu :items="items"/>`,
  data: () => ({
    items
  })
}))
.add('custom', () => ({
  components: { Menu },
  template: `
  <Menu :items="items">
    <template v-slot:banner="{ item }">        
      <a href="/" class="nuxt-link-exact-active nuxt-link-active">
        <img src="https://mesg.com/_nuxt/img/ce5e092.svg" alt="MESG">
      </a>
    </template>
    <template v-slot:enterprise="{ item }">
      <span>      
        My Enterprise
      </span>
    </template>
    <template v-slot:sdk="{ item }">      
      <a href="item.href"> 
        <img src="https://mesg.com/_nuxt/img/decdb61.svg" alt="SDK"></a>
      </a>
    </template>
    
    <template v-slot:dev-sdk="{item}">
        <span>
          <h4> {{ item.text }} </h4>
        </span>
    </template>
  </Menu>`,
  data: () => ({
    items
  })
}))
