import { storiesOf } from '@storybook/vue'
import AtdCard from './AtdCard.vue'

storiesOf('AtdCard', module)
  .add('default', () => ({
    components: { AtdCard },
    template: `
      <AtdCard :card="card"/>
    `,
    data: () => ({ card: 'card' })
  }))
  .add('outline', () => ({
    components: { AtdCard },
    template: `
      <AtdCard :card="card"/>
    `,
    data: () => ({ card: 'card-base' })
  }))
  .add('outline-base', () => ({
    components: { AtdCard },
    template: `
      <AtdCard :card="card" />
    `,
    data: () => ({ card: 'card-base-bottom' })
  }))
