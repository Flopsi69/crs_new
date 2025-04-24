<script lang="ts" setup>
const { modalData, closeModal, modalTarget } = useModal();
</script>

<template>
  <div
    class="modal"
    :class="{ modal_flat: ['language'].includes(modalTarget) }"
    @click.self="closeModal"
  >
    <ModalFunnel
      v-if="modalTarget === 'funnel'"
      v-bind="modalData"
    />
    <ModalSuccess v-if="modalTarget === 'success'" />
    <ModalVideo v-if="modalTarget === 'video'" />
    <ModalLanguage v-if="modalTarget === 'language'" />
  </div>
</template>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  overflow-y: auto;
  backdrop-filter: blur(5px);
  background: rgba(0,0,0,.4);
  max-height: 100%;
  width: 100%;
  &_flat {
    padding: 20px;
  }
  @media(min-width: 1680px) {
    padding: 20px;
  }
  // padding: 15px;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  &__inner {
    position: relative;
    background: #fff;
    display: flex;
    // max-width: 380px;
    width: 100%;
    min-height: 100%;
    margin: auto;
    transition: transform 0.5s 0.3s;
    @media(min-width: 1680px) {
      max-width: 1500px;
      min-height: 70vh;
      border-radius: 24px;
      overflow: hidden;
    }
  }

  &__close {
    position: absolute;
    z-index: 11;
    right: 40px;
    top: 24px;
    @media(max-width: $sm) {
      width: 36px;
      height: 36px;
      top: 20px;
      right: 20px;
    }
    @media(hover: hover) {
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
