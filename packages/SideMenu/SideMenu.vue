<template>
  <nav>
    <template v-for="item in items">
      <slot :name="item.key" :item="item">
        <a :href="item.href" :key="item.id">
          <i class="fal fa-chevron-right"></i>
          {{ item.text }}
        </a>
      </slot>
    </template>
  </nav>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

nav {
  display: flex;
  flex-flow: column wrap;
  a {
    display: flex;
    flex-flow: row;
    padding-top: $margin;
    padding-bottom: $margin;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text-color;
    transition: 0.1s ease-in;
    &:hover {
      color: $primary;
      font-weight: bold;
    }
    i {
      position: relative;
      top: 6px;
      margin-right: calc(#{$margin} / 2);
      font-size: 12px;
    }
  }
}
</style>
