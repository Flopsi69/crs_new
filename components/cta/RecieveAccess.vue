<script lang="ts" setup>
const title = ref('Sign up to receive access to additional 16\xA0CRO case studies and all future updates');
const subtitle = ref('Stay ahead of the game');
const isSubmitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  id: 'homepage_newsletter_0',
});

const error = reactive({
  name: '',
  email: '',
});

const isLoading = ref(false)

const gtm = useGtm()

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
  useNuxtApp().$toast.promise(save, {
    pending: 'Submitting your data...',
    success: 'Data submitted successfully',
    error: 'Error submitting data',
  });
}

async function save() {
  saveToMailchimp();
  sendTelegramMessage();
  await saveToExcel();
}

async function sendTelegramMessage() {
  try {
    const result = await $fetch('/api/sendTelegramMessage', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email
      }
    });

    console.log('result', result)
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
}

async function saveToMailchimp() {
  try {
    const result = await $fetch('/api/saveToMailchimp', {
      method: 'POST',
      body: {
        audience: 'newsletter',
        data: {
          name: form.name,
          email: form.email,
          title: 'Sign up to receive access to additional 16 CRO case studies and all future updates'
        }
      }
    });

    console.log('result', result)
  } catch (error) {
    console.error('Error saving data to Google Sheets:', error);
  }
}

async function saveToExcel() {
  try {
    const result = await $fetch('/api/saveToGoogleSheet', {
      method: 'POST',
      body: { type: 'newsletter', data: { ...form, title: 'Sign up to receive access to additional 16 CRO case studies and all future updates' } }
    });

    if (result.status === 200) {
      form.name = '';
      form.email = '';

      isSubmitted.value = true;
      title.value = 'You\'ll now receive all case studies straight to your inbox';
      subtitle.value = 'Successfully!';
    }

    return result
  } catch (error) {
    // @ts-ignore
    throw new Error("Error saving data to Google Sheets", error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <BasePlate
    background="purple-dark"
    chart
    v-auto-animate
  >
    <div
      class="info"
      :class="{'info_submitted': isSubmitted}"
    >
      <h3 class="info__caption section-caption subtitle-2">{{ subtitle }}</h3>

      <h2 class="info__title section-title title-2">{{ title }}</h2>
    </div>

    <div
      v-if="!isSubmitted"
      class="form flex"
    >
      <BaseInput
        v-model="form.name"
        class="form__input"
        required
        placeholder="Name"
        icon="fa6-solid:user"
        :error="error.name"
        @click="error.name = ''"
        id="recieve_access_name"
      />

      <BaseInput
        v-model="form.email"
        class="form__input"
        required
        placeholder="Business email"
        icon="fa6-solid:envelope"
        :error="error.email"
        @click="error.email = ''"
        id="recieve_access_email"
      />

      <button
        @click="initSave"
        data-related="recieve_access_url"
        id="recieve_access_cta"
        class="form__button button button_yellow"
        :disabled="isLoading"
      >
        Receive all case studies
      </button>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.plate {
  padding: 60px;
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
    }
  }
}
</style>
