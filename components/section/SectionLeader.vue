<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <BaseSection
    id="leader-section"
    class="leader text-center"
  >
    <div class="leader__caption subtitle-2">
      {{ t('sectionLeader.prefix') }}
    </div>

    <div class="leader__title title-2">
      {{ t('sectionLeader.title') }}
    </div>

    <div class="leader__labels">
      <div
        v-for="index in 6"
        :key="index"
        class="leader__label"
        data-aos="fade-up"
      >
        <img :src="`/images/leader-label-${index}.png`" />
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.leader {
  background: #7763C3 url('/images/leader-bg-mask.png') center no-repeat;
  background-size: cover;
  color: #fff;
  padding: 64px 0;
  @media(max-width: $sm) {
    padding: 32px 0;
    background-image: url('/images/leader-bg-mask-mobile.png');
  }
  &__caption {
    color: $gold;
    @media(max-width: $sm) {
      font-size: 18px;
    }
  }
  &__title {
    margin: 16px auto 0;
    max-width: 740px;
    @media(max-width: $sm) {
      margin-top: 12px;
    }
  }
  &__labels {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 16px;
    margin-top: 40px;
    margin-bottom: 10px;
    @media(max-width: $sm) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px 12px;
      margin-top: 24px;
      margin-bottom: 0;
    }
  }
  &__label {
    line-height: 0;
    &:nth-child(2), &:nth-child(4) {
      margin-bottom: 36px;
      @media(max-width: $sm) {
        margin-bottom: 0;
      }
    }
    &:nth-child(1) {
      @media(max-width: $sm) {
        order: 6;
      }
    }
    &:nth-child(2) {
      @media(max-width: $sm) {
        order: -1;
      }
    }
    &:nth-child(3) {
      margin-bottom: 23px;
      @media(max-width: $sm) {
        margin-bottom: 0;
        order: -3;
      }
    }
    &:nth-child(5) {
      @media(max-width: $sm) {
        order: -2;
      }
    }
    &:nth-child(6) {
      display: none;
      @media(max-width: $sm) {
        display: block;
        order: 5;
      }
    }
  }
}
</style>
