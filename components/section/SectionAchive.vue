<script lang="ts" setup>
interface AchiveContent {
  title: string;
  list: {
    cvr?: string[];
    cac?: string[];
    roas?: string[];
    cltv?: string[];
  };
}

defineProps<{
  content?: AchiveContent;
}>();

const activeItem: Ref<number | null> = ref(0);

function setActiveItem(index: number) {
  if (window.innerWidth > 768) return;

  if (activeItem.value === index) {
    activeItem.value = null;

    return;
  }

  activeItem.value = index;
}
</script>

<template>
  <BaseSection class="achive">
    <h2 class="achive__title title title-1">
      {{ content?.title || 'What do you want to achieve with Conversion Optimization Services?' }}
    </h2>

    <div class="achive__list">
      <div
        class="achive__item item"
        :class="{ active: activeItem === 0 }"
      >
        <div
          class="item__info"
          @click="setActiveItem(0)"
        >
          <div class="item__title">Increase</div>
          <div class="item__caption">
            Conversion Rate (&nbsp;<span>CvR</span>&nbsp;)<br />
            & Average Revenue per User (&nbsp;<span>ARPU</span>&nbsp;)
          </div>
        </div>
        <div class="item__descr">
          <p
            v-for="(text, index) in content?.list?.cvr || [
              'The core goal of Conversion Rate Optimization is to increase your CvR and ARPU by making your funnel more efficient and boosting average order value.',
              'We achieve this by reducing friction at key funnel steps — addressing user concerns and uncertainties while amplifying conversion drivers.',
              'Our focus is on pinpointing drop-off points and fixing them with high-impact UX, UI, and copy improvements.'
            ]"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
      </div>

      <div
        class="achive__item item"
        :class="{ active: activeItem === 1 }"
      >
        <div
          class="item__info"
          @click="setActiveItem(1)"
        >
          <div class="item__title">Reduce</div>
          <div class="item__caption">
            Customer Acquisition Cost (&nbsp;<span>CAC</span>&nbsp;)
          </div>
        </div>
        <div class="item__descr">
          <p
            v-for="(text, index) in content?.list?.cac || [
              'CAC is influenced by two factors: the cost of bringing users to your site or product (CPC) and your conversion rate.',
              'CRO focuses on optimizing the funnel to improve CvR — making customer acquisition more efficient.',
              'In short, CRO helps you convert more users from the same traffic volume, lowering your CAC.'
            ]"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
      </div>

      <div
        class="achive__item item"
        :class="{ active: activeItem === 2 }"
      >
        <div
          class="item__info"
          @click="setActiveItem(2)"
        >
          <div class="item__title">Improve</div>
          <div class="item__caption">
            Return on Advertising Spend (&nbsp;<span>ROAS</span>&nbsp;)
          </div>
        </div>
        <div class="item__descr">
          <p
            v-for="(text, index) in content?.list?.roas || [
              'ROAS depends on both funnel efficiency and the monetary value of each conversion.',
              'CRO improves ROAS by streamlining the funnel for paid traffic — starting with the landing page and continuously optimizing every step of the acquisition journey.',
              'It also focuses on increasing average order value by encouraging higher-value and higher-volume purchases.'
            ]"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
      </div>

      <div
        class="achive__item item"
        :class="{ active: activeItem === 3 }"
      >
        <div
          class="item__info"
          @click="setActiveItem(3)"
        >
          <div class="item__title">Increase</div>
          <div class="item__caption">
            Customer Lifetime Value (&nbsp;<span>CLTV</span>&nbsp;)
          </div>
        </div>
        <div class="item__descr">
          <p
            v-for="(text, index) in content?.list?.cltv || [
              'CLTV is driven by retention, repeat purchase rate, and the total value of a customer\'s payments over time.',
              'User Experience Optimization (UXO) plays a key role by designing a frictionless, compelling customer journey that fosters loyalty, encourages repeat purchases, and increases order value through effective upsell and cross-sell mechanisms.'
            ]"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>

    <img
      src="img/circle-image.svg"
      alt="achive circle"
      class="achive__circle"
    />
  </BaseSection>
</template>

<style lang="scss" scoped>
.achive {
  background: #4A3DB7 url('img/bg-how-it-works-circle.svg') no-repeat top;
  background-size: 100% auto;
  color: #fff;
  padding: 20.5vw 0 17.5vw;
  margin-bottom: -90px;
  margin-top: -90px;
  @media(max-width: $md) {
    margin-bottom: 0;
  }
  @media(max-width: $sm) {
    padding-top: 25vw;
    padding-bottom: 25vw;
  }

  &__title {
    max-width: 860px;
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
  }
  &__list {
    margin-top: 80px;
    @media(max-width: $md) {
      margin-top: 32px;
    }
  }
  &__item {
    position: relative;
    display: flex;
    gap: 24px;
    padding: 72px 0;
    @media(max-width: $md) {
      padding: 40px 0;
      flex-flow: column;
    }
    @media(max-width: $sm) {
      border-radius: 32px;
      border-top: 2px solid #584BC3;
      background: rgba(255, 255, 255, 0.03);
      padding: 0;
      gap: 0;
    }
    & + & {
      @media(max-width: $sm) {
        margin-top: 12px;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -500%;
        right: -500%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.10);
        @media(max-width: $sm) {
          display: none;
        }
      }
    }
  }
  &__circle {
    position: absolute;
    z-index: 1;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
  }
}

.item {
  &__title {
    color: #F1C345;
    font-size: 38px;
    line-height: 44px;
    @media(max-width: $sm) {
      font-size: 18px;
      line-height: 1.3;
      border-radius: 111px;
      background: #4237A3;
      padding: 9px 12px 8px;
      display: inline-flex;
    }
  }
  &__caption {
    margin-top: 12px;
    font-size: 32px;
    line-height: 40px;
    @media(max-width: $sm) {
      font-size: 20px;
      line-height: 28px;
      margin-top: 10px;
    }

    span {
      color: #F1C345;
    }
  }
  &__info {
    position: relative;
    flex: 1;
    @media(max-width: $sm) {
      padding: 16px 60px 16px 16px;
      border-radius: 32px 32px 0 0;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 24px;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background-size: contain;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M7.99996 3.43961C7.7132 3.43961 7.42649 3.5491 7.20787 3.76761L0.328226 10.6473C-0.109409 11.085 -0.109409 11.7945 0.328226 12.232C0.765684 12.6694 1.47509 12.6694 1.91276 12.232L7.99996 6.14442L14.0872 12.2318C14.5248 12.6692 15.2342 12.6692 15.6716 12.2318C16.1094 11.7943 16.1094 11.0847 15.6716 10.6471L8.79205 3.7674C8.57332 3.54885 8.2866 3.43961 7.99996 3.43961Z' fill='white'/%3E%3C/svg%3E");
        transform: translateY(-50%) rotate(180deg);
        transition: transform 0.3s;
        .item.active & {
          transform: translateY(-50%);
        }
      }
    }
  }
  &__descr {
    flex: 1;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    @media(max-width: $sm) {
      line-height: 28px;
      border-radius: 0px 0px 32px 32px;
      background: #4237A3;
      padding: 16px;
      display: none;
      .item.active & {
        display: block;
      }
    }
    p + p {
      margin-top: 20px;
    }
  }
}
</style>
