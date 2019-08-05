<template>
  <nav class="display-flex alig-center">
    <div class="banner">
      <slot :name="items[0].banner.key" :item="items[0].banner">        
        <a href="/" class="nuxt-link-exact-active nuxt-link-active">
          <img src="https://mesg.com/_nuxt/img/1353709.svg" alt="MESG">
        </a>  
      </slot>
    </div>
    <div class="mainMenu">
      <ul>
        <li v-for="(menu, i) in items[0].menus" :key="i" @click="expandMenu(i)">
          <slot :name="menu.key" :item="menu">
            <a
              v-if="menu.href"
              :href="menu.href"
              class="title"
              :class="{expanded: toggle.includes(i)}"
            >{{menu.text}}</a>
            <span v-else class="title" :class="{expanded: toggle.includes(i)}">{{ menu.text }}</span>

            <div v-if="menu.childs && toggle.includes(i)" :key="i" class="sub-menu">
              <template v-for="(child,j) in menu.childs">
                <slot :name="child.key" :item="child">
                  <a :href="child.href" class="btn" :key="`child${j}`">{{child.text}}</a>
                </slot>
              </template>
            </div>
          </slot>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      toggle: []
    };
  },
  methods: {
    expandMenu(key) {    
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
nav {
  height: 80px;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  color: #3c3940;
  align-items: center;
}

.nav ul {
  list-style: none;  
  text-align: center;
  padding: 0;
  margin: 0;
}

ul {
  margin-top: 0px;
  margin-bottom: 0px;
}

ul li {
  display: block;
  float: left;
  margin-right: 40px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;  
  color: var(--text-color);
}

ul li:last-child {
  margin-right: 0px;
}

li:hover {  
  cursor: pointer;
}

li a,
li span {
  text-decoration: none;
  padding: 0.75em 2em;
  color: var(--text-color);
}

li .title:hover,
.expanded {
  opacity: 0.7;
  transition: 0.1s ease;
}

img {
  width: 153px;
  height: 40px;
  max-width: 153px;
  max-height: 40px;
}

.display-flex {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
}

.alig-center {
  align-items: center;
}

.sub-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 160px;
  box-shadow: 0 4px 10px 0 rgba(168, 166, 166, 0.6);
  z-index: 1;
  margin-top: 5px;
  padding: 20px 0px 20px 0px;
  text-align: left;
}

.sub-menu a {
  font-weight: 400;
  text-align: left;
  color: #3c3940;
  color: var(--text-color);
}

.sub-menu a:hover {
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  color: #491e8c;
  color: var(--Purple-3);
  opacity: 1;
  font-weight: 600;
  transition: 0.1s ease;
  cursor: pointer;
}

.btn {
  padding: 0.75em 2em;
}
</style>
