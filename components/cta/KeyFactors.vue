<script lang="ts" setup>
const { openModal } = useModal();

const info = {
  title: 'Key factors that determine the price of the project',
  subtitle: null,
  list: [
    'Number of funnel stages to optimise',
    'Level to which the funnel is already optimised',
    'Key performance metric improvement required to reach the project’s goal',
  ],
  formTitle: 'Schedule Your Quote Discussion',
  cta: 'Get a quote for CRO project',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift',
  isGoal: true
}
</script>

<template>
  <BasePlate
    background="purple-dark"
    chart
  >
    <div class="info">
      <div class="info__caption section-caption subtitle-2">
        Performance-based pricing
      </div>

      <h2 class="info__title section-title title-2">
        Key Factors that Determine the Price of a&nbsp;CRO Project:
      </h2>

      <!-- TODO component -->
      <div class="info__list list-brand">
        <div class="list-brand__item">Current funnel performance</div>
        <div class="list-brand__item">
          Desired magnitude of uplift in key macro metrics
        </div>
        <div class="list-brand__item">
          Resources and level of expertise required on our side to achieve the
          goal
        </div>
      </div>

      <button
        id="key_factors_cta"
        class="button button_yellow"
        @click="openModal({ info, id: 'homepage_custom-quote_0' })"
      >
        Get Your Custom Quote
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

.list-brand {
  margin-top: 16px;
  gap: 16px;
  &__item:before {
    background-color: $yellow;
  }
}

.button {
  margin-top: 40px;
  font-size: 18px;
  padding: 17px 70px 15px;
  height: 60px;
  @media(max-width: $sm) {
    margin-top: 24px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
