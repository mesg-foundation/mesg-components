import { storiesOf } from '@storybook/vue'
import Tab from '@mesg-components/tab/Tab'

import '../style.css'

const items = [
  { key: 'github', text: 'Github'},
  { key: 'gitlab', text: 'Gitlab'},
  { key: 'bitbuckget', text: 'Bitbucket'},
  { key: 'mesg', text: 'MESG'}
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
    <template v-slot:tab-github="{item}">
      <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg"></img>
    </template>

    <template v-slot:section-github="{ item }">      
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </template>

    <template v-slot:section-mesg="{ item }">      
      <div>MESG SDK A suite of tools to connect together services with other devices and applications. Control the flow of data and level of security between your whole stack of technologies.</div>
    </template>


    </Tab>`,
    data: () => ({
      items
    })
  }))
