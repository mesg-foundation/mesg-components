import { storiesOf } from '@storybook/vue'
import Logo from './logo'

storiesOf('Logo', module)
  .add('ethereum', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: require('../../assets/logos/etherscan.png'),
      srcset: `${require('../../assets/logos/etherscan@2x.png')} 2x, ${require('../../assets/logos/etherscan@3x.png')} 3x`
    })
  }))