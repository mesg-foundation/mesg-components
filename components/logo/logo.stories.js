import { storiesOf } from '@storybook/vue'
import Logo from './logo'

storiesOf('Logo', module)
  .add('ethereum', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/logos/etherscan.png',
      srcset: '/logos/etherscan@2x.png 2x, /logos/etherscan@3x.png 3x'
    })
  }))
  .add('traded', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/logos/traded.png',
      srcset: '/logos/traded@2x.png 2x, /logos/traded@3x.png 3x'
    })
  }))
  .add('release', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/logos/logo-released.png',
      srcset: '/logos/released@2x.png 2x, /logos/released@3x.png 3x'
    })
  }))
  .add('supply', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/logos/supply.png',
      srcset: '/logos/supply@2x.png 2x, /logos/supply@3x.png 3x'
    })
  }))
  .add('angle-down-purple', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-down-purple.png',
      srcset: '/icons/angle-down-purple@2x.png 2x, /icons/angle-down-purple@3x.png 3x'
    })
  }))
  .add('angle-left-grey', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-left-grey.png',
      srcset: '/icons/angle-left-grey@2x.png 2x, /icons/angle-left-grey@3x.png 3x'
    })
  }))
  .add('angle-left-purple', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-left-purple.png',
      srcset: '/icons/angle-left-purple@2x.png 2x, /icons/angle-left-purple@3x.png 3x'
    })
  }))
  .add('angle-right-grey', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-right-grey.png',
      srcset: '/icons/angle-right-grey@2x.png 2x, /icons/angle-right-grey@3x.png 3x'
    })
  }))
  .add('angle-right-purple', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-right-purple.png',
      srcset: '/icons/angle-right-purple@2x.png 2x, /icons/angle-right-purple@3x.png 3x'
    })
  }))
  .add('angle-up-grey', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-up-grey.png',
      srcset: '/icons/angle-up-grey@2x.png 2x, /icons/angle-up-grey@3x.png 3x'
    })
  }))
  .add('graph-purple', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/graph-purple.png',
      srcset: '/icons/graph-purple@2x.png 2x, /icons/graph-purple@3x.png 3x'
    })
  }))
  .add('graph-white', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/graph-white.png',
      srcset: '/icons/graph-white@2x.png 2x, /icons/graph-white@3x.png 3x'
    })
  }))
  .add('angle-down-grey', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/angle-down-grey.png',
      srcset: '/icons/angle-down-grey@2x.png 2x, /icons/angle-down-grey@3x.png 3x'
    })
  }))
  .add('table-purple', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/table-purple.png',
      srcset: '/icons/table-purple@2x.png 2x, /icons/table-purple@3x.png 3x'
    })
  }))
  .add('table-white', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/table-white.png',
      srcset: '/icons/table-white@2x.png 2x, /icons/table-white@3x.png 3x'
    })
  }))
  .add('wallet', () => ({
    components: { Logo },
    template: `<Logo :src="src" :srcset="srcset"/>`,
    data: () => ({
      src: '/icons/wallet.png',
      srcset: '/icons/wallet@2x.png 2x, /icons/wallet@3x.png 3x'
    })
  }))
