<script lang="ts" setup>
const { t } = useI18n();

const activeTab = ref('All');

const cases = ref<any[]>(await useApi().get('case-studies'));

const publishedCases = computed(() => {
  return cases.value?.filter((item) =>
    (item.status && item.status !== 'INACTIVE') ||
    (!item.status && !item.isHidden)
  ) || [];
});

const casesToShow = computed(() => {
  if (activeTab.value === 'All') {
    return publishedCases.value;
  }

  return publishedCases.value.filter((item) => item.client?.type === activeTab.value);
});

const filterTabs = computed(() => {
  const types = publishedCases.value.map((item) => {
    return item.client?.type
  });

  types.unshift('All');

  return [...new Set(types)].filter((type) => type);
});
</script>

<template>
  <BaseSection
    v-if="cases.length"
    id="case-studies"
    background="purple-light"
    class="cases"
  >
    <h2 class="section-title title-2 cases__title">
      {{ t('sectionCaseStudies.title') }}
      <span class="color-purple">Conversionrate.store</span>
    </h2>

    <!-- TODO make cases -->
    <div class="filter__inner">
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

    <!-- <div class="cases__tabs">
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
    </div> -->

    <CaseList
      class="cases__list"
      :items="casesToShow"
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
