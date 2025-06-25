<script lang="ts" setup>

useSeoMeta({
  title: '25+ Real Conversion Rate Optimization Case Studies',
  description: 'Get inspired by real-world CRO case studies—see how Conversionrate.store delivers guaranteed growth',
})

const route = useRoute()
const router = useRouter()

const isDevMode = useCookie('isDevMode')

if (import.meta.client) {
  isDevMode.value = isDevMode.value || route.query.mode === 'dev' ? 'true' : '';
}

const { data: cases } = await useCasesApi().getCases()


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

if (route.query.selectedTab) {
  activeTab.value = route.query.selectedTab as string;
    router.push({
      query: {
        ...route.query,
        selectedTab: undefined // this will remove it
      }
    })
}

const publishedCases = computed(() => {
  const filteredCase = cases.value?.filter((item) => item.status !== 'INACTIVE') || []

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
    return publishedCases.value;
  }

  return publishedCases.value.filter((item) => item.client?.type === activeTab.value);
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
  <main class="main cases">
    <div class="container">
      <BaseBreadcrumbs :items="breadcrumbsItems" />

      <ClientOnly>
        <button
          v-if="isDevMode"
          class="dev-mode button button_yellow"
          @click="isDevMode = ''"
        >
          DevMode - Off
        </button>
      </ClientOnly>

      <div class="cases__inner">
        <div class="cases__content">
          <div class="cases__head">
            <h1 class="cases__title title-2">
              Conversion Rate Optimization Case Studies
            </h1>
            <div class="cases__caption subtitle-2">
              The World’s Largest Collection of Case Studies
            </div>
          </div>

          <CtaCaseStudy class="cases__cta cases__cta-mob" />

          <div
            v-if="filterTabs.length > 2"
            class="cases__filter filter"
          >
            <div class="filter__inner">
              <BasePill
                v-for="tab in filterTabs"
                :key="tab.type"
                class="filter__item text-sm"
                :class="{ active: activeTab === tab.type }"
                @click="activeTab = tab.type"
              >
                {{ tab.type }}
              </BasePill>
            </div>
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

  &__list {
    margin-top: 20px;
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
    top: 12px;
    flex-shrink: 0;
    @media (max-width: 1200px) {
      max-width: 300px;
    }
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
  position: sticky;
  z-index: 10;
  top: 0;
  background: #fff;
  margin-top: 20px;
  &__inner {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 -20px;
    padding: 12px 20px;
    overflow-x: auto;
  }
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
