<script lang="ts" setup>
// import { processSteps as steps } from '~/configs';

const { locale, t } = useI18n();

// let steps = [];

// try {
//   const module = await import(`~/i18n/locales/${locale.value}/processSteps.json`);
//   steps = module.steps;
// } catch (error) {
//   console.log(`Failed to load steps for locale ${locale.value}`);
// }

 const { data: steps } = await useAsyncData('i18n-locale-steps', async () => {
    const json = await import(`~/i18n/locales/${locale.value}/processSteps.json`)

    return json.default.steps
  })
</script>

<template>
  <BaseSection
    id="our-scientific-cro_uxo-process"
    class="process"
  >
    <h2 class="section-title title-2">
      {{ t('sectionProcess.title') }}
    </h2>

    <!-- TODO make components -->
    <BasePlate class="steps">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
        :data-aos="index % 2 ? 'fade-up-left' : 'fade-up-right'"
      >
        <div class="step__head flex align-start">
          <div class="step__num bg--purple">
            {{ t('sectionProcess.step', {number: index + 1}) }}
          </div>
          <h3 class="step__title subtitle-1">
            <span class="bg--purple-light">{{ step.title }}</span>
          </h3>
        </div>

        <div class="step__body flex align-start">
          <BasePlate
            background="white"
            class="step__plate"
          >
            <div class="step__plate-head flex align-center">
              <img src="img/purpose.svg" />
              <div class="step__plate-title subtitle-1">
                {{t('sectionProcess.purpose')}}
              </div>
            </div>

            <div class="step__plate-body text color-secondary">
              {{ step.purpose }}
            </div>
          </BasePlate>

          <BasePlate
            background="white"
            class="step__plate"
          >
            <div class="step__plate-head flex align-center">
              <img src="img/methodology.svg" />
              <div class="step__plate-title subtitle-1">
                {{ t('sectionProcess.methodology') }}
              </div>
            </div>

            <div class="step__plate-body text color-secondary list-brand">
              <div
                v-for="(method, index) in step.methodology"
                :key="index"
                class="list-brand__item"
              >
                {{ method }}
              </div>
            </div>
          </BasePlate>
        </div>
      </div>
    </BasePlate>
  </BaseSection>
</template>

<style lang="scss" scoped>
.process {
  @media(max-width: $sm) {
    background-color: $bg--purple-light;
    padding: 42px 0;
  }
}

.steps {
  padding: 60px 100px;
  margin-top: 24px;
  display: grid;
  gap: 40px;
  @media(max-width: $md) {
    padding: 30px;
  }
  @media(max-width: $sm) {
    padding: 0;
    overflow: visible;
    border-radius: 0;
    gap: 24px;
  }
}

.step {
  &__head {
    gap: 16px;
    @media(max-width: $sm) {
      gap: 12px;
    }
  }

  &__num {
    color: #FFF;
    font-size: 14px;
    border-radius: 100px;
    padding: 6px 12px;
    flex-shrink: 0;
  }

  &__title {
    position: relative;
    flex-grow: 1;
    @media(max-width: $sm) {
      font-size: 20px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 15px;
      background-color: $border;
      height: 1px;
      @media(max-width: $sm) {
        display: none;
      }
    }

    span {
      position: relative;
      padding-right: 16px;
      @media(max-width: $sm) {
        padding-right: 0;
      }
    }
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 24px;
    @media(max-width: $sm) {
      grid-template-columns: 1fr;
      margin-top: 12px;
    }
  }

  &__plate {
    padding: 24px;
    @media(max-width: $sm) {
      padding: 16px;
    }

    &-head {
      gap: 12px;
    }

    &-title {
      @media(max-width: $sm) {
        font-size: 20px;
      }
    }

    &-icon {
      font-size: 40px;
      line-height: 0;
    }

    &-body {
      margin-top: 12px;
    }
  }
}
</style>
