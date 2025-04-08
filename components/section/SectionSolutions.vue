<script lang="ts" setup>
import { solutions } from '~/configs';

const { t } = useI18n();

const items = reactive(solutions[0].problems);

const activeSolution = ref(null)

const scrollToElement = useSmoothScroll();

function setActiveSolution(item: any) {
  activeSolution.value = item;
}

const otherProblems = computed(() => {
  return items.filter((item) => item !== activeSolution.value);
});

watch(activeSolution, (value) => {
  nextTick(() => {
    setTimeout(() => {
        if (value) {
          scrollToElement('.solutions__details')
        } else {
          scrollToElement('.solutions__all .solutions__list', 'center')
        }
    }, 400);
  })
});
</script>

<template>
  <BaseSection
    class="solutions"
    id="solutions"
  >
    <BasePlate
      v-if="!activeSolution"
      class="solutions__all"
      data-aos="zoom-in"
      mob-full
    >
      <div class="solutions__caption section-caption subtitle-2">
        {{ t('sectionSolutions.caption') }}
      </div>

      <h2 class="solutions__title section-title title-2">
        {{ t('sectionSolutions.title') }}
      </h2>

      <div class="solutions__subtitle title subtitle-1">
        {{ t('sectionSolutions.subtitle') }}
      </div>

      <SolutionList
        class="solutions__list"
        :items="items"
        :mob-items="4"
        @setActiveSolution="setActiveSolution"
      />

      <!-- <SolutionTabs /> -->
    </BasePlate>

    <SolutionDetails
      v-else
      class="solutions__details"
      :item="activeSolution"
      :items="otherProblems"
      @setActiveSolution="setActiveSolution"
      data-aos="zoom-in"
    />
  </BaseSection>
</template>

<style lang="scss" scoped>
.solutions {
  overflow: initial;
  &__caption {
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
  &__title {
    max-width: 740px;
    @media(max-width: $sm) {
      font-size: 24px;
      line-height: 32px;
    }
  }
  &__subtitle {
    margin-top: 40px;
    @media(max-width: $sm) {
      margin-top: 24px;
    }
  }
  &__all {
    padding: 60px;
    @media(max-width: $sm) {
      padding: 32px 20px;
    }
  }
  &__list {
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 20px;
    }
  }
}
</style>
