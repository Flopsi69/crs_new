<script lang="ts" setup>
import { solutions } from '~/configs';

const items = reactive(solutions[0].problems)

const activeSolution = ref(null)

const scrollToElement = useSmoothScroll();

function setActiveSolution(item: any) {
  activeSolution.value = item
}

const otherProblems = computed(() => {
  return items.filter((item) => item !== activeSolution.value)
})

watch(activeSolution, (value) => {
  setTimeout(() => {
    // nextTick(() => {
    if (value) {
      scrollToElement('.solutions__details')
    } else {
      scrollToElement('.solutions__all .solutions__list', 'center')
    }
  // })
  }, 300);

});
</script>

<template>
  <BaseSection class="solutions">
    <BasePlate
      v-if="!activeSolution"
      class="solutions__all"
      data-aos="zoom-in"
      mob-full
    >
      <h3 class="solutions__caption section-caption subtitle-2">
        Find the solution to your eCommerce business challenges
      </h3>

      <h2 class="solutions__title section-title title-2">
        Discover the causes and solutions to the challenges your eCommerce
        business is facing
      </h2>

      <div class="solutions__subtitle title subtitle-1">Choose problem</div>

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
