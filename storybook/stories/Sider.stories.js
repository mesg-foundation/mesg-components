import { storiesOf } from '@storybook/vue'
import Sider from '@mesg-components/sider/Sider'

import '../style.css'

const items = [
  { key: 'general', text: 'General', href: '#' },
  { key: 'gettingst', text: 'Getting Start', href: '#' },
  { key: 'transaction', text: 'Transactions', href: '#' },
  { key: 'compatibility', text: 'Compatibility', href: '#' },
  { key: 'community', text: 'Community', href: '#' },
  { key: 'businesss', text: 'Business and Strategy', href: '#' },
  { key: 'development', text: 'Development', href: '#' }
]

storiesOf('Sider', module)
.add('default', () => ({
  components: { Sider },
  template: `<Sider :items="items"/>`,
  data: () => ({
    items
  })
}))
.add('custom', () => ({
  components: { Sider },
  template: `<Sider :items="items">
      <template v-slot:general="{ item }">
        <a :href="item.href" class="link-secondary">        
          <i class="far fa-chevron-right"></i>
          <span>Custom-general</span>
        </a>  
      </template>
    </Sider>`,
  data: () => ({
    items
  })
}))
