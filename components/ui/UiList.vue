<script lang="ts" setup>
type Item = {
  title?: string;
  description: string;
};

defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  numeric: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<Item[]>,
    required: true,
    default: () => []
  },
  id: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <div
    class="box"
    :class="{
      'bg--violet': dark,
      'bg--purple-light': light
    }"
  >
    <div
      class="box__title subtitle-2"
      v-if="title"
    >
      {{ title }}
    </div>

    <ul
      class="box__list"
      :class="{ 'box__list_numeric': numeric }"
      v-if="items.length"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="box__item"
      >
        <div
          class="box__item-title"
          v-if="item.title"
        >
          {{ item.title }}
        </div>
        <div class="box__item-description">
          {{ item.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.box {
  &[class*='bg--'] {
    padding: 28px;
    border-radius: 20px;
    border: 2px solid #ede8f6;
    @media (max-width: $sm) {
      padding: 20px;
    }
  }

  &__title {
    margin-bottom: 16px;
  }

  &__list {
    display: grid;
    gap: 16px;
    font-size: 18px;
    line-height: 1.6;
    &_numeric {
      counter-reset: list;
    }
  }

  &__item {
    position: relative;
    padding-left: 18px;
    color: $font-secondary;
    .bg--violet & {
      color: inherit;
    }

    .box__list_numeric & {
      padding-left: 24px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #5954A0;
      color: inherit;
      font-size: 18px;
      font-weight: 400;

      .bg--violet & {
        background-color: $yellow;
      }

      .box__list_numeric & {
        counter-increment: list;
        content: counter(list) '.';
        background: none;
        width: auto;
        height: auto;
        top: 0px;
      }
    }
    &-title {
      margin-bottom: 4px;
    }
    &-description {
      font-weight: 400;
    }
  }
}
</style>
