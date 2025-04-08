<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'benchmark'
  }
});

const { t } = useI18n();

const { openModal } = useModal();

function getFunnelInfo(funnelNumber:number) {
  const funnelName = funnelNumber === 1 ? 'firstFunnelInfo' : 'secondFunnelInfo';
  return {
    title: t(`cta.help.${props.type}.${funnelName}.title`),
    subtitle: t(`cta.help.${props.type}.${funnelName}.subtitle`),
    list: [
      t(`cta.help.${props.type}.${funnelName}.list[0]`),
      t(`cta.help.${props.type}.${funnelName}.list[1]`),
      t(`cta.help.${props.type}.${funnelName}.list[2]`)
    ],
    formTitle: t(`cta.help.${props.type}.${funnelName}.formTitle`),
    cta: t(`cta.help.${props.type}.${funnelName}.cta`),
    note: t(`cta.help.${props.type}.${funnelName}.note`)
  }
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
        {{t(`cta.help.${type}.title`)}}
      </h3>
      <div class="cta__actions flex-center">
        <button
          :id="type + '_1-cta'"
          @click="openModal({ 
            info: getFunnelInfo(1), 
            id: `homepage_${type}_0` 
          })"
          class="button cta__button button_yellow"
        >
          {{ t(`cta.help.${type}.firstButton`) }}
        </button>
        <button
          :id="type + '_2-cta'"
          @click="openModal({ 
            info: getFunnelInfo(2), 
            id: `homepage_${type}_1`
          })"
          class="button cta__button button_trans-yellow"
        >
          {{ t(`cta.help.${type}.secondButton`) }}
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
  &__title {
    white-space: pre-line;
    @media(max-width: $sm) {
      white-space: normal;
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
