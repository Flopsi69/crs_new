<script lang="ts" setup></script>

<template>
  <BaseSection
    class="hero"
    background="purple-dark"
  >
    <div class="hero__row flex-between">
      <div class="hero__info">
        <h1 class="hero__title">
          We Don’t Sell Service <br />
          We Sell Result
        </h1>

        <div class="hero__descr subtitle-2">
          Founded in 2017, Conversion Rate Store is the only CRO agency that
          contractually commits to revenue growth.
        </div>
      </div>

      <div class="hero__image">
        <img
          src="img/hero-about-us.png"
          alt="Conversioin Rate Store team"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.hero {
  padding: 80px 0;
  &__row {
    position: relative;
    z-index: 2;
  }
  &__title {
    font-size: 52px;
    line-height: 64px;
  }
  &__gap {
    gap: 60px;
  }
  &__descr {
    margin-top: 24px;
    font-weight: 400;
    max-width: 460px;
  }
  &__image {
    max-width: 570px;
  }
}
</style>
