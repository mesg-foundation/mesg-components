<template>
  <div class="item-background">
    <p class="container-header">{{ title }}</p>
    <ul class="container flex">
      <li class="item flex-item" v-for="(distribute,i) in distributions" :key="i">
        <slot :item="distribute">          
          <div class="circle margin-20" :class="distribute.name"></div>
          <div class="margin-20 bold">{{distribute.name | capitalize}}</div>
          <div class="margin-20">
            <label class="label">{{distribute | label(distribute.amount) | capitalize}}:</label>
            <label class="value">{{distribute.amount}}</label>
          </div>
          <div class="margin-20">
            <label class="label">{{distribute | label(distribute.percentage) | capitalize}}:</label>
            <label class="value">{{distribute.percentage}}</label>
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "distribution",
  data() {
    return {};
  },
  props: {
    title: String,
    distributions: {
      type: Array,
      required: true
    }
  },
  filters: {
    capitalize(content) {
      if (typeof content !== "string") return "";
      return content.charAt(0).toUpperCase() + content.slice(1);
    },
    label(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
  }
};
</script>

<style scoped>
.item-background {
  padding-top: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 10px;
  background-color: var(--Grey-2);
}

.container-header {
  margin-left: 20px;
  margin-bottom: 0px;
}

.container {
  list-style: none;
  margin: 0;
  padding: 0;
}

.flex {
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-between;
}

.item {
  width: 281px;
  height: 170px;
}

.float-item {
  float: left;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.margin-20 {
  margin: 20px;
}

.bold {
  font-weight: 600;
  color: var(--Purple-1);
}

.sale {
  background-color: var(--Wallets-Sale);
}

.partner {
  background-color: var(--Wallets-Partners);
}

.founder {
  background-color: var(--Wallets-Founders);
}

.reserve {
  background-color: var(--Wallets-Reserve);
}

.value {
  color: var(--Grey-1);
}

.label {
  width: 102px;
  display: inline-block;
}
</style>
