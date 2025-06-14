<script lang="ts" setup>
interface Body {
  audience: 'newsletter'
  data: {
    name: string
    email: string
    title?: string
  }
}

const { t } = useI18n();
const { validateInput } = useValidateInput()

const props = defineProps({
  text: {
    type: Object,
    default: () => ({
      title: "",
      subtitle: "",
      button: "",
    }),
  },
  formId: {
    type: String,
    default: 'homepage_newsletter_0',
  },
  flat: {
    type: Boolean,
    default: false
  },
});

const info = reactive({
  title: props.text.title || t('cta.recieveAccess.title'),
  subtitle: props.text.subtitle || t('cta.recieveAccess.subtitle'),
  button: props.text.button || t('cta.recieveAccess.button')
})

const isSubmitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  id: props.formId
});

const error = reactive({
  name: '',
  email: '',
});

const gtm = useGtm()
const isLoading = ref(false)
const mailchimp = useMailchimp()
const excel = useExcel()
const telegramBot = useTelegram()
const toast = useToast()


function initSave() {
  error.name = validateInput(form.name, 'name');
  error.email = validateInput(form.email, 'email');

  if (error.name || error.email) {
    return;
  }

  gtm?.trackEvent({
    event: 'gtm_hubspot_newsletter',
    data: {...toRaw(form)}
  })

  isLoading.value = true;

  // @ts-ignore
  toast.promise(save, {
    pending: t('general.async.pending'),
    success: t('general.async.success'),
    error: t('general.async.error')
  });
}

async function save() {
  const body: Body = {
    audience: 'newsletter',
    data: { ...form, title: info.title.replace(/\xA0/g, ' ') }
  }

  telegramBot.send({
    name: form.name,
    email: form.email
  })
  excel.save(body)
  await mailchimp.save(body)


  if (mailchimp.error.value) {
    isLoading.value = false;

    throw new Error(mailchimp.error.value?.message)
  }

  form.name = '';
  form.email = '';
  isSubmitted.value = true;
  isLoading.value = false;
}
</script>

<template>
  <BasePlate
    v-auto-animate
    class="cta"
    :class="{'cta_flat': flat}"
    background="purple-dark"
    chart
  >
    <div
      class="info"
      :class="{'info_submitted': isSubmitted}"
    >
      <div class="info__caption section-caption subtitle-2">
        {{ isSubmitted ? t('cta.recieveAccess.successfully') : info.subtitle }}
      </div>

      <div
        class="info__title section-title"
        :class="[flat ? 'title-3' : 'title-2']"
      >
        {{ isSubmitted ? t('cta.recieveAccess.submitted') : info.title }}
      </div>
    </div>

    <div
      v-if="!isSubmitted"
      class="form flex"
    >
      <BaseInput
        id="recieve_access_name"
        v-model="form.name"
        class="form__input"
        required
        :placeholder="t('general.name')"
        icon="fa6-solid:user"
        :error="error.name"
        @click="error.name = ''"
      />

      <BaseInput
        id="recieve_access_email"
        v-model="form.email"
        class="form__input"
        required
        :placeholder="t('general.businessEmail')"
        icon="fa6-solid:envelope"
        :error="error.email"
        @click="error.email = ''"
      />

      <button
        id="recieve_access_cta"
        data-related="recieve_access_url"
        class="form__button button button_yellow"
        :disabled="isLoading"
        @click="initSave"
      >
        {{ info.button }}
      </button>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.cta {
  padding: 60px;
  &_flat {
    padding: 30px;
    &:after {
      display: none;
    }
  }
  @media(max-width: $sm) {
    padding: 32px 20px;
  }
  &:after {
    background-position: right 35px;
    @media(max-width: $md) {
      background-position: right bottom;
    }
  }
}

.info {
  position: relative;
  z-index: 1;
  opacity: .99;
  max-width: 680px;
  &_submitted {
    margin: auto;
    text-align: center;
  }
  &__caption {
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 24px;
      line-height: 32px;
    }
  }
}

.form {
  margin-top: 40px;
  gap: 16px 12px;
  position: relative;
  z-index: 1;
  opacity: .99;
  max-width: 1024px;
  @media(max-width: $md) {
    flex-flow: column;
    margin-top: 24px;
    gap: 20px;
  }
  .cta_flat & {
    margin-top: 30px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    @media(max-width: $md) {
      grid-template-columns: 1fr;
    }
  }
  &__input {
    height: 60px;
  }
  &__button {
    height: 60px;
    font-size: 18px;
    padding: 17px 35px 15px;
    @media(max-width: $sm) {
      padding-left: 15px;
      padding-right: 15px;
      .lang-de & {
        font-size: 14px;
      }
      .lang-es & {
        font-size: 14px;
      }
      .lang-fr & {
        font-size: 12px;
      }
    }
    .cta_flat & {
      grid-column: span 2;
      @media(max-width: $md) {
        grid-column: span 1;
      }
    }
  }
}
</style>
