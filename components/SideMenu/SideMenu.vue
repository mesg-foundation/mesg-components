<template>
  <nav class="sidebar">
    <template v-for="(item,i) in items">
      <slot :name="item.key" :item="item">
        <a :href="item.href" class="link-secondary" :key="i">
          <i class="chevron right"></i>
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

<style scoped>
.sidebar {
  position:-webkit-fixed; 
  position:fixed;   
}

nav {
  display: flex;
  flex-flow: column wrap;
}

.sidebar a {  
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}

a {
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--Purple-3);
  text-decoration: none;
}

i {
  margin-right: 10px;
  font-size: 12px;
}

.link-secondary:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}

.chevron::before {
  border-style: solid;
  border-width: 0.12em 0.12em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  left: 0.15em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: super;
  width: 0.45em;
  font-size: 12px;
}

.chevron.right:before {
  left: 0;
  transform: rotate(45deg);
}

.chevron.bottom:before {
  top: 0;
  transform: rotate(135deg);
}

.chevron.left:before {
  left: 0.25em;
  transform: rotate(-135deg);
}
</style>
