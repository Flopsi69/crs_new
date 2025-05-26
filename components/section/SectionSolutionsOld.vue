<script lang="ts" setup>
import { solutions } from '~/configs';

// const { t, locale } = useI18n();
const scrollToElement = useSmoothScroll();

// let solutions = [];

// try {
//   const module = await import(`~/locales/${locale.value}/solutions.js`);
//   solutions = module.default;
// } catch (error) {
//   console.log(`Failed to load solutions for locale ${locale.value}`);
// }

const items = reactive(solutions[0].problems);
const activeSolution = ref(null)


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
          scrollToElement('.solutions__all .solutions__list', 'center');
        }
    }, 400);
  })
});
</script>

<template>
  <BaseSection
    id="solutions"
    class="solutions"
  >
    <BasePlate
      v-if="!activeSolution"
      class="solutions__all"
      data-aos="zoom-in"
      mob-full
    >
      <div class="solutions__caption section-caption subtitle-2">
        Find the solution to your eCommerce business challenges
      </div>

      <h2 class="solutions__title section-title title-2">
        Discover the causes and solutions to the challenges your eCommerce
        business is facing
      </h2>

      <div class="solutions__subtitle title subtitle-1">Choose problem</div>

      <SolutionList
        class="solutions__list"
        :items="items"
        :mob-items="4"
        @set-active-solution="setActiveSolution"
      />
    </BasePlate>

    <SolutionDetails
      v-else
      class="solutions__details"
      :item="activeSolution"
      :items="otherProblems"
      data-aos="zoom-in"
      @set-active-solution="setActiveSolution"
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
