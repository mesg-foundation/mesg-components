import { storiesOf } from '@storybook/vue'
import icon from './Icon'

storiesOf('icon', module)
  .add('ethereum', () => ({
    components: { icon },
    template: `<icon :name="name" />`,
    data: () => ({      
      name:'etherscan'
    })
  }))
  .add('traded', () => ({
    components: { icon },
    template: `<icon :name="name" />`,
    data: () => ({      
      name:'traded'
    })
  }))
  .add('supply', () => ({
    components: { icon },
    template: `<icon :name="name" />`,
    data: () => ({      
      name:'supply'
    })
  }))
  .add('supply', () => ({
    components: { icon },
    template: `<icon :name="name" />`,
    data: () => ({      
      name:'released'
    })
  }))