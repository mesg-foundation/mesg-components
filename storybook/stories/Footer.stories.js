import { storiesOf } from '@storybook/vue'
import Footer from '@mesg-components/footer/Footer'

import '../style.css'

const items = [  
  {
    key: 'products',
    text: 'Products',
    childs: [
      { key: 'sdk', text: 'MESG SDK', href: '#' },
      { key: 'mesg-market', text: 'MESG Marketplace', href: '#' },
      { key: 'showcase', text: 'Showcase', href: '#' },
      { key: 'faq', text: 'FAQ', href: '#' }
    ]
  },
  {
    key: 'developer',
    text: 'Developes',
    childs: [
      { key: 'start', text: 'Get Start', href: '#' },
      { key: 'market', text: 'Marketplace', href: '#' },
      { key: 'document', text: 'Documentation', href: '#' },
      { key: 'forum', text: 'Forum', href: '#' }
    ]
  },
  {
    key: 'foundation',
    text: 'Foundation',
    childs: [
      { key: 'Overview', text: 'Overview', href: '#' },
      { key: 'Partners', text: 'Partners', href: '#' },
      { key: 'Roadmap', text: 'Roadmap', href: '#' },
      { key: 'Blog', text: 'Blog', href: '#' }
    ]
  },
  { key: 'token', text: 'Token', childs: [ { key: 'enterprise', text: 'Enterprise' } ] }
]

storiesOf('Footer', module).add('default', () => ({
  components: { Footer },
  template: `
  <div style="background-color: #210e41;padding:40px;">
    <div style="padding:0px 70px 0px 70px;">
      <Footer :items="items"></Footer>
    </div>
  </div>`,
  data: () => ({
    items
  })
}))
storiesOf('Footer', module).add('custom', () => ({
  components: { Footer },
  template: `<div style="background-color: #210e41;padding:20px;">
  <div style="padding:0px 5px 0px 5px;">
  <Footer :items="items">   
    <template slot="banner">
      <div style="min-width:313px;">
        <a href="/" class="nuxt-link-exact-active nuxt-link-active" >
          <img src="https://mesg.com/_nuxt/img/3c086bb.svg" alt="MESG" style="margin-bottom:20px;"/>
        </a>
        <p style="color: #7e61ae;font-size: 12px;font-weight: 400; margin-bottom:40px;">© 2019 MESG Foundation, All rights reserved.</p>
        <div>
          <a
            href="https://medium.com/mesg"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-medium"></i>
          </a>
          <a
            href="https://github.com/mesg-foundation/"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://forum.mesg.com/"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fas fa-comments"></i>
          </a>
          <a
            href="https://discordapp.com/invite/5tVTHJC"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-discord"></i>
          </a>
          <a
            href="https://twitter.com/mesgfoundation"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://t.me/mesg_community"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-telegram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/mesg"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/mesgfoundation"
            target="_blank"
            style="font-weight: 400;
            font-size: 15px;
          letter-spacing: normal;
          text-align: left;
          padding:0px 20px 0px 0px;
          color:#fff;"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </template>

    <template v-slot:products="{item}"> <a :href="item.href"><h3 style="padding:0px;color:#fff;margin:0px;">{{item.text}}</h3></a></template>
    <template v-slot:developer="{item}"> <a :href="item.href"><h3 style="padding:0px;color:#fff;margin:0px;">{{item.text}}</h3></a></template>
    <template v-slot:token="{item}"> <a :href="item.href"><h3 style="padding:0px;color:#fff;margin:0px;">{{item.text}}</h3></a></template>
  </Footer>
  </div>
  </div>`,
  data: () => ({
    items
  })
}))
