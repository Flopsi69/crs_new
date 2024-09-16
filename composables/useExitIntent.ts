const isOpen = ref<boolean>(false)

function openModal(): void {
  isOpen.value = true
}

function closeModal(): void {
  isOpen.value = false
}

watch(isOpen, (newValue: boolean) => {
  document.body.style.overflow = newValue ? 'hidden' : ''
})

export function useExitIntent() {
  return {
    isOpen,
    openModal,
    closeModal
  }
}
