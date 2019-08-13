import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/vue'
import Dialog from '@mesg-components/dialog/Dialog'
import Button from '@mesg-components/button/Button'
import Card from '@mesg-components/card/Card'

import '../style.css'

const stories = storiesOf('Dialog', module)

stories
  .add('default', () => ({
    components: { Dialog, Card },
    template: `
    <div>
      <h3>TEXT IN BACKGROUND</h3 >
      <Dialog v-model="items">
        <Card>
          <div style="margin: 20px">
              <h3>TEST DIALOG DISPLAY</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div>
                <button @click="action">Agree</button>
                <button @click="action">Disagree</button>
              </div>
            </div>
        </Card>
      </Dialog>
    </div>`,
    data: () => ({ items: true }),
    methods: { action: action('clicked') }
  }))
  .add('Custom width(350px)', () => ({
    components: { Dialog, Button, Card },
    template: ` <div>
    <h3>TEXT IN BACKGROUND</h3 >
    <Dialog v-model="items" max-width="350px">
      <Card>
        <div style="margin: 20px">
          <h3>TEST DIALOG DISPLAY</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div style="float: right;">
              <Button outline @click="action" >Agree</Button>
              <Button outline @click="action" >Disagree</Button>
            </div>
        </div>
      </Card>
    </Dialog>
  </div>`,
    data: () => ({ items: true }),
    methods: { action: action('clicked') }
  }))
