<template>
  <nav>
    <template v-for="item in items">
      <slot :name="item.key" :item="item">
        <a :href="item.href" class="link-secondary" :key="item.id">
          <i class="far fa-chevron-right"></i>
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
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    i {
      position: relative;
      top: 6px;
      margin-right: calc(#{$margin} / 2);
      font-size: 12px;
    }
  }
}
</style>
