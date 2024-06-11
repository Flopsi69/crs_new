<script lang="ts" setup>
const { openModal } = useModal();

const url = ref('');
const error = ref();
const info = {
  title: 'Book a call to discover the top CRO/UXO opportunities for your business and receive an estimate of the expected uplift in your revenue metrics',
  subtitle: 'On the call, you will receive:',
  list: [
    'A projected ROI from a CRO/UXO project for your site/product',
    'An estimated uplift of your key revenue metric that we can commit to',
    'An overview of the most significant CRO/UXO opportunities we see for your site',
  ],
  formTitle: 'Schedule Your Results Discussion',
  cta: 'Book a call to estimate ROI',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift'
}

function handleOpenModal() {
  error.value = validateInput(url.value, 'url')

  if (!error.value) {
    openModal({ url, info });
  }
}
</script>

<template>
  <BasePlate
    class="cta"
    pixel
    background="purple-dark"
  >
    <div class="cta__inner">
      <h3 class="cta__titel subtitle-2">
        Discover CRO and UXO opportunities for your product with our
        complimentary UX review
      </h3>

      <div class="form flex">
        <BaseInput
          v-model="url"
          class="form__input"
          required
          placeholder="Type your site's URL"
          icon="fa6-solid:link"
          :error="error"
          @click="error = ''"
          id="free_review_url"
        />

        <button
          data-related="free_review_url"
          class="button button_yellow form__button"
          @click="handleOpenModal"
          id="free_review_cta"
        >
          Get my free review
        </button>
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>

.cta {
  padding: 30px;
  &__inner {
    position: relative;
    z-index: 1;
  }
  &__titel {
    @media(max-width: $sm) {
      font-size: 18px;
      line-height: 28px;
    }
  }
}

.form {
  margin-top: 24px;
  gap: 12px;
  height: 60px;
  @media(max-width: $sm) {
    margin-top: 20px;
    flex-flow: column;
    height: auto;
    gap: 20px;
  }
  &__button {
    font-size: 18px;
    padding-left: 32px;
    padding-right: 32px;
    @media(max-width: $sm) {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
