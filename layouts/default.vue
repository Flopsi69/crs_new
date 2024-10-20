<script lang="ts" setup>
const { isOpen, modalData, closeModal } = useModal();
// const { isOpen: isExitIntentOpen, closeModal: closeExitIntent } = useExitIntent();

// let lastScrollY = 0;
// let actionCounter = 0;
// let actionInterval: any;
// let scrollTimeout: any;

// function closeModalHandler(isCheckExitIntent = false) {
//   closeModal();

//   if (isCheckExitIntent) {
//     showExitIntent();
//   }
// }

// function showExitIntent() {
//   if (sessionStorage.getItem('exitIntentShown') || isExitIntentOpen.value || isOpen.value) return;

//   clearInterval(actionInterval);
//   sessionStorage.setItem('exitIntentShown', 'true');
//   isExitIntentOpen.value = true;
// }

// Desktop: Detect mouse leaving the window
// function handleMouseLeave(event: MouseEvent) {
//   if (event.clientY <= 0 && !sessionStorage.getItem('exitIntentShown') && window.innerWidth > 768) {
//     showExitIntent();
//   }
// }

// Mobile: Detect fast scroll up
// function handleScroll() {
//   actionCounter = 0;

//   if (window.innerWidth > 768) return;

//   const currentScrollY = window.scrollY;
//   const scrollSpeed = currentScrollY - lastScrollY;

//   if (Math.abs(scrollSpeed) > 150 && !sessionStorage.getItem('exitIntentShown')) {
//     showExitIntent();
//   }

//   lastScrollY = currentScrollY;

//   if (scrollTimeout) clearTimeout(scrollTimeout);

//   scrollTimeout = setTimeout(() => {
//     lastScrollY = window.scrollY;
//   }, 100);
// };

// Reset action counter on user interaction
// function resetActionCounter() {
//   actionCounter = 0;
// }

// onMounted(() => {
//   if (sessionStorage.getItem('exitIntentShown')) return;

//   actionInterval = setInterval(() => {
//     actionCounter += 1;

//     if (actionCounter > 30) {
//       showExitIntent();
//       clearInterval(actionInterval);
//     }
//   }, 1000);


//   setTimeout(() => {
//     lastScrollY = window.scrollY;
//     document.addEventListener('mouseout', handleMouseLeave);
//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('click', resetActionCounter);
//   }, 3000);
// });

// onUnmounted(() => {
//   document.removeEventListener('mouseout', handleMouseLeave);
//   window.removeEventListener('scroll', handleScroll);
//   document.removeEventListener('click', resetActionCounter);
// });
</script>

<template>
  <div>
    <BaseHeader />
    <slot />
    <BaseFooter />

    <ClientOnly>
      <Teleport to="body">
        <transition name="overlay-fade">
          <BaseModal
            v-bind="modalData"
            @close-modal="closeModal"
            v-if="isOpen"
          />
        </transition>

        <!-- <transition name="overlay-fade">
          <BaseExitIntent
            v-if="isExitIntentOpen"
            @close-modal="closeExitIntent"
          />
        </transition> -->
      </Teleport>
    </ClientOnly>
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
