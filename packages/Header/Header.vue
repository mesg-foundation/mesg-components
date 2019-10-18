<template>
  <div id="header" pt3 pb3 mb3>
    <div v-if="!noPicture" class="container" flex row mobile-column-reverse align-center space-between wrap>
      <div half>
        <h1 mb1>{{title}}</h1>
        <p mb2>{{description}}</p>
        <slot v-if="$slots.default" />
      </div>
      <div half>
        <img v-if="imgUrl" :src="imgUrl" :alt="title" />
        <slot name="items"></slot>
      </div>
    </div>
    <div v-else class="container">
      <div>
        <h1 mb1>{{title}}</h1>
        <p mb2>{{description}}</p>
      </div>
      <slot v-if="$slots.default" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: { type: String },
    description: { type: String },
    noPicture: { type: Boolean, default: false },
    imgUrl: { type: String }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables';

#header {
  position: relative;
}
#header::before {
  content: '';
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
  background-image: linear-gradient(to top, $light-grey, $white);
  transform: translateY(-35%) skewY(-8deg);
  z-index: -1;
}
p {
  font-size: 20px;
}
img {
  height: auto;
  max-height: calc(#{$width} / 2);
}
@media only screen and (max-width: $mobile-breakpoint) {
  #header::before {
    height: calc(100% + 400px);
  }
  img {
    margin-bottom: calc(#{$margin} * 2);
  }
}
</style>