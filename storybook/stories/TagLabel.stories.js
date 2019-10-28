import { storiesOf } from '@storybook/vue'
import Tag from '@mesg-components/tag-label'

storiesOf('Tag label', module)
  .add('default', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag>Default</Tag>
    </div>`
  }))
  .add('tag with icon', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag><i class="fal fa-table"/>Tag with icon</Tag>
    </div>`
  }))
  .add('MESG Partner', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag type="partner">MESG Partner</Tag>
    </div>`
  }))
  .add('Community', () => ({
    components: { Tag },
    template: `
  <div class="container">
    <Tag type="community">Community</Tag>
  </div>`
  }))
