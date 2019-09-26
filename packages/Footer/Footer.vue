<template>
  <section id="footer">
    <div>
      <div class="container">
        <nav flex row space-between wrap mobile-column-reverse>
          <div flex column third>
            <div>TEST</div>
            <p class="copyright">{{copyRightText}}</p>
            <div class="policy link-secondary" mb2>Privacy & Cookie Policy</div>
            <div flex space-between wrap>
              <i class="fab fa-medium"></i>
              <i class="fab fa-github"></i>
              <i class="fas fa-comments"></i>
              <i class="fab fa-discord"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-telegram-plane"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-reddit-alien"></i>
            </div>
          </div>
          <ul flex row mobile-column class="menu">
            <li flex column quarter>
              <a href="#" class="category" mb1>Products</a>
              <a href="/" class="link-secondary" mb1>MESG Orchestrator</a>
              <a href="/" class="link-secondary" mb1>MESG SDK</a>
              <a href="/" class="link-secondary" mb1>MESG Marketplace</a>
              <a href="/" class="link-secondary last">Showcase</a>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>Products</a>
              <a href="/" class="link-secondary" mb1>MESG Orchestrator</a>
              <a href="/" class="link-secondary" mb1>MESG SDK</a>
              <a href="/" class="link-secondary" mb1>MESG Marketplace</a>
              <a href="/" class="link-secondary last">Showcase</a>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>Products</a>
              <a href="/" class="link-secondary" mb1>MESG Orchestrator</a>
              <a href="/" class="link-secondary" mb1>MESG SDK</a>
              <a href="/" class="link-secondary" mb1>MESG Marketplace</a>
              <a href="/" class="link-secondary last">Showcase</a>
            </li>
            <li flex column quarter>
              <a href="/" class="link-secondary last">MESG Marketplace</a>
              <a href="/" class="link-secondary">Showcase</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    banner: { type: String },
    copyRightText: { type: String, default: '© 2019 MESG Foundation, All rights reserved.' },
    links: { type: Array }
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/index.scss';

#footer {
  padding: calc(#{$margin} * 3);
  width: 100%;
  background-color: $light-grey;
}
.outline {
  border: solid 1px $primary-light;
  background-color: $primary-very-dark;
}
.purple {
  color: $primary-light;
}
.white {
  color: $White;
}
.copyright {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $dark-grey;
}
.policy {
  font-size: 12px !important;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $dark-grey;
}
.category {
  font-size: 17px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $primary-dark;
  display: inline;
}
.icon {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: $dark-grey;
}
.icon:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}
.link-secondary {
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding: 0;
  color: $dark-grey;
}
img {
  height: 40px;
}
img:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}
@media only screen and (max-width: $tablet-breakpoint) {
  #footer {
    padding: calc(#{$margin} * 2);
    padding-top: 0;
  }
  .container {
    padding: 0;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  a.link {
    min-height: auto;
    margin-bottom: 0;
  }
  .last {
    padding-bottom: calc(#{$margin} * 2);
  }
  img {
    margin-top: calc(#{$margin} * 2);
    margin-bottom: $margin;
  }
}
</style>