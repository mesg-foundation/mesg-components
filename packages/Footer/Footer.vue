<template>
  <section id="footer">
    <div class="container">
      <nav flex row space-between wrap mobile-column-reverse>
        <div flex column third>
          <a href="/">
            <img v-if="isImage" :src="banner" alt=" " />
            <h2 v-else>{{banner}}</h2>
          </a>
          <p v-if="copyRight" class="copyright">{{copyRight}}</p>
          <a v-if="policy" :href="policy.link" class="policy link-secondary" mb1>{{policy.title}}</a>
          <div v-if="icons.length" flex space-between wrap>
            <a v-for="(icon,i) in icons" :key="i" :href="icon.to" target="_blank" :class="icon">
              <i :class="icon.icon"></i>
            </a>
          </div>
        </div>
        <ul flex row mobile-column class="menu">
          <li flex column quarter v-for="(link, i) in links" :key="i">
            <div v-for="(detail,j) in link" :key="j" :mb1="!isLast(link,i)">
              <a v-if="isExternalLink(detail.to)" :href="detail.to" :class="{category:detail.category,'link-secondary': !detail.category}" target="_blank">{{detail.title}}</a>
              <nuxt-link v-else :to="detail.to" :class="{category:detail.category,'link-secondary': !detail.category }">{{detail.title}}</nuxt-link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    banner: { type: String },
    copyRight: { type: String },
    policy: { type: Object },
    links: { type: Array },
    icons: { type: Array, default: [] }
  },
  methods: {
    isLast(links, i) {
      const value = links.length - 1 === i
      return value
    },
    isExternalLink(link) {
      return /http(s)?/i.test(link)
    }
  },
  computed: {
    isImage() {
      return /\.(?:svg|jpg|jpeg|gif|png)/i.test(this.banner)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';
@import '@mesg-components/theme/_structure';

#footer {
  padding: calc(#{$margin}* 3);
  width: 100%;
  background-color: $light-grey;
}

a {
  text-decoration: none;
}

ul {
  padding: 0;
}

.outline {
  border: solid 1px $primary-light;
  background-color: $primary-very-dark;
}
.purple {
  color: $primary-light;
}
.white {
  color: $white;
}
.copyright {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $dark-grey;
}
.policy {
  font-size: 12px !important;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $dark-grey;
}
.category {
  font-size: 17px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $primary-dark;
  display: inline;
}
.icon {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: $dark-grey;
}
.icon:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}
.link-secondary {
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding: 0;
  color: $dark-grey;
}
img {
  height: 40px;
}
img:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}
@media only screen and (max-width: $tablet-breakpoint) {
  #footer {
    padding: calc(#{$margin} * 2);
    padding-top: 0;
  }
  .container {
    padding: 0;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  a.link {
    min-height: auto;
    margin-bottom: 0;
  }

  li > div:last-child {
    padding-bottom: calc(#{$margin} * 2);
  }

  img {
    margin-top: calc(#{$margin} * 2);
    margin-bottom: $margin;
  }
}
</style>