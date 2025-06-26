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
    required: true
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
      v-if="title"
      class="box__title subtitle-2"
    >
      {{ title }}
    </div>

    <ul
      v-if="items.length"
      class="box__list"
      :class="{ 'box__list_numeric': numeric }"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="box__item"
      >
        <div
          v-if="item.title"
          class="box__item-title"
        >
          {{ item.title }}
        </div>
        <div
          v-if="item.description"
          class="box__item-description"
        >
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
      top: 11px;
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
      & + .box__item-description {
        margin-top: 4px;
      }
    }
    &-description {
      font-weight: 400;
    }
  }
}
</style>
