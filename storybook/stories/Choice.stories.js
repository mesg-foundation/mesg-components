import { storiesOf } from '@storybook/vue'
import Choice from '@mesg-components/choice'

const items = [
  { title: 'Table', icon: 'fal fa-table', prefix: true },
  { title: 'Graph', icon: 'far fa-chart-area', prefix: true },
  { title: 'Table', icon: 'fal fa-table', suffix: true }
]

storiesOf('Choice', module)
  .add('type select', () => ({
    components: { Choice },
    template: `
  <div class="container" >
    <Choice type="select" v-model="selected" :options="options"/>
  </div>`,
    data: () => ({
      selected: 30,
      options: [{ key: 10, value: 10 }, { key: 20, value: 20 }, { key: 30, value: 30 }, { key: 50, value: 50 }, { key: 100, value: 100 }]
    })
  }))
  .add('type radio', () => ({
    components: { Choice },
    template: `
  <div class="container" >
    <Choice type="radio" v-model="selected" :options="options"/>
    {{selected}}
  </div>`,
    data: () => ({
      selected: 30,
      options: [{ key: 10, value: 10 }, { key: 20, value: 20 }, { key: 30, value: 30 }, { key: 50, value: 50 }, { key: 100, value: 100 }]
    })
  }))
