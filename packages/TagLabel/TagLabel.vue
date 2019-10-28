<template>
  <div class="taglabel">
    <span class="tag" :class="{partner,community}">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'TagLabel',
  props: {
    type: { type: String, default: '' }
  },
  computed: {
    partner() {
      return this.type.toLowerCase() === 'partner'
    },
    community() {
      return this.type.toLowerCase() === 'community'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.taglabel {
  display: flex;
}

.tag {
  display: flex;
  align-items: center;
  padding: calc(#{$margin} / 2);
  border-radius: 3px;
}

.partner {
  background-color: $light-orange !important;
}

.community {
  background-color: $light-grey !important;
}
</style>