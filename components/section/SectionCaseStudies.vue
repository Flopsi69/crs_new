<script lang="ts" setup>
// import { cases } from '~/configs';
const { t, locale } = useI18n();

let cases = [];

try {
  const module = await import(`~/i18n/locales/${locale.value}/cases.json`);
  cases = module.default;
} catch (error) {
  console.log(`Failed to load cases for locale ${locale.value}`);
}
</script>

<template>
  <BaseSection
    background="purple-light"
    class="cases"
    id="case-studies"
    v-if="cases.length"
  >
    <h2 class="section-title title-2 cases__title">
      {{ $t('sectionCasesStudies.title') }}
      <span class="color-purple">Conversionrate.store</span>
    </h2>

    <div class="section-caption subtitle-2 cases__caption">
      {{ $t('sectionCasesStudies.subtitle') }}
    </div>

    <CaseList
      class="cases__list"
      :items="cases"
    />

    <CtaRecieveAccess class="cta" />
  </BaseSection>
</template>

<style lang="scss" scoped>
.cases {
  padding: 60px 0;
  &__caption {
    margin-bottom: 24px;
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
  &__list {
    margin-top: 24px;
  }
}

.cta {
  margin-top: 60px;
  @media(max-width: $sm) {
    margin-top: 42px;
  }
}
</style>
