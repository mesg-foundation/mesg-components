import { storiesOf } from '@storybook/vue'
import TypeFormPopup from '@mesg-components/type-form-popup'

import Button from '@mesg-components/button'

storiesOf('TypeFormPopup', module)
  .add('default', () => ({
    components: { TypeFormPopup },
    template: `<TypeFormPopup id="bOJ0qz">TEST</TypeFormPopup>`
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
