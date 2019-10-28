import { storiesOf } from '@storybook/vue'
import Tag from '@mesg-components/tag-label'

storiesOf('Tag label', module)
  .add('default', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag >Default</Tag>
    </div>`
  }))
  .add('With Partner', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag type="partner">Tag Partner</Tag>
    </div>`
  }))
  .add('With Partner with icon', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag type="partner">
        <i class="fal fa-table"/>
        Tag Partner
      </Tag>
    </div>`
  }))
  .add('With Community', () => ({
    components: { Tag },
    template: `
  <div class="container">
    <Tag type="community">Tag Community</Tag>
  </div>`
  }))
  .add('With Community with icon', () => ({
    components: { Tag },
    template: `
  <div class="container">
    <Tag type="community">
      <i class="fal fa-table"/>
      Tag Community
    </Tag>
  </div>`
  }))
