import { storiesOf } from '@storybook/vue'
import MesgCard from './MesgCard.vue'

storiesOf('MesgCard', module)
  .add('default', () => ({
    components: { MesgCard },
    template: `
      <MesgCard />
    `,
    data: () => ({ card: 'card' })
  }))
  .add('outline', () => ({
    components: { MesgCard },
    template: `
      <MesgCard noShadow bordered width="225px" height="144px" />
    `
  }))
  .add('outline-base', () => ({
    components: { MesgCard },
    template: `
      <MesgCard  noShadow bordered width="225px" height="144px" colored/>
    `,
    data: () => ({ card: 'card-base-bottom' })
  }))
