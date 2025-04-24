<script lang="ts" setup>
const { t } = useI18n()
const props = defineProps({
  solution: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <BasePlate
    class="solution"
    background="white"
  >
    <div class="solution__icon">
      <img :src="`/images/solution-icon-${index}.svg`" />
    </div>

    <div class="solution__title subtitle-3">
      {{solution.problem}}
    </div>

    <BasePill
      class="solution__view"
      @click="$emit('setActiveSolution', solution)"
    >
      <span class="subtitle-3">
        {{ t('sectionSolutions.solution.view') }}
      </span>
      <Icon
        name="line-md:chevron-small-right"
        size="24"
      />
    </BasePill>
  </BasePlate>
</template>

<style lang="scss" scoped>
.solution {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #DED9FC;
  padding: 24px;
  border-radius: 16px;
  transition: box-shadow .3s;
  &:hover {
    box-shadow: 0px 0px 0px 7px #EFEDFD;
  }
  &__icon {
    line-height: 0;
  }
  &__title {
    margin-top: 16px;
    margin-bottom: 24px;
  }
  &__view {
    margin-top: auto;
    min-height: 50px;
  }
}
</style>
