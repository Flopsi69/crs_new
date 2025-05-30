<script lang="ts" setup>
const { t } = useI18n();

const activeTab = ref('All');

const { data: cases } = useCasesApi().getCases({ server: false })
// const { data: cases } = useAsyncData('cases', () =>
//   useApi().get('/case-studies'), {
//     server: false
//   }
// )

const publishedCases = computed(() => {
  const filteredCase = cases.value?.filter((item) =>
    (item.status && item.status !== 'INACTIVE') ||
    (!item.status && !item.isHidden)
  ) || []

  const sortPriority = [
    "cleanmymac",
    "preply",
    "doyogawithme",
    "comodo",
    "depositphotos",
    "grantme",
    "moneygeek-funnel-conversions"
  ];

  filteredCase.sort((a, b) => {
    const indexA = sortPriority.indexOf(a.url);
    const indexB = sortPriority.indexOf(b.url);

    if (indexA === -1 && indexB === -1) return 0; // both not in priority
    if (indexA === -1) return 1; // a not in priority, b is
    if (indexB === -1) return -1; // b not in priority, a is

    return indexA - indexB; // both in priority, sort by index
  });

  return filteredCase
});

const casesToShow = computed(() => {
  if (activeTab.value === 'All') {
    return publishedCases.value.slice(0, 3);
  }

  return publishedCases.value.filter((item) => item.client?.type === activeTab.value).slice(0, 3);
});

const filterTabs = computed(() => {
  const types = new Set(publishedCases.value.map((item) => item.client?.type).filter(Boolean));

  const tabs = Array.from(types).map((type) => {
    return {
      type,
      amount: publishedCases.value.filter((c) => c.client?.type === type).length || 0
    };
  });

  tabs.unshift({
    type: 'All',
    amount: publishedCases.value.length
  });

  // sort by amount
  tabs.sort((a, b) => b.amount - a.amount);

  return tabs;
});
</script>

<template>
  <BaseSection
    id="case-studies"
    background="purple-light"
    class="cases"
  >
    <h2 class="section-title title-2 cases__title">
      {{ t('sectionCaseStudies.title') }}
      Conversionrate.store
    </h2>

    <div
      v-if="casesToShow.length"
      class="filter"
    >
      <BasePill
        v-for="tab in filterTabs"
        :key="tab"
        class="filter__item text-sm"
        :class="{ active: activeTab === tab.type }"
        @click="activeTab = tab.type"
      >
        {{ tab.type }}
        <div class="filter__amount flex-center color-purple lh-1">
          {{ tab.amount }}
        </div>
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
  @media(max-width: $sm) {
    padding: 42px 0;
  }
  &__title {
    margin-bottom: 24px;
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
    display: flex;
    align-items: center;
    height: 60px;
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
    line-height: 28px;
    min-width: 70px;
    flex-shrink: 0;
    white-space: nowrap;
    gap: 10px;
    padding: 11px 12px 9px 16px;
  }
  &__amount {
    padding-top: 3px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E6E2FD;
    margin-top: -1px;
  }
}
</style>
