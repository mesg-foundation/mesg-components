import { storiesOf } from '@storybook/vue'
import Table from './Distribution.vue'
import '../../assets/style.css'

storiesOf('SubTable', module)
  .add('default', () => ({
    components: { Table },
    template: `
      <Table
        :distributions="distributions"
        :title="title"
      ></Table>`,
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