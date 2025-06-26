<script lang="ts" setup>
const info = [
  {
    title: 'We guarantee certain results to our clients, not just services with uncertain outcomes',
    description: [
      'When searching for a competitive differentiator to gain a marketing advantage, we realized that our robust CRO process is reliable enough to deliver predictable, sustainable uplifts in our clients’ revenue metrics. Based on historical data, we built a statistical model that allows us to guarantee a minimum, predefined result from our CRO collaboration.',
      `We’re the only CRO agency that contractually commits to delivering a specific revenue metric uplift. There is no other agency that we know of that will sign under an uplift guarantee.`
    ]
  },
  {
    title: 'Freedom and respect to drive creativity and responsibility',
    description: [
      'We foster freedom of action and decision-making within our team, because empirical data shows that—when combined with the right training, which we provide—it leads to the most creative and effective results for our clients.'
    ]
  },
  {
    title: 'We are CRO consultants, not contractors',
    description: [
      'We identify our client’s measurable goal and take full responsibility for developing and deploying a CRO strategy focused on achieving it. We bring our full expertise to guide the client toward the shortest, most efficient path to that goal.',
      `Our objective is to deliver a guaranteed result and positive ROI, which means we rigorously follow our CRO methodology to get there.`
    ]
  }
]
</script>

<template>
  <BaseSection class="principles">
    <AboutUsBlurLine class="principles__line" />

    <div class="principles__title">
      Our business is built on the following principles:
    </div>

    <div
      v-if="info.length"
      class="items"
    >
      <div
        v-for="(item, index) in info"
        :key="index"
        class="item"
      >
        <div class="item__info">
          <div class="item__subtitle">Principle {{ index + 1 }}</div>
          <div class="item__title">{{ item.title }}</div>
        </div>

        <div class="item__descr">
          <p
            v-for="(text, textIndex) in item.description"
            :key="textIndex"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.principles {
  padding: 120px 0 0;
  &__title {
    position: relative;
    z-index: 2;
    font-size: 52px;
    line-height: 64px;
    text-align: center;
  }
  &__line {
    // top: 150px;
    &:deep(.line__first), &:deep(.line__second) {
      width: 125%;
      left: -25%;
      top: 10%;
    }
  }
}

.items {
  position: relative;
  z-index: 2;
}

.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0;
  gap: 60px;
  &:after {
    content: '';
    position: absolute;
    left: -200%;
    right: -200%;
    bottom: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.10);
  }
  &__info {
    text-align: center;
  }
  &__subtitle {
    color: #F1C345;
    font-size: 38px;
    line-height: 44px;
  }
  &__title {
    font-size: 32px;
    line-height: 1.25;
    max-width: 470px;
    margin: 12px auto 0;
    width: 100%;
  }
  &__descr {
    max-width: 670px;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    p + p {
      margin-top: 20px;
    }
  }
}
</style>
