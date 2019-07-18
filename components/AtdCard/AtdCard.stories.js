import { storiesOf } from '@storybook/vue'
import AtdCard from './AtdCard.vue'

storiesOf('AtdCard', module).add('normal', () => ({
  components: { AtdCard },
  template: `
      <AtdCard/>
    `
}))
