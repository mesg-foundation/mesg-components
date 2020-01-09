import { storiesOf } from '@storybook/vue'
import Header from '@mesg-components/header'
import Button from '@mesg-components/button'

import image from '../assets/img/home.svg'

storiesOf('Header', module)
  .add('default', () => ({
    components: { Header, Button },
    template: `<Header :title="title" :description="description" :image="image"/>`,
    data: () => ({
      title: 'The builders’ open economy',
      description: 'A decentralized event-driven task-orchestration system based on an open market of pay-per-use services.',
      image
    })
  }))
  .add('Header with a slot', () => ({
    components: { Header, Button },
    template: `
    <Header :title="title" :description="description" :image="image">
      <Button primary mt2>xxx</Button>
    </Header>`,
    data: () => ({
      title: 'The builders’ open economy',
      description: 'A decentralized event-driven task-orchestration system based on an open market of pay-per-use services.',
      image
    })
  }))
  .add('No picture, header in full width', () => ({
    components: { Header, Button },
    template: `
    <Header :title="title" :description="description">
      <Button primary mt2>xxx</Button>
    </Header>`,
    data: () => ({
      title: 'The builders’ open economy',
      description: 'A decentralized event-driven task-orchestration system based on an open market of pay-per-use services.'
    })
  }))
