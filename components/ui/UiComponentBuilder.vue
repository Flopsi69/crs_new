<script lang="ts" setup>
interface ComponentProps {
  type: string;
  props: Record<string, any>;
}

defineProps({
  content: {
    type: Array as PropType<ComponentProps[]>,
    required: true,
    default: () => []
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
      v-if="component.type"
      :is="uiComponents[component.type]"
      v-bind="component.props"
    />
  </template>
</template>

<style lang="scss" scoped></style>
