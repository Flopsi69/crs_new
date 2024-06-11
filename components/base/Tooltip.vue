<script lang="ts" setup></script>

<template>
  <div class="tooltip">
    <button class="tooltip__trigger button">
      <Icon
        class="color-purple"
        name="fa-solid:info-circle"
        size="14"
      />
    </button>
    <div class="tooltip__body">
      <div class="tooltip__body-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  cursor: pointer;
  &__trigger {
    padding: 0;
    min-height: auto;
    line-height: 0;
    .tooltip:hover & svg {
      color: $yellow;
    }
  }
  &__body {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    transition: opacity .3s;
    position: absolute;
    width: 260px;
    left: -45px;
    top: 0;
    padding-top: 30px;
    @media(max-width: 1160px) {
      width: 200px;
      left: -90px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: #fff;
      border: 1px solid $border;
      transform: rotate(45deg);
      left: 45px;
      top: 25px;
      @media(max-width: 1160px) {
        left: 50%;
        margin-left: -10px;
      }
    }

    .tooltip:hover & {
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    }

    &-inner {
      position: relative;
      z-index: 1;
      background: #fff;
      padding: 12px;
      border-radius: 12px;
      font-weight: 400;
      border: 1px solid $border;
    }
  }

}
</style>
