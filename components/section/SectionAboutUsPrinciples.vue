<script lang="ts" setup>
const info = [
  {
    title: 'We commit certain results to our clients, not just services with uncertain outcomes',
    description: [
      'A key distinction between us and other CRO agencies is that we offer a contractually binding results guarantee — not just CRO services with vague or undefined expectations.',
    ]
  },
  {
    title: 'Freedom and respect to drive creativity and responsibility',
    description: [
      'We foster freedom of action and decision-making within our team, because empirical data shows that — when combined with the right training, which we provide — it leads to the most creative and effective results for our clients.'
    ]
  },
  {
    title: 'We are CRO consultants, not contractors',
    description: [
      'We identify our client’s measurable goal and take full responsibility for developing and deploying a CRO strategy focused on achieving it. We bring our full expertise to guide the client toward the shortest, most efficient path to that goal.',
      `Our objective is to deliver a tangible, predetermined result for our clients — a goal that demands we rigorously apply our scientific CRO methodology.`
    ]
  }
]
</script>

<template>
  <BaseSection
    class="principles"
    background="purple-light"
  >
    <div class="principles__title title-1 text-center">
      Our business is built <br />
      on the following principles:
    </div>

    <div
      v-if="info.length"
      class="items"
    >
      <div
        v-for="(item, index) in info"
        :key="index"
        class="item flex-between"
        data-aos="fade-up"
      >
        <BasePlate
          background="white"
          class="item__info"
        >
          <div class="item__subtitle">Principle {{ index + 1 }}</div>
          <div class="item__title subtitle-1">{{ item.title }}</div>
        </BasePlate>

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
  padding: 60px 0;
  :deep(.container) {
    max-width: 1028px;
  }
}

.items {
  margin-top: 60px;
}

.item {
  position: relative;
  gap: 60px;
  & + & {
    margin-top: 60px;
  }
  &__info {
    padding: 60px 32px;
    max-width: 400px;
    width: 100%;
    flex-shrink: 0;
  }
  &__subtitle {
    display: inline-block;
    padding: 15px 16px;
    border-radius: 100px;
    background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
    line-height: 1;
    white-space: nowrap;
    font-size: 20px;
    color: #fff;
  }
  &__title {
    margin-top: 24px;
    line-height: 32px;
  }
  &__descr {
    max-width: 570px;
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
