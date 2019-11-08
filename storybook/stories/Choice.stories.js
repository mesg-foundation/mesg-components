import { storiesOf } from '@storybook/vue'
import Choice from '@mesg-components/choice'

storiesOf('Choice', module)
  .add('type select', () => ({
    components: { Choice },
    template: `
  <div class="container" >
    <Choice type="select" v-model="selected" :options="options"/>
    {{selected}}
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
  .add('type button', () => ({
    components: { Choice },
    template: `
  <div class="container" >
    <Choice type="button-group" v-model="selected" :options="options"/>
    {{selected}}
  </div>`,
    data: () => ({
      selected: 'Table',
      options: [
        { key: 1, value: 'Table', preIcon: 'fal fa-table' },
        { key: 2, value: 'Graph', preIcon: 'far fa-chart-area' },
        { key: 3, value: 'Button' },
        { key: 5, value: 'Pie', postIcon: 'far fa-chart-area' },
        { key: 6, value: 'Radio', postIcon: 'fal fa-table' }
      ]
    })
  }))
  .add('type checkbox', () => ({
    components: { Choice },
    template: `
  <div class="container" >
    <Choice type="checkbox" v-model="selected" :options="options"/>
    {{selected}}
  </div>`,
    data: () => ({
      selected: '',
      options: [{ key: 10, value: 10 }, { key: 20, value: 20 }, { key: 30, value: 30 }, { key: 50, value: 50 }, { key: 100, value: 100 }]
    })
  }))
