<script lang="ts" setup>
const { openModal } = useModal();

const { t } = useI18n();

const info = {
  title: t('cta.guaranteed.funnelInfo.title'),
  subtitle: t('cta.guaranteed.funnelInfo.subtitle'),
  list: [
    t('cta.guaranteed.funnelInfo.list.item1'),
    t('cta.guaranteed.funnelInfo.list.item2'),
    t('cta.guaranteed.funnelInfo.list.item3'),
  ],
  formTitle: t('cta.guaranteed.funnelInfo.formTitle'),
  cta: t('cta.guaranteed.funnelInfo.cta'),
  note: t('cta.guaranteed.funnelInfo.note')
};
</script>

<template>
  <BasePlate
    chart
    background="purple-dark"
  >
    <div class="info">
      <div class="info__caption section-caption subtitle-2">
        {{ t('cta.guaranteed.subtitle') }}
      </div>

      <h2 class="info__title section-title title-2">
        {{ t('cta.guaranteed.title.prefix') }}
        <span class="color-yellow">{{ t('cta.guaranteed.title.roi') }}</span>
        {{ t('cta.guaranteed.title.suffix') }}
      </h2>

      <button
        id="guaranted_cta"
        class="button button_yellow"
        @click="openModal({ info, id: 'homepage_guaranted_0' })"
      >
        {{ t('cta.guaranteed.cta') }}
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
    .lang-de & {
      font-size: 12px;
    }
    .lang-es & {
      font-size: 12px;
    }
    .lang-fr & {
      white-space: normal;
      line-height: 1.4;
      font-size: 12px;
    }
  }
}
</style>
