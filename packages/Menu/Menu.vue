<template>
  <div>
    <nav flex space-between align-center>
      <slot>
        <div flex row space-between align-center>
          <div v-if="banner">
            <a v-if="banner.external" :href="banner.to">
              <img v-if="banner.image" :src="banner.textOrLogo" alt="MESG" />
              <h1 class="banner" v-else>{{banner.textOrLogo}}</h1>
            </a>
            <nuxt-link v-else :to="banner.to">
              <img v-if="banner.image" :src="banner.textOrLogo" alt="MESG" />
              <h1 class="banner" v-else>{{banner.textOrLogo}}</h1>
            </nuxt-link>
          </div>
          <a @click="open = !open" class="burger" hidden-desktop>
            <span v-if="open">&times;</span>
            <span v-else>☰</span>
          </a>
        </div>
        <div flex row space-between class="actions" :class="{open}">
          <ul flex row mobile-column>
            <li v-for="(link,i) in links" :class="link.subtitle ? 'drop-down' : ''" :key="i" :column="link.subtitle ? true :false" flex align-center>
              <a v-if="link.title" :class="link.title.token ? 'token' : 'title'" :href="link.title.to">{{link.title.name}}</a>
              <div v-if="link.subtitle" flex column class="sub-menu" p1 mt1>
                <a v-for="(sub, j) in link.subtitle" :key="j" class="btn" :href="sub.to" target="_blank" v-if="sub.external">{{sub.title}}</a>
                <nuxt-link v-else :to="sub.to" class="btn">{{sub.title}}</nuxt-link>
              </div>
              <Button v-if="link.button" :to="link.button.to" :href="link.button.href" small primary>{{link.button.name}}</Button>
            </li>
          </ul>
        </div>
      </slot>
    </nav>
  </div>
</template>

<script>
import Button from '@mesg-components/button'
export default {
  name: 'Menu',
  components: { Button },
  props: {
    banner: { type: Object },
    links: { type: Array }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

nav {
  height: 80px;
  padding: 18px 40px;
}
img {
  max-width: 153px;
  max-height: 40px;
}
img:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}
.enterprise {
  width: 100%;
}

.banner:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}

a {
  cursor: pointer;
}

li {
  height: 80px;
}
.token:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}
li > a:not(.btn--primary) {
  line-height: 80px;
  display: block;
}
//drop-down menu//
@media only screen and (min-width: $tablet-breakpoint + 1) {
  .actions {
    width: 300px;
    max-width: 100%;
    display: inline-block;
  }
  .actions a:not(.btn--primary) {
    color: $primary-dark;
  }
  ul {
    list-style: none;
  }
  li {
    text-align: center;
  }
  .btn {
    padding: 0.75em 2em;
  }
  .sub-menu {
    position: absolute;
    display: none;
    top: 47px;
    min-width: 200px;
    opacity: 0;
    z-index: 1;
    border-radius: 6px;
    background-color: $white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    animation: appear-in 0.2s ease-in;
    border-top: solid 6px $primary;
  }
  .sub-menu::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 45%;
    border-bottom: 15px solid $primary;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
  }
  .sub-menu a {
    font-weight: normal;
    height: 50px;
    display: block;
    text-align: left;
  }
  .sub-menu a:hover {
    color: $primary;
    opacity: 1;
    font-weight: 600;
    transition: 0.1s ease;
  }
  .drop-down:hover .sub-menu {
    opacity: 1;
    display: block;
  }
  .drop-down:hover .title {
    opacity: 0.7;
    transition: 0.1s ease;
  }
  @keyframes appear-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
//menu responsive//
@media only screen and (max-width: $tablet-breakpoint) {
  .actions {
    border-radius: 6px;
    display: none;
    position: absolute;
    left: 2.5%;
    width: 95%;
    top: 80px;
    z-index: 1;
    background-color: $white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .actions.open {
    display: block;
    animation: appear-in 0.2s ease-in;
  }
  .sub-menu a {
    font-weight: normal;
    display: block;
    color: $primary-dark;
  }
  .token {
    color: $primary-dark;
  }
  .burger {
    text-align: right;
    display: inline-block;
    line-height: 44px;
    height: 44px;
    font-size: 2em;
  }
  .burger:hover {
    cursor: pointer;
  }
  .btn {
    padding: calc(#{$margin} / 2);
    padding-left: 0;
    padding-right: 0;
  }
  .title {
    width: 100%;
    font-weight: bold;
    color: $primary-light;
  }
  .sub-menu {
    width: 100%;
    padding: 0 !important;
    margin-top: 0 !important;
  }
  ul {
    padding: calc(#{$margin} * 2);
    border-top: solid 6px $primary;
    list-style: none;
    border-radius: 6px;
  }
  ul::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    right: $margin;
    border-bottom: 10px solid $primary;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  li {
    height: auto;
  }
  li > a:not(.btn--primary) {
    line-height: 40px;
  }
  .appear-enter-active {
    animation: appear-in 0.2s ease-in;
  }
  .appear-leave-active {
    animation: appear-in 0.2s reverse ease-out;
  }
  @keyframes appear-in {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
//menu mobile//
@media only screen and (max-width: $mobile-breakpoint) {
  ul {
    align-items: left !important;
    padding-top: $margin;
  }
  li {
    margin-right: 0 !important;
  }
  li > a:not(.btn--primary) {
    line-height: 60px;
  }
  .btn {
    padding-top: calc(#{$margin} - 15px);
    padding-bottom: calc(#{$margin} - 15px);
  }
  .btn--primary {
    margin-top: $margin;
  }
}
</style>
