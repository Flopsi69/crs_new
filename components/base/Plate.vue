<script lang="ts" setup>
const props = defineProps(
  {
    background: {
      type: String,
      default: 'purple-light',
    },
    pixel: {
      type: Boolean,
      default: false,
    },
    chart: {
      type: Boolean,
      default: false,
    },
    solidBorder: {
      type: Boolean,
      default: false,
    },
    mobFull: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
  },
)

const background = computed(() => 'bg--' + (props.background || 'purple-light'))
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href || undefined"
    class="plate"
    :class="[
      background,
      { 'bg--pixel': pixel },
      { border: solidBorder },
      { 'bg--chart': chart },
      { 'mob-full': mobFull },
    ]"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.plate {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
}

.bg--pixel {
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel.png') bottom no-repeat;
    background-size: 100%;
    mix-blend-mode: lighten;
  }
  @media(max-width: $sm) {
    &:before {
      background: url('img/bg-pixel-left.png') center no-repeat;
      background-size: cover;
    }
  }
}

.bg--chart {
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-cta-blur.png') no-repeat;
    background-size: contain;
    background-position: left 50px;
    mix-blend-mode: lighten;
    @media(max-width: $sm) {
      background: url('img/bg-pixel-left.png') center no-repeat;
      background-size: cover;
    }
  }

  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    right: 0;
    bottom: 0;
    width: 430px;
    top: 0;
    background: url('img/bg-cta-chart.png') no-repeat;
    background-size: contain;
    background-position: right bottom;
    @media(max-width: $md) {
      width: 240px;
    }
    @media(max-width: $sm) {
      display: none;
    }
  }
}

.mob-full {
  @media(max-width: $sm) {
    margin-left: -20px;
    margin-right: -20px;
    padding: 0;
    border-radius: 0;
  }
}
</style>
