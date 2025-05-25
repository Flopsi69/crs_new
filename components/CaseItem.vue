<script lang="ts" setup>
import type { CaseStudy } from '~/types';

const props = defineProps<{
  caseStudy: CaseStudy
}>();

const preview = computed(() => props.caseStudy.preview1);

const router = useRouter();

const navigate = () => {
  router.push(`/case-studies/${props.caseStudy.url}`)
}
</script>

<template>
  <!-- :data-id="caseStudy.id" -->
  <!-- {{ caseStudy }} -->
  <!-- {{ preview }} -->
  <BasePlate
    class="case"
    solid-border
    background="white"
    @click="navigate"
  >
    <div class="case__logo flex align-center">
      <img
        :src="`${caseStudy.client?.logo}`"
        alt=""
      />
    </div>

    <div
      v-if="preview.product"
      class="case__block"
    >
      <div class="case__block-title subtitle-3">Product:</div>
      <div
        class="case__block-caption text color-secondary"
        v-html="preview.product"
      />
    </div>

    <div
      v-if="preview.experiment"
      class="case__block"
    >
      <div class="case__block-title subtitle-3">Experiment:</div>
      <div class="case__block-caption text color-secondary">
        {{ preview.experiment }}
      </div>
    </div>

    <div class="result case__block flex justify-between align-end">
      <div class="result__left result__col">
        <div class="case__block-title subtitle-3">Result:</div>

        <div class="result__value color-purple">
          {{ preview.resultValue }}
        </div>

        <div class="result__caption">
          {{ preview.resultName }}
        </div>
      </div>

      <div class="result__right result__col text-right">
        <div class="result__icon lh-0">
          <img
            src="img/trend.svg"
            alt=""
          />
        </div>

        <div
          v-if="caseStudy.url"
          class="result__link link flex-center"
        >
          View case study
        </div>
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
  cursor: pointer;

  @media(max-width: $sm) {
    padding: 30px 20px;
  }

  &__logo {
    height: 70px;
  }

  &__block-caption {
    margin-top: 4px;
    ::v-deep(i) {
      font-weight: bold;
      color: $purple;
    }
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
