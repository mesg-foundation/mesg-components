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
        href: '#',
        child: [
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
        href: '#'
      },
      {
        key: 'foundation',
        text: 'Foundation',
        href: '#'
      },
      {
        key: 'enterprise',
        text: 'Enterprise',
        href: '#'
      }
    ]
  }
]

storiesOf('Menu', module).add('default', () => ({
  components: { Menu },
  template: `
  <Menu :items="items" >
    <template v-slot:banner="{ item }">        
      <a href="/" class="nuxt-link-exact-active nuxt-link-active">
        <img src="https://mesg.com/_nuxt/img/ce5e092.svg" alt="MESG">
      </a>  
    </template>
    <template v-slot:enterprise="{ item }">
      <a href="item.href" class="enterprise btn--primary">      
      My Enterprise
      </a>
    </template>    
  </Menu>`,
  data: () => ({
    items
  })
}))
