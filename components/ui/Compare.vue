<script lang="ts" setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

defineProps({
  inset: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="compare"
    :class="{'compare_inset': inset}"
  >
    <div class="compare__labels">
      <div class="compare__label">Before</div>
      <div class="compare__label">After</div>
    </div>

    <ClientOnly>
      <ImgComparisonSlider class="compare__slider">
        <img
          slot="first"
          style="width: 100%"
          src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
        />
        <img
          slot="second"
          style="width: 100%"
          src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
        />
      </ImgComparisonSlider>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.compare {
  position: relative;
  line-height: 0;
  &__labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .compare_inset & {
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 16px;
      right: 16px;
    }
  }
  &__label {
    line-height: 1;
    padding: 1px 14px 0;
    color: #393939;
    text-align: center;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 20px;
    background: #F3F1F7;
    & + & {
      background-color: $yellow;
    }
  }
  &__slider {
    line-height: 0;
    border-radius: 20px;
    &:focus {
      outline: none;
    }

    img:first-child {
      filter: brightness(0.95) sepia(0) hue-rotate(0deg) saturate(0.8);
    }
  }
}
</style>
