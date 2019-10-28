import { storiesOf } from '@storybook/vue'
import Tag from '@mesg-components/tag-label'

storiesOf('Tag label', module)
  .add('default', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag >
        <h2>Default</h2>
      </Tag>
    </div>`
  }))
  .add('With Partner', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag type="partner">
        <h4>Tag Partner</h4>
      </Tag>
    </div>`
  }))
  .add('With Partner with icon', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag type="partner">
        <i class="fal fa-table" pr1/>
        <h4>Tag Partner</h4>
      </Tag>
    </div>`
  }))
  .add('With Community', () => ({
    components: { Tag },
    template: `
  <div class="container">
    <Tag type="community">
      <h4>Tag Community</h4>
    </Tag>
  </div>`
  }))
  .add('With Community with icon', () => ({
    components: { Tag },
    template: `
  <div class="container">
    <Tag type="community">
      <i class="fal fa-table" pr1/>
      <h4>Tag Community</h4>
    </Tag>
  </div>`
  }))
