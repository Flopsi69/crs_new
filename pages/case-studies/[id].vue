<script lang="ts" setup>
import api from '@/services/api.js';

const route = useRoute();
const { id } = route.params;

if (!id || Array.isArray(id)) {
  await navigateTo('/case-studies');
}

const caseStudy = await api.getCase(id);

if (!caseStudy.value?.id) {
  await navigateTo('/case-studies');
}

const handlerList: Ref<[]> = await api.getCases('url');
const handlerListArray = handlerList.value.map((item: any) => item.url)
const currentIndex = ref(handlerListArray.indexOf(id));
const nextId = computed(() => {
  if (!handlerListArray.length) return null;

  const nextIndex =
    currentIndex.value < handlerListArray.length - 1
      ? currentIndex.value + 1
      : 0;

  return handlerListArray[nextIndex];
});

const prevId = computed(() => {
  if (!handlerListArray.length) return null;

  const prevIndex =
    currentIndex.value > 0
      ? currentIndex.value - 1
      : handlerListArray.length - 1;

  return handlerListArray[prevIndex];
});

const mainContent = computed(() => {
  return caseStudy.value?.content?.content || [];
});

const resultContent = computed(() => {
  return caseStudy.value?.content?.result || [];
});

const previewMetrics = computed(() => {
  return caseStudy.value?.preview2?.goals || [];
});

const breadcrumbs = reactive([
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Case Studies',
    href: '/case-studies'
  },
  {
    text: caseStudy.value?.breadcrumb || 'Case Study',
    href: ''
  }
]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <main
    class="case"
    :class="{'case_banner': caseStudy.banner }"
  >
    <Breadcrumbs :items="breadcrumbs" />

    <div class="container container_narrow">
      <div
        v-if="caseStudy.banner"
        class="case__head"
      >
        <h1
          class="case__title case__title_top title-1"
          v-html="caseStudy.title"
        />

        <UiImage
          class="case__image"
          :src="caseStudy.bannerImage"
        ></UiImage>
      </div>

      <div class="case__inner">
        <div class="case__content">
          <BasePlate
            class="case__banner banner"
            solid-border
          >
            <div
              class="banner__logo"
              v-if="caseStudy?.client?.logo"
            >
              <img :src="caseStudy.client.logo" />
            </div>
            <div
              v-if="previewMetrics?.length"
              class="banner__metrics flex-center"
            >
              <div
                class="banner__metric"
                v-for="(metric, key) in previewMetrics"
                :key="metric.id"
              >
                <div class="banner__metric-value">
                  {{ metric.value }}
                </div>
                <div class="banner__metric-label">
                  {{ metric.name }}
                </div>
              </div>
            </div>
          </BasePlate>

          <div
            class="case__reading reading text color-secondary"
            v-if="caseStudy.readTime"
          >
            <img
              class="reading__icon"
              src="@/assets/icons/clock.svg"
            />
            <span class="reading__value">
              Reading time: <strong>{{ caseStudy.readTime }} min</strong>
            </span>
          </div>

          <h1
            v-if="!caseStudy.banner"
            class="case__title title-1"
            v-html="caseStudy.title"
          />

          <div class="post">
            <section class="post__section">
              <UiComponentBuilder :content="mainContent" />
            </section>

            <div
              class="results"
              v-if="resultContent?.length"
            >
              <section class="post__section">
                <UiComponentBuilder :content="resultContent" />
              </section>
            </div>
          </div>
        </div>

        <BasePlate
          class="case__aside aside"
          background="purple-dark"
        >
          <h3 class="aside__title subtitle-1">
            Estimate uplift from a performance-based CRO project for your
            business
          </h3>
          <div class="aside__description text">
            We will also provide you with 3 CRO hypotheses for your business for
            free if you&nbsp;qualify
          </div>
          <button class="aside__button button button_yellow subtitle-3">
            Estimate your uplift
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="#2B2B2B"
            >
              <g clip-path="url(#clip0_521_1825)">
                <path
                  d="M12.2855 6.00633L7.59856 10.5891C7.31259 10.8687 6.84882 10.8687 6.56286 10.5891C6.27684 10.3095 6.27684 9.85611 6.56286 9.57644L9.99961 6.21605H1.23233C0.827909 6.21605 0.5 5.89543 0.5 5.49999C0.5 5.10461 0.827909 4.78393 1.23233 4.78393H9.99961L6.56298 1.42355C6.27696 1.14388 6.27696 0.69053 6.56298 0.410866C6.70593 0.271148 6.89341 0.201146 7.08082 0.201146C7.26824 0.201146 7.45566 0.271148 7.59867 0.410866L12.2855 4.99365C12.5715 5.27332 12.5715 5.72667 12.2855 6.00633Z"
                />
              </g>
            </svg>
          </button>
        </BasePlate>
      </div>

      <div class="navigation">
        <template v-if="handlerListArray.length">
          <NuxtLink
            v-if="prevId"
            :to="{
              name: 'case-studies-id',
              params: { id: prevId }
            }"
            class="navigation__arrow button button_trans-purple subtitle-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="#5954A0"
            >
              <path
                d="M6.03204e-07 8.01784C6.17238e-07 7.69677 0.105572 7.41137 0.316716 7.19732L7.07331 0.347826C7.4956 -0.115942 8.2346 -0.115942 8.65689 0.347826C9.11437 0.77592 9.11437 1.52508 8.65689 1.95318L2.70968 8.01784L8.65689 14.0468C9.11437 14.4749 9.11437 15.2241 8.65689 15.6522C8.2346 16.1159 7.4956 16.1159 7.07331 15.6522L0.316716 8.80267C0.105572 8.58863 5.90728e-07 8.30323 6.03204e-07 8.01784Z"
              />
            </svg>
            Previous case study
          </NuxtLink>

          <NuxtLink
            v-if="nextId"
            :to="{
              name: 'case-studies-id',
              params: { id: nextId }
            }"
            class="navigation__arrow button button_trans-purple subtitle-3"
          >
            Next case study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="#5954A0"
            >
              <path
                d="M9.5 7.98216C9.5 8.30323 9.39443 8.58863 9.18328 8.80268L2.42669 15.6522C2.0044 16.1159 1.2654 16.1159 0.843108 15.6522C0.385631 15.2241 0.385631 14.4749 0.843108 14.0468L6.79032 7.98216L0.843109 1.95318C0.385631 1.52508 0.385631 0.77592 0.843109 0.347827C1.2654 -0.115942 2.0044 -0.115942 2.42669 0.347827L9.18328 7.19732C9.39443 7.41137 9.5 7.69677 9.5 7.98216Z"
              />
            </svg>
          </NuxtLink>
        </template>

        <button
          @click="scrollToTop"
          class="navigation__up button button_trans-purple subtitle-3 flex-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#5954A0"
          >
            <path
              d="M13.9822 8.5C14.3032 8.5 14.5886 8.60557 14.8027 8.81672L21.6522 15.5733C22.1159 15.9956 22.1159 16.7346 21.6522 17.1569C21.2241 17.6144 20.4749 17.6144 20.0468 17.1569L13.9822 11.2097L7.95318 17.1569C7.52508 17.6144 6.77592 17.6144 6.34783 17.1569C5.88406 16.7346 5.88406 15.9956 6.34783 15.5733L13.1973 8.81672C13.4114 8.60557 13.6968 8.5 13.9822 8.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.temp {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
  border-radius: 25px;
  width: 120px;
  padding: 0;
  font-size: 10px;
  min-height: 30px;
}

.case {
  overflow: clip;
  &__head {
    margin: 42px 0;
  }
  &__image {
    margin-top: 24px;
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 50px;
    margin-top: 6px;
    @media(max-width: $lg) {
      gap: 25px;
    }
  }
  &__content {
    flex-grow: 1;
    width: 100%;
    min-width: 0;
  }
  &__title:not(.case__title_top) {
    font-weight: 400;
    margin-top: 24px;
  }
  &__title {
    @media(max-width: $md) {
      font-size: 30px;
      line-height: 38px;
    }
  }
  &__reading {
    margin-top: 12px;
  }
}

.banner {
  display: flex;
  align-items: center;
  padding: 28px;
  border-radius: 20px;
  border: 2px solid #ede8f6;
  gap: 20px;
  &__logo {
    line-height: 0;
    img {
      max-width: 180px;
      max-height: 60px;
    }
  }
  &__metrics {
    position: relative;
    top: -5px;
    display: flex;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
  }
  &__metric {
    text-align: center;
    background: url('img/metric-grow-arrow.svg') top center no-repeat;
    background-size: contain;
    padding-top: 29px;
    min-width: 117px;
    &-value {
      font-size: 28px;
      line-height: 1;
      color: $violet;
    }
    &-label {
      margin-top: 8px;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}

.post {
  display: grid;
  gap: 60px;
  margin-top: 60px;
  @media(max-width: $md) {
    margin-top: 40px;
    gap: 40px;
  }
  &:deep(p) {
    font-size: 18px;
    font-weight: 400;
    color: $font-secondary;
    & + p {
      margin-top: -12px;
      @media(max-width: $md) {
        margin-top: -8px;
      }
    }
  }
  &:deep(.post__title span) {
    background-color: white;
  }
  &:deep(.results .post__title span) {
    background-color: $bg--purple-light;
  }
  &__section {
    display: grid;
    gap: 24px;
    @media(max-width: $md) {
      gap: 20px;
    }
  }
}

.reading {
  display: flex;
  align-items: center;
  gap: 6px;
  &__icon {
    flex-shrink: 0;
    width: 14px;
    margin-top: -2px;
  }
}

.aside {
  max-width: 380px;
  width: 100%;
  position: sticky;
  padding: 28px;
  top: 20px;
  margin-bottom: 20px;
  color: #fff;
  @media(max-width: $lg) {
    max-width: 280px;
    padding: 20px;
  }
  @media(max-width: $md) {
    max-width: 240px;
  }
  @media(max-width: $sm) {
    display: none;
  }
  &__title {
    line-height: 1.3;
    @media(max-width: $lg) {
      font-size: 20px;
    }
  }
  &__description {
    margin-top: 12px;
  }
  &__button {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    text-transform: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media(max-width: $md) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

.results {
  position: relative;
  background-color: $bg--purple-light;
  padding: 60px 0;
  display: grid;
  gap: 60px;
  @media(max-width: $sm) {
    padding: 40px 0;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -400%;
    width: 400%;
    height: 100%;
    background-color: $bg--purple-light;
  }
  &:after {
    left: 100%;
  }
}

.navigation {
  position: relative;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  gap: 115px;
  @media(max-width: $md) {
    padding: 40px 0;
    gap: 50px;
  }
  @media(max-width: $sm) {
    gap: 12px;
    flex-flow: column;
    padding-right: 75px;
  }
  &__arrow {
    text-transform: none;
    padding: 15px 12px 13px;
    display: flex;
    justify-content: center;
    gap: 10px;
    max-width: 235px;
    width: 100%;
    @media(max-width: $sm) {
      max-width: 100%;
    }
  }
  &__up {
    width: 50px;
    height: 50px;
    border-radius: 60px;
    padding: 0;
    margin-left: auto;
    @media(max-width: $sm) {
      position: absolute;
      right: 0;
      top: 40px;
    }
  }
}
</style>
