<script lang="ts" setup>
interface CaseStudyOld {
  cases: {
    isHidden: boolean;
    id: string;
    logo: string;
    product: string;
    about: string;
    experiment: string;
    result: {
      value: number;
      caption: string;
      url: string;
    };
  }
}

import type { CaseStudy } from '~/types';
import { cases } from '~/configs';
import api from '@/services/api.js';

const casesApi: CaseStudy[] = await api.getCases();

console.log('resApiClient', casesApi);

const newsletterText = {
  title: 'Sign up for our newsletter to get early updates',
  subtitle: 'Stay ahead of the game',
  button: 'Sign up',
}
</script>

<template>
  <main class="main cases">
    <div class="container">
      <div class="cases__head">
        <h1 class="cases__title title-2">
          CRO case studies from Conversionrate.store
        </h1>
        <div class="cases__caption subtitle-2">
          Selected A/B test results with 8-55% total conversion rate growth from
          a single experiment
        </div>
      </div>

      <div class="cases__inner">
        <div class="cases__content">
          <pre>{{ casesApi }}</pre>
          <CaseList
            class="cases__list"
            :cols="2"
            :expand="false"
            :items="casesApi"
          />
          <br />
          <hr />
          <br />
          <CaseList
            class="cases__list"
            :cols="2"
            :expand="false"
            :items="cases"
          />

          <CtaRecieveAccess
            flat
            class="cases__cta"
            form-id="case-studies_newsletter_0"
            :text="newsletterText"
          />
        </div>

        <BasePlate
          class="cases__aside aside"
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
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cases {
  padding: 60px 0;
  &__caption {
    margin-top: 12px;
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 6px;
    margin-top: 40px;
  }
  &__content {
    flex-grow: 1;
  }
  &__cta {
    margin-top: 60px;
    &:deep(.info_submitted) {
      max-width: 560px;
    }
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
  &__title {
    line-height: 1.3;
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
    width: 100%;
  }
}
</style>
