<script lang="ts" setup>
const { openModal } = useModal();

const info = {
  title: 'Get expert help in calculating your KPIs and benchmarking your performance',
  subtitle: 'On the call, we will:',
  list: [
    'Listen to your specific business needs and challenges',
    'Create a plan to accurately calculate your key performance indicators (KPIs)',
    'Give an overview of the most significant CRO/UXO opportunities we see for your site',
  ],
  formTitle: 'Schedule Your Consultation',
  cta: 'Get Help in KPI Calculation',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift'
}

const activeTab = ref<'cvr' | 'arpu'>('cvr');
const isShowDetails = ref(false);

const form = reactive<any>({
  conversionRate: 3,
  users: 100000,
  averageOrderValue: 100,
  profitMargin: 25,
});

const config = reactive({
  cvr: {
    slideCaption: 'Expected conversion rate increase (%)',
    colLeft: {
      title: 'Understand the direct impact of CRO  on your bottom line',
      captions: ['New conversion rate after CRO project', 'Additional monthly profit as a result of CRO improvement ($)']
    },
    colRight: {
      title: 'Estimate your ROI from collaboration with ConversionRate.Store',
      captions: ['Break even point (month)', 'Additional profit in 12 months ($)']
    }
  },
  arpu: {
    slideCaption: 'Sought after ARPU increase (%)',
    colLeft: {
      title: 'Understand the direct impact of CRO on your bottom line',
      captions: ['New average revenue per user after CRO project', 'Additional monthly profit as a result of CRO improvement ($)']
    },
    colRight: {
      title: 'Estimate your ROI from collaboration with ConversionRate.Store',
      captions: ['Break even point (month)', 'Additional profit in 12 months ($)']
    }
  },
});

const expected = ref(0.05); // procent
const totalLifetimeCost = 20000;
const arpu = 3;

const calculaton = computed(() => {
  if (form.users === '' || form.conversionRate === '' || form.averageOrderValue === '' || form.profitMargin === '') {
    return null;
  }

  const conversionRate = form.conversionRate / 100;
  const profitMargin = form.profitMargin / 100;

  const cvr1 = conversionRate * (1 + (1 * expected.value));
  const cvr2 = +((((cvr1-conversionRate)*form.users)*(form.averageOrderValue*profitMargin))).toFixed(2);
  const cvr3 = totalLifetimeCost / cvr2;
  const cvr4 = cvr2 * 12 - totalLifetimeCost;

  const arpu1 = arpu * (expected.value + 1) - arpu;
  const arpu2 = arpu1 * form.users * profitMargin;
  const arpu3 = totalLifetimeCost / arpu2;
  const arpu4 = arpu2 * 12 - totalLifetimeCost;

  return {
    cvr: [ cvr1, cvr2, cvr3, cvr4 ],
    arpu: [ arpu1, arpu2, arpu3, arpu4]
  }
})


const scrollToElement = useSmoothScroll()

watch(isShowDetails, async (value) => {
  nextTick(() => {
    setTimeout(() => {
      if (value) {
        scrollToElement(`.estimate__body`)
      } else {
        scrollToElement(`.estimate__body`, 'center')
      }
    }, 300);
  })
});


function calculate() {
  isShowDetails.value = true;
}

function validateInput(field: keyof typeof form, event: any) {
  const value = event.target.value;
  const cleanedValue = value.replace(/[^0-9]/g, '');

  form[field] = cleanedValue;
}
</script>

<template>
  <BaseSection class="estimate">
    <BasePlate
      mob-full
      class="estimate__head"
    >
      {{ form }} <br /><br />
      {{ calculaton }}
      <h3 class="estimate__head-caption section-caption subtitle-2">
        Use our calculator to see how CRO improvements can impact your bottom
        line
      </h3>
      <h2 class="estimate__head-title section-title title-2">
        Estimate your profit gains and ROI from the CRO project
      </h2>
    </BasePlate>

    <div
      class="estimate__body"
      v-auto-animate
    >
      <BasePlate
        v-if="!isShowDetails"
        key="inputs"
        class="choose estimate__body-plate"
        mob-full
      >
        <h4 class="choose__title subtitle-2 border-decor_bottom">
          Provide your current metrics
        </h4>

        <div class="form">
          <BaseInput
            v-model="form.conversionRate"
            label="What percentage of visitors make a purchase or convert?"
            required
            placeholder="Conversion Rate (CR),%:"
          />

          <BaseInput
            v-model="form.users"
            label="How many users visit your site each month?"
            required
            placeholder="Number of monthly users"
            @input="validateInput('users', $event)"
          />

          <BaseInput
            v-model="form.averageOrderValue"
            label="What is the average spend per transaction?"
            required
            placeholder="Average order value (AoV), $"
          />

          <BaseInput
            v-model="form.profitMargin"
            label="What is your current profit margin?"
            required
            placeholder="Profit margin, %"
          />
        </div>

        <div class="form__control flex align-center">
          <button
            class="form__btn button button_purple "
            @click.prevent="calculate"
          >
            Calculate
          </button>

          <div class="identify">
            <div class="identify__caption text">
              Not sure what your current KPIs are?
            </div>
            <div
              class="identify__link link flex align-center subtitle-3"
              @click="openModal({ info: info })"
            >
              Contact us and we will help to identify them
              <Icon
                name="line-md:chevron-small-right"
                size="24"
              />
            </div>
          </div>
        </div>
      </BasePlate>

      <BasePlate
        v-else
        key="details"
        class="details estimate__body-plate"
        mob-full
      >
        <BasePill
          class="details__back subtitle-3"
          back
          @click="isShowDetails = false"
        >
          Back
        </BasePill>

        <h3 class="details__title subtitle-2 border-decor_bottom">
          Adjust expected increase in KPIs using sliders
        </h3>

        <div class="toggler">
          <div
            class="toggler__item"
            :class="{active: activeTab === 'cvr'}"
            @click="activeTab = 'cvr'"
          >
            Conversion Rate
          </div>
          <div
            class="toggler__item"
            :class="{ active: activeTab === 'arpu'}"
            @click="activeTab = 'arpu'"
          >
            Average Revenue Per User
          </div>
        </div>

        <div
          class="calculation"
          v-auto-animate
        >
          <div
            :key="activeTab"
            class="calculation__slider"
          >
            <div class="slider__caption">
              {{ config[activeTab].slideCaption }}
            </div>

            <!-- <SliderRoot
              v-model="sliderValue"
              class="SliderRoot"
              :max="100"
              :step="1"
            >
              <SliderTrack class="SliderTrack">
                <SliderRange class="SliderRange" />
              </SliderTrack>
              <SliderThumb
                class="SliderThumb"
                aria-label="Volume"
              />
            </SliderRoot> -->
          </div>

          <div
            :key="activeTab"
            class="details__row"
          >
            <BasePlate
              background="white"
              solid-border
              class="metric"
            >
              <h5 class="metric__title subtitle-1">
                {{ config[activeTab].colLeft.title }}
              </h5>

              <div class="metric__block">
                <div class="metric__caption">
                  {{ config[activeTab].colLeft.captions[0] }}
                </div>
                <div class="metric__value">3.5%</div>
              </div>

              <div class="metric__block border-decor_top">
                <div class="metric__caption">
                  {{ config[activeTab].colLeft.captions[1] }}
                </div>
                <div class="metric__value">$3700</div>
              </div>
            </BasePlate>

            <BasePlate
              background="white"
              solid-border
              class="metric"
            >
              <h3 class="metric__title">
                {{ config[activeTab].colRight.title }}
              </h3>

              <div class="metric__block">
                <div class="metric__caption">
                  {{ config[activeTab].colRight.captions[1] }}
                </div>
                <div class="metric__value">5.3</div>
              </div>

              <div class="metric__block border-decor_top">
                <div class="metric__caption">
                  {{ config[activeTab].colRight.captions[1] }}
                </div>
                <div class="metric__value">$25 000</div>
              </div>
            </BasePlate>
          </div>

          <CtaHelp
            type="calc"
            class="calculation__cta"
          />
        </div>
      </BasePlate>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.estimate {
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
  &__title {
    padding-bottom: 16px;
    margin-bottom: 24px;
  }
}

.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  &__control {
    margin-top: 40px;
    gap: 40px;
  }

  &__btn {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 230px;
    width: 100%;
  }
}

.identify {
  &__caption {
    font-size: 14px;
  }

  &__link {
    margin-top: 2px;
  }
}

.details {
  &__title {
    margin-top: 24px;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 40px;
  }
}

.toggler {
  display: flex;
  border-bottom: 1px solid $border;
  &__item {
    position: relative;
    padding: 12px 60px;
    font-size: 18px;
    color: $font-secondary;
    cursor: pointer;
    transition: 0.3s;
    &:before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $purple;
      opacity: 0;
      transition: 0.3s;
    }

    @media(hover: hover) {
      &:hover {
        color: $purple;
        &:before {
          opacity: 0.5;
        }
      }
    }

    &.active {
      color: $purple;
      background: $gradient-light-smooth;
      &:before {
        opacity: 1;
      }
    }
  }
}

.calculation {
  &__slider {
    margin-top: 40px;
  }
  &__cta {
    margin-top: 40px;
  }
}

.metric {
  padding: 30px 40px;
  &__title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }
  &__block {
    & + & {
      margin-top: 16px;
      padding-top: 17px;
    }
  }
  &__caption {
    color: $font-secondary;
  }
  &__value {
    font-size: 32px;
    color: $purple;
    margin-top: 8px;
  }
}

.slider {
  &__caption {
    font-size: 14px;
  }
}
</style>
