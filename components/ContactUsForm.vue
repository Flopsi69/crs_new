<script setup lang="ts">
interface Body {
  audience: 'lead' | 'prelead'
  data: {
    name: string
    email: string
    title?: string
  }
}

const { validateInput } = useValidateInput()
const toast = useToast()
const mailchimp = useMailchimp()
const excel = useExcel()
const mailer = useMailer()
const { t } = useI18n()
const { openModal } = useModal()

const isLoading = ref(false)

const form = reactive({
  name: '',
  url: '',
  email: '',
  message: '',
  metadata: {
    page: location?.href || '',
    title: 'Contact Us',
    id: 'contact-us_form',
  },
})

const error = reactive({
  name: '',
  url: '',
  email: '',
})

async function submitForm() {
  error.name = validateInput(form.name, 'name')
  error.url = validateInput(form.url, 'url')
  error.email = validateInput(form.email, 'email')

  if (error.name || error.url || error.email) return

  isLoading.value = true
  const toastLoading = toast.loading(t('general.async.pending'))

  const body: Body = {
    audience: 'lead',
    data: { ...form, title: 'Contact Us page' },
  }

  mailchimp.save(body)
  mailer.send(form)
  await excel.save(body)

  isLoading.value = false

  if (excel.error.value) {
    toast.update(toastLoading, {
      type: 'error',
      render: t('general.async.error'),
      autoClose: true,
      isLoading: false,
    })

    return
  }

  toast.update(toastLoading, {
    type: 'success',
    render: t('general.async.success'),
    autoClose: true,
    isLoading: false,
  })

  form.name = ''
  form.url = ''
  form.email = ''
  form.message = ''

  window.open('https://meetings.hubspot.com/ihor-sokolov?firstName=' + form.name + '&email=' + form.email, '_blank')

  openModal({ target: 'success' })
};
</script>

<template>
  <BasePlate
    background="white"
    class="form"
    mob-full
  >
    <div class="form__title subtitle-1">
      Get in touch
    </div>

    <div class="form__fields">
      <BaseInput
        v-model="form.name"
        icon="fa6-solid:user"
        placeholder="Your full name"
        label="Full name"
        small
        required
        :error="error.name"
        @click="error.name = ''"
      />
      <BaseInput
        v-model="form.url"
        icon="fa6-solid:link"
        placeholder="Company URL"
        label="Company URL"
        small
        required
        :error="error.url"
        @click="error.url = ''"
      />
      <BaseInput
        v-model="form.email"
        icon="fa6-solid:envelope"
        placeholder="Business email"
        label="Business email"
        small
        required
        :error="error.email"
        @click="error.email = ''"
      />
      <BaseInput
        v-model="form.message"
        class="form__textarea"
        placeholder="Give us more detail about your project"
        label="Your message"
        small
        textarea
      />
    </div>

    <button
      class="button button_yellow form__button"
      :disabled="isLoading"
      @click="submitForm"
    >
      Continue
    </button>

    <div class="form__footer">
      <div class="form__caption text">
        Join the global brands who already trust us
      </div>
      <div class="form__logos">
        <img src="/images/logo/contact-footer.png" />
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.plate.form {
  border-radius: 32px;
  @media(max-width: $sm) {
    border-radius: 0;
  }
}

.form {
  padding: 24px;
  color: #393939;
  &__title {
    line-height: 1.3;
  }

  &__fields {
    display: grid;
    gap: 16px;
    margin: 32px 0;
    :deep(.input__error) {
      font-size: 12px;
    }
  }

  :deep(.form__textarea) {
    min-height: 100px;
  }

  &__button {
    min-height: 60px;
    width: 100%;
    font-size: 18px;
  }

  &__footer {
    margin-top: 24px;
    text-align: center;
  }

  &__logos {
    display: flex;
    line-height: 0;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 12px;
    img {
      max-width: 325px;
    }
  }
}
</style>
