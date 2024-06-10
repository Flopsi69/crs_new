<script lang="ts" setup></script>

<template>
  <BasePlate
    pixel
    background="purple-dark text-center"
  >
    <div class="plate__inner">
      <h2 class="plate__titel section-title title-2">
        Our A/B test <span class="color-yellow">win rate is 52%</span>, meaning
        our alternative variations beat the control in every other test we
        launch
      </h2>

      <div class="plate__caption">
        This high effectiveness is driven by a rigorous scientific process of
        deriving and validating CRO hypotheses
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.plate {
  padding: 45px 20px;
  @media(max-width: $sm) {
    padding: 42px 20px;
    text-align: left;
  }
  &__inner {
    max-width: 680px;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 1;
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 24px;
      line-height: 32px
    }
  }
  &__caption {
    margin-top: 24px;
    padding: 0 30px;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    @media(max-width: $sm) {
      margin-top: 12px;
      font-size: 16px;
      line-height: normal;
      padding: 0;
    }
  }
}
</style>
