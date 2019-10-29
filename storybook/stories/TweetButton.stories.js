import { storiesOf } from '@storybook/vue'
import TweetButton from '@mesg-components/social-network'

storiesOf('Tweet Button', module).add('default', () => ({
  components: { TweetButton },
  template: `<TweetButton text="Check out the latest rewarded contribution to the @MESGfoundation by [Name]. #MESGRewards" />`
}))