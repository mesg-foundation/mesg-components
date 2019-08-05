<template>
  <div class="container">
    <a v-for="(item,i) in items" href="#" :key="i" @click="toggleItem(i)" :class="{active: toggle.includes(i)}">
      <slot :name="item.key" :item="item">{{ item.text }}</slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      toggle: [],
      isActive: {
        type: Boolean,
        default: false
      }
    };
  },
  methods: {
    toggleItem(key) {
      const index = this.toggle.indexOf(key);
      if (index > -1) {
        this.toggle = [];
      } else {
        this.toggle = [];
        this.toggle.push(key);
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: inline-flex;
  text-align: center;
  border-radius: 6px;
  border: solid 1px var(--Purple-3);
  background-color: var(--White);
  font-family: "Open Sans";
  font-size: 17px;
  color: var(--Purple-3);
}

a {
  padding: 16px 32px;
  text-decoration: none;
}

a:first-child:hover {
  color: var(--Black);
  /* cursor: pointer; */
  background: var(--lavender-2);
  border-radius: 6px 0px 0px 6px;
}

a:last-child:hover {
  color: var(--Black);  
  background: var(--lavender-2);
  border-radius: 0px 6px 6px 0px;
}

a:not(:last-child):hover,
a:not(:first-child):hover {
  color: var(--Black);  
  background: var(--lavender-2);
}

.active {
  background: var(--Purple-3) !important;
  color: var(--White) !important;
}
</style>
