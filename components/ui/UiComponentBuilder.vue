<script lang="ts" setup>
interface ComponentProps {
  type: string;
  props: Record<string, any>;
}

defineProps({
  content: {
    type: Array as PropType<ComponentProps[]>,
    required: true
  }
});

const uiComponents: Record<string, ReturnType<typeof resolveComponent>> = {
  uiParagraph: resolveComponent('UiParagraph'),
  uiSubtitle: resolveComponent('UiSubtitle'),
  uiImage: resolveComponent('UiImage'),
  uiNote: resolveComponent('UiNote'),
  uiList: resolveComponent('UiList'),
  uiCompare: resolveComponent('UiCompare'),
  uiIncrease: resolveComponent('UiIncrease'),
  uiMetric: resolveComponent('UiMetric'),
};
</script>

<template>
  <template
    v-for="(component, index) in content"
    :key="index"
  >
    <component
      :is="uiComponents[component.type]"
      v-if="component.type"
      v-bind="component.props"
    />
  </template>
</template>

<style lang="scss" scoped>

.post {
  display: grid;
  gap: 60px;
  margin-top: 60px;
  @media(max-width: $md) {
    margin-top: 40px;
    gap: 40px;
  }
  &:deep(p) {
    font-size: 18px;
    font-weight: 400;
    color: $font-secondary;
    & + p {
      margin-top: -12px;
      @media(max-width: $md) {
        margin-top: -8px;
      }
    }
  }
  &__title {
    position: relative;
    font-size: 28px;
    line-height: 1.3;
    span {
      position: relative;
      background-color: white;
      padding-right: 8px;
      .results & {
        background-color: $bg--purple-light;
      }
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
    margin-bottom: -12px;
    hr + & {
      margin-bottom: 0;
    }
    & + hr {
      margin-top: -4px;
    }
  }
  &__section {
    display: grid;
    gap: 24px;
    @media(max-width: $md) {
      gap: 20px;
    }
  }
}
</style>
