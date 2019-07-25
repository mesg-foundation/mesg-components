import { storiesOf } from '@storybook/vue'
import List from './TableRow.vue'
import '../../assets/style.css'

storiesOf('SubTable', module)
  .add('default', () => ({
    components: { List },
    template: `
      <List
        :distributions="distributions"
        :title="title"
      >      
      </List>`,
    data: () => ({
      title:'Distribution of the MESG Token released',
      distributions:[
        {name:'sale', amount:'1234.48', percentage:2},
        {name:'partner', amount:'7339366998.48', percentage:1},
        {name:'founder', amount:'146796.24', percentage:4},
        {name:'reserve', amount:'0.00', percentage:0}
      ]
    })
  }))
  .add('custom', () => ({
    components: { List },
    template: `
      <List
        :distributions="distributions"
        :title="title"
      >
      <template slot-scope="{ item }">      
        <div>Custom-Name: {{item.name }} </div>
        <div>Custom-Amount: {{item.amount }} </div>
        <div>Custom-Percentage: {{item.percentage }} </div>
      </template>
      </List>`,
    data: () => ({
      title:'Distribution of the MESG Token released',
      distributions:[
        {name:'sale', amount:'1234.48', percentage:2},
        {name:'partner', amount:'7339366998.48', percentage:1},
        {name:'founder', amount:'146796.24', percentage:4},
        {name:'reserve', amount:'0.00', percentage:0}
      ]
    })
  }))