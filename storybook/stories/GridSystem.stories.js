import { storiesOf } from '@storybook/vue'

storiesOf('Grid System', module).add('test grid', () => ({
  template: `
  <div class="container">
    <div class="grid">
      <div class="col-lg-6 col-md-8 col-sm-12">
        <div style="background: #8FECF2; width: 100%;">col-lg-6 col-md-8 col-sm-12</div>
      </div>
      <div class="col-lg-6 col-md-4 col-sm-12">
        <div style="background: #8FECF2; width: 100%;">col-lg-6 col-md-2 col-sm-12</div>
      </div>
    </div>
    <div class="grid">
      <div class="col-lg-2 col-md-2 col-sm-12">
        <div style="background: #FF6464; width: 100%;">col-lg-2 col-md-2 col-sm-12</div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div style="background: #CCF28F; width: 100%;">col-lg-2 col-md-2 col-sm-12</div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-12">
        <div style="background: #FF6464; width: 100%;">col-lg-2 col-md-2 col-sm-12</div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12">
        <div style="background: #CCF28F; width: 100%;">col-lg-2 col-md-2 col-sm-12</div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-12">
        <div style="background: #FF6464; width: 100%;">col-lg-2 col-md-2 col-sm-12</div>
      </div>
    </div>
    <div class="grid">
      <div class="col-lg-6 col-md-8 col-sm-12">
        <div style="background: #8FECF2; width: 100%;">col-lg-6 col-md-8 col-sm-12</div>
      </div>
      <div class="col-lg-5 col-offset-lg-1 col-offset-md-0 col-offset-sm-0 col-md-4 col-sm-12">
        <div style="background: #8FECF2; width: 100%;">col-lg-5 col-offset-lg-1 col-offset-md-0 col-offset-sm-0 col-md-4 col-sm-12</div>
      </div>
    </div>
  </div>
  `
}))
