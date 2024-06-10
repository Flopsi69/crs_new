type ModalDataType = {
  url?: string
  name?: string
  email?: string
  // add other properties as needed
}

const isOpen = ref<boolean>(false)
const modalData = ref<ModalDataType | null>(null)

function openModal(data: object | null = null): void {
  modalData.value = data
  isOpen.value = true
}

function closeModal(): void {
  modalData.value = null
  isOpen.value = false
}

watch(isOpen, (newValue: boolean) => {
  document.body.style.overflow = newValue ? 'hidden' : ''
})

export function useModal() {
  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  }
}
