<script lang="ts" setup>
// import { solutions } from '~/configs';

const { t, locale } = useI18n();
const scrollToElement = useSmoothScroll();

let solutions = [];

try {
  const module = await import(`~/locales/${locale.value}/solutions.js`);
  solutions = module.default;
} catch (error) {
  console.log(`Failed to load solutions for locale ${locale.value}`);
}

const items = reactive(solutions);
const activeSolution = ref(null)
const isShowAll = ref(false);


function setActiveSolution(item: any) {
  activeSolution.value = item;
}

const otherProblems = computed(() => {
  return items.filter((item: any) => item !== activeSolution.value);
});

watch(activeSolution, (value) => {
  nextTick(() => {
    setTimeout(() => {
        if (value) {
          scrollToElement('.solutions__details')
        } else {
          scrollToElement('.solutions__grid')
        }
    }, 10);
  })
});
</script>

<template>
  <BaseSection
    class="solutions"
    id="solutions"
    background="purple-light"
  >
    <div
      v-if="!activeSolution"
      class="solutions__all"
    >
      <div class="solutions__caption section-caption subtitle-2 text-center">
        {{ t('sectionSolutions.caption') }}
      </div>

      <h2 class="solutions__title section-title title-2 text-center">
        {{ t('sectionSolutions.titleFirstRow') }}&nbsp;<span
          class="color-yellow"
        >
          {{ t('sectionSolutions.titleProblem') }}
        </span>
        <br />
        {{ t('sectionSolutions.titleSecondRow') }}
        <span class="color-purple">
          {{ t('sectionSolutions.titleSolution') }}
        </span>
      </h2>

      <div
        class="solutions__grid"
        :class="{ 'solutions__grid--mob-show': isShowAll }"
      >
        <div
          v-for="i in 3"
          :key="'solutoin-row-' + i"
          class="solutions__row"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <SolutionPreview
            v-for="(solution, index) in items.slice((i-1) * 3, i === 3 ? 10 : i*3)"
            :key="index"
            class="solutions__item"
            :class="{ 'disable': !solution.solutions }"
            :solution="solution"
            :index="((i-1) * 3) + index + 1"
            @setActiveSolution="setActiveSolution"
          />
        </div>
      </div>

      <div
        v-if="!isShowAll"
        class="control"
      >
        <button
          class="button button_trans-yellow"
          @click="isShowAll = true"
        >
          {{  t('sectionSolutions.showMore') }}
        </button>
      </div>

      <!-- <SolutionList
        class="solutions__list"
        :items="items"
        :mob-items="4"
        @setActiveSolution="setActiveSolution"
      /> -->
    </div>

    <SolutionDetails
      v-else
      class="solutions__details"
      :item="activeSolution"
      :items="otherProblems"
      @setActiveSolution="setActiveSolution"
    />
  </BaseSection>
</template>

<style lang="scss" scoped>
.solutions {
  overflow: initial;
  &__all {
    padding: 60px 0;
    @media(max-width: $sm) {
      padding: 32px 0;
    }
  }
  &__caption {
    @media(max-width: $sm) {
      font-size: 20px;
    }
  }
  &__title {
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
  }
  &__subtitle {
    margin-top: 40px;
    @media(max-width: $sm) {
      margin-top: 24px;
    }
  }
  &__grid {
    margin-top: 40px;
    @media(max-width: $md) {
      overflow: hidden;
      &:not(.solutions__grid--mob-show) {
        height: 1100px;
      }
    }
    @media(max-width: $sm) {
      margin-top: 24px;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
    @media(max-width: $lg) {
      gap: 16px;
    }
    @media(max-width: $md) {
      grid-template-columns: 1fr;
    }
    & + & {
      margin-top: 38px;
      @media(max-width: $lg) {
        margin-top: 16px;
      }
    }
    &:last-child {
      grid-template-columns: repeat(2, 1fr);
      @media(max-width: $md) {
        grid-template-columns: 1fr;
      }
    }
  }
  &__item {
    &.disable {
      pointer-events: none;
      opacity: 0.5;
    }
  }
  // &__list {
  //   margin-top: 40px;
  //   @media(max-width: $sm) {
  //     margin-top: 20px;
  //   }
  // }
}

.control {
  position: relative;
  display: none;
  text-align: center;
  z-index: 1;
  padding: 85px 0 2px;
  background: linear-gradient(0deg, #FFF 59%, rgba(255, 255, 255, 0.00) 100%);
  margin: -100px -20px -34px;
  @media(max-width: $md) {
    display: block;
  }
}
</style>
