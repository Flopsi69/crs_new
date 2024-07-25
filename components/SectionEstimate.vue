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

// const form = reactive<any>({
//   conversionRate: 3,
//   users: 100000,
//   averageOrderValue: 100,
//   profitMargin: 25,
// });

const form = reactive<any>({
  conversionRate: '',
  users: '',
  averageOrderValue: '',
  profitMargin: '',
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
      captions: ['Break even point (months)', 'Additional profit in 12 months (assuming cost of service is&nbsp;$20k)']
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
      captions: ['Break even point (months)', 'Additional profit in 12 months (assuming cost of service is&nbsp;$20k)']
    }
  },
});


const expected = ref(5); // procent
const totalLifetimeCost = 20000;
const arpu = 3;

const calculaton = computed(() => {
  if (form.users === '' || form.conversionRate === '' || form.averageOrderValue === '' || form.profitMargin === '') {
    return null;
  }

  const conversionRate = form.conversionRate / 100;
  const profitMargin = form.profitMargin / 100;
  const expectedProcent = expected.value / 100;

  const cvr1 = conversionRate * (1 + (1 * expectedProcent));
  const cvr2 = +((((cvr1-conversionRate)*form.users)*(form.averageOrderValue*profitMargin))).toFixed(2);
  const cvr3 = totalLifetimeCost / cvr2;
  const cvr4 = cvr2 * 12 - totalLifetimeCost;

  const arpu1 = arpu * (expectedProcent + 1) - arpu;
  const arpu2 = arpu1 * form.users * profitMargin;
  const arpu3 = totalLifetimeCost / arpu2;
  const arpu4 = arpu2 * 12 - totalLifetimeCost;

  return {
    cvr: [ cvr1, cvr2, cvr3, cvr4 ],
    arpu: [ arpu1, arpu2, arpu3, arpu4]
  }
})

const isErrorButton = computed(() => {
  return !parseInt(form.users) || !parseInt(form.conversionRate) || !parseInt(form.averageOrderValue) || !parseInt(form.profitMargin);
})

const sliderInput = ref()
const sliderLabel = ref()
const sliderProgress = ref()

onMounted(() => {
  recalculateLabel()
});

watch([activeTab, isShowDetails], () => {
  nextTick(() => {
    recalculateLabel();
  })
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

function recalculateLabel() {
  if (!isShowDetails.value) return;

  const max = +sliderInput.value.max;
  const min = +sliderInput.value.min;

  const range_width = getComputedStyle(sliderInput.value).getPropertyValue('width');
  const label_width = getComputedStyle(sliderLabel.value).getPropertyValue('width');

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const left = expected.value * (num_width / max) - num_label_width / 2 + scale(expected.value, min, max, 5, -20);

  sliderProgress.value.style.width = `${left + 15}px`;
  sliderLabel.value.style.left = `${left}px`;
}

function scale(num: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function calculate() {
  isShowDetails.value = true;
}

function validateInputEstimate(field: keyof typeof form, event: any) {
  const value = event.target.value;
  let cleanedValue = value.replace(/[^0-9]/g, '');

  if (cleanedValue && isNaN(cleanedValue)) {
    cleanedValue = '';
  }

  form[field] = cleanedValue;
}
</script>

<template>
  <BaseSection class="estimate">
    <BasePlate
      mob-full
      class="estimate__head"
    >
      <!-- {{ form }} <br /><br />
      {{ calculaton }} -->
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
            v-model="form.users"
            label="How many users visit your site each month?"
            required
            placeholder="Number of monthly users"
            @input="validateInputEstimate('users', $event)"
            :error="form.users[0] === '0' ? 'The value must be greater than 0' : ''"
            v-bind="{ type: 'number' }"
            id="calc_users"
          />

          <BaseInput
            v-model="form.conversionRate"
            label="What percentage of visitors make a purchase or convert?"
            required
            placeholder="Conversion Rate (CR),%:"
            @input="validateInputEstimate('conversionRate', $event)"
            :error="form.conversionRate[0] === '0' ? 'The value must be greater than 0' : ''"
            id="calc_conversion_rate"
            v-bind="{ type: 'number' }"
          />

          <BaseInput
            v-model="form.averageOrderValue"
            label="What is the average spend per transaction?"
            required
            placeholder="Average order value (AoV), $"
            @input="validateInputEstimate('averageOrderValue', $event)"
            :error="form.averageOrderValue[0] === '0' ? 'The value must be greater than 0' : ''"
            id="calc_aov"
            v-bind="{ type: 'number' }"
          />

          <BaseInput
            v-model="form.profitMargin"
            label="What is your current profit margin?"
            required
            placeholder="Profit margin, %"
            @input="validateInputEstimate('profitMargin', $event)"
            :error="form.profitMargin[0] === '0' ? 'The value must be greater than 0' : ''"
            id="calc_profit_margin"
            v-bind="{ type: 'number' }"
          />
        </div>

        <div class="form__control flex align-center">
          <button
            class="form__btn button button_purple "
            @click.prevent="calculate"
            :disabled="isErrorButton"
          >
            Calculate
          </button>

          <div class="identify">
            <div class="identify__caption text">
              Not sure what your current KPIs are?
            </div>
            <div
              class="identify__link link flex align-center subtitle-3"
              @click="openModal({ info: info, id: 'homepage_calc_2' })"
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
            <span class="toggler__item-desk">Conversion Rate</span>
            <span class="toggler__item-mob">CVR</span>
          </div>
          <div
            class="toggler__item"
            :class="{ active: activeTab === 'arpu'}"
            @click="activeTab = 'arpu'"
          >
            <span class="toggler__item-desk">Average Revenue Per User</span>
            <span class="toggler__item-mob">ARPU</span>
          </div>
        </div>

        <div
          class="calculation"
          v-auto-animate
        >
          <div
            :key="activeTab"
            class="slider"
          >
            <div class="slider__caption">
              {{ config[activeTab].slideCaption }}
            </div>

            <div class="slider__wrap">
              <span
                ref="sliderProgress"
                class="slider__progress"
              ></span>
              <input
                v-model="expected"
                class="slider__input"
                type="range"
                ref="sliderInput"
                max="200"
                min="5"
                step="5"
                @input="recalculateLabel"
              />
              <label
                ref="sliderLabel"
                class="slider__label"
                for="range"
                >{{ expected }}</label
              >
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
              v-if="calculaton"
            >
              <h5 class="metric__title subtitle-1">
                {{ config[activeTab].colLeft.title }}
              </h5>

              <div class="metric__block">
                <div class="metric__caption">
                  {{ config[activeTab].colLeft.captions[0] }}
                </div>
                <div class="metric__value">
                  <template v-if="activeTab === 'cvr'">
                    {{ +(calculaton[activeTab][0] * 100).toFixed(2) }}%
                  </template>
                  <template v-else>
                    ${{ +(calculaton[activeTab][0]).toFixed(2) }}
                  </template>
                </div>
              </div>

              <div class="metric__block border-decor_top">
                <div
                  class="metric__caption"
                  v-html="config[activeTab].colLeft.captions[1]"
                ></div>
                <div class="metric__value">
                  ${{ +(calculaton[activeTab][1]).toFixed(0) }}
                </div>
              </div>
            </BasePlate>

            <BasePlate
              background="white"
              solid-border
              class="metric"
              v-if="calculaton"
            >
              <h3 class="metric__title">
                {{ config[activeTab].colRight.title }}
              </h3>

              <div class="metric__block">
                <div class="metric__caption">
                  {{ config[activeTab].colRight.captions[0] }}
                </div>
                <div class="metric__value">
                  {{ +(calculaton[activeTab][2]).toFixed(1) }}
                </div>
              </div>

              <div class="metric__block border-decor_top">
                <div
                  class="metric__caption"
                  v-html="config[activeTab].colRight.captions[1]"
                ></div>
                <div class="metric__value">
                  ${{ +(calculaton[activeTab][3]).toFixed(0) }}
                </div>
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
  overflow: hidden;
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
    @media(max-width: $sm) {
      background: none;
      margin-bottom: 20px;
      padding: 0;
    }
  }
}

.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media(max-width: $md) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  &__control {
    margin-top: 40px;
    gap: 40px;
    @media(max-width: $sm) {
      display: block;
      margin-top: 20px;
    }
  }

  &__btn {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 230px;
    width: 100%;
    @media(max-width: $sm) {
      max-width: 100%;
    }
  }
}

.identify {
  @media(max-width: $sm) {
    margin-top: 20px;
  }
  &__caption {
    font-size: 14px;
  }

  &__link {
    margin-top: 2px;
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
}

.details {
  &__title {
    margin-top: 24px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    @media(max-width: $sm) {
      margin-top: 20px;
      background: none;
      padding-bottom: 0;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 55px;
    @media(max-width: $md) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media(max-width: $sm) {
      margin-top: 46px;
    }
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
    &-mob {
      display: none;
    }
    @media(max-width: $sm) {
      paadding: 16px 36px;
      font-size: 14px;
      &-desk {
        display: none;
      }
      &-mob {
        display: inline;
      }
    }

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
  &__cta {
    margin-top: 40px;
    @media(max-width: $sm) {
      margin-top: 20px;
    }
  }
}

.metric {
  padding: 30px 35px;
  @media(max-width: $sm) {
    padding: 30px 20px;
  }
  &__title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
    @media(max-width: $sm) {
      font-size: 20px;
      margin-bottom: 20px;
      line-height: normal;
    }
  }
  &__block {
    & + & {
      margin-top: 16px;
      padding-top: 17px;
      @media(max-width: $sm) {
        margin-top: 12px;
        padding-top: 12px;
      }
    }
  }
  &__caption {
    color: $font-secondary;
  }
  &__value {
    font-size: 32px;
    color: $purple;
    margin-top: 8px;
    height: 47px;
  }
}

.slider {
  margin-top: 40px;
  @media(max-width: $sm) {
    margin-top: 20px;
  }
  &__wrap {
    position: relative;
    line-height: 0;
  }
  &__caption {
    font-size: 14px;
  	margin-bottom: 24px;
  }
  &__input {
    max-width: 520px;
    width: 100%;
    border-radius: 50%;
  	-webkit-appearance: none;
    outline: none;
    appearance: none;
    &:active {
	    outline: none;
    }
    &::-webkit-slider-thumb {
      background: #ffffff;
      border-radius: 50%;
      border: 2px solid $border;
      background: $purple;
      cursor: pointer;
      transform: scale(1.2);
      height: 25px;
      width: 25px;
      margin-top: -8px;
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      background: #ffffff;
      border-radius: 50%;
      border: 2px solid $border;
      background: $purple;
        cursor: pointer;
      transform: scale(1.1);
      height: 25px;
      width: 25px;
    }
    &::-ms-thumb {
      background: #ffffff;
      border-radius: 50%;
      border: 2px solid $border;
      background: $purple;
      cursor: pointer;
      height: 25px;
      width: 25px;
      margin: 0;
      box-sizing: border-box;
    }
    &::-webkit-slider-runnable-track {
      transition: 0.2s;
      background-color: #fff;
      border-radius: 16px;
      cursor: pointer;
      width: 100%;
      height: 14px;
      border: 2px solid $border;
    }
    &::-moz-range-track {
      transition: 0.2s;
      background-color: #fff;
      border-radius: 16px;
      cursor: pointer;
      width: 100%;
      height: 14px;
      border: 2px solid $border;
    }
    &::-ms-track {
      transition: 0.2s;
      background-color: #fff;
      border-radius: 16px;
      cursor: pointer;
      width: 100%;
      height: 14px;
      border: 2px solid $border;
    }
    &:active::-webkit-slider-runnable-track {
      // opacity: 0.95;
    }
  }
  &__label {
    position: absolute;
    top: 30px;
    left: 0;
    text-align: center;
    line-height: 1;
    width: 30px;
    font-size: 16px;
    font-weight: 700;
    &:after {
      content: '%';
    }
  }
  &__progress {
    position: absolute;
    top: 50%;
    left: 0;
    height: 14px;
    border: 15px;
    background: $purple;
    width: 50px;
    transform: translateY(-50%);
    border-radius: 15px;
    min-width: 15px;
    pointer-events: none;
    // transition: 0.05s;
  }
}
</style>
