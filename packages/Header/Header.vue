<template>
  <div id="header">
    <div v-if="image || $slots.image" class="container header-box">
      <div class="title-box-image" half>
        <slot name="top" />
        <h1>{{ title }}</h1>
        <p>{{ description}}</p>
        <slot v-if="$slots.default" />
      </div>
      <div half>
        <slot name="image">
          <img :src="image" :alt="title" />
        </slot>
      </div>
    </div>
    <div v-else class="container header-box">
      <div>
        <h1>{{ title}}</h1>
        <p>{{ description}}</p>
        <slot v-if="$slots.default" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

#header {
  position: relative;
  padding: calc(#{$margin} * 4) 0;
  margin-bottom: calc(#{$margin} * 4);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% + 200px);
    background-image: linear-gradient(to top, $grey-light, $white);
    transform: translateY(-35%) skewY(-8deg);
    z-index: -1;
  }
  .header-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    h1 {
      margin-bottom: $margin;
    }
    p {
      font-size: 20px;
    }
    img {
      height: auto;
      max-height: calc(#{$width} / 2);
    }
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  #header {
    padding: 0;
    margin-bottom: 0;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  #header {
    margin-bottom: calc(#{$margin} * 2);
    &:before {
      height: calc(100% + 450px);
    }
    .header-box {
      flex-direction: column-reverse;
      img {
        margin-bottom: calc(#{$margin} * 2);
      }
    }
  }
}
</style>
