<script lang="ts" setup>
const { t } = useI18n();

const activeTab = ref('All');

// const cases = await useApi().get('case-studies')
const { data: cases } = useAsyncData('cases', () =>
  useApi().get('/case-studies')
)

const publishedCases = computed(() => {
  return cases.value?.filter((item) =>
    (item.status && item.status !== 'INACTIVE') ||
    (!item.status && !item.isHidden)
  ) || []
})

const casesToShow = computed(() => {
  if (activeTab.value === 'All') {
    return publishedCases.value.slice(0, 3)
  }

  return publishedCases.value
    .filter((item) => item.client?.type === activeTab.value)
    .slice(0, 3)
})

const filterTabs = computed(() => {
  const types = publishedCases.value.map((item) => item.client?.type)
  types.unshift('All')
  return [...new Set(types)].filter(Boolean)
})

// try {
//   const module = await import(`~/locales/${locale.value}/cases.json`);
//   cases = module.default;
// } catch (error) {
//   console.log(`Failed to load cases for locale ${locale.value}`);
// }
</script>

<template>
  <BaseSection
    id="case-studies"
    background="purple-light"
    class="cases"
  >
    <h2 class="section-title title-2 cases__title">
      {{ t('sectionCaseStudies.title') }}
      <span class="color-purple">Conversionrate.store</span>
    </h2>

    <div class="section-caption subtitle-2 cases__caption">
      {{ t('sectionCaseStudies.subtitle') }}
    </div>

    <div
      v-if="casesToShow.length"
      class="filter"
    >
      <BasePill
        v-for="tab in filterTabs"
        :key="tab"
        class="filter__item text-sm"
        :class="{ active: activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </BasePill>
    </div>

    <CaseList
      class="cases__list"
      :items="casesToShow"
      :expand="false"
    />

    <div
      v-if="casesToShow.length"
      class="cases__control flex-center"
    >
      <NuxtLink
        :to="`/case-studies${activeTab !== 'All' ? '?selectedTab=' + activeTab : ''}`"
        class="cases__btn button button_trans-yellow"
      >
        {{ t('sectionCaseStudies.viewAll') }}
      </NuxtLink>
    </div>

    <slot></slot>
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
  &__control {
    margin-top: 40px;
    @media(max-width: $sm) {
      margin-top: 24px;
    }
  }
  &__btn {
    font-size: 18px;
  }
}

.filter {
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 12px;
  margin: 40px -20px 0;
  padding: 0 20px;
  @media(max-width: $sm) {
    margin-top: 24px;
  }
  &__item {
    font-size: 18px;
    min-width: 70px;
    flex-shrink: 0;
    white-space: nowrap;
  }
}

.cta {
  margin-top: 60px;
  @media(max-width: $sm) {
    margin-top: 42px;
  }
}
</style>
