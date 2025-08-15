<script setup lang="ts">
interface Body {
  audience: 'lead' | 'prelead'
  data: {
    name: string
    email: string
    title?: string
  }
}

const { validateInput } = useValidateInput();
const toast = useToast()
const mailchimp = useMailchimp()
const excel = useExcel()
const mailer = useMailer()
const { t } = useI18n()
const { openModal } = useModal()

const isLoading = ref(false);

const form = reactive({
  name: '',
  url: '',
  email: '',
  message: '',
  metadata: {
    page: location?.href || '',
    title: 'Contact Us',
    id: 'contact-us_form'
  }
});

const error = reactive({
  name: '',
  url: '',
  email: '',
});


async function submitForm() {
  error.name = validateInput(form.name, 'name');
  error.url = validateInput(form.url, 'url');
  error.email = validateInput(form.email, 'email');

  if (error.name || error.url || error.email) return

  isLoading.value = true;
  const toastLoading = toast.loading(t('general.async.pending'));

  const body: Body = {
    audience: 'lead',
    data: { ...form, title: 'Contact Us page' }
  }

  mailchimp.save(body)
  mailer.send(form)
  await excel.save(body)

  isLoading.value = false;

  if (excel.error.value) {
    toast.update(toastLoading, {
      type: 'error',
      render: t('general.async.error'),
      autoClose: true,
      isLoading: false
    });

    return;
  }

  toast.update(toastLoading, {
    type: 'success',
    render: t('general.async.success'),
    autoClose: true,
    isLoading: false
  });

  form.name = '';
  form.url = '';
  form.email = '';
  form.message = '';

  window.open('https://meetings.hubspot.com/ihor-sokolov?firstName=' + form.name + '&email=' + form.email, '_blank');

  openModal({ target: 'success' });
};
</script>

<template>
  <div class="form__wrap">
    <div class="form">
      <div class="form__title subtitle-1">Schedule Your Results Discussion</div>
      {{ form }}
      <div class="form__inputs">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  position: sticky;
  top: 16px;
  display: grid;
  gap: 32px;
  color: #393939;
  &__inputs {
    display: grid;
    gap: 16px;
    :deep(.input__error) {
      font-size: 12px;
    }
  }

  &__button {
    min-height: 60px;
    font-size: 18px;
  }
}
</style>
