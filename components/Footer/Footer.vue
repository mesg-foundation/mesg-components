<template>
  <nav class="display-flex">
    <div class="banner">
      <slot name="banner"/>      
    </div>
    <ul>
      <li v-for="(item,i) in items" :key="i">
        <slot :name="item.key" :item="item">
          <a :href="item.href">{{ item.text }}</a>
        </slot>
        <template v-if="item.childs">          
          <a v-for="(child,j) in item.childs" :href="child.href" :key="`child${j}`">
            <slot :name="child.key" :item="child">
              {{child.text}}
            </slot>
          </a>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Footer",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.banner {
  margin-right: 40px;
}
nav > * {
  font-family: "Open Sans", sans-serif;
}
.display-flex {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

ul li {
  display: inline-block;
  vertical-align: text-top;
  padding: 0px 0px 0px 0px;
  font-weight: 700;
  margin-right: 40px;
  min-width: 137px;
}
li a {
  display: block;
  text-align: left;
  margin-bottom: 20px !important;
  color: var(--White);
  cursor: pointer;
  text-decoration: none;
}

li a:first-child {
  font-size: 15px;
  font-weight: 600;
  color: var(--Lavender-1);
}

li a:not(:first-child) {
  font-size: 15px;
  letter-spacing: normal;
  text-align: left;
  padding: 0;
}

li a:not(:first-child):hover {
  opacity: 0.7;
  transition: 0.1s ease;
}

li:last-child{
  margin:0px;
}
</style>