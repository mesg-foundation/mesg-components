<template>
  <div class="siderbar">
    <div class="container">
      <template v-for="(item,i) in items">
        <slot :name="item.key" :item="item">
          <a :href="item.href" class="link-secondary" :key="i">
            <i class="far fa-chevron-right"></i>
            {{ item.text }}
          </a>
        </slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sider",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.siderbar a {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}

.container {
  display: flex;
  flex-flow: column wrap;
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
</style>
