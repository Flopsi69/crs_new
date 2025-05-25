<script lang="ts" setup>
// import { cases } from '~/configs';
const { t, locale } = useI18n();

let cases = [];

try {
  const module = await import(`~/locales/${locale.value}/cases.json`);
  cases = module.default;
} catch (error) {
  console.log(`Failed to load cases for locale ${locale.value}`);
}

const tabs = [
  'SaaS',
  'Ecommerce',
  'Mobile Apps',
  'Lead Gen '
]

const activeTab = ref(tabs[0]);
</script>

<template>
  <BaseSection
    background="purple-light"
    class="cases"
    id="case-studies"
    v-if="cases.length"
  >
    <h2 class="section-title title-2 cases__title">
      {{ t('sectionCaseStudies.title') }}
      <span class="color-purple">Conversionrate.store</span>
    </h2>

    <!-- TODO make cases -->

    <div class="cases__tabs">
      <BasePill
        v-for="tab in tabs"
        :key="tab"
        class="cases__tab"
        :class="{ active: activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
        <div class="cases__tab-amount flex-center color-purple lh-1">12</div>
      </BasePill>
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
  &__title {
    margin-bottom: 24px;
  }
  &__list {
    margin-top: 24px;
  }
  &__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 24px;
    margin-top: 40px;
    @media(max-width: $sm) {
      margin-top: 24px;
    }
  }
  &__tab {
    &.pill {
      font-size: 18px;
      min-height: 50px;
      padding-right: 12px;
      gap: 10px;
    }
    &-amount {
      padding-top: 3px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: #E6E2FD;
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
