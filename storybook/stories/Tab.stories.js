import { storiesOf } from '@storybook/vue'
import Tab from '@mesg-components/tab/Tab'

import '../style.css'

const items = [
  { key: 'github', text: 'Github', href: '#' },
  { key: 'gitlab', text: 'Gitlab', href: '#' },
  { key: 'bitbuckget', text: 'Bitbucket', href: '#' },
  { key: 'mesg', text: 'Mesg', href: '#' }
]

storiesOf('Tab', module)
  .add('default', () => ({
    components: { Tab },
    template: `<Tab :items="items"></Tab>`,
    data: () => ({
      items
    })
  }))
  .add('custom', () => ({
    components: { Tab },
    template: `<Tab :items="items">
    <template v-slot:github="{ item }">      
      <img src="https://mesg.com/_nuxt/img/691c32f.svg" alt="MESG" style="width: 40px;height: 40px;"/>
    </template>

    <template v-slot:mesg="{ item }">
      <img src="https://mesg.com/_nuxt/img/decdb61.svg" alt="MESG" style="width: 40px;height: 40px;"/></template>
    </Tab>`,
    data: () => ({
      items
    })
  }))
