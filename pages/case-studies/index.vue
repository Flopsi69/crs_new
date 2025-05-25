<script lang="ts" setup>
const cases: any[] = await useApi().get('case-studies');

const newsletterText = {
  title: 'Sign up for our newsletter to get early updates',
  subtitle: 'Stay ahead of the game',
  button: 'Sign up',
}

const breadcrumbsItems = [
  { href: '/', text: 'Home' },
  { href: '/case-studies', text: 'Cases' }
]

const activeTab = ref('All');

const route = useRoute()

const isDevMode = useCookie('isDevMode')
isDevMode.value = isDevMode.value || route.query.mode === 'dev' ? 'true' : '';

const publishedCases = computed(() => {
  return cases.filter((item) =>
    isDevMode.value ||
    (item.status && item.status !== 'INACTIVE') ||
    (!item.status && !item.isHidden)
  )
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
  <main class="main cases">
    <div class="container">
      <BaseBreadcrumbs :items="breadcrumbsItems" />

      <button
        v-if="isDevMode"
        class="dev-mode button button_yellow"
        @click="isDevMode = ''"
      >
        DevMode - Off
      </button>

      <div class="cases__inner">
        <div class="cases__content">
          <div class="cases__head">
            <h1 class="cases__title title-2">
              CRO case studies from Conversionrate.store
            </h1>
            <div class="cases__caption subtitle-2">
              Selected A/B test results with 8-55% total conversion rate growth
              from a single experiment
            </div>
          </div>

          <CtaCaseStudy class="cases__cta cases__cta-mob" />

          <div class="cases__filter filter">
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
            :cols="2"
            :expand="false"
            :items="casesToShow"
          />

          <CtaRecieveAccess
            flat
            class="cases__newsletter"
            form-id="case-studies_newsletter_0"
            :text="newsletterText"
          />
        </div>

        <div class="cases__aside">
          <CtaCaseStudy class="cases__cta" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.dev-mode {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
  border-radius: 25px;
  width: 100px;
  padding: 0;
  font-size: 10px;
  min-height: 30px;
}

.cases {
  padding: 12px 0 90px;
  @media(max-width: $sm) {
    padding-bottom: 60px;
  }

  &__caption {
    margin-top: 12px;
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 40px;
    @media(max-width: $md) {
      flex-flow: column;
      gap: 30px;
    }
    @media(max-width: $sm) {
      margin-top: 30px;
    }
  }
  &__content {
    flex-grow: 1;
    max-width: 100%;
    min-width: 0;
    @media(max-width: $md) {
      width: 100%;
    }
  }
  &__filter{
    margin: 32px -20px;
    padding: 0 20px;
    @media(max-width: $sm) {
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
  &__newsletter {
    margin-top: 60px;
    &:deep(.info_submitted) {
      max-width: 560px;
    }
    @media(max-width: $md) {
      margin-top: 30px;
    }
  }
  &__aside {
    max-width: 380px;
    width: 100%;
    position: sticky;
    top: 20px;
    @media (max-width: $md) {
      display: none;
    }
  }
  &__cta {
    &-mob {
      display: none;
      margin-top: 24px;
      @media (max-width: $md) {
        display: block;
      }
    }
  }
}

.filter {
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
  &__item {
    min-width: 70px;
    flex-shrink: 0;
    @media(max-width: $md) {
      white-space: nowrap;
    }
  }
  &__amount {
    padding-top: 3px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E6E2FD;
  }
}
</style>
