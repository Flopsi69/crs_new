<script lang="ts" setup>
const { openModal } = useModal();

const info = {
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
</script>

<template>
  <BasePlate
    chart
    background="purple-dark"
  >
    <div class="info">
      <h3 class="info__caption section-caption subtitle-2">
        Guaranteed results
      </h3>

      <h2 class="info__title section-title title-2">
        A performance-based arrangement means that we commit to an agreed-upon
        revenue metrics uplift, ensuring a
        <span class="color-yellow"> positive ROI</span>
        from your CRO project with&nbsp;us
      </h2>

      <button
        id="guaranted_cta"
        class="button button_yellow"
        @click="openModal({ info })"
      >
        Estimate your CRO project ROI
      </button>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.plate {
  padding: 60px;
  @media(max-width: $sm) {
    padding: 32px 20px 36px
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

.button {
  margin-top: 40px;
  font-size: 18px;
  height: 60px;
  @media(max-width: $sm) {
    margin-top: 24px;
    font-size: 16px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
  }
}
</style>
