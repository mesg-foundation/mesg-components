import { storiesOf } from '@storybook/vue'
import TypeFormPopup from '@mesg-components/type-form-popup'

import Button from '@mesg-components/button'

storiesOf('TypeFormPopup', module)
  .add('default', () => ({
    components: { TypeFormPopup },
    template: `
    <div class="container">
      <TypeFormPopup id="bOJ0qz">TEST</TypeFormPopup>
    </div>`
  }))
  .add('Button', () => ({
    components: { TypeFormPopup, Button },
    template: `
    <div class="container">
      <TypeFormPopup id="bOJ0qz">
        <Button primary>TEST</Button>
      </TypeFormPopup>
    </div>`
  }))
  .add('a tag', () => ({
    components: { TypeFormPopup },
    template: `
    <div class="container">
      <TypeFormPopup id="bOJ0qz">
        <a primary>TEST</a>
      </TypeFormPopup>
    </div>`
  }))
