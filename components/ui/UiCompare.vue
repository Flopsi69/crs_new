<script lang="ts" setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

defineProps({
  alt1: {
    type: String,
    default: '',
  },
  alt2: {
    type: String,
    default: '',
  },
  img1: {
    type: String,
    default: 'https://img-comparison-slider.sneas.io/demo/images/before.webp'
  },
  img2: {
    type: String,
    default: 'https://img-comparison-slider.sneas.io/demo/images/after.webp'
  },
  inset: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: 'compare',
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
        <!-- eslint-disable -->
        <img
          slot="first"
          style="width: 100%"
          :src="img1"
          :alt="alt1"
        />
        <img
          slot="second"
          style="width: 100%"
          :src="img2"
          :alt="alt2"
        />
        <div
          class="compare__handle"
          slot="handle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <g>
              <circle
                cx="28"
                cy="24"
                r="15.5"
                fill="#E3AA10"
                stroke="#393939"
              />
              <path
                d="M34.7951 23.5117L32.4007 21.1584C32.2931 21.0558 32.1488 20.9989 31.9989 21C31.849 21.0011 31.7056 21.0601 31.5996 21.1643C31.4936 21.2684 31.4336 21.4094 31.4324 21.5567C31.4313 21.704 31.4892 21.8459 31.5935 21.9516L33.1053 23.4374H22.8946L24.4064 21.9516C24.5108 21.8459 24.5687 21.704 24.5675 21.5567C24.5664 21.4094 24.5063 21.2684 24.4003 21.1643C24.2943 21.0601 24.1509 21.0011 24.001 21C23.8511 20.9989 23.7068 21.0558 23.5992 21.1584L21.2048 23.5117C21.0737 23.6409 21 23.816 21 23.9985C21 24.181 21.0737 24.3561 21.2048 24.4853L23.5992 26.8386C23.7067 26.9415 23.8511 26.9987 24.0012 26.9978C24.1513 26.9968 24.295 26.9378 24.4011 26.8335C24.5072 26.7292 24.5673 26.588 24.5683 26.4405C24.5693 26.293 24.5111 26.1511 24.4064 26.0454L22.8946 24.5595H33.1053L31.5935 26.0454C31.4878 26.1509 31.4289 26.2931 31.4294 26.4412C31.43 26.5892 31.4901 26.731 31.5966 26.8357C31.7031 26.9404 31.8474 26.9994 31.998 27C32.1486 27.0006 32.2934 26.9426 32.4007 26.8387L34.7951 24.4854C34.9263 24.3562 35 24.1811 35 23.9985C35 23.816 34.9263 23.6409 34.7951 23.5117Z"
                fill="#393939"
              />
            </g>
          </svg>
        </div>
        <!-- eslint-enable -->
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
  .compare__handle {
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
    svg {
      width: 75px;
      height: 75px;
    }
  }
  &__label {
    line-height: 1;
    padding: 6px 15px 5px;
    color: #393939;
    text-align: center;
    font-size: 16px;
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
    border: 2px solid #EDE8F6;
    cursor: ew-resize;
    --divider-width: 2px;
    --divider-color: #393939;
    --divider-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
    &:focus {
      outline: none;
    }

    img:first-child {
      filter: brightness(0.87);
      // filter: brightness(0.95) sepia(0) hue-rotate(0deg) saturate(0.8);
    }
  }
}
</style>
