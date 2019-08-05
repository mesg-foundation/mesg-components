import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/vue'
import Dialog from '@mesg-components/dialog/Dialog'
import Button from '@mesg-components/button/Button'

import '../style.css'

const stories = storiesOf('Dialog', module)

stories
  .add('default', () => ({
    components: { Dialog },
    template: `
  <div>
    <h3>TEXT IN BACKGROUND</h3 >
    <Dialog v-model="items">
      <h3>TEST DIALOG DISPLAY</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div>
        <button @click="action">Agree</button>
        <button @click="action">Disagree</button>
      </div>
    </Dialog>
  </div>`,
    data: () => ({ items: true }),
    methods: { action: action('clicked') }
  }))
  .add('Custom width(300px)', () => ({
    components: { Dialog, Button },
    template: ` <div>
    <h3>TEXT IN BACKGROUND</h3 >
    <Dialog v-model="items" max-width="300px">
      <h3>TEST DIALOG DISPLAY</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div>
        <div style="float: right;">
          <Button outline @click="action" >Agree</Button>
          <Button outline @click="action" >Disagree</Button>
        </div>
      </div>
    </Dialog>
  </div>`,
    data: () => ({ items: true }),
    methods: { action: action('clicked') }
  }))
  .add('fullscreen', () => ({
    components: { Dialog, Button },
    template: ` <div>
    <h3>TEXT IN BACKGROUND</h3 >
    <Dialog v-model="items" fullscreen>
      <h3>TEST DIALOG DISPLAY</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div>
        <div style="float: right;">
          <Button outline @click="action" >Agree</Button>
          <Button outline @click="action" >Disagree</Button>
        </div>
      </div>
    </Dialog>
  </div>`,
    data: () => ({ items: true }),
    methods: { action: action('clicked') }
  }))
