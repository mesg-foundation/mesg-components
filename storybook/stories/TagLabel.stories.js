import { storiesOf } from '@storybook/vue'
import Tag from '@mesg-components/tag-label'
import Card from '@mesg-components/card'

const defaultUseCase = {
  title: 'MESG Partner',
  icon: 'fa fa-arrow-right'
}

const usecasePartner = {
  title: 'MESG Partner',
  type: 'partner',
  icon: 'fa fa-arrow-right'
}

const usecaseCommunity = {
  title: 'MESG Partner',
  type: 'community',
  icon: 'fa fa-arrow-right'
}

const usecaseCustom = {
  title: 'MESG Partner',
  icon: 'fal fa-table',
  bgColor: '#000',
  color: '#fff'
}

storiesOf('Tag label', module)
  .add('default', () => ({
    components: { Tag, Card },
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
      <i class="fal fa-table" pr1/>
      <h4>Tag Community</h4>
    </Tag>
  </div>`
  }))
