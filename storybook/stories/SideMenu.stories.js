import { storiesOf } from '@storybook/vue'
import Sider from '@mesg-components/side-menu'

import '../style.css'

const items = [
  { key: 'general', text: 'General', href: '#general' },
  { key: 'gettingst', text: 'Getting Start', href: '#getting-started' },
  { key: 'transaction', text: 'Transactions', href: '#transactions' },
  { key: 'compatibility', text: 'Compatibility', href: '#compatibility' },
  { key: 'community', text: 'Community', href: '#community' },
  { key: 'businesss', text: 'Business and Strategy', href: '#business-and-strategy' },
  { key: 'development', text: 'Development', href: '#development' }
]

storiesOf('SideMenu', module)
  .add('default', () => ({
    components: { Sider },
    template: `<Sider :items="items"/>`,
    data: () => ({
      items
    })
  }))
  .add('custom', () => ({
    components: { Sider },
    template: `
    <div style="min-height: 5000px;background: linear-gradient(0deg, rgba(0,0,0, .5), transparent);">      
      <Sider :items="items">
        <template v-slot:general="{ item }">
          <a :href="item.href" class="link-secondary">        
              <i class="chevron right"></i>
              <span>Custome-general</span>
            </a>  
          </template>

          <template v-slot:businesss="{ item }">
            <a :href="item.href" class="link-secondary">        
              <i class="chevron right"></i>
              <span>Custom Business</span>
            </a>  
          </template>
      </Sider>           
    </div>`,
    data: () => ({
      items
    })
  }))
