<script lang="ts" setup>
const { openModal } = useModal();

const url = ref('');
const error = ref();
const info = {
  title: 'Estimate the Potential Uplift of Your Key Revenue Metric',
  subtitle: 'On the call, you will receive:',
  list: [
    'An estimated uplift of your key revenue metric that we can commit to',
    'An overview of the most significant CRO/UXO opportunities we see for your site',
    'A quote for a CRO/UXO project tailored to your business',
  ],
  formTitle: 'Schedule Your Results Discussion',
  cta: 'Book a call to get an estimate',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift'
}

function handleOpenModal() {
  error.value = validateInput(url.value, 'url')

  if (!error.value) {
    openModal({ url, info, id: 'homepage_hero_0' });
  }
}
</script>

<template>
  <BaseSection
    background="purple-dark"
    class="hero"
  >
    <div class="row flex-center">
      <div class="info">
        <h2 class="info__subtitle bg--purple subtitle-2">
          Performance-based Conversion&nbsp;Rate&nbsp;Optimization agency
        </h2>

        <h1 class="info__title title-1">
          We grow your revenue metrics. <br />
          You pay only for the actual&nbsp;uplift.
        </h1>

        <HeroChart class="info__chart-mob" />

        <div class="info__form-wrap form-wrap border-decor_top">
          <div class="subtitle-2">
            Get an uplift estimate for your business from our Conversion Rate
            Optimisation service
          </div>
          <div class="form flex">
            <BaseInput
              v-model="url"
              class="form__input"
              required
              placeholder="Type your site's URL"
              icon="fa6-solid:link"
              :error="error"
              @click="error = ''"
              id="hero_url"
            />

            <button
              data-related="hero_url"
              @click="handleOpenModal"
              class="button button_yellow form__button"
            >
              Get an estimate
            </button>
          </div>
        </div>
      </div>

      <HeroChart class="info__chart-desk" />

      <!-- <ClientOnly>
        <Teleport
          to=".info__title"
          :disabled="width > 768"
        >
          <div class="chart text-center">
            <div class="chart__title subtitle-3">
              Our Clients' Average Revenue Uplift in the first 4 months
            </div>

            <div class="chart__image">
              <img
                src="img/heroChart.svg"
                alt="Chart"
              />
            </div>

            <div class="chart__footer">
              *Based on performance data from our CRO projects for clients
            </div>
          </div>
        </Teleport>
      </ClientOnly> -->
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.hero {
  padding: 65px 0 60px;
  @media(max-width: $md) {
    padding: 30px 0 40px;
  }
  @media(max-width: $sm) {
    padding: 14px 0 42px;
  }
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel-left.png') bottom left no-repeat;
    background-size: contain;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      display: none;
    }
  }
}

.row {
  position: relative;
  gap: 54px;
  @media(max-width: $md) {
    display: block;
  }
}

.info {
  &__subtitle {
    display: inline-block;
    padding: 16px 16px 14px;
    border-radius: 20px;
    @media(max-width: $sm) {
      font-size: 16px;
      padding: 12px 12px 10px;
    }
  }
  &__title {
    margin-top: 24px;
    max-width: 600px;
    @media(max-width: $sm) {
      margin-top: 16px;
      font-size: 30px;
      line-height: 38px;
    }
  }
  &__chart {
    &-mob {
      display: none;
    }

    @media(max-width: $md) {
      &-desk {
        display: none;
      }
      &-mob {
        display: block;
        margin-top: 16px;
        width: 100%;
      }
    }
  }
  &__form-wrap {
    margin-top: 24px;
    padding-top: 24px;
    @media(max-width: $sm) {
      padding-top: 0;
      background: none;
    }
  }
}

.form {
  margin-top: 24px;
  gap: 12px;
  height: 60px;
  @media(max-width: $sm) {
    flex-flow: column;
    height: auto;
    gap: 20px;
  }
  &__input {
    flex-grow: 1;
    @media(max-width: $sm) {
      height: 60px;
    }
  }
  &__button {
    font-size: 18px;
    @media(max-width: $sm) {
      height: 60px;
    }
  }
}
</style>
