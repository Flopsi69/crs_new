type Author = {
  id: string
  name: string
  position: string
  photo: string
}

type ModalData = {
  target?: string
  url?: string
  name?: string
  email?: string
  id?: string
  info?: Object
  src?: string
  title?: string
  author?: Author
  meeting?: string
  note?: string
  isOwnerForm?: boolean
}

const isOpen = ref<boolean>(false)
const modalTarget = ref<string>('funnel')
const modalData = ref<ModalData | null>(null)

function openModal(data: ModalData | null = null): void {
  modalData.value = data
  modalTarget.value = data?.target ? data.target : 'funnel'
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
    modalTarget,
    isOpen,
    modalData,
    openModal,
    closeModal
  }
}
