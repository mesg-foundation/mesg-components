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
    components: { TagLabel, Card },
    template: `
    <div class="container">
      <Card style="width: 400px" >
        <div pt1 pb1 pl1 pr1 >
          <TagLabel :usecase="usecase" icon/>
        </div>
      </Card>
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
