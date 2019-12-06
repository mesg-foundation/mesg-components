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
      <Tag><i class="fal fa-table" mr1/>Tag with icon</Tag>
    </div>`
  }))
  .add('Tag orange', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag color="orange">Tag orange</Tag>
    </div>`
  }))
  .add('Tag green', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag color="green">Tag green</Tag>
    </div>`
  }))
  .add('Tag purple', () => ({
    components: { Tag },
    template: `
    <div class="container">
      <Tag color="purple">Tag purple</Tag>
    </div>`
  }))
