import { storiesOf } from '@storybook/vue'
import Snackbar from '@mesg-components/snackbar'

import '../style.css'

storiesOf('Snackbar', module)
  .add('default', () => ({
    components: { Snackbar },
    template: `<Snackbar text="Hello, I'm a snackbar" v-model="snackbar"/>`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('bottom center', () => ({
    components: { Snackbar },
    template: `<Snackbar bottom text="Hello, I'm a snackbar"   v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('top left', () => ({
    components: { Snackbar },
    template: `<Snackbar top left text="Hello, I'm a snackbar"   v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('bottom left', () => ({
    components: { Snackbar },
    template: `<Snackbar bottom left text="Hello, I'm a snackbar"   v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('top right', () => ({
    components: { Snackbar },
    template: `<Snackbar top right text="Hello, I'm a snackbar"   v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('bottom right', () => ({
    components: { Snackbar },
    template: `<Snackbar bottom right text="Hello, I'm a snackbar" v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('success', () => ({
    components: { Snackbar },
    template: `<Snackbar success text="Hello, I'm a snackbar" v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('info', () => ({
    components: { Snackbar },
    template: `<Snackbar info text="Hello, I'm a snackbar" v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('error', () => ({
    components: { Snackbar },
    template: `<Snackbar error text="Hello, I'm a snackbar" v-model="snackbar" />`,
    data: () => ({
      snackbar: true
    })
  }))
  .add('custom timeout (1s) ', () => ({
    components: { Snackbar },
    template: `<Snackbar text="Hello, I'm a snackbar" v-model="snackbar" :timeout="timeout"/>`,
    data: () => ({
      snackbar: true,
      timeout: 1000
    })
  }))
  .add('custom text ', () => ({
    components: { Snackbar },
    template: `<Snackbar v-model="snackbar" :timeout="timeout">{{text}}</Snackbar>`,
    data: () => ({
      snackbar: true,
      text: 'MESG.com',
      timeout: 2000
    })
  }))
