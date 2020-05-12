<template>
  <div>
    <nav flex space-between align-center>
      <div flex row space-between align-center>
        <div>
          <nuxt-link v-if="isNuxt" to="/">
            <img :src="logo" alt="MESG" />
          </nuxt-link>
          <a v-else href="/">
            <img :src="logo" alt="MESG" />
          </a>
        </div>
        <a @click="open = !open" class="burger" hidden-desktop>
          <span v-if="open">&times;</span>
          <span v-else>☰</span>
        </a>
      </div>
      <div flex row space-between class="actions" :class="{ open }">
        <ul flex row mobile-column>
          <li
            v-for="(item, i) in items"
            :key="i"
            flex
            align-center
            :column="!!item.subMenu"
            :class="`${item.subMenu ? 'drop-down' : ''}`"
          >
            <Button
              v-if="item.type === 'button'"
              primary
              small
              :to="isExternalLink(item.to) ? null : item.to"
              :href="isExternalLink(item.to) ? item.to : null"
            >{{ item.text }}</Button>
            <nuxt-link
              v-else-if="isNuxt && !item.subMenu && !isExternalLink(item.to)"
              :to="item.to"
              class="top-menu"
            >{{item.text}}</nuxt-link>
            <a v-else :href="item.to" class="top-menu">
              {{ item.text }}
              <i v-if="item.subMenu" class="far fa-angle-down" />
            </a>
            <div v-if="item.subMenu" flex column class="sub-menu" p1 mt1>
              <template v-for="(link, j) in item.subMenu">
                <nuxt-link
                  v-if="isNuxt && !isExternalLink(link.to)"
                  :to="link.to"
                  :key="j"
                >{{ link.text }}</nuxt-link>
                <a v-else :href="link.to" target="_blank" :key="j">{{ link.text }}</a>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from "@mesg-components/button";

export default {
  name: "Menu",
  components: { Button },
  props: {
    logo: { type: String, required: true },
    items: { type: Array },
    isNuxt: { type: Boolean, default: false }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    isExternalLink(link) {
      return /^(https?)/im.test(link);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";
@import "@mesg-components/theme/_structure";

nav {
  height: 80px;
  padding: calc(#{$margin} - 2px) calc(#{$margin} * 2);
  img {
    min-width: 153px;
    max-width: 153px;
    min-height: 40px;
    max-height: 40px;
    &:hover {
      opacity: 0.7;
      transition: 0.1s ease;
    }
  }
  ul {
    margin-left: 0;
  }
  li {
    margin-right: 0;
    font-size: 15px;
    height: 80px;
  }
  li > a:not(.btn--primary) {
    line-height: 80px;
    display: block;
  }
  .top-menu {
    color: $title-color;
    &:hover {
      opacity: 0.7;
      transition: 0.1s ease;
    }
  }
  .btn--small {
    padding: 0.45em;
  }
  .top-menu i {
    font-size: 12px;
    margin-left: calc(#{$margin} / 4);
  }
}

//drop-down menu//
@media only screen and (min-width: $tablet-breakpoint + 1) {
  .actions {
    max-width: 100%;
    display: inline-block;
  }
  li {
    text-align: center;
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
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      bottom: 100%;
      left: 45%;
      border-bottom: 15px solid $primary;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
    }
    a {
      font-weight: normal;
      height: 50px;
      display: block;
      text-align: left;
      padding: 0.75em 2em;
      color: $text-color;
      &:hover {
        color: $primary;
        font-weight: 600;
        transition: 0.1s ease;
      }
    }
  }
  .drop-down:hover {
    .sub-menu {
      opacity: 1;
      display: block;
    }
    .top-menu {
      opacity: 0.7;
      transition: 0.1s ease;
    }
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
    &.open {
      display: block;
      animation: appear-in 0.2s ease-in;
    }
  }

  .burger {
    text-align: right;
    display: inline-block;
    line-height: 44px;
    height: 44px;
    font-size: 2em;
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    padding: calc(#{$margin} * 2);
    border-top: solid 6px $primary;
    border-radius: 6px;
    &::before {
      content: "";
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
      height: fit-content;
    }
    li > a:not(.btn--primary) {
      line-height: 40px !important;
    }
  }

  .top-menu {
    width: 100%;
    font-weight: bold;
    color: $title-color;
    i {
      display: none;
    }
  }

  .sub-menu {
    width: 100%;
    padding: 0 !important;
    margin-top: 0 !important;
    a {
      color: $text-color;
      font-weight: normal;
      display: block;
      padding: calc(#{$margin} / 2);
      padding-left: 0;
      padding-right: 0;
      &:hover {
        color: $primary;
        font-weight: 600;
        transition: 0.1s ease;
      }
    }
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
    align-items: left;
  }
  li {
    margin-bottom: $margin;
    a:not(.btn--primary) {
      line-height: 40px !important;
      padding: 0;
    }
  }
  .btn--primary {
    line-height: 50px !important;
    margin-top: calc(#{$margin} * 2);
  }
}
</style>
