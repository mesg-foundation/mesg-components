<template>
  <label>
    {{ label }}
    <div class="inputTextField">
      <template v-if="type === 'password'">
        <button @click="showPwd" :class="{ actived: showPassword }">
          <i v-if="showPassword" class="fas fa-eye"></i>
          <i v-else-if="!showPassword" class="fas fa-eye-slash"></i>
        </button>
      </template>
      <input
        :type="textType"
        :placeholder="placeholder"
        :value="value"
        @input="$emit(`input`, $event.target.value)"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: "TextField",
  props: {
    type: { type: String, default: "text" },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    value: { type: String, required: true }
  },
  data() {
    return {
      textType: this.type,
      showPassword: false
    };
  },
  methods: {
    showPwd() {
      this.showPassword = !this.showPassword;
      this.textType = this.showPassword ? "text" : "password";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@mesg-components/theme/_variables";

label {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $title-color;
  .inputTextField {
    position: relative;
    button {
      border: none;
      outline: none;
      position: absolute;
      right: $margin;
      top: 50%;
      opacity: 0.3;
      color: $text-color;
      cursor: pointer;
    }
    .actived {
      opacity: 1;
    }
    input {
      color: $text-color;
      font-size: 15px;
      padding: 15px $margin;
      border-radius: 3px;
      border: solid 1px $primary-light;
      background-color: $white;
      width: 100%;
      margin-top: $margin;
      &:focus {
        outline: none;
        box-shadow: 0 0 0 1px $primary-light inset;
      }
    }
  }
}
</style>
