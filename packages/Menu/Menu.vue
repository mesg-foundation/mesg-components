<template>
  <div>
    <nav flex space-between align-center>
      <div flex row space-between align-center>
        <div>
          <a to="/">
            <img :src="banner" alt />
          </a>
        </div>
        <a @click="open = !open" class="burger" hidden-desktop>
          <span v-if="open">&times;</span>
          <span v-else>☰</span>
        </a>
      </div>
      <div flex row space-between class="actions" :class="{ open }">
        <ul flex row mobile-column align-center>
          <li v-for="(category, i) in categories" :key="i" flex column>
            <template v-for="item in items">
              <slot v-if="category === item.key" :name="item.key" :item="item" />
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
    banner: { type: String, required: true },
    categories: { type: Array },
    items: { type: Array }
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
  li {
    margin-right: 0 !important;
    font-size: 15px;
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

  ul {
    padding: calc(#{$margin} * 2);
    border-top: solid 6px $primary;
    border-radius: 6px;
    &::before {
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
      height: fit-content;
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
    align-items: flex-start !important;
  }
  li {
    width: 100%;
    margin-bottom: $margin;
  }
}
</style>
