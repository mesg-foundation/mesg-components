<template>
  <div class="header">
    <div class="container header-box">
      <div class="title-box" :class="{ w50: !!image }">
        <h1>{{ title }}</h1>
        <slot>
          <p>{{ description }}</p>
        </slot>
      </div>
      <div v-if="image" :class="{ w50: !!image }">
        <img :src="image" alt="MESG" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

.header {
  position: relative;
  padding: calc(#{$margin} * 4) 0;
  margin-bottom: calc(#{$margin} * 4);
}
.header::before {
  content: '';
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
  background-image: linear-gradient(to top, $light-grey, $white);
  transform: translateY(-35%) skewY(-8deg);
  z-index: -1;
}
.header-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.w50 {
  width: 50%;
  max-width: 50%;
}

.title-box {
  h1 {
    margin-bottom: $margin;
  }
  p {
    margin-bottom: calc(#{$margin} * 2);
  }
}

p {
  font-size: 20px;
}
img {
  height: auto;
  max-height: calc(#{$width} / 2);
}
@media only screen and (max-width: $mobile-breakpoint) {
  .header::before {
    height: calc(100% + 400px);
  }
  .header-box {
    flex-direction: column-reverse;
  }
  .w50 {
    width: 100%;
    max-width: 100%;
  }
  img {
    margin-bottom: calc(#{$margin} * 2) !important;
  }
}
</style>
