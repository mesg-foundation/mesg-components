<template>
  <section id="footer">
    <div>
      <div class="container">
        <nav flex row space-between wrap mobile-column-reverse>
          <div flex column third>
            <a href="/" mb1>
              <img v-if="isImage" :src="banner" alt=" " />
              <h2 v-else>{{ banner }}</h2>
            </a>
            <span v-if="copyright" class="copyright" mb2>{{ copyright }}</span>
            <a v-if="policy" :href="policy.link" class="policy" mb2>{{ policy.text }}</a>
            <div v-if="icons" flex space-between wrap>
              <a v-for="(icon, i) in icons" :key="i" :href="icon.to" target="_blank" class="icon">
                <i :class="icon.classIcon"></i>
              </a>
            </div>
          </div>
          <ul flex row mobile-column>
            <li v-for="(category, i) in categories" :key="i">
              <template v-for="item in items">
                <slot
                  v-if="item.key === category"
                  :name="item.key"
                  :item="item"
                >{{ item[category] }}</slot>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
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
      return /\.(?:svg|jpg|jpeg|gif|png)/i.test(this.banner);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";
@import "@mesg-components/theme/_structure";

#footer {
  padding: calc(#{$margin}* 2);
  background-color: $grey-light;
}

nav {
  div {
    height: fit-content;
  }
  img {
    height: 40px;
  }
  .copyright {
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text-color;
  }
  .policy {
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text-color;
  }
  .icon {
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    color: $text-color;
    transition: 0.1s ease-in;
    &:hover {
      color: $primary;
      font-weight: normal;
    }
  }
}

ul {
  list-style: none;
  margin-left: 0;
  li {
    height: fit-content;
    margin-bottom: calc(#{$margin} / 2) !important;
    .category {
      font-size: 17px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: $title-color;
      display: inline;
    }
    a {
      font-size: 15px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      padding: 0;
      color: $text-color;
      transition: 0.1s ease-in;
    }
  }
}

a:hover {
  color: $primary;
  font-weight: bold;
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
  img {
    margin-top: calc(#{$margin} * 2);
  }
  li {
    margin-bottom: $margin !important;
  }
}
</style>
