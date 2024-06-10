<script lang="ts" setup>
const { openModal } = useModal();

const infoConsult = {
  title: 'Book a call to discover the top CRO/UXO opportunities for your business and receive an estimate of the expected uplift in your revenue metricst',
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

const infoCalc = {
  title: 'Get expert help in calculating your KPIs and benchmarking your performance',
  subtitle: 'On the call, we will:',
  list: [
    'Listen to your specific business needs and challenges',
    'Create a plan to accurately calculate your key performance indicators (KPIs)',
    'Give an overview of the most significant CRO/UXO opportunities we see for your site',
  ],
  formTitle: 'Schedule Your Consultation',
  cta: 'Get Help in KPI Calculation',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift'
}
</script>

<template>
  <BasePlate
    background="purple-dark"
    class="cta text-center"
    pixel
  >
    <div class="cta__inner">
      <h3 class="cta__title subtitle-1">
        <slot>
          Discover how we can drive these results for your business.
          <br />
          Book a call with a CRO strategist now
        </slot>
      </h3>
      <div class="cta__actions flex-center">
        <button
          @click="openModal({info: infoConsult})"
          class="button cta__button button_yellow"
        >
          Book a consultation
        </button>
        <button
          @click="openModal({info: infoCalc})"
          class="button cta__button button_trans-yellow"
        >
          Get help in KPi calculation
        </button>
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.cta {
  padding: 30px 128px;
  @media(max-width: $sm) {
    padding: 32px 20px;
    text-align: left;
  }
  &__inner {
    max-width: 824px;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 1;
  }
  &__actions {
    margin-top: 24px;
    gap: 24px;
    @media(max-width: $md) {
      flex-direction: column;
      gap: 16px;
    }
  }
  .cta__button {
    height: 60px;
    padding-left: 60px;
    padding-right: 60px;
    @media(max-width: $md) {
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }
  }
}
</style>
