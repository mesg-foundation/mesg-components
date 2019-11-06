import { storiesOf } from '@storybook/vue'
import TypeFormPopup from '@mesg-components/type-form-popup'

import Button from '@mesg-components/button'

storiesOf('TypeFormPopup', module)
  .add('default', () => ({
    components: { TypeFormPopup },
    template: `
    <div class="container">
      <TypeFormPopup id="bOJ0qz">Contact us</TypeFormPopup>
    </div>`
  }))
  .add('Button', () => ({
    components: { TypeFormPopup, Button },
    template: `
    <div class="container">
      <TypeFormPopup id="bOJ0qz">
        <Button primary>Contact us</Button>
      </TypeFormPopup>
    </div>`
  }))
  .add('a tag', () => ({
    components: { TypeFormPopup },
    template: `
    <div class="container">
      <TypeFormPopup id="bOJ0qz">
        <a class="link">link</a>
      </TypeFormPopup>
    </div>`
  }))
