<script lang="ts" setup>

</script>

<template>
  <BaseSection class="hero">
    <div class="hero__row flex-between">
      <div class="hero__info">
        <div class="hero__rewards rewards">
          <div class="rewards__item">
            <div class="rewards__title">
              CRO Agency of the Year 2024
            </div>
            <div class="rewards__caption">
              by European Agency Awards
            </div>
          </div>

          <div class="rewards__item">
            <div class="rewards__clutch">
              <img
                class="rewards__clutch-logo"
                src="/images/logo/clutch.svg"
              />
              <span class="rewards__clutch-rate">4.9</span>
              <img
                v-for="i in 5"
                :key="i"
                class="rewards__clutch-star"
                src="/images/logo/clutch-star.svg"
              />
            </div>
            <div class="rewards__caption">
              40 Verified reviews
            </div>
          </div>
        </div>

        <div class="hero__title hero__title--desk title-1">
          What's on your mind?
        </div>

        <div class="hero__caption subtitle-1">
          Most common topics:
        </div>

        <ul class="hero__list list-brand list-brand_yellow">
          <li class="list-brand__item hero__list-item">
            How to increase your site’s/product's conversion rate and revenue with CRO
          </li>
          <li class="list-brand__item hero__list-item">
            How to reduce customer acquisition cost by increasing conversion rate
          </li>
          <li class="list-brand__item hero__list-item">
            How to increase the conversion rate from free to paid users for your SaaS or App
          </li>
        </ul>
      </div>

      <!-- Form -->
      <ContactUsForm class="hero__form" />

      <!-- Mob title -->
      <!-- <div class="hero__title hero__title--mob title-1">
        Performance-Based CRO Agency: Pay Only for Actual Results
      </div> -->
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(180deg, #3E3596 48.21%, #5241DE 81.86%);
  color: #fff;
  padding: 40px 0;
  @media(max-width: $md) {
    padding-top: 0;
    padding-bottom: 0;
    background: #3E3596;
  }
  &__row {
    gap: 24px;
    @media(max-width: $md) {
      display: flex;
      flex-flow: column-reverse;
      align-items: stretch;
      gap: 0;
    }
  }
  &__info {
    max-width: 655px;
    width: 100%;
    padding-bottom: 120px;
    @media(max-width: $md) {
      max-width: 100%;
      display: flex;
      flex-flow: column;
      padding-top: 36px;
      padding-bottom: 16px;
    }
  }
  &__form {
    max-width: 435px;
    width: 100%;
    @media(max-width: $md) {
      max-width: initial;
      width: initial;
    }
  }
  &__title {
    margin-top: 32px;
    @media(max-width: $sm) {
      margin-top: 0;
      font-size: 28px;
      line-height: 1.3;

    }
    &--desk {
      @media(max-width: $md) {
        display: none;
      }
    }
    // &--mob {
    //   display: none;
    //   @media(max-width: $md) {
    //     display: block;
    //   }
    // }
  }
  &__caption {
    margin-top: 32px;
    @media(max-width: $md) {
      margin-top: 0;
    }
  }
  &__list {
    margin-top: 20px;
    gap: 16px;
    @media(max-width: $sm) {
      gap: 20px;
    }
    &-item {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.45;
    }
  }
}

.rewards {
  display: inline-flex;
  gap: 24px;
  @media(max-width: $md) {
    margin-top: 28px;
    order: 1;
    padding-bottom: 40px;
  }
  @media(max-width: $sm) {
    flex-flow: column;
    align-items: flex-start;
    gap: 8px;
    padding-bottom: 0px;
  }
  &__item {
    padding: 16px;
    border-bottom: 2px solid #4C439D;
    @media(max-width: $lg) {
      padding-left: 8px;
      padding-right: 8px;
    }
    @media(max-width: $sm) {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &__title {
    font-size: 19px;
    line-height: 1;
  }
  &__caption {
    margin-top: 10px;
    text-transform: uppercase;
    color: #FDF394;
    font-size: 14px;
    line-height: 16px;
  }
  &__clutch {
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    &-rate {
      position: relative;
      top: 2px;
      margin-left: 4px;
    }
  }
}
</style>
