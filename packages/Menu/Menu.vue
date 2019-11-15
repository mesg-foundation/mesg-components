<template>
  <div>
    <nav flex space-between align-center>
      <div flex row space-between align-center>
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
      <div flex row space-between class="actions" :class="{ open }">
        <ul flex row mobile-column align-center>
          <li v-for="(category, i) in categories" :key="i" flex column align-center>
            <template v-for="item in items">
              <slot v-if="category === item.key" :name="item.key" :item="item">{{ item.key }}</slot>
            </template>
          </li>
        </ul>
      </div>
    </nav>
  </div>
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
@import '@mesg-components/theme/_structure';

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
}
</style>
