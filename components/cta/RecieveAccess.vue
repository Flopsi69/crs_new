<script lang="ts" setup>
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
    data: toRaw(form)
  })

  isLoading.value = true;

  useNuxtApp().$toast.promise(saveToExcel, {
    pending: 'Submitting your data...',
    success: 'Data submitted successfully',
    error: 'Error submitting data',
  });
}

async function saveToExcel() {
  try {
    const result = await $fetch('/api/saveToGoogleSheet', {
      method: 'POST',
      body: { type: 'newsletter', data: { ...form, title: 'Sign up to receive access to an additional 16 CRO case studies and all future updates' } }
    });

    if (result.status === 200) {
      form.name = '';
      form.email = '';
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
  >
    <div class="info">
      <h3 class="info__caption section-caption subtitle-2">
        Stay ahead of the game
      </h3>

      <h2 class="info__title section-title title-2">
        Sign up to receive access to an additional 16&nbsp;CRO case studies and
        all future updates
      </h2>

      <div class="info__form form flex">
        <BaseInput
          v-model="email"
          class="form__input"
          required
          placeholder="Business email"
          icon="fa6-solid:envelope"
          id="recieve_access_url"
        />

        <button
          data-related="recieve_access_url"
          id="recieve_access_cta"
          disabled
          class="form__button button button_yellow"
        >
          Receive all case studies
        </button>
      </div>
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
  gap: 12px;
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
  @media(max-width: $sm) {
    flex-flow: column;
    margin-top: 24px;
    gap: 16px;
  }
}
</style>
