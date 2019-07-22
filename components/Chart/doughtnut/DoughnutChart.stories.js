import { storiesOf } from '@storybook/vue'
import DoughnutChart from './DoughnutChart'

import '../../../assets/style.css'

storiesOf('Doughnut Chart', module)
  .add('default', () => ({
    components: { DoughnutChart },
    template: `<DoughnutChart/>`
  }))
  .add('with data', () => ({
    components: { DoughnutChart },
    template: `<DoughnutChart :items="items" />`,
    data: () => ({
      items: [1, 2, 3, 4]
    })
  }))
