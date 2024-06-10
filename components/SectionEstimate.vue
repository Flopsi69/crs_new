<script lang="ts" setup>
const step = ref(1);
const activeTab = ref('cvr');

const stepTitle = computed(() => {
  return step.value === 1
    ? 'Provide your current metrics'
    : 'Adjust expected increase in KPIs using sliders ';
});
</script>

<template>
  <BaseSection class="estimate">
    <div class="head plate bg--purple-light">
      <h3 class="caption">
        Use our calculator to see how CRO improvements can impact your bottom
        line
      </h3>
      <h2 class="title section-title">
        Estimate your profit gains and ROI from the CRO project
      </h2>
    </div>

    <div class="step plate bg--purple-light">
      <div class="step__header border-decor_bottom">
        <div class="step__num">Step {{ step }}/2</div>
        <h3 class="step__title section-caption">{{ stepTitle }}</h3>
      </div>

      <div class="step__body">
        <form
          v-show="step === 1"
          class="form"
        >
          <div class="form__groups">
            <div class="group">
              <label class="label">
                How many users visit your site each month?
              </label>
              <input
                class="input"
                type="text"
                placeholder="Number of monthly users"
              />
            </div>

            <div class="group">
              <label class="label">
                What percentage of visitors make a purchase or convert?
              </label>
              <input
                class="input"
                type="text"
                placeholder="Conversion Rate (CR),%:"
              />
            </div>

            <div class="group">
              <label class="label">
                What is the average spend per transaction?
              </label>
              <input
                class="input"
                type="text"
                placeholder="Average order value (AoV), $"
              />
            </div>

            <div class="group">
              <label class="label"> What is your current profit margin? </label>
              <input
                class="input"
                type="text"
                placeholder="Profit margin, %"
              />
            </div>
          </div>

          <div class="form__control flex align-center">
            <button
              class="button button_purple form__btn"
              @click.prevent="step++"
            >
              Next
            </button>

            <div class="identify">
              <div class="identify__caption">
                Not sure what your current KPIs are?
              </div>
              <div class="identify__link flex align-center">
                Contact us and we will help to identify them
                <Icon
                  name="line-md:chevron-small-right"
                  size="24"
                />
              </div>
            </div>
          </div>
        </form>

        <div
          v-show="step === 2"
          class="tabs"
        >
          <div class="toggler">
            <div
              class="toggler__item"
              :class="{active: activeTab === 'cvr'}"
              @click="activeTab = 'cvr'"
            >
              CVR
            </div>
            <div
              class="toggler__item"
              :class="{active: activeTab === 'arpu'}"
              @click="activeTab = 'arpu'"
            >
              ARPU
            </div>
          </div>

          <div
            v-if="activeTab === 'cvr'"
            class="tab"
          >
            <div class="tab__block slider">
              <div class="slider__caption">
                Expected conversion rate increase (%)
              </div>
            </div>

            <div class="tab__block row">
              <div class="plate row__col metric bg-white border">
                <h3 class="metric__title">
                  Understand the direct impact of CRO on your bottom line
                </h3>

                <div class="metric__block">
                  <div class="metric__caption">
                    New conversion rate after CRO project
                  </div>
                  <div class="metric__value">3.5%</div>
                </div>

                <div class="metric__block border-decor_top">
                  <div class="metric__caption">
                    Additional monthly profit as a result of CRO improvement ($)
                  </div>
                  <div class="metric__value">$3700</div>
                </div>
              </div>

              <div class="plate row__col metric bg-white border">
                <h3 class="metric__title">
                  Estimate your ROI from collaboration with ConversionRate.Store
                </h3>

                <div class="metric__block">
                  <div class="metric__caption">Break even point (month)</div>
                  <div class="metric__value">5.3</div>
                </div>

                <div class="metric__block border-decor_top">
                  <div class="metric__caption">
                    Additional profit in 12 months ($)
                  </div>
                  <div class="metric__value">$25 000</div>
                </div>
              </div>
            </div>

            <CtaHelp class="tab__block" />
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.head {
  padding: 40px 60px;
}

.step {
  padding: 24px 60px 40px;
  margin-top: 20px;
}

.title {
  margin-top: 12px;
}

.step {
  &__header {
    padding-bottom: 17px;
    margin-bottom: 24px;
  }
  &__num {
    display: inline-block;
    color: $font-secondary;
    font-size: 14px;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid $border;
  }
  &__title {
    margin-top: 12px;
  }
}

.form {
  &__groups {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  &__control {
    margin-top: 40px;
    gap: 40px;
  }

  &__btn {
  max-width: 300px;
    width: 100%;
  }
}

.identify {
  &__caption {
    color: $font-secondary;
    font-size: 14px;
    font-weight: 400;
  }

  &__link {
    margin-top: 2px;
    color: $purple;
    font-size: 18px;
    text-decoration-line: underline;
    text-underline-offset: 3px;
    gap: 10px;

    &:deep(svg) {
      font-size: 10px;
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

.tab {
  &__block {
    margin-top: 40px;
  }
}

.slider {
  &__caption {
    font-size: 14px;
  }
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  &__col {
    padding: 30px 40px;
  }
}

.metric {
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
</style>
