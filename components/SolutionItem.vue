<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="item flex-between">
    <div class="item__title">{{ item.problem }}</div>

    <div
      class="item__open link"
      @click="$emit('setActiveSolution', item)"
    >
      <span>View Solutions</span>
      <Icon
        name="line-md:chevron-small-right"
        size="24"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding: 17px 0 15px 30px;
  background: #fff;
  gap: 20px;
  @media(max-width: $sm) {
    flex-flow: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
  }

  &:nth-child(odd) {
    background-color: #FAF8FF;
  }

  &__title {
    font-size: 18px;
  }

  &__open {
    padding: 9px 40px;
    white-space: nowrap;
    flex-shrink: 0;
    @media(max-width: $sm) {
      padding: 0;
    }
  }
}
</style>
