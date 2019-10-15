import { storiesOf } from '@storybook/vue'
import TagLabel from '@mesg-components/tag-label'
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
    components: { TagLabel },
    template: `
    <div class="container">
      <TagLabel :usecase="usecase"/>
    </div>`,
    data: () => ({ usecase: defaultUseCase })
  }))
  .add('With Partner', () => ({
    components: { TagLabel },
    template: `
    <div class="container">
      <TagLabel :usecase="usecase"/>
    </div>`,
    data: () => ({ usecase: usecasePartner })
  }))
  .add('With Community', () => ({
    components: { TagLabel },
    template: `
    <div class="container">
      <TagLabel :usecase="usecase"/>
    </div>`,
    data: () => ({ usecase: usecaseCommunity })
  }))
  .add('Custom Tag label', () => ({
    components: { TagLabel },
    template: `
    <div class="container">
      <TagLabel :usecase="usecase"/>
    </div>`,
    data: () => ({ usecase: usecaseCustom })
  }))
  .add('Custom Test', () => ({
    components: { TagLabel },
    template: `
    <div class="container">
      <TagLabel >
        <h5>TEST with slot</h5>
      </TagLabel>
    </div>`
  }))
