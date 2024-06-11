<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'benchmark',
  }
});

const { openModal } = useModal();

const title = ref(props.type === 'benchmark' ? 'Are you below the benchmarks in any metric? We will help you analyse and improve conversions with our free product review' : 'Discover how we can drive these results for your business.<br /> Book a call with a CRO strategist now');

const bookTitle = ref(props.type === 'benchmark' ? 'Book a consultation' : 'Book a Call');
const helpTitle = ref(props.type === 'benchmark' ? 'Get help in KPi calculation' : 'Get help in roi calculation');

const infoBenchmarkBook = {
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

const infoBenchmarkHelp = {
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

const infoCalcBook = {
  title: 'Estimate Your ROI from a CRO/UXO Project for Your Business',
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

const infoCalcHelp = {
  title: 'Schedule a call to estimate your ROI with expert assistance',
  subtitle: 'On the call, we will:',
  list: [
    'Assistance in calculating your key performance indicators (KPIs)',
    'A preliminary ROI estimation based on your KPIs',
    'An overview of the most significant CRO/UXO opportunities we see for your site',
  ],
  formTitle: 'Schedule Your Consultation',
  cta: 'Get Help in ROI Calculation',
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
      <h3
        class="cta__title subtitle-1"
        v-html="title"
      ></h3>
      <div class="cta__actions flex-center">
        <button
          :id="type + '_1-cta'"
          @click="openModal({ info: type === 'benchmark' ? infoBenchmarkBook : infoCalcBook })"
          class="button cta__button button_yellow"
        >
          {{ bookTitle }}
        </button>
        <button
          :id="type + '_2-cta'"
          @click="openModal({ info: type === 'benchmark' ? infoBenchmarkHelp : infoCalcHelp})"
          class="button cta__button button_trans-yellow"
        >
          {{ helpTitle }}
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
    &__title :deep(br) {
      display: none;
    }
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
