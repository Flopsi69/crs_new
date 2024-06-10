<script lang="ts" setup>
const { isOpen, modalData } = useModal();
</script>

<template>
  <div>
    <BaseHeader />
    <slot />
    <BaseFooter />

    <Teleport to="body">
      <transition name="overlay-fade">
        <BaseModal
          v-bind="modalData"
          v-if="isOpen"
        />
      </transition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.4s;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

// .modal-fade-enter-active,
// .modal-fade-leave-active {
//   transition: opacity transform 0.5s;
//   transform: scale(1);
// }

// .modal-fade-enter-from,
// .modal-fade-leave-to {
//   opacity: 0;
//   transform: scale(0);
// }
</style>
