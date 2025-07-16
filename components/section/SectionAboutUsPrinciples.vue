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

const activeItem = ref<null | number>(0);
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
      >
        <BasePlate
          background="white"
          class="item__info"
          :class="{active: index === activeItem}"
          @click.prevent="activeItem = activeItem === index ? null : index"
        >
          <div class="item__subtitle">Principle {{ index + 1 }}</div>
          <div class="item__title subtitle-1">{{ item.title }}</div>
        </BasePlate>

        <div
          class="item__descr"
          :class="{active: index === activeItem}"
        >
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
  @media(max-width: $md) {
    color: #393939;
  }
  @media(max-width: $sm) {
    padding: 32px 0;
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
  }
}

.items {
  margin-top: 60px;
  @media(max-width: $md) {
    margin-top: 32px;
  }
}

.item {
  position: relative;
  gap: 60px;
  @media(max-width: $md) {
    display: block;
  }
  & + & {
    margin-top: 60px;
    @media(max-width: $md) {
      margin-top: 16px;
    }
  }
  &__info {
    position: relative;
    padding: 60px 32px;
    max-width: 400px;
    width: 100%;
    flex-shrink: 0;
    @media(max-width: $md) {
      padding: 16px 72px 16px 16px;
      max-width: 100%;
      &:before {
        content: '';
        position: absolute;
        right: 24px;
        width: 16px;
        height: 16px;
        transition: transform 0.3s ease;
        top: 50%;
        transform: translateY(-50%);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'%3E%3Cpath d='M7.99996 12.5765C7.7132 12.5765 7.42649 12.467 7.20787 12.2485L0.328226 5.36879C-0.109409 4.93116 -0.109409 4.22161 0.328226 3.78415C0.765684 3.34669 1.47509 3.34669 1.91276 3.78415L7.99996 9.8717L14.0872 3.78436C14.5248 3.3469 15.2342 3.3469 15.6716 3.78436C16.1094 4.22182 16.1094 4.93137 15.6716 5.369L8.79205 12.2487C8.57332 12.4673 8.2866 12.5765 7.99996 12.5765Z' fill='%23393939'/%3E%3C/svg%3E");
      }
      &.active {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &:before {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
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
    @media(max-width: $md) {
      font-size: 18px;
      padding: 11px 12px;
    }
  }
  &__title {
    margin-top: 24px;
    line-height: 32px;
    @media(max-width: $md) {
      margin-top: 12px;
      font-size: 20px;
      line-height: 1.4;
    }
  }
  &__descr {
    max-width: 570px;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    @media(max-width: $md) {
      display: none;
      max-width: 100%;
      border-radius: 0px 0px 24px 24px;
      background: #EBEBEB;
      padding: 16px;
      font-size: 18px;
      line-height: 28px;
      &.active {
        display: block;
      }
    }
    p + p {
      margin-top: 20px;
    }
  }
}
</style>
