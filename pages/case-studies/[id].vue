<script lang="ts" setup>
const notes = reactive([
  {
    dark: true,
    light: false,
    background: 'light',
    items: ['item 1', 'item 2', 'item 3']
  },
  {
    dark: false,
    light: false,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
    items: ['item 1', 'item 2', 'item 3']
  },
  {
    dark: true,
    light: false,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: false,
    light: true,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: false,
    light: false,
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: false,
    light: false,
    title: 'For the average store?',
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'alert', // alert | quote
    iconSize: 'big', // big | small
  },
  {
    dark: true,
    light: false,
    description: '52 out of 100 shoppers will browse, fill their cart, and act like they’re about to checkout, only to turn around at the last minute and waltz out of your virtual store – never to return again. But imagine the revenue increase you could generate if you were to keep even a few of those customers from leaving…',
    icon: 'quote', // alert | quote
    iconSize: 'small', // big | small
  }
]);

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
    text: 'Case Study',
    href: ''
  }
]);
</script>

<template>
  <main class="case">
    <Breadcrumbs :items="breadcrumbs" />

    <div class="container container_narrow">
      <div class="case__inner">
        <div class="case__content">
          <div class="case__banner banner">
            <div class="banner__logo"></div>
            <div class="banner__metrics">
              <div class="banner__metric"></div>
              <div class="banner__metric"></div>
              <div class="banner__metric"></div>
            </div>
          </div>

          <div class="case__reading reading text color-secondary">
            <img
              class="reading__icon"
              src="@/assets/icons/clock.svg"
            />
            <span class="reading__value">
              Reading time: <strong>8 min</strong>
            </span>
          </div>

          <h1 class="case__title title-1">
            <strong>H1 Main title on Desktop</strong> Two text styles Lorem
            ipsum dolor sit amet.
          </h1>

          <div class="post">
            <section class="post__section">
              <h2 class="post__title title-3">
                <span>H2 Heading Desktop</span>
              </h2>

              <p>
                Even when you factor in retargeting and cart abandonment emails,
                close to
                <strong>
                  52 out of 100 shoppers will leave their cart behind and never
                </strong>
                return to your store. In real terms, if you could slice that
                number down to 40 out of 100 shoppers, you’d increase your total
                revenue by over 20%. How can this be achieved? By anticipating
                cart abandonment and utilizing UX and Copy Changes that are
                designed to refocus customer attention so that you can keep them
                immersed in the checkout experience until they complete their
                order.
              </p>
            </section>

            <section class="post__section">
              <h2 class="post__title title-3">
                <span>H2 Heading Desktop</span>
              </h2>

              <h3 class="post__subtitle subtitle-2">
                <span>H3 title</span>
              </h3>

              <p>
                Even when you factor in retargeting and cart abandonment emails,
                close to
                <strong>
                  52 out of 100 shoppers will leave their cart behind and never
                </strong>
                return to your store. In real terms, if you could slice that
                number down to 40 out of 100 shoppers, you’d increase your total
                revenue by over 20%. How can this be achieved? By anticipating
                cart abandonment and utilizing UX and Copy Changes that are
                designed to refocus customer attention so that you can keep them
                immersed in the checkout experience until they complete their
                order.
              </p>
            </section>

            <section class="post__section">
              <CaseNote
                v-for="(note, index) in notes"
                :key="index"
                v-bind="note"
              ></CaseNote>
            </section>
          </div>

          <div class="block case__results results">
            <h2 class="block__title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quibusdam magnam deserunt similique animi dolorem dolores
              repudiandae? Maxime facere fugiat quaerat labore quia
              exercitationem, culpa quod iste earum quam. Dicta, maiores soluta!
              Repellendus quae accusantium autem reiciendis natus omnis vitae
              repellat cupiditate dolores facere. Expedita assumenda at totam
              harum aut!
            </h2>
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
.case {
  overflow: clip;
  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 100px;
    margin-top: 6px;
  }
  &__content {
    max-width: 640px;
    width: 100%;
  }
  &__title {
    font-weight: 400;
    margin-top: 24px;
  }
}

.post {
  display: grid;
  gap: 60px;
  margin-top: 24px;
  &:deep(p) {
    font-weight: 400;
    color: $font-secondary;
  }
  &__title {
    position: relative;
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.3;
    span {
      position: relative;
      background-color: white;
      padding-right: 8px;
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
    margin-bottom: 12px;
  }
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
  &__title {
    line-height: 1.3;
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
    width: 100%;
  }
}

.results {
  position: relative;
  background-color: $bg--purple-light;
  padding: 60px;
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
  padding: 60px 0;
  display: flex;
  justify-content: center;
  gap: 115px;
  &__arrow {
    text-transform: none;
    padding: 15px 12px 13px;
    display: flex;
    justify-content: center;
    gap: 10px;
    max-width: 235px;
    width: 100%;
  }
  &__up {
    width: 50px;
    height: 50px;
    border-radius: 60px;
    padding: 0;
    margin-left: auto;
  }
}
</style>
