<script lang="ts" setup>
// import { cases } from '~/configs';

const { t, locale } = useI18n();

// let cases = [];

// try {
//   const module = await import(`~/i18n/locales/${locale.value}/cases.json`);
//   cases = module.default;
// } catch (error) {
//   console.log(`Failed to load cases for locale ${locale.value}`);
// }

const { data: cases } = await useAsyncData('i18n-locale-cases', async () => {
  const json = await import(`~/i18n/locales/${locale.value}/cases.json`)

  return json.default
})

const props = defineProps({
  items: {
    type: Array<{ problem: string, causes: Array<string>, solutions: Array<object> }>,
    default: () => []
  },
  item: {
    type: Object,
    default: () => null
  }
});

const relatedCase = ref();

watch(() => props.item, (item) => {
  getRelatedCase();
});

onMounted(() => {
  getRelatedCase();
});

function getRelatedCase() {
  relatedCase.value = cases.value.find((c) => c.id === props.item.case);

  // if (relatedCase.value?.result?.url2) {
  //   relatedCase.value.result.url = relatedCase.value.result.url2;
  // }
}
</script>

<template>
  <BasePlate
    mob-full
    class="solution"
  >
    <div class="solution__inner flex justify-between">
      <div
        class="solution__info"
        :class="{'solution__info_full': !relatedCase}"
      >
        <BasePill
          back
          class="subtitle-3"
          @click="$emit('setActiveSolution', null)"
        >
          {{ t('sectionSolutions.solution.back') }}
        </BasePill>

        <div
          v-if="item.problem"
          class="solution__problem bg--gradient-light_smooth"
        >
          <div class="solution__problem-title color-secondary">
            {{ t('sectionSolutions.solution.problem') }}
          </div>
          <div class="solution__problem-value subtitle-3">
            {{ item.problem }}
          </div>
        </div>

        <div
          v-if="item.causes?.length"
          class="solution__cause"
        >
          <h3 class="subtitle-1 solution__cause-title">
            {{ t("sectionSolutions.solution.causes") }}
          </h3>

          <div class="solution__cause-list">
            <div
              v-for="(cause, index) in item.causes"
              :key="index"
              class="solution__step"
            >
              <div class="solution__step-num">{{ index + 1 }}</div>
              <div class="solution__step-title">
                {{ cause }}
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="item.solutions?.length"
          class="solution__steps"
        >
          <h3 class="subtitle-1 solution__steps-title">
            {{ t("sectionSolutions.solution.solutions") }}
          </h3>

          <div
            v-for="(solution, index) in item.solutions"
            :key="index"
            class="solution__steps-block"
          >
            <div class="solution__step">
              <div class="solution__step-num">{{ index + 1 }}</div>
              <div class="solution__step-title">
                {{ solution.title }}
              </div>
            </div>

            <div
              class="solution__step-description"
              v-html="solution.content"
            ></div>
          </div>
        </div>

        <div
          v-if="relatedCase"
          class="solution__case-wrap"
          data-view="mob"
        >
          <h3 class="subtitle-1 solution__case-title">
            {{ t('sectionSolutions.solution.relavent') }}
          </h3>

          <CaseItemOld
            class="solution__case"
            :case-study="relatedCase"
          />
        </div>

        <CtaFreeReview class="solution__cta" />
      </div>

      <div
        v-if="relatedCase"
        class="solution__case-wrap"
        data-view="desk"
      >
        <h3 class="subtitle-1 solution__case-title">
          {{ t('sectionSolutions.solution.relavent') }}
        </h3>

        <CaseItemOld
          class="solution__case"
          :case-study="relatedCase"
        />
      </div>
    </div>

    <div class="other">
      <h3 class="subtitle-1">
        {{ t('sectionSolutions.solution.otherProblem') }}
      </h3>

      <SolutionList
        class="other__list"
        :items-to-show="3"
        :items="items"
        @set-active-solution="$emit('setActiveSolution', $event)"
      />
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.solution {
  overflow: initial;
  padding: 60px;
  @media(max-width: $sm) {
    padding: 32px 20px;
  }
  &__inner {
    gap: 25px;
    align-items: flex-start;
    @media(max-width: $md) {
      flex-flow: column;
    }
  }
  &__info {
    max-width: 640px;
    width: 100%;
    @media(max-width: $md) {
      max-width: 100%;
    }

    &_full {
      max-width: 100%;
    }
  }
  &__problem {
    padding: 24px 20px;
    border-radius: 12px;
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 20px;
      padding: 16px 12px;
    }
    &-title {
      font-size: 14px;
    }
    &-value {
      margin-top: 4px;
      line-height: 28px;
    }
  }

  &__cause {
    margin-top: 24px;
    &-list {
      display: grid;
      gap: 16px;
      margin-top: 16px;
    }
  }
  &__step {
    display: flex;
    gap: 8px;
    font-size: 18px;
    &-num {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      margin-top: -2px;
      background: $gradient-light;
      color: $violet;
      width: 28px;
      height: 28px;
      padding-top: 1px;
      flex-shrink: 0;
    }
    &-description {
      margin-top: 20px;
      display: grid;
      gap: 20px;

      :deep(ol) {
        display: grid;
        padding-left: 16px;
        gap: 12px;
      }

      :deep(strong) {
        font-weight: 700;
      }
    }
  }

  &__steps {
    margin-top: 32px;
    &:deep(.text) {
      color: $font-secondary;
    }
    &-title {
      margin-bottom: 16px;
    }
    &-block {
      & + & {
        margin-top: 32px;
        padding-top: 32px;
        background-image: linear-gradient(to right, #c4c2de 30%, rgba(196, 194, 222, 0) 0%);
        background-size: 8px 2px;
        background-repeat: repeat-x;
      }
    }
  }


  &__case {
    margin-top: 24px;
    @media(max-width: $md) {
      margin-top: 16px;
    }
    &-wrap {
      position: sticky;
      top: 10px;
      max-width: 390px;
      width: 100%;
      @media(max-width: $md) {
        position: static;
        margin-top: 24px;
      }
      @media(max-width: $sm) {
        max-width: 100%;
      }

      &[data-view="mob"] {
        display: none;
        @media(max-width: $md) {
          display: block;;
        }
      }

      &[data-view="desk"] {
        @media(max-width: $md) {
          display: none;;
        }
      }
    }
    // &-title {
    //   @media(max-width: $sm) {
    //     font-size: 24px;
    //   }
    // }
  }

  &__cta {
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 20px;
    }
  }
}

.other {
  margin-top: 40px;
  @media(max-width: $sm) {
    margin-top: 20px;
  }
  &__list {
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 20px;
    }
  }
}
</style>
