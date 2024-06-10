<script lang="ts" setup>
// TODO
const { openModal } = useModal();

const email = ref('');

const info = {
  title: 'Estimate the Potential Uplift of Your Key Revenue Metric',
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
        />

        <button
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
