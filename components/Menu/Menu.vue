<template>
  <nav class="display-flex alig-center">
    <div class="banner">
      <slot :name="items[0].banner.key" :item="items[0].banner">{{items[0].banner}}</slot>
    </div>
    <div class="mainMenu">
      <ul>
        <li v-for="menu in items[0].menus" :key="menu.key">
          <slot :name="menu.key" :item="menu">
            <a :href="menu.href">{{menu.text}}</a>            
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
  background-color: #444;
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
}

ul li:last-child{
  margin-right: 0px;
}

li {
  font-size: 17px;
  font-weight: 600;
  color: #3c3940;
  color: var(--text-color);
}

li:hover {
  color: #555160;
  cursor: pointer;
}

li a {  
  text-decoration: none;
  padding: 0.75em 2em;
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

.btn--primary {
  color: #fff;
  color: var(--white);
  background-color: #491e8c;
  background-color: var(--Purple-3);
  border-radius: 3px;
  font-family: Open Sans, sans-serif;
  font-size: 17px;
  padding: 0.75em 2em;
  width:190px;
}

.enterprise {
  width: 100%;
}
</style>
