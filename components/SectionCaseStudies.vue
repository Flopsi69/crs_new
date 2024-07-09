<script lang="ts" setup></script>

<template>
  <BaseSection
    background="purple-light"
    class="cases"
  >
    <h2 class="section-title title-2 cases__title">
      CRO case studies from
      <span class="color-purple">Conversionrate.store</span>
    </h2>

    <div class="section-caption subtitle-2 cases__caption">
      Selected A/B test results with 8-55% total conversion rate growth from a
      single experiment
    </div>

    <!-- TODO components -->
    <CaseList />

    <!-- <CtaRecieveAccess class="cta" /> -->
  </BaseSection>
</template>

<style lang="scss" scoped>
.cases {
  padding: 60px 0;
  &__caption {
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
}

.cta {
  margin-top: 60px;
  @media(max-width: $sm) {
    margin-top: 42px;
  }
}
</style>
