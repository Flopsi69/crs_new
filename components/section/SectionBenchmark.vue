<script lang="ts" setup>
// import { benchmarks } from '~/configs';
import { useSmoothScroll } from '~/composables/useSmoothScroll';

const { t, locale } = useI18n();

let benchmarks = [];
try {
  const module = await import(`~/locales/${locale.value}/benchmarks.json`);
  benchmarks = module.benchmarks;
} catch (error) {
  console.log(`Failed to load benchmarks for locale ${locale.value}`);
}

const activeIndex = ref<null | number>(null);
const isShowDetails = ref(false);

const scrollToElement = useSmoothScroll()

const currentBenchmark = computed(() => activeIndex.value !== null ? benchmarks[activeIndex.value] : null);

const getTooltipText = (index: number) => {
  return t(`sectionBenchmark.tooltips.tooltip${index}`, 'uknown');
};

// let post = null;

// watchEffect(async () => {

// });

watch(isShowDetails, async (value) => {
  nextTick(() => {
    setTimeout(() => {
      if (value) {
        scrollToElement(`.benchmarks__body`)
      } else {
        scrollToElement(`.benchmarks__body`, 'center')
      }
    }, 300);
  })
});
</script>

<template>
  <BaseSection class="benchmarks">
    <BasePlate
      mob-full
      class="benchmarks__head"
    >
      <div class="benchmarks__head-caption section-caption subtitle-2">
        {{ t('sectionBenchmark.caption') }}
      </div>
      <h2 class="benchmarks__head-title title section-title title-2">
        {{ t('sectionBenchmark.title') }}
      </h2>
    </BasePlate>

    <div
      class="benchmarks__body"
      v-auto-animate
    >
      <BasePlate
        key="choose"
        v-if="!isShowDetails"
        class="choose benchmarks__body-plate"
        mob-full
      >
        <h3 class="choose__subtitle subtitle-2">
          {{ t('sectionBenchmark.choose.subtitle') }}
        </h3>

        <div
          v-if="benchmarks.length"
          class="choose__list list flex"
          data-aos="flip-down"
        >
          <BasePill
            v-for="(item, index) in benchmarks"
            :key="index"
            class="list__item"
            :class="{ 'active': activeIndex === index }"
            @click="activeIndex = activeIndex === index ? null : index"
          >
            {{ item.title }}
          </BasePill>
        </div>

        <button
          class="choose__button button button_purple"
          :disabled="activeIndex === null"
          @click="isShowDetails = true"
          data-aos="fade-up"
        >
          {{ t('sectionBenchmark.choose.button') }}
        </button>
      </BasePlate>

      <BasePlate
        key="details"
        v-if="isShowDetails && currentBenchmark"
        mob-full
        class="details benchmarks__body-plate"
      >
        <BasePill
          class="details__back subtitle-3"
          back
          @click="isShowDetails = false"
        >
          {{ t('sectionBenchmark.details.back') }}
        </BasePill>

        <h3 class="details__title subitlte-2 border-decor_bottom">
          {{ t('sectionBenchmark.details.title', { title: currentBenchmark.title }) }}
        </h3>
        <div
          v-if="currentBenchmark.metrics?.length"
          class="details__info"
        >
          <div
            v-for="(metric, index) in currentBenchmark.metrics"
            :key="metric.title"
            class="metric"
          >
            <div class="metric__title">
              {{ metric.title }}
              <BaseTooltip>
                {{ getTooltipText(index + 1) }}
              </BaseTooltip>
            </div>
            <div class="metric__value">{{ metric.value }}</div>
          </div>
        </div>

        <CtaHelp class="details__cta" />
      </BasePlate>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.benchmarks {
  &__head {
    padding: 40px 60px;
    @media(max-width: $sm) {
      padding: 20px;
    }
    &-caption {
      @media(max-width: $sm) {
        font-size: 16px;
      }
    }
  }
  &__body {
    margin-top: 20px;
    @media(max-width: $sm) {
      margin-top: 12px;
    }
    &-plate {
      padding: 40px 60px;
      @media(max-width: $sm) {
        padding: 20px;
      }
    }
  }
}

.choose {
  &__button {
    margin-top: 40px;
    min-width: 295px;
    @media(max-width: $sm) {
      margin-top: 20px;
      max-width: 100%;
      min-width: auto;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  top: -1px;
  left: 1px;
}

.list {
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 12px;
  @media(max-width: $sm) {
      margin-top: 20px;
    }
  &__item {
    font-size: 14px;
    padding: 12px 16px 10px;
    min-height: 45px;
  }
}

.details {
  &__title {
    margin-top: 40px;
    padding-bottom: 16px;
    @media(max-width: $sm) {
      margin-top: 20px;
      background: none;
      padding-bottom: 0;
    }
  }

  &__info {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px 80px;
    @media(max-width: $sm) {
      margin-top: 20px;
      gap: 20px;
    }
  }

  &__cta {
    margin-top: 40px;
    @media(max-width: $sm) {
      margin-top: 20px;
    }
  }
}

.metric {
  max-width: 230px;
  width: 100%;
  &__value {
    color: $purple;
    font-size: 32px;
    margin-top: 12px;
  }
}
</style>
