<template>
  <section id="footer">
    <nav>
      <div id="banner-box">
        <a href="/">
          <img v-if="isImage" :src="banner" alt=" " />
          <h2 v-else>{{ banner }}</h2>
        </a>
        <p v-if="copyright" class="copyright">{{ copyright }}</p>
        <a v-if="policy" :href="policy.link" class="policy link-secondary">{{ policy.text }}</a>
        <div v-if="icons" id="list-icon">
          <a v-for="(icon, i) in icons" :key="i" :href="icon.to" target="_blank" :class="{ icon: icon }">
            <i :class="icon.classIcon"></i>
          </a>
        </div>
      </div>
      <ul id="list-categories">
        <li v-for="(category, i) in categories" :key="i">
          <template v-for="item in items">
            <slot v-if="item.key === category" :name="item.key" :item="item">{{ item[category] }}</slot>
          </template>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    banner: { type: String, require: true },
    categories: { type: Array },
    copyright: { type: String },
    policy: { type: Object },
    items: { type: Array },
    icons: { type: Array }
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

#footer {
  padding: calc(#{$margin}* 3);
  background-color: $light-grey;
}
#list-categories {
  min-width: 75%;
  display: flex;
  justify-content: space-around;
}
#list-icon {
  padding-top: $margin;
}

#banner-box {
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: space-around;
  max-width: $width;
  margin: auto;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
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

.icon {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: $dark-grey;
  &:hover {
    opacity: 0.7;
    transition: 0.1s ease;
  }
  &:not(:first-child) {
    padding-left: 10px;
  }
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
}
@media only screen and (max-width: $mobile-breakpoint) {
  nav {
    flex-direction: column-reverse;
  }

  #list-categories {
    flex-direction: column;
  }

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
