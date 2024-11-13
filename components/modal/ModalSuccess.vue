<script lang="ts" setup>
const { closeModal } = useModal();
</script>

<template>
  <div
    data-aos="zoom-in"
    class="success modal__inner flex-center bg-purple_dark"
  >
    <img
      class="logo success__logo"
      src="img/logo.svg"
      alt="logo"
      height="38"
    />

    <button
      class="success__close modal__close button button_flat"
      @click="closeModal"
    >
      <Icon
        name="solar:close-circle-linear"
        size="36"
        class="color-white"
      ></Icon>
    </button>

    <div class="success__info text-center">
      <div class="success__title title-1">Thank You!</div>

      <div class="success__subtitle subtitle-1">
        We have received your request and will be in touch shortly
      </div>

      <button
        class="success__button button button_yellow subtitle-3"
        @click="closeModal"
      >
        Return to Homepage
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.success {
  background: $bg--purple-dark;
  @media(min-width: 1680px) {
    min-height: 75%;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel-left.png') bottom left no-repeat;
    background-size: 50%;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      display: none;
    }
  }
  &:after {
    transform: rotate(180deg);
  }
  &__logo {
    position: absolute;
    top: 40px;
    left: 10vw;
    @media(max-width: $md) {
      top: 24px;
      left: 20px;
    }
  }
  &__info {
    padding: 60px 20px;
    max-width: 520px;
    width: 100%;
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 30px;
      line-height: 38px;
    }
  }
  &__subtitle {
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 12px;
    }
  }
  &__button {
    margin-top: 60px;
    min-height: 60px;
    @media(max-width: $sm) {
      position: fixed;
      left: 20px;
      right: 20px;
      bottom: 20px;
      margin-top: auto;
    }
  }
}

.logo {
  @media(max-width: $sm) {
    height: 28px;
  }
}
</style>
