<script lang="ts" setup>
import type { CaseStudy } from '~/types';

const props = defineProps<{
  caseStudy: CaseStudy
}>();
</script>

<template>
  <BasePlate
    class="case"
    solidBorder
    background="white"
  >
    <div class="case__logo flex align-center">
      <img
        :src="`${caseStudy.client.logo}`"
        alt=""
      />
    </div>

    <div
      class="case__block"
      v-if="caseStudy.client.baseInfo"
    >
      <div class="case__block-title subtitle-3">Product:</div>
      <div class="case__block-caption text color-secondary">
        <span
          class="color-purple fw-bold"
          v-if="caseStudy.title"
          >{{ caseStudy.title }}</span
        >
        {{ caseStudy.client.baseInfo }}
      </div>
    </div>

    <div
      class="case__block"
      v-if="caseStudy.experiment"
    >
      <div class="case__block-title subtitle-3">Experiment:</div>
      <div class="case__block-caption text color-secondary">
        {{ caseStudy.experiment }}
      </div>
    </div>

    <div class="result case__block flex justify-between align-end">
      <div class="result__left result__col">
        <div class="case__block-title subtitle-3">Result:</div>

        <div class="result__value color-purple">
          <!-- {{ caseStudy.result.value }}% -->
        </div>

        <!-- <div class="result__caption">{{ caseStudy.result.caption }}</div> -->
      </div>

      <div class="result__right result__col text-right">
        <div class="result__icon lh-0">
          <img
            src="img/trend.svg"
            alt=""
          />
        </div>

        <NuxtLink
          v-if="caseStudy.result?.url"
          external
          target="_blank"
          class="result__link link flex-center"
          :to="caseStudy.result.url"
        >
          <span>View case study</span>
        </NuxtLink>
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-flow: column;
  padding: 30px;
  gap: 20px;

  @media(max-width: $sm) {
    padding: 30px 20px;
  }

  &__logo {
    height: 70px;
  }

  &__block-caption {
    margin-top: 4px;
  }
}

.result {
  margin-top: auto;
  gap: 15px;

  &__value {
    font-size: 32px;
    line-height: 1;
    margin-top: 12px;
  }

  &__caption {
    margin-top: 8px;
    color: $font-secondary;
    font-size: 18px;
    line-height: 30px;
  }

  &__link {
    margin-top: 5px;
  }

  &__right {
    padding-bottom: 5px;
  }
}

.button {
  height: 60px;
}
</style>
