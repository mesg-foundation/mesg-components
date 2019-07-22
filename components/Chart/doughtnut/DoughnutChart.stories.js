import { storiesOf } from '@storybook/vue'
import DoughnutChart from './DoughnutChart'

storiesOf('Doughnut Chart', module).add('default', () => ({
  components: { DoughnutChart },
  template: `<DoughnutChart></DoughnutChart>`
}))
