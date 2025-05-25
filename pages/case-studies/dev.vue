<script lang="ts" setup>
const list = reactive({
  dark: false,
  light: false,
  numeric: true,
  title: 'List example',
  items: [
    {
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
      title: 'Next without title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    }
  ]
});

const metric = reactive({
  dark: false,
  light: false,
  description: 'Using dropdown boxes to control user awareness & engagement — creating personalized customer journeys that increase ARPU & CVR.',
  metrics: [
    {
      label: 'Label 1',
      value: '+11.11%'
    },
    {
      label: 'Label 2',
      value: '+11.11%'
    }
  ]
});

const note = reactive({
  dark: false,
  light: false,
  title: 'For the average store?',
  description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
  icon: 'alert', // alert | quote
  iconSize: 'big', // big | small
});

const compare = ref({
  inset: false
})

const increase = reactive({
  label: 'in average revenue per user (ARPU)',
  value: '172.34',
});


const breadcrumbs = reactive([
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Case Studies',
    href: '/case-studies'
  },
  {
    text: 'case-study',
    href: ''
  }
]);

const banner = ref(false)
</script>

<template>
  <main
    class="case"
    :class="{'case_banner': banner }"
  >
    <div class="container container_narrow">
      <BaseBreadcrumbs :items="breadcrumbs" />

      <button
        class="temp button button_yellow"
        :class="banner ? 'button_yellow' : 'button_purple'"
        @click.prevent="banner = !banner"
      >
        Toggle template
      </button>

      <div
        v-if="banner"
        class="case__head"
      >
        <h1 class="case__title case__title_top title-1">
          Increase
          <strong class="color-purple">Conversion Rates by 172%</strong> <br />
          for Online Yoga Subscription Plans
        </h1>

        <UiImage
          class="case__image"
          src="/images/temp-banner.jpg"
        />
      </div>

      <!-- Base header -->
      <div class="case__inner">
        <div class="case__content post__section">
          <BasePlate
            class="case__banner banner"
            solid-border
          >
            <div class="banner__logo">
              <img src="/images/logo/comodo.svg" />
            </div>
            <div class="banner__metrics flex-center">
              <div class="banner__metric">
                <div class="banner__metric-value">+172.72%</div>
                <div class="banner__metric-label">CVR</div>
              </div>

              <div class="banner__metric">
                <div class="banner__metric-value">+325.79%</div>
                <div class="banner__metric-label">ARPU</div>
              </div>

              <div class="banner__metric">
                <div class="banner__metric-value">+56.13%</div>
                <div class="banner__metric-label">ARPPU</div>
              </div>
            </div>
          </BasePlate>

          <div class="case__reading reading text color-secondary">
            <img
              class="reading__icon"
              src="@/assets/icons/clock.svg"
            />
            <span class="reading__value">
              Reading time: <strong>8 min</strong>
            </span>
          </div>

          <h1
            v-if="!banner"
            class="case__title title-1"
          >
            <strong>H1 Main title on Desktop</strong> Two text styles Lorem
            ipsum dolor sit amet.
          </h1>
        </div>

        <BasePlate
          class="case__aside aside"
          background="purple-dark"
        >
          <h3 class="aside__title subtitle-1">
            Estimate uplift from a performance-based CRO project for your
            business
          </h3>
          <div class="aside__description text">
            We will also provide you with 3 CRO hypotheses for your business for
            free if you&nbsp;qualify
          </div>
          <button class="aside__button button button_yellow subtitle-3">
            Estimate your uplift
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="#2B2B2B"
            >
              <g clip-path="url(#clip0_521_1825)">
                <path
                  d="M12.2855 6.00633L7.59856 10.5891C7.31259 10.8687 6.84882 10.8687 6.56286 10.5891C6.27684 10.3095 6.27684 9.85611 6.56286 9.57644L9.99961 6.21605H1.23233C0.827909 6.21605 0.5 5.89543 0.5 5.49999C0.5 5.10461 0.827909 4.78393 1.23233 4.78393H9.99961L6.56298 1.42355C6.27696 1.14388 6.27696 0.69053 6.56298 0.410866C6.70593 0.271148 6.89341 0.201146 7.08082 0.201146C7.26824 0.201146 7.45566 0.271148 7.59867 0.410866L12.2855 4.99365C12.5715 5.27332 12.5715 5.72667 12.2855 6.00633Z"
                />
              </g>
            </svg>
          </button>
        </BasePlate>
      </div>

      <!-- Text, image title -->
      <div class="case__inner post">
        <div class="case__content post__section">
          <section class="post__section">
            <h2 class="post__title title-3 text-center">
              <span>Title, Subtitle, Text, Image (examples)</span>
            </h2>

            <h3 class="post__subtitle subtitle-2">Subtitle example</h3>

            <p>
              Lorem ipsum dolor sit amet
              <strong
                >consectetur adipisicing elit. Minus incidunt ducimus
                explicabo</strong
              >, molestias quas, amet dignissimos accusamus assumenda
              repudiandae quaerat dolor quo facere pariatur dolorem possimus non
              magnam, quasi quam!
            </p>

            <p>
              Lorem ipsum dolor sit amet
              <strong
                >consectetur adipisicing elit. Minus incidunt ducimus
                explicabo</strong
              >, molestias quas, amet dignissimos accusamus assumenda
              repudiandae quaerat dolor quo facere pariatur dolorem possimus non
              magnam, quasi quam!
            </p>

            <h3 class="post__subtitle subtitle-2">Image example</h3>

            <UiImage src="/images/temp-banner.jpg" />
          </section>
        </div>
      </div>

      <!-- Ui List -->
      <div class="case__inner">
        <div class="case__content post__section">
          <h2 class="post__title title-3 text-center">
            <span>Ui List</span>
          </h2>
          <UiList v-bind="list" />
        </div>

        <BasePlate
          background="white"
          solid-border
          class="case__aside aside aside_component"
        >
          <h3 class="aside__title subtitle-1 component__title">
            <span class="color-purple">UI List</span> settings
          </h3>

          <div class="component__block">
            <BaseCheckbox
              v-model="list.dark"
              label="isDark"
              @click="!list.dark ? list.light = false : ''"
            />

            <BaseCheckbox
              v-model="list.light"
              label="isLight"
              @click="!list.light ? list.dark = false : ''"
            />
          </div>
          <div class="component__block">
            <BaseCheckbox
              v-model="list.numeric"
              label="isNumeric"
            />
          </div>
          <div class="component__block">
            <BaseInput
              v-model="list.title"
              placeholder="text"
              label="List title:"
              small
            />
          </div>
        </BasePlate>
      </div>

      <!-- Ui Note -->
      <div class="case__inner">
        <div class="case__content post__section">
          <h2 class="post__title title-3 text-center">
            <span>Ui Note</span>
          </h2>

          <UiNote v-bind="note" />
        </div>

        <BasePlate
          background="white"
          solid-border
          class="case__aside aside aside_component"
        >
          <h3 class="aside__title subtitle-1 component__title">
            <span class="color-purple">UI Note</span> settings
          </h3>

          <div class="component__block">
            <BaseCheckbox
              v-model="note.dark"
              label="isDark"
              @click="!note.dark ? note.light = false : ''"
            />

            <BaseCheckbox
              v-model="note.light"
              label="isLight"
              @click="!note.light ? note.dark = false : ''"
            />
          </div>
          <div class="component__block">
            <BaseCheckbox
              v-model="note.icon"
              value="alert"
              label="Alert icon"
            />

            <BaseCheckbox
              v-model="note.icon"
              value="quote"
              label="Quote icon"
            />
          </div>
          <div
            v-if="note.icon"
            class="component__block"
          >
            <BaseCheckbox
              v-model="note.iconSize"
              value="big"
              label="Big icon"
              default-value="big"
            />

            <BaseCheckbox
              v-model="note.iconSize"
              value="small"
              label="Small icon"
              default-value="small"
            />
          </div>
          <div class="component__block">
            <BaseInput
              v-model="note.title"
              placeholder="text"
              label="Note title:"
              small
            />
          </div>
        </BasePlate>
      </div>

      <!-- Ui Metric -->
      <div class="case__inner">
        <div class="case__content post__section">
          <h2 class="post__title title-3 text-center">
            <span>Ui Metrics</span>
          </h2>

          <UiMetric v-bind="metric" />
        </div>

        <BasePlate
          background="white"
          solid-border
          class="case__aside aside aside_component"
        >
          <h3 class="aside__title subtitle-1 component__title">
            <span class="color-purple">UI Metrics</span> settings
          </h3>

          <div class="component__block">
            <BaseCheckbox
              v-model="metric.dark"
              label="isDark"
              @click="!metric.dark ? metric.light = false : ''"
            />

            <BaseCheckbox
              v-model="metric.light"
              label="isLight"
              @click="!metric.light ? metric.dark = false : ''"
            />
          </div>

          <div class="component__block">
            <BaseCheckbox
              v-model="metric.description"
              label="Is active description"
              value="Using dropdown boxes to control user awareness & engagement — creating personalized customer journeys that increase ARPU & CVR."
              @click="metric.description"
            />
          </div>
          <!-- <div class="component__block">
            <BaseInput
              v-model="metric.description"
              placeholder="text"
              label="Metrics description"
              small
            />
          </div> -->
          <div class="component__block">
            <BaseInput
              v-model="metric.metrics[0].label"
              placeholder="label"
              label="Metric 1"
              small
            />
            <hr />
            <BaseInput
              v-model="metric.metrics[0].value"
              placeholder="value"
              small
            />
          </div>
          <div class="component__block">
            <BaseInput
              v-model="metric.metrics[1].label"
              placeholder="label"
              label="Metric 2"
              small
            />
            <hr />
            <BaseInput
              v-model="metric.metrics[1].value"
              placeholder="value"
              small
            />
          </div>
        </BasePlate>
      </div>

      <!-- Ui Compare Image -->
      <div class="case__inner">
        <div class="case__content post__section">
          <h2 class="post__title title-3 text-center">
            <span>Ui Compare Images</span>
          </h2>

          <UiCompare v-bind="compare" />
        </div>

        <BasePlate
          background="white"
          solid-border
          class="case__aside aside aside_component"
        >
          <h3 class="aside__title subtitle-1 component__title">
            <span class="color-purple">UI Compare</span> settings
          </h3>

          <div class="component__block">
            <BaseCheckbox
              v-model="compare.inset"
              label="Toggler inset labels"
            />
          </div>
        </BasePlate>
      </div>

      <!-- Ui Increase -->
      <div class="case__inner">
        <div class="case__content post__section">
          <h2 class="post__title title-3 text-center">
            <span>Ui Increase</span>
          </h2>

          <UiIncrease v-bind="increase" />
        </div>

        <BasePlate
          background="white"
          solid-border
          class="case__aside aside aside_component"
        >
          <h3 class="aside__title subtitle-1 component__title">
            <span class="color-purple">UI Increase</span> settings
          </h3>

          <div class="component__block">
            <BaseInput
              v-model="increase.label"
              placeholder="Label"
              label="Label:"
              small
            />
          </div>
          <div class="component__block">
            <BaseInput
              v-model="increase.value"
              placeholder="Value"
              label="Value"
              small
            />
          </div>
        </BasePlate>
      </div>

      <!-- Source -->
      <div class="case__inner results-wrap">
        <div class="case__content post__section">
          <div class="results post">
            <section class="post__section">
              <h2 class="post__title title-3">
                <span style="padding-left: 0;">Results example</span>
              </h2>

              <h3 class="post__subtitle subtitle-2">Subtitle example</h3>

              <p>
                Lorem ipsum dolor sit amet
                <strong
                  >consectetur adipisicing elit. Minus incidunt ducimus
                  explicabo</strong
                >, molestias quas, amet dignissimos accusamus assumenda
                repudiandae quaerat dolor quo facere pariatur dolorem possimus
                non magnam, quasi quam!
              </p>

              <p>
                Lorem ipsum dolor sit amet
                <strong
                  >consectetur adipisicing elit. Minus incidunt ducimus
                  explicabo</strong
                >, molestias quas, amet dignissimos accusamus assumenda
                repudiandae quaerat dolor quo facere pariatur dolorem possimus
                non magnam, quasi quam!
              </p>

              <h3 class="post__subtitle subtitle-2">Image example</h3>

              <UiImage src="/images/temp-banner.jpg" />
            </section>

            <section class="post__section">
              <UiList v-bind="list" />
              <UiNote v-bind="note" />
              <UiMetric v-bind="metric" />
              <UiCompare v-bind="compare" />
              <UiCompare2 v-bind="compare" />
              <UiIncrease v-bind="increase" />
            </section>
          </div>
        </div>

        <BasePlate
          class="case__aside aside"
          background="purple-dark"
        >
          <h3 class="aside__title subtitle-1">
            Estimate uplift from a performance-based CRO project for your
            business
          </h3>
          <div class="aside__description text">
            We will also provide you with 3 CRO hypotheses for your business for
            free if you&nbsp;qualify
          </div>
          <button class="aside__button button button_yellow subtitle-3">
            Estimate your uplift
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="#2B2B2B"
            >
              <g clip-path="url(#clip0_521_1825)">
                <path
                  d="M12.2855 6.00633L7.59856 10.5891C7.31259 10.8687 6.84882 10.8687 6.56286 10.5891C6.27684 10.3095 6.27684 9.85611 6.56286 9.57644L9.99961 6.21605H1.23233C0.827909 6.21605 0.5 5.89543 0.5 5.49999C0.5 5.10461 0.827909 4.78393 1.23233 4.78393H9.99961L6.56298 1.42355C6.27696 1.14388 6.27696 0.69053 6.56298 0.410866C6.70593 0.271148 6.89341 0.201146 7.08082 0.201146C7.26824 0.201146 7.45566 0.271148 7.59867 0.410866L12.2855 4.99365C12.5715 5.27332 12.5715 5.72667 12.2855 6.00633Z"
                />
              </g>
            </svg>
          </button>
        </BasePlate>
      </div>

      <div class="navigation">
        <button class="navigation__arrow button button_trans-purple subtitle-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="#5954A0"
          >
            <path
              d="M6.03204e-07 8.01784C6.17238e-07 7.69677 0.105572 7.41137 0.316716 7.19732L7.07331 0.347826C7.4956 -0.115942 8.2346 -0.115942 8.65689 0.347826C9.11437 0.77592 9.11437 1.52508 8.65689 1.95318L2.70968 8.01784L8.65689 14.0468C9.11437 14.4749 9.11437 15.2241 8.65689 15.6522C8.2346 16.1159 7.4956 16.1159 7.07331 15.6522L0.316716 8.80267C0.105572 8.58863 5.90728e-07 8.30323 6.03204e-07 8.01784Z"
            />
          </svg>
          Previous case study
        </button>

        <button class="navigation__arrow button button_trans-purple subtitle-3">
          Next case study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="#5954A0"
          >
            <path
              d="M9.5 7.98216C9.5 8.30323 9.39443 8.58863 9.18328 8.80268L2.42669 15.6522C2.0044 16.1159 1.2654 16.1159 0.843108 15.6522C0.385631 15.2241 0.385631 14.4749 0.843108 14.0468L6.79032 7.98216L0.843109 1.95318C0.385631 1.52508 0.385631 0.77592 0.843109 0.347827C1.2654 -0.115942 2.0044 -0.115942 2.42669 0.347827L9.18328 7.19732C9.39443 7.41137 9.5 7.69677 9.5 7.98216Z"
            />
          </svg>
        </button>

        <button
          class="navigation__up button button_trans-purple subtitle-3 flex-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#5954A0"
          >
            <path
              d="M13.9822 8.5C14.3032 8.5 14.5886 8.60557 14.8027 8.81672L21.6522 15.5733C22.1159 15.9956 22.1159 16.7346 21.6522 17.1569C21.2241 17.6144 20.4749 17.6144 20.0468 17.1569L13.9822 11.2097L7.95318 17.1569C7.52508 17.6144 6.77592 17.6144 6.34783 17.1569C5.88406 16.7346 5.88406 15.9956 6.34783 15.5733L13.1973 8.81672C13.4114 8.60557 13.6968 8.5 13.9822 8.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.temp {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
  border-radius: 25px;
  width: 120px;
  padding: 0;
  font-size: 10px;
  min-height: 30px;
}

.component {
  &__title {
    margin-bottom: 20px;
    border-bottom: 1px solid $border;
    padding-bottom: 10px;
    font-weight: 400;
    letter-spacing: 0.2px;
    span {
      font-weight: 700;
    }
  }
  &__block {
    & + & {
      padding-top: 12px;
      margin-top: 10px;
      border-top: 1px solid #EDE8F6;
    }
    hr {
      margin: 5px auto;
      width: 50%;
    }
  }
}

.breadcrumbs {
  margin-bottom: 40px;
  margin-top: 15px;
}

.case {
  overflow: clip;
  &__head {
    margin: 42px 0;
  }
  &__image {
    margin-top: 24px;
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 50px;
    margin-top: 6px;
    @media(max-width: $lg) {
      gap: 25px;
    }
    @media(max-width: $md) {
      flex-flow: column;
    }
    & + &:not(.results-wrap) {
      margin-top: 45px;
      border: 2px dashed $border;
      padding: 40px;
      border-radius: 15px;
      @media(max-width: $md) {
        padding: 0;
        border: none;
        border-radius: 0;
      }
    }
  }
  &__content {
    flex-grow: 1;
    width: 100%;
    min-width: 0;
  }
  &__title:not(.case__title_top) {
    font-weight: 400;
    margin-top: 24px;
  }
  &__title {
    @media(max-width: $md) {
      font-size: 30px;
      line-height: 38px;
    }
  }
  &__reading {
    margin-top: 12px;
  }
}

.banner {
  display: flex;
  align-items: center;
  padding: 28px;
  border-radius: 20px;
  border: 2px solid #ede8f6;
  gap: 20px;
  &__logo {
    line-height: 0;
    img {
      max-width: 180px;
      max-height: 60px;
    }
  }
  &__metrics {
    position: relative;
    top: -5px;
    display: flex;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
  }
  &__metric {
    text-align: center;
    background: url('img/metric-grow-arrow.svg') top center no-repeat;
    background-size: contain;
    padding-top: 29px;
    min-width: 117px;
    &-value {
      font-size: 28px;
      line-height: 1;
      color: $violet;
    }
    &-label {
      margin-top: 8px;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}

.post {
  display: grid;
  gap: 60px;
  margin-top: 60px;
  @media(max-width: $md) {
    margin-top: 40px;
    gap: 40px;
  }
  &:deep(p) {
    font-size: 18px;
    font-weight: 400;
    color: $font-secondary;
    & + p {
      margin-top: -12px;
      @media(max-width: $md) {
        margin-top: -8px;
      }
    }
  }
  &__title {
    position: relative;
    font-size: 28px;
    line-height: 1.3;
    @media(max-width: $md) {
      text-align: left;
    }
    span {
      position: relative;
      background-color: white;
      padding: 0 8px;
      @media(max-width: $md) {
        padding-left: 0;
      }
      .results & {
        background-color: $bg--purple-light;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      background-color: #EDE8F6;
      height: 2px;
      border-radius: 2px;
    }
  }
  &__subtitle {
    margin-bottom: -12px;
    hr + & {
      margin-bottom: 0;
    }
    & + hr {
      margin-top: -4px;
    }
  }
  &__section {
    display: grid;
    gap: 24px;
    @media(max-width: $md) {
      gap: 20px;
    }
  }
}

// Temporary style
hr {
  border: none;
  border-top: 1px solid #EDE8F6;
}

.reading {
  display: flex;
  align-items: center;
  gap: 6px;
  &__icon {
    flex-shrink: 0;
    width: 14px;
    margin-top: -2px;
  }
}

.aside {
  max-width: 380px;
  width: 100%;
  position: sticky;
  padding: 28px;
  top: 20px;
  margin-bottom: 20px;
  color: #fff;
  @media(max-width: $lg) {
    max-width: 280px;
    padding: 20px;
  }
  @media(max-width: $md) {
    max-width: 240px;
  }
  @media(max-width: $sm) {
    display: none;
  }
  &_component {
    color: $font-secondary;
    @media(max-width: $sm) {
      display: block;
      max-width: 100%;
    }
  }
  &__title {
    line-height: 1.3;
    @media(max-width: $lg) {
      font-size: 20px;
    }
  }
  &__description {
    margin-top: 12px;
  }
  &__button {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    text-transform: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media(max-width: $md) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

.results {
  position: relative;
  background-color: $bg--purple-light;
  padding: 60px 0;
  display: grid;
  gap: 60px;
  margin-top: 0;
  &-wrap {
    margin-top: 90px;
  }
  @media(max-width: $sm) {
    padding: 40px 0;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -400%;
    width: 400%;
    height: 100%;
    background-color: $bg--purple-light;
  }
  &:after {
    left: 100%;
  }
}

.navigation {
  position: relative;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  gap: 115px;
  @media(max-width: $md) {
    padding: 40px 0;
    gap: 50px;
  }
  @media(max-width: $sm) {
    gap: 12px;
    flex-flow: column;
    padding-right: 75px;
  }
  &__arrow {
    text-transform: none;
    padding: 15px 12px 13px;
    display: flex;
    justify-content: center;
    gap: 10px;
    max-width: 235px;
    width: 100%;
    @media(max-width: $sm) {
      max-width: 100%;
    }
  }
  &__up {
    width: 50px;
    height: 50px;
    border-radius: 60px;
    padding: 0;
    margin-left: auto;
    @media(max-width: $sm) {
      position: absolute;
      right: 0;
      top: 40px;
    }
  }
}
</style>
