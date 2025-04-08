<script lang="ts" setup>
const { openModal } = useModal();
const { t } = useI18n();

const info = {
  title: t('cta.keyFactors.funnelInfo.title'),
  subtitle: t('cta.keyFactors.funnelInfo.subtitle'),
  list: [
    t('cta.keyFactors.funnelInfo.list.item1'),
    t('cta.keyFactors.funnelInfo.list.item2'),
    t('cta.keyFactors.funnelInfo.list.item3'),
  ],
  formTitle: t('cta.keyFactors.funnelInfo.formTitle'),
  cta: t('cta.keyFactors.funnelInfo.cta'),
  note: t('cta.keyFactors.funnelInfo.note'),
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
        {{ t('cta.keyFactors.subtitle') }}
      </div>

      <h2 class="info__title section-title title-2">
        {{ t('cta.keyFactors.title') }}
      </h2>

      <div class="info__list list-brand">
        <div class="list-brand__item">{{ t('cta.keyFactors.list.item1') }}</div>
        <div class="list-brand__item">{{ t('cta.keyFactors.list.item2') }}</div>
        <div class="list-brand__item">{{ t('cta.keyFactors.list.item3') }}</div>
      </div>

      <button
        id="key_factors_cta"
        class="button button_yellow"
        @click="openModal({ info, id: 'homepage_custom-quote_0' })"
      >
        {{ t('cta.keyFactors.cta') }}
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
