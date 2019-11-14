<template>
  <nav>
    <div class="banner-box">
      <div>
        <a>
          <img :src="banner" alt="" />
        </a>
      </div>
      <a @click="open = !open" class="burger" hidden-desktop>
        <span v-if="open">&times;</span>
        <span v-else>☰</span>
      </a>
    </div>
    <div class="actions" :class="{ open }">
      <ul>
        <li v-for="(category, i) in categories" :key="i">
          <template v-for="item in items">
            <slot v-if="item.key === category" :name="item.key" :item="item">{{ item.key }}</slot>
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    banner: { type: String },
    categories: { type: Array },
    items: { type: Array }
  },
  data() {
    return {
      open: false
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

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: calc(#{$margin} - 2px) calc(#{$margin} * 2);
}
img {
  width: 100%;
  max-width: 153px !important;
  max-height: 40px !important;
  &:hover {
    opacity: 0.7;
    transition: 0.1s ease;
  }
}

.banner-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.actions {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
    }
  }
}

//drop-down menu//
@media only screen and (min-width: $tablet-breakpoint + 1) {
  .actions {
    max-width: 100%;
    display: inline-block;
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
    background-color: var(--white);
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
}
//menu mobile//
@media only screen and (max-width: $mobile-breakpoint) {
  ul {
    align-items: left;
  }
  li {
    margin-bottom: var(--margin);
    a:not(.btn--primary) {
      line-height: 40px;
      padding: 0;
    }
  }
}
</style>
