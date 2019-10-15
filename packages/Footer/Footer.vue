<template>
  <section id="footer">
    <slot>
      <div>
        <div class="container">
          <nav flex row space-between wrap mobile-column-reverse>
            <div v-if="banner" flex column third>
              <a v-if="banner.image" href="/">
                <img :src="banner.textOrImgUrl" alt />
              </a>
              <div v-else>
                <h2>{{banner.textOrImgUrl}}</h2>
              </div>
              <p class="copyright">{{copyRightText}}</p>
              <a href="/" class="policy link-secondary" mb2>{{policyText}}</a>
              <div v-if="!noIcons" flex space-between wrap>
                <a v-for="(icon,i) in icons" :key="i" :href="icon.to" target="_blank" :class="icon">
                  <i :class="icon.icon"></i>
                </a>
              </div>
            </div>
            <ul flex row mobile-column class="menu">
              <li flex column quarter v-for="(link, i) in links" :key="i">
                <a
                  v-for="(detail,j) in link"
                  :key="j"
                  v-if="detail.external"
                  :href="detail.to"
                  :class="{category:detail.category ? true : false, 'link-secondary': detail.category ? false : true, last: setLast(link,j) }"
                  :mb1="setMb(link,i)"
                  target="_blank"
                >{{detail.title}}</a>
                <nuxt-link
                  v-else
                  :class="{category:detail.category ? true : false, 'link-secondary': detail.category ? false : true, last: setLast(link,j)}"
                  :to="detail.to"
                  :mb1="setMb(link,i)"
                >{{detail.title}}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </slot>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    banner: { type: Object },
    copyRightText: { type: String },
    policyText: { type: String },
    links: { type: Array },
    noIcons: { type: Boolean, default: false },
    icons: { type: Array }
  },
  methods: {
    setMb(link, i) {
      const value = link.length - 1 === i ? false : true
      return value
    },
    setLast(links, i) {
      const value = links.length - 1 === i ? true : false
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

#footer {
  padding: calc(var(--margin) * 3);
  width: 100%;
  background-color: var(--light-grey);
}
.outline {
  border: solid 1px var(--primary-light);
  background-color: var(--primary-very-dark);
}
.purple {
  color: var(--primary-light);
}
.white {
  color: var(--White);
}
.copyright {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-grey);
}
.policy {
  font-size: 12px !important;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-grey);
}
.category {
  font-size: 17px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--primary-dark);
  display: inline;
}
.icon {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: var(--dark-grey);
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
  color: var(--dark-grey);
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
    padding: calc(var(--margin) * 2);
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
  .last {
    padding-bottom: calc(var(--margin) * 2);
  }
  img {
    margin-top: calc(var(--margin) * 2);
    margin-bottom: var(--margin);
  }
}
</style>