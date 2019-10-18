import { storiesOf } from '@storybook/vue'
import Header from '@mesg-components/header'
import Button from '@mesg-components/button'

storiesOf('Header', module)
  .add('default', () => ({
    components: { Header, Button },
    template: `
  <Header :title="title" :description="description">
    <div>
      <Button target="_blank" primary>Get started</Button>
    </div>
  </Header>`,
    data: () => ({
      title: 'The builders’ open economy',
      description: 'A decentralized event-driven task-orchestration system based on an open market of pay-per-use services.'
    })
  }))
  .add('default without image', () => ({
    components: { Header, Button },
    template: `
    <Header :title="title" :description="description" no-picture>
      <div>
        <Button target="_blank" primary>Get started</Button>
      </div>
    </Header>`,
    data: () => ({
      title: 'The builders’ open economy',
      description: 'A decentralized event-driven task-orchestration system based on an open market of pay-per-use services.'
    })
  }))
