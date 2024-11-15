<script lang="ts" setup>
interface BreadcrumbItem {
  href: string;
  text: string;
}

defineProps({
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    required: true
  }
})
</script>

<template>
  <div
    class="breadcrumbs"
    v-if="items.length"
  >
    <div class="container breadcrumbs__container">
      <div class="breadcrumbs__inner">
        <template
          v-for="(item, index) in items"
          :key="index"
        >
          <nuxt-link
            :to="item.href"
            class="breadcrumbs__item"
          >
            {{ item.text }}
          </nuxt-link>
          <svg
            v-if="index < items.length - 1"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.75832 4.31292L2.89822 7.20226C2.71626 7.38606 2.42132 7.38606 2.23948 7.20226C2.05762 7.01865 2.05762 6.72063 2.23948 6.53683L4.77023 3.9803L2.23958 1.42376C2.05773 1.23987 2.05773 0.941945 2.23958 0.758241C2.42144 0.574449 2.71637 0.574449 2.89829 0.758241L5.75843 3.64759C5.84935 3.73953 5.89478 3.85978 5.89478 3.9803C5.89478 4.10073 5.84917 4.22116 5.75832 4.31292Z"
              fill="#A0A0A0"
            />
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 12px 0;
  &__inner {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  &__item {
    color: #909090;
    font-size: 12px;
    font-weight: 400;
    &:last-child {
      color: #2B2B2B;
    }
  }
}
</style>
